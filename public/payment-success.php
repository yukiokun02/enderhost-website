<?php
/**
 * Payment Success Handler for EnderHOST
 * This script processes the payment callback from Instamojo and shows a success message
 */

// Start session to retrieve stored data
session_start();

// API Configuration
$api_key = '15532137afaebf-b938bf237d6279e818';
$auth_token = '25f57d21e4306fdbd30f4a6b-cac962ba';
$salt = 'bf10d739a2a340f49a25c-c5e323d8626';
$api_endpoint = 'https://www.instamojo.com/api/1.1/payment-requests/';

// Initialize variables
$payment_verified = false;
$payment_details = [];
$error_message = '';

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if payment ID and request ID are in URL parameters
if (isset($_GET['payment_id']) && isset($_GET['payment_request_id'])) {
    $payment_id = sanitize_input($_GET['payment_id']);
    $payment_request_id = sanitize_input($_GET['payment_request_id']);
    
    // Verify that this payment request matches what we have in session
    if (isset($_SESSION['payment_request_id']) && $_SESSION['payment_request_id'] === $payment_request_id) {
        // Verify payment status with Instamojo API
        $verify_url = $api_endpoint . $payment_request_id . '/' . $payment_id . '/';
        
        // Initialize cURL session
        $ch = curl_init();
        
        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $verify_url);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'X-Api-Key: ' . $api_key,
            'X-Auth-Token: ' . $auth_token,
            'Content-Type: application/x-www-form-urlencoded'
        ]);
        
        // Execute cURL request
        $response = curl_exec($ch);
        
        // Check for cURL errors
        if (!curl_errno($ch)) {
            // Process API response
            $result = json_decode($response, true);
            
            // Close cURL session
            curl_close($ch);
            
            // Check if payment verification was successful
            if (isset($result['success']) && $result['success']) {
                $payment_details = $result['payment_request']['payment'];
                
                // Check if payment was completed successfully
                if (isset($payment_details['status']) && $payment_details['status'] === 'Credit') {
                    $payment_verified = true;
                    
                    // Log successful payment
                    error_log('Payment verified: ' . $payment_id . ' for request ' . $payment_request_id);
                    
                    // Here you would typically update a database to mark the order as paid
                    // and trigger server provisioning
                    
                    // For demonstration purposes, we'll just use session data
                    $purchase_data = isset($_SESSION['server_purchase']) ? $_SESSION['server_purchase'] : [];
                } else {
                    $error_message = 'Payment was not completed successfully. Status: ' . ($payment_details['status'] ?? 'Unknown');
                    error_log('Payment verification failed: ' . $error_message);
                }
            } else {
                $error_message = isset($result['message']) ? $result['message'] : 'Unknown error occurred during payment verification';
                error_log('Payment verification failed: ' . $error_message);
            }
        } else {
            $error_message = 'Error connecting to payment gateway: ' . curl_error($ch);
            error_log('cURL Error: ' . curl_error($ch));
            curl_close($ch);
        }
    } else {
        $error_message = 'Invalid payment request ID';
        error_log('Payment request ID mismatch: ' . $payment_request_id);
    }
} else {
    $error_message = 'Missing payment information';
    error_log('Missing payment_id or payment_request_id in callback');
}

// Clear sensitive session data
if ($payment_verified) {
    // Keep purchase data for display but remove sensitive information
    unset($_SESSION['payment_request_id']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $payment_verified ? 'Payment Successful' : 'Payment Failed'; ?> - EnderHOST</title>
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
            
            <?php if ($payment_verified): ?>
                <div class="text-center">
                    <div class="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    
                    <h2 class="text-2xl font-bold mb-4">Payment Successful!</h2>
                    
                    <?php if (isset($_SESSION['server_purchase'])): ?>
                        <p class="text-gray-300 mb-6">
                            Thank you for purchasing the <span class="font-semibold"><?php echo htmlspecialchars($_SESSION['server_purchase']['plan']); ?></span> plan.
                        </p>
                    <?php endif; ?>
                    
                    <div class="bg-gray-700 rounded-lg p-4 mb-6 text-left">
                        <h3 class="font-bold text-green-500 mb-2">What's Next?</h3>
                        <ol class="list-decimal pl-5 space-y-2 text-gray-300">
                            <li>Our system is setting up your Minecraft server</li>
                            <li>You'll receive login details via email within 10-15 minutes</li>
                            <li>Use the Game Panel to manage your server</li>
                        </ol>
                    </div>
                    
                    <div class="flex flex-col space-y-4">
                        <a href="https://panel.enderhost.in" class="bg-green-700 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                            Go to Game Panel
                        </a>
                        
                        <a href="/" class="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors">
                            Return to Homepage
                        </a>
                    </div>
                </div>
            <?php else: ?>
                <div class="text-center">
                    <div class="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    
                    <h2 class="text-2xl font-bold mb-4">Payment Failed</h2>
                    
                    <p class="text-gray-300 mb-6">
                        <?php echo !empty($error_message) ? htmlspecialchars($error_message) : 'There was an issue processing your payment.'; ?>
                    </p>
                    
                    <div class="flex flex-col space-y-4">
                        <a href="/purchase" class="bg-red-700 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors">
                            Try Again
                        </a>
                        
                        <a href="/" class="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors">
                            Return to Homepage
                        </a>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
