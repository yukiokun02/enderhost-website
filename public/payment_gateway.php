
<?php
// Check if order_id is provided
if (!isset($_GET['order_id']) || empty($_GET['order_id'])) {
    header("Location: /");
    exit();
}

$order_id = $_GET['order_id'];

// Database connection parameters
$servername = "localhost";
$username = "db_username"; // Replace with your actual database username
$password = "db_password"; // Replace with your actual database password
$dbname = "enderhost";

try {
    // Create database connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Get order details
    $stmt = $conn->prepare("SELECT * FROM customers WHERE order_id = :order_id");
    $stmt->bindParam(':order_id', $order_id);
    $stmt->execute();
    
    $order = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$order) {
        echo "Order not found.";
        exit();
    }
    
} catch(PDOException $e) {
    echo "Database error: " . $e->getMessage();
    exit();
}

// Close connection
$conn = null;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Gateway - EnderHOST</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-12">
        <div class="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <div class="text-center mb-6">
                <h1 class="text-2xl font-bold">Complete Your Payment</h1>
                <p class="text-gray-600">Order ID: <?php echo htmlspecialchars($order_id); ?></p>
            </div>
            
            <div class="mb-6">
                <h2 class="text-lg font-semibold mb-2">Order Summary</h2>
                <div class="border-t border-b py-4">
                    <div class="flex justify-between mb-2">
                        <span>Plan:</span>
                        <span class="font-medium"><?php echo htmlspecialchars($order['plan']); ?></span>
                    </div>
                    <div class="flex justify-between">
                        <span>Payment Method:</span>
                        <span class="font-medium"><?php echo htmlspecialchars($order['payment_method']); ?></span>
                    </div>
                </div>
            </div>
            
            <!-- This is a simplified payment form - in a real application, you would integrate with an actual payment gateway -->
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700">Card Number</label>
                    <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="1234 5678 9012 3456">
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="MM/YY">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">CVV</label>
                        <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="123">
                    </div>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700">Cardholder Name</label>
                    <input type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="John Doe">
                </div>
                
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                    Pay Now
                </button>
            </div>
            
            <div class="mt-6 text-center text-sm text-gray-500">
                <p>For demo purposes only. No actual payment will be processed.</p>
            </div>
        </div>
    </div>
</body>
</html>
