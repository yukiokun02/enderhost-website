
<?php
/**
 * Instamojo Payment Integration for EnderHOST
 * This script handles payment processing using Instamojo API
 */

// Start session for data persistence
session_start();

// API Configuration
$api_key = '15532137afaebf-b938bf237d6279e818';
$auth_token = '25f57d21e4306fdbd30f4a6b-cac962ba';
$salt = 'bf10d739a2a340f49a25c-c5e323d8626';

// IMPORTANT: For testing, use the sandbox environment
// Uncomment this line for testing and comment it for production
// $api_endpoint = 'https://test.instamojo.com/api/1.1/payment-requests/';

// For production mode, use this:
$api_endpoint = 'https://www.instamojo.com/api/1.1/payment-requests/';

// YOUR ACTUAL DOMAIN - Update this with your Oracle VM's public domain or IP
$your_domain = "http://your-domain-or-ip.com"; // Replace with your actual domain or IP

// Price mapping for different plans - Updated to include all plans from Pricing.tsx and PurchaseForm.tsx
$plan_prices = [
    // Vanilla Plans
    "getting-woods" => 159,
    "Getting Woods" => 159,
    "getting-an-upgrade" => 349,
    "Getting an Upgrade" => 349,
    "stone-age" => 529,
    "Stone Age" => 529,
    "acquire-hardware" => 709,
    "Acquire Hardware" => 709,
    
    // Modpack Plans
    "isnt-it-iron-pick" => 889,
    "Isn't It Iron Pick?" => 889,
    "diamonds" => 1059,
    "Diamonds" => 1059,
    "ice-bucket-challenge" => 1409,
    "Ice Bucket Challenge" => 1409,
    
    // Community Server Plans
    "we-need-to-go-deeper" => 1759,
    "We Need to Go Deeper" => 1759,
    "hidden-in-the-depths" => 2129,
    "Hidden in the Depths" => 2129,
    "the-end" => 2899,
    "The End" => 2899,
    "sky-is-the-limit" => 3399,
    "Sky is the Limit" => 3399
];

// Function to sanitize user input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Initialize error array
$errors = [];

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize inputs
    $server_name = isset($_POST['serverName']) ? sanitize_input($_POST['serverName']) : '';
    $full_name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? sanitize_input($_POST['phone']) : ''; // Optional field
    $plan = isset($_POST['plan']) ? sanitize_input($_POST['plan']) : '';

    // Validation
    if (empty($server_name)) {
        $errors[] = "Server name is required";
    }
    
    if (empty($full_name)) {
        $errors[] = "Full name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Email address is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    // Phone is optional - no validation required
    // Removed the phone validation since it's optional
    
    if (empty($plan)) {
        $errors[] = "Please select a plan";
    } elseif (!array_key_exists($plan, $plan_prices)) {
        $errors[] = "Selected plan is invalid";
    }

    // If validation passes, proceed with payment request
    if (empty($errors)) {
        // Get price from the plan
        $amount = $plan_prices[$plan];
        
        // Store form data in session for later use
        $_SESSION['server_purchase'] = [
            'server_name' => $server_name,
            'full_name' => $full_name,
            'email' => $email,
            'phone' => $phone,
            'plan' => $plan,
            'amount' => $amount
        ];
        
        // Generate a unique transaction ID
        $transaction_id = uniqid('EH-');
        $_SESSION['transaction_id'] = $transaction_id;
        
        // Prepare payment request data with updated redirect URL
        $payload = [
            'purpose' => 'Minecraft Server Purchase: ' . $plan,
            'amount' => $amount,
            'buyer_name' => $full_name,
            'email' => $email,
            'phone' => $phone, // This will be sent if provided, but is now optional
            'redirect_url' => $your_domain . '/payment-success.php',
            'send_email' => true,
            'send_sms' => !empty($phone), // Only send SMS if phone number is provided
            'allow_repeated_payments' => false,
        ];
        
        // Initialize cURL session
        $ch = curl_init();
        
        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $api_endpoint);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'X-Api-Key: ' . $api_key,
            'X-Auth-Token: ' . $auth_token,
            'Content-Type: application/x-www-form-urlencoded'
        ]);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
        
        // Execute cURL request
        $response = curl_exec($ch);
        
        // Check for cURL errors
        if (curl_errno($ch)) {
            $errors[] = 'cURL Error: ' . curl_error($ch);
        } else {
            // Process API response
            $result = json_decode($response, true);
            
            // Close cURL session
            curl_close($ch);
            
            // Check if payment request was created successfully
            if (isset($result['success']) && $result['success']) {
                // Store payment request ID for verification later
                $_SESSION['payment_request_id'] = $result['payment_request']['id'];
                
                // Log successful payment request creation
                error_log('Payment request created: ' . $result['payment_request']['id'] . ' for ' . $email);
                
                // Redirect to payment URL
                header('Location: ' . $result['payment_request']['longurl']);
                exit;
            } else {
                // API error
                $error_message = isset($result['message']) ? $result['message'] : 'Unknown error occurred';
                $errors[] = 'Payment request failed: ' . $error_message;
                error_log('Payment request failed: ' . $error_message . ' for ' . $email);
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Processing Payment - EnderHOST</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
    <div class="max-w-md w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="p-6">
            <div class="flex items-center justify-center mb-6">
                <img src="/lovable-uploads/e1341b42-612c-4eb3-b5f9-d6ac7e41acf3.png" alt="EnderHOST Logo" class="w-10 h-10 mr-3">
                <span class="text-2xl font-bold">
                    <span class="text-white">Ender</span>
                    <span class="text-green-500">HOST</span>
                </span>
            </div>
            
            <?php if (!empty($errors)): ?>
                <div class="bg-red-900 border border-red-700 text-white px-4 py-3 rounded mb-6">
                    <h3 class="font-bold mb-2">Please correct the following errors:</h3>
                    <ul class="list-disc pl-5">
                        <?php foreach ($errors as $error): ?>
                            <li><?php echo $error; ?></li>
                        <?php endforeach; ?>
                    </ul>
                    <div class="mt-4">
                        <a href="javascript:history.back()" class="inline-block bg-white text-red-900 px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors">
                            Go Back
                        </a>
                    </div>
                </div>
            <?php else: ?>
                <div class="text-center">
                    <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
                    <h2 class="text-xl font-bold mb-2">Processing Your Payment</h2>
                    <p class="text-gray-400 mb-4">Please wait while we redirect you to the payment gateway...</p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
