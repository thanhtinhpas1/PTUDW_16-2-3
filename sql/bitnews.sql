/*
 Navicat Premium Data Transfer

 Source Server         : news
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : db4free.net:3306
 Source Schema         : bitnews

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 09/05/2019 23:32:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` tinyint(11) NOT NULL,
  `created_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `parent_category_id`(`type`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'Thế giới', 1, '2019-05-01 00:00:00', '2019-05-02 00:00:00');
INSERT INTO `categories` VALUES (2, 'Kinh tế vĩ mô', 1, '2019-05-01 00:00:00', '2019-05-01 00:00:00');
INSERT INTO `categories` VALUES (3, 'Bóng đá', 1, '2019-05-02 00:00:00', '2019-05-02 00:00:00');
INSERT INTO `categories` VALUES (4, 'Kinh doanh', 1, '2019-05-01 00:00:00', '2019-05-01 00:00:00');
INSERT INTO `categories` VALUES (5, 'Thị trường ', 1, '2019-05-01 00:00:00', '2019-05-01 00:00:00');
INSERT INTO `categories` VALUES (6, 'Công nghệ ', 1, '2019-05-01 00:00:00', '2019-05-01 00:00:00');
INSERT INTO `categories` VALUES (7, 'Điểm nóng ', 2, '2019-05-02 00:00:00', '2019-05-02 00:00:00');
INSERT INTO `categories` VALUES (8, 'Quân sự', 2, '2019-05-01 00:00:00', '2019-05-01 00:00:00');
INSERT INTO `categories` VALUES (9, 'Vũ khí hạt nhân ', 2, '2019-05-02 00:00:00', '2019-05-02 00:00:00');
INSERT INTO `categories` VALUES (10, 'Khoa học vũ trụ', 2, '2019-05-01 00:00:00', '2019-05-01 00:00:00');
INSERT INTO `categories` VALUES (11, 'Tin trong ngày ', 2, '2019-05-02 00:00:00', '2019-05-02 00:00:00');
INSERT INTO `categories` VALUES (12, 'Tài chính ', 2, '2019-05-01 00:00:00', '2019-05-01 00:00:00');

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `post_id` bigint(11) NOT NULL,
  `created_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `post_id`(`post_id`) USING BTREE,
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for manage_categories
-- ----------------------------
DROP TABLE IF EXISTS `manage_categories`;
CREATE TABLE `manage_categories`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_manage_id` int(11) NOT NULL,
  `editor_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `editor_id`(`editor_id`) USING BTREE,
  INDEX `manage_categories_ibfk_1`(`category_manage_id`) USING BTREE,
  CONSTRAINT `manage_categories_ibfk_1` FOREIGN KEY (`category_manage_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `manage_categories_ibfk_2` FOREIGN KEY (`editor_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for post_tageds
-- ----------------------------
DROP TABLE IF EXISTS `post_tageds`;
CREATE TABLE `post_tageds`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tag_id` int(11) NOT NULL,
  `post_id` bigint(11) NOT NULL,
  `created_date` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_date` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `tag_id`(`tag_id`) USING BTREE,
  INDEX `post_id`(`post_id`) USING BTREE,
  CONSTRAINT `post_tageds_ibfk_1` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `post_tageds_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `views` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL,
  `premium_status` tinyint(3) NOT NULL DEFAULT 0,
  `category_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `post_date` datetime(0) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `thumb_img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `summary_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `category_id`(`category_id`) USING BTREE,
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'GUEST', '2019-05-09 23:12:39', '2019-05-09 23:12:45');
INSERT INTO `roles` VALUES (2, 'GUEST', '2019-05-09 23:13:32', '2019-05-09 23:13:35');
INSERT INTO `roles` VALUES (3, 'SUBSCRIBER', '2019-05-09 23:14:00', '2019-05-09 23:14:02');
INSERT INTO `roles` VALUES (4, 'WRITER', '2019-05-09 23:14:45', '2019-05-09 23:14:49');
INSERT INTO `roles` VALUES (5, 'EDITOR', '2019-05-09 23:15:07', '2019-05-09 23:15:09');
INSERT INTO `roles` VALUES (6, 'ADMIN', '2019-05-09 23:16:00', '2019-05-09 23:16:05');

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `access_token` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `role_id` int(11) NOT NULL,
  `expiry_date` datetime(0) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pseudonym` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `birthday` datetime(0) NOT NULL,
  `manage_by` int(11) NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE,
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
