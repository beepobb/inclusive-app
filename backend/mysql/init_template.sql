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
INSERT INTO Staff (name, email, password, role, points) VALUES
('John.Doe', 'John.Doe@nus.com', 'password123', 'admin', 376),
('Jane-Smith', 'Jane-Smith@nus.com', 'password456', 'admin', 544),
('Alice.Johnson', 'Alice.Johnson@sutd.com', 'password789', 'user', 332);

-- Insert sample data into the Post table
INSERT INTO Post (title, content, post_date, post_user_id) VALUES
('Embrace Everyone, Thrive Together', 'Inclusivity for all fosters a more united and resilient community.', '2024-01-01 10:43:00', 1),
('Diversity is Our Strength', 'When we include everyone, we build a stronger, more dynamic society.', '2024-02-01 12:11:00', 2),
('Every Voice Counts', 'Ensuring all voices are heard enriches our collective experience and decision-making.', '2024-03-01 14:32:00', 2),
('Celebrate Differences, Create Unity', 'Recognizing and valuing each person''s uniqueness fuels progress and harmony.', '2024-03-01 16:43:00', 3),
('Inclusive Workplaces, Stronger Teams', 'Creating inclusive environments leads to more innovative and successful outcomes for everyone.', '2024-04-01 16:23:00', 1);
