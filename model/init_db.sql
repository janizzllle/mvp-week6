
SET foreign_key_checks = 0;
DROP TABLE if exists game;
DROP TABLE if exists user;
SET foreign_key_checks = 1;

CREATE TABLE `game`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Q1` TINYINT NOT NULL,
    `Q2` TINYINT NOT NULL,
    `Q3` TINYINT NOT NULL,
    `Q4` TINYINT NOT NULL,
    `Q5` TINYINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `game_total` INT NOT NULL
);
CREATE TABLE `user`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `total_points` INT NOT NULL,
    `user_name` VARCHAR(255) NOT NULL
);

-- ALTER TABLE
--     `game` ADD CONSTRAINT `game_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);