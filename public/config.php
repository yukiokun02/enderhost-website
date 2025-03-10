
<?php
/**
 * EnderHOST Configuration File
 * This file contains central configuration settings for the application
 */

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'enderhost');
define('DB_USER', 'enderuser');       // Change this to your database username
define('DB_PASS', 'your_secure_password'); // Change this to your secure password

// Site Configuration
define('SITE_URL', 'http://yourdomain.com'); // Change this to your actual domain

// Email Configuration
define('ADMIN_EMAIL', 'mail.enderhost@gmail.com');
define('USE_SMTP', false); // Set to true to use SMTP instead of PHP mail()

// SMTP Configuration (only used if USE_SMTP is true)
define('SMTP_HOST', 'smtp.example.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'your_username');
define('SMTP_PASS', 'your_password');
define('SMTP_FROM_EMAIL', 'noreply@enderhost.in');
define('SMTP_FROM_NAME', 'EnderHOST');

// Payment Gateway Configuration
define('INSTAMOJO_API_KEY', '15532137afaebf-b938bf237d6279e818');
define('INSTAMOJO_AUTH_TOKEN', '25f57d21e4306fdbd30f4a6b-cac962ba');
define('INSTAMOJO_SALT', 'bf10d739a2a340f49a25c-c5e323d8626');
define('INSTAMOJO_ENDPOINT', 'https://www.instamojo.com/api/1.1/payment-requests/');

?>
