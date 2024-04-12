DROP TABLE if exists user;
DROP TABLE if exists user_info;
DROP TABLE if exists quotes; 
DROP TABLE if exists games;

CREATE TABLE `user_info`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL
);
CREATE TABLE `quotes`(
    `question_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `result_points` INT NOT NULL,
    `quote_text` VARCHAR(255) NOT NULL,
    `solution_text` VARCHAR(255) NOT NULL,
    `player_answer` VARCHAR(255) NOT NULL,
    `game_id` BIGINT UNSIGNED NOT NULL
);
CREATE TABLE `games`(
    `game_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `game_total` INT NOT NULL
);
ALTER TABLE
    `quotes` ADD CONSTRAINT `quotes_game_id_foreign` FOREIGN KEY(`game_id`) REFERENCES `games`(`game_id`) ON DELETE cascade;
ALTER TABLE
    `games` ADD CONSTRAINT `games_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user_info`(`id`) ON DELETE cascade;