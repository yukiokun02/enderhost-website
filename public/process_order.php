
<?php
// Database connection parameters - UPDATE THESE with your Oracle VM database credentials
$servername = "localhost"; 
$username = "enderuser"; // Updated username
$password = "your_secure_password"; // You should change this to your actual secure password
$dbname = "enderhost";

// Initialize error message array
$errors = [];

// Function to sanitize user input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Valid plans list - ensuring all plans from PurchaseForm.tsx and Pricing.tsx are included
$valid_plans = [
    // Vanilla Plans
    "getting-woods",
    "Getting Woods",
    "getting-an-upgrade",
    "Getting an Upgrade",
    "stone-age",
    "Stone Age",
    "acquire-hardware",
    "Acquire Hardware",
    
    // Modpack Plans
    "isnt-it-iron-pick",
    "Isn't It Iron Pick?",
    "diamonds",
    "Diamonds",
    "ice-bucket-challenge",
    "Ice Bucket Challenge",
    
    // Community Server Plans
    "we-need-to-go-deeper",
    "We Need to Go Deeper",
    "hidden-in-the-depths",
    "Hidden in the Depths",
    "the-end",
    "The End",
    "sky-is-the-limit",
    "Sky is the Limit"
];

// Process form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = isset($_POST["name"]) ? sanitize_input($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? sanitize_input($_POST["email"]) : "";
    $server_name = isset($_POST["serverName"]) ? sanitize_input($_POST["serverName"]) : "";
    $password = isset($_POST["password"]) ? $_POST["password"] : ""; // Will be hashed later
    $phone = isset($_POST["phone"]) ? sanitize_input($_POST["phone"]) : ""; // Optional field
    $plan = isset($_POST["plan"]) ? sanitize_input($_POST["plan"]) : "";
    $payment_method = isset($_POST["payment_method"]) ? sanitize_input($_POST["payment_method"]) : "";
    
    // Basic validation
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    if (empty($server_name)) {
        $errors[] = "Server name is required";
    }
    
    if (empty($password)) {
        $errors[] = "Password is required";
    } elseif (strlen($password) < 8) {
        $errors[] = "Password must be at least 8 characters long";
    }
    
    if (empty($plan)) {
        $errors[] = "Please select a plan";
    } elseif (!in_array($plan, $valid_plans)) {
        $errors[] = "Selected plan is invalid";
    }
    
    if (empty($payment_method)) {
        $errors[] = "Please select a payment method";
    }
    
    // Note: Not validating phone as it's optional
    
    // If no validation errors, proceed
    if (empty($errors)) {
        try {
            // Create database connection
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            // Set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            // Check if email already exists
            $stmt = $conn->prepare("SELECT email FROM customers WHERE email = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            
            if ($stmt->rowCount() > 0) {
                $errors[] = "Email address is already registered. Please use a different email.";
            } else {
                // Generate unique order ID
                $order_id = uniqid('EH-', true);
                
                // Hash the password for security
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                
                // Insert data into database
                $stmt = $conn->prepare("INSERT INTO customers (order_id, name, email, server_name, password, phone, plan, payment_method, order_date) 
                                       VALUES (:order_id, :name, :email, :server_name, :password, :phone, :plan, :payment_method, NOW())");
                
                $stmt->bindParam(':order_id', $order_id);
                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':server_name', $server_name);
                $stmt->bindParam(':password', $hashed_password);
                $stmt->bindParam(':phone', $phone);
                $stmt->bindParam(':plan', $plan);
                $stmt->bindParam(':payment_method', $payment_method);
                
                $stmt->execute();
                
                // Redirect to payment gateway
                header("Location: payment_gateway.php?order_id=" . $order_id);
                exit();
            }
        } catch(PDOException $e) {
            $errors[] = "Database error: " . $e->getMessage();
        }
        
        // Close connection
        $conn = null;
    }
}

// If there are errors, output them
if (!empty($errors)) {
    echo "<div style='color: red; padding: 20px; background-color: #ffeeee; border: 1px solid #ff0000; margin: 20px;'>";
    echo "<h3>Please correct the following errors:</h3>";
    echo "<ul>";
    foreach ($errors as $error) {
        echo "<li>" . $error . "</li>";
    }
    echo "</ul>";
    echo "<p><a href='javascript:history.back()'>Go back to form</a></p>";
    echo "</div>";
}
?>
