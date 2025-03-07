
-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS enderhost;

-- Use the database
USE enderhost;

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    server_name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    plan VARCHAR(100) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    order_date DATETIME NOT NULL,
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add index for faster lookups
CREATE INDEX idx_email ON customers(email);
CREATE INDEX idx_order_id ON customers(order_id);
