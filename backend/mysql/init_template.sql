-- Create the database if it doesn't exist
-- {{_DATABASE_}} is a template string that will be replaced by .env in backend/run_mysql.sh
CREATE DATABASE IF NOT EXISTS {{DATABASE}};

-- Drop existing tables if they exist
DROP TABLE IF EXISTS Post;
DROP TABLE IF EXISTS Staff;

-- Create the Staff table
CREATE TABLE Staff (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    points INT NOT NULL DEFAULT 0
);

-- Create the Post table
CREATE TABLE Post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    post_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    post_user_id INT NOT NULL,
    FOREIGN KEY (post_user_id) REFERENCES Staff(id) ON DELETE CASCADE
);

-- Insert sample data into the Staff table
INSERT INTO Staff (name, email, password, role) VALUES
('John.Doe', 'John.Doe@nus.com', 'password123', 'admin'),
('Jane-Smith', 'Jane-Smith@nus.com', 'password456', 'admin'),
('Alice.Johnson', 'Alice.Johnson@sutd.com', 'password789', 'user');

-- Insert sample data into the Post table
INSERT INTO Post (title, content, post_date, post_user_id) VALUES
('First Post', 'This is the content of the first post.', '2024-01-01 10:00:00', 1),
('Second Post', 'This is the content of the second post.', '2024-02-01 12:00:00', 2),
('Third Post', 'This is the content of the third post.', '2024-03-01 14:00:00', 2),
('Fourth Post', 'This is the content of the fourth post.', '2024-04-01 16:00:00', 1);
