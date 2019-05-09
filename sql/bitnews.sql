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

 Date: 10/05/2019 00:17:03
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
INSERT INTO `categories` VALUES (13, 'Chính sách', 2, '2019-05-02 00:00:00', '2019-05-02 00:00:00');
INSERT INTO `categories` VALUES (14, 'Hợp tác', 2, '2019-05-01 00:00:00', '2019-05-01 00:00:00');
INSERT INTO `categories` VALUES (15, 'Dự án', 2, '2019-05-06 00:00:00', '2019-05-07 00:00:00');
INSERT INTO `categories` VALUES (16, 'Lịch thi đấu', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (17, 'Sự kiện - Bình luận', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (18, 'Video', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (19, 'Livescore', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (20, 'Lịch thi đấu hôm nay', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (21, 'Kết quả bóng đá', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (22, 'Top ghi bàn', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (23, 'Bảng xếp hạng', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (24, 'Bóng đá trong nước', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (25, 'Doanh nhân', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (26, 'Tài chính', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (27, 'Bất động sản', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (28, 'Khởi nghiệp', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (29, 'Doanh nghiệp', 2, '2019-05-07 00:00:00', '2019-05-07 00:00:00');
INSERT INTO `categories` VALUES (30, 'Ngân hàng ', 2, '2019-05-08 00:00:00', '2019-05-08 00:00:00');
INSERT INTO `categories` VALUES (31, 'Bitcoin', 2, '2019-05-05 00:00:00', '2019-05-05 00:00:00');
INSERT INTO `categories` VALUES (32, 'Tỷ giá', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `categories` VALUES (33, 'Chứng khoáng', 2, '2019-05-06 00:00:00', '2019-05-06 00:00:00');

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `post_id` bigint(20) NOT NULL,
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
  `tag_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tag_id` int(11) NOT NULL,
  `post_id` bigint(11) NOT NULL,
  `created_date` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_date` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `tag_id`(`tag_id`) USING BTREE,
  INDEX `post_id`(`post_id`) USING BTREE,
  CONSTRAINT `post_tageds_ibfk_1` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `post_tageds_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
  `fail_reason` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `created_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `category_id`(`category_id`) USING BTREE,
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (1, 'https://znews-photo.zadn.vn/w660/Uploaded/huoabhu/2019_04_18/a81515057751913.jpg', 'Các thiết bị dưới đây được xây dựng cho một căn hộ chung cư với 2 phòng ngủ, 2 phòng vệ sinh, một phòng khách kèm phòng ăn. Vì trong tầm giá 10 triệu đồng, đa số các thiết bị đề xuất dưới đây sẽ nằm trong hệ sinh thái Xiaomi. Chúng chưa được bán chính hãng ở Việt Nam, nhưng người dùng vẫn có thể mua hàng \"xách tay\" thông qua một số kênh bán lẻ ở Hà Nội và TP.HCM.\r\nLoa Insignia hỗ trợ Google Home là một sản phẩm tới thương hiệu Mỹ. Thiết bị này sẽ giúp bạn điều khiển bằng giọng nói để bật tắt các thiết bị trong phòng, đồng thời làm loa phát nhạc và kèm với chức năng báo giờ. Insignia có thể kết nối với Google Home Mini ở những phòng khác. Cách kết nối: Sử dụng app Google Home. Giá tham khảo: 1,5 triệu đồng. \r\nĐể tiện lợi khi sử dụng, các bạn hãy kết nối các thiết bị kể trên với những phần mềm đã được viết sẵn tương thích với chúng. Sau khi đã cài đặt xong, chúng ta có thể link Broadlink, JAVIS và Xiaomi lên ứng dụng Google Home. Và sau đó chỉ cần dùng Google Home là đủ để kết nối toàn bộ thiết bị trong nhà và ra lệnh bằng giọng nói', 3000, 1, 0, 6, 1, '2019-05-07 00:00:00', 'Gợi ý lắp smarthome giá tầm 10 triệu ở Việt Nam', 'https://znews-photo.zadn.vn/w660/Uploaded/huoabhu/2019_04_18/346485_8856_FNbsoDU9zukwqDqDnYfLF6GOx.JPG', 'Với 10 triệu đồng, người dùng đã có thể tự làm smarthome điều khiển bằng giọng nói, tự động tắt mở quạt, điều hòa, TV...', NULL, '2019-05-02 00:00:00', '2019-05-01 00:00:00');
INSERT INTO `posts` VALUES (2, 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2019_03_15/image001_9.jpg', 'Khảo sát từ Euromonitor tiết lộ Panasonic là thương hiệu máy giặt số 1 Nhật Bản với thị phần dẫn đầu năm 2017. Thương hiệu uy tín là một trong những tiêu chí để phụ nữ Nhật chọn máy giặt.\r\nNgười Nhật luôn cân nhắc kỹ lưỡng khả năng kinh tế, số lượng thành viên trong gia đình để chọn máy giặt có công năng và giá cả phù hợp. Hiện nay, thị trường có 2 dòng phổ biến là máy giặt cửa trên và cửa trước.\r\n\r\nƯu điểm lớn nhất của máy giặt cửa trên nằm ở giá thành rẻ. Trong khi đó, máy giặt cửa trước ra đời sau với nhiều cải tiến hiện đại nên giá cao hơn. Các thương hiệu máy giặt uy tín như Panasonic đều có các phân khúc từ phổ thông đến cao cấp để khách hàng lựa chọn phù hợp với ngân sách.\r\nLà quốc gia không giàu tài nguyên nên người Nhật rất tiết kiệm. Tuy nhiên, điều này vẫn phải đảm bảo đem lại hiệu quả dài hạn. Chiếc máy giặt tốt sẽ trở thành “trợ thủ” đắc lực cho mỗi gia đình. Vòng đời sử dụng thường kéo dài nhiều năm nên người Nhật không ngại chi cho sản phẩm hiệu suất cao. Vì vậy, trong khoảng một thập niên trở lại đây, hầu hết gia đình tại Nhật Bản đều ưu ái dòng máy giặt cửa trước nhờ những tính ưu việt của sản phẩm.\r\n\r\nCụ thể, trong khi máy giặt cửa trên có tốc độ quay thường dưới 800 vòng/phút thì chỉ số này ở loại cửa trước có thể lên tới 1.200 vòng/phút, tạo cách biệt ấn tượng về hiệu quả làm sạch sâu cũng như khả năng hong khô. Bên cạnh đó, cấu trúc quay ly tâm của máy cửa trước khiến quần áo được đảo đều hơn, không bị xoắn chặt, giảm hư hỏng, nhăn, rách. Mức độ tiêu thụ nước lại khiêm tốn hơn nhiều.\r\nTối giản là trào lưu mới trong thiết kế nội thất hiện đại và trở thành phong cách được người Nhật yêu thích. Điển hình, những chiếc máy giặt đứng đầu thị phần của Panasonic luôn có màu sắc trang nhã, thiết kế tinh tế cho nội thất của ngôi nhà.\r\n\r\nNhững máy giặt thời thượng, công nghệ hiện đại của Panasonic tại Việt Nam cũng có hiệu suất hoạt động không thua kém gì sản phẩm thị trường nội địa. Các bà nội trợ Việt có thể tham khảo mẹo chọn máy giặt của người Nhật để sắm cho gia đình mình “trợ thủ” đáng tin cậy, giúp quần áo cả nhà không chỉ sạch bẩn mà còn sạch cả vi khuẩn.', 1500, 1, 1, 5, 1, '2019-05-09 00:00:00', 'Cách phụ nữ Nhật chọn máy giặt để tiết kiệm, phù hợp không gian sống', 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2019_03_15/image002_2.jpg', 'Người Nhật nổi tiếng cẩn trọng, nên việc chọn đồ gia dụng lại càng không thể qua loa. Đặc biệt, các sản phẩm liên quan đến sức khỏe như máy giặt được bà nội trợ ưu tiên đầu tư.', NULL, '2019-05-06 00:00:00', '2019-05-06 00:00:00');
INSERT INTO `posts` VALUES (3, 'https://znews-photo.zadn.vn/w660/Uploaded/lce_uxlcq/2019_03_12/q7fndesignlarge_1.jpg', 'Sau Tết, nhiều mẫu TV được giảm giá mạnh, phần lớn nằm trong phân khúc cao cấp. Với mức giảm sâu, đây có thể là động thái xả hàng để đón các model mới của năm 2019 sau triển lãm CES.\r\n\r\nNgoài ra, thị trường đã qua mùa mua sắm Tết nên cần những cú hích lớn để giảm lượng máy tồn kho, theo một chuyên gia trong lĩnh vực điện máy.\r\n\r\nĐáng chú ý trong đợt giảm giá này, những model cao cấp của Samsung như QA55 inch Q7F giảm 21 triệu từ 46,9 còn 25,9 triệu đồng, QA 55 inch Q8C giảm 16 triệu từ 51,9 còn 35,9 triệu đồng, QA 65 inch Q7F 51,9 triệu đồng còn 35,9 triệu đồng hay QA 65 inch Q7F từ 61,9 triệu đồng còn 43,9 triệu đồng.\r\nViệc hàng loạt TV cao cấp giảm giá mạnh sau Tết là điều có thể dự đoán trước. Do có giá cao, những model này chứng kiến sức mua yếu, thậm chí ngay cả trong mùa mua sắm.\r\n\r\nNgoài ra, tại triển lãm thương mại điện tử CES 2019, người ta đã chứng kiến nhiều nâng cấp ấn tượng cho TV. Đầu tiên phải kể đến chính là xu hướng độ phân giải 8K hứa hẹn mang đến trải nghiệm hình ảnh tối ưu hơn so với 4K.\r\n\r\nCùng với đó là những đột phá về thiết kế, kích thước màn hình, công nghệ panel, TV màn hình cuộn. Những thiết bị sở hữu công nghệ mới nhất này được dự đoán sẽ có mặt tại Việt Nam ngay trong năm nay.\r\nNgoài phân khúc cao cấp, nhiều model trong tầm giá trên 10 triệu đồng cũng có mức giảm nhẹ để kích cầu người mua. Cụ thể, TV Samsung UA43NU7400 và UA49NU7100 giảm còn 11,9 và 13,6 triệu đồng, Sony 43 inch W660F giảm 2,5 triệu từ 12,29 còn 9,7 triệu đồng.\r\n\r\nTheo hãng nghiên cứu IHS Market, Samsung giữ ngôi vị số 1 về thị phần TV thế giới với 29%, xếp sau là LG 17,5%, Hisense 5,7% và TCL 5,6%. Tại Việt Nam, theo GfK, trung bình thị phần 12 tháng của năm 2018 đến 19/1/2019 của Samsung trong mảng TV đạt 41,7%, Sony 34,4% và LG 14,3%.', 6000, 1, 0, 6, 2, '2019-05-10 00:00:00', 'Nhiều mẫu TV cao cấp giảm giá chục triệu đồng', 'https://znews-photo.zadn.vn/w660/Uploaded/lce_uxlcq/2019_03_12/11samsungqled8k.jpg', 'Các mẫu TV màn hình 55, 65 inch thuộc phân khúc cao cấp trước đây giảm giá mạnh để dọn kho, chào đón phiên bản 2019.', NULL, '2019-05-02 00:00:00', '2019-05-02 00:00:00');
INSERT INTO `posts` VALUES (4, 'https://znews-photo.zadn.vn/w1024/Uploaded/neg_wpeczyr/2019_03_03/Galaxy_Buds_zing_1_2.jpg', 'Galaxy Buds là mẫu tai nghe không dây mới nhất của Samsung. Model này được tặng kèm khi người dùng đặt mua Galaxy S mới. Dự kiến, hãng sẽ bán ra Galaxy Buds với mức giá 4,5 triệu đồng.\r\nHộp của tai nghe Galaxy Buds được làm nhỏ gọn hơn so với mẫu Gear Icon X. Chiếc hộp này có thiết kế dạng viên thuốc, dùng chất liệu nhựa cho cho cảm giác cầm khá êm tay. Người dùng có thể dễ dàng mang theo tai nghe này khi di chuyển.\r\nTrên hộp của Galaxy Buds có một rãnh nhỏ ở phía trước, người dùng lấy tay đẩy lên để mở nắp. Không thuận tiện bằng cách bấm nút để mở nắp như Gear Icon X.\r\nTai nghe được sạc trực tiếp trên chiếc hộp này. Do có nam châm, nó sẽ hít tai nghe vào vị trí sạc khi người dùng đặt vào hộp.\r\nGiống như Gear Icon X, Galaxy Buds vẫn được trang bị cảm biến hồng ngoại, có thể nhận biết khi người dùng đeo hoặc tháo tai nghe.\r\nĐể dùng tai nghe này, người dùng cần tải ứng dụng Galaxy Wearable (miễn phí trên App Store và Google Play). Giao diện trên ứng dụng này khá đơn giản, người dùng có thể điều chỉnh mức âm lượng hay bộ chỉnh âm từ êm dịu, tăng âm bổng, xem phần trăm pin…\r\nNgười dùng có thể chạm một lần trên tai nghe để dừng bài hát, chạm hai lần để chuyển sang bài kế tiếp, ba lần để quay trở về bài trước.\r\nChiếc tai nghe này có phần đệm được làm bằng chất liệu cao su mềm, tuy nhiên khi đeo trong thời gian dài sẽ có tình trạng đau tai.\r\nTai nghe Galaxy Buds có dung lượng pin 58 mAh, trong khi hộp của thiết bị là 252 mAh. Model này có thời lượng pin khoảng 6 tiếng nghe nhạc liên tục, cao hơn 1 tiếng so với AirPods. Ngoài ra, hộp Galaxy Buds có tính năng sạc không dây chuẩn Qi, người dùng có thể sử dụng Galaxy S10 để sạc cho thiết bị này.\r\nGalaxy Buds sở hữu một thiết kế mềm mại, nhỏ gọn, âm thanh chi tiết, rõ ràng. Bên cạnh đó, với thời lượng pin tốt và giá bán thấp hơn 500.000 đồng so với AirPods, thiết bị hứa hẹn mang một làn gió mới trong thị trường tai nghe không dây.', 7000, 1, 1, 6, 3, '2019-05-03 00:00:00', 'Chi tiết Galaxy Buds - nhỏ gọn, giá rẻ hơn AirPods', 'https://znews-photo.zadn.vn/w1024/Uploaded/neg_wpeczyr/2019_03_03/Galaxy_Buds_zing_1_3.jpg', 'Galaxy Buds là phiên bản kế nhiệm của mẫu Galaxy Gear Icon X. Thiết bị này có kiểu dáng nhỏ gọn, cải tiến về âm thanh và tích hợp công nghệ sạc không dây.', NULL, '2019-05-01 00:00:00', '2019-05-01 00:00:00');

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
