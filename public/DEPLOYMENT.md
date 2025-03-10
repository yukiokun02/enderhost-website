
# EnderHOST Deployment Guide

This document explains how to deploy the EnderHOST website on your Oracle VM.

## Prerequisites

- Oracle VM with Ubuntu/Debian
- PHP 8.3 with required extensions
- MySQL/MariaDB
- Nginx
- Ability to SSH into your server

## Deployment Steps

1. **Install Required Software**:
   ```bash
   sudo apt update
   sudo apt install nginx mysql-server
   
   # For PHP 8.3
   sudo add-apt-repository ppa:ondrej/php
   sudo apt update
   sudo apt install php8.3 php8.3-fpm php8.3-mysql php8.3-mbstring php8.3-xml php8.3-curl
   ```

2. **Setup Database**:
   ```bash
   # Login to MySQL
   sudo mysql
   
   # Create database and user (inside MySQL prompt)
   CREATE DATABASE enderhost;
   CREATE USER 'enderuser'@'localhost' IDENTIFIED BY 'your_secure_password';
   GRANT ALL PRIVILEGES ON enderhost.* TO 'enderuser'@'localhost';
   FLUSH PRIVILEGES;
   EXIT;
   
   # Import database schema
   sudo mysql enderhost < /var/www/enderhost/sql/database_setup.sql
   ```

3. **Configure PHP Files**:
   - Edit `/var/www/enderhost/config.php` and update all settings
   - Update domain name in all PHP files

4. **Configure Nginx**:
   Create an Nginx configuration file at `/etc/nginx/sites-available/enderhost`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;  # Replace with your domain
   
       root /var/www/enderhost;
       index index.html index.php;
   
       # Handle React Router paths
       location / {
           try_files $uri $uri/ /index.html;
       }
   
       # Serve static files
       location /assets/ {
           expires 1y;
           add_header Cache-Control "public, max-age=31536000, immutable";
       }
   
       # Handle PHP files
       location ~ \.php$ {
           include snippets/fastcgi-php.conf;
           # Use the correct PHP 8.3 socket
           fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
           fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
           include fastcgi_params;
       }
   
       # Deny access to hidden files
       location ~ /\. {
           deny all;
       }
   }
   ```

5. **Enable Site and Restart Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/enderhost /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Set Permissions**:
   ```bash
   sudo chown -R www-data:www-data /var/www/enderhost
   sudo chmod -R 755 /var/www/enderhost
   ```

## Troubleshooting

- Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Check PHP logs: `sudo tail -f /var/log/php8.3-fpm.log`
- Ensure database credentials are correct in config.php
- Verify PHP-FPM is running: `sudo systemctl status php8.3-fpm`
