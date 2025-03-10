
-- EnderHOST Database Setup Script

-- Drop existing tables if they exist
DROP TABLE IF EXISTS customers;

-- Create customers table
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    server_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    plan VARCHAR(255) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    order_date DATETIME NOT NULL,
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    payment_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create a table for server configurations
CREATE TABLE server_configs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    server_type VARCHAR(50) NOT NULL, -- vanilla, modpack, etc.
    ram INT NOT NULL, -- in GB
    cpu INT NOT NULL, -- in percentage
    storage INT NOT NULL, -- in GB
    status ENUM('provisioning', 'running', 'stopped', 'terminated') DEFAULT 'provisioning',
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- Create an index on email for faster lookups
CREATE INDEX idx_customer_email ON customers(email);
CREATE INDEX idx_customer_order_id ON customers(order_id);
