/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : users

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2016-10-08 10:01:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `userlist`
-- ----------------------------
DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `cname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `phone` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of userlist
-- ----------------------------
INSERT INTO `userlist` VALUES ('1', 'aaaaaaaaaa', 'x小米科技a', '123123123');
INSERT INTO `userlist` VALUES ('2', 'aa2萨达', 'baidu阿萨德', '110001');
INSERT INTO `userlist` VALUES ('3', 'aa3', '百度', '110002');
INSERT INTO `userlist` VALUES ('4', 'aa4', '日本', '110003');
INSERT INTO `userlist` VALUES ('5', 'aa5', '金山', '110004');
INSERT INTO `userlist` VALUES ('6', 'aa6', '北京', '110005');
INSERT INTO `userlist` VALUES ('7', 'aa7', '科技', '110006');
INSERT INTO `userlist` VALUES ('8', 'bb1', '电子', '110007');
INSERT INTO `userlist` VALUES ('9', 'bb2', '熊猫', '110008');
INSERT INTO `userlist` VALUES ('10', 'bb3', 'i4u', '110009');
INSERT INTO `userlist` VALUES ('11', 'bb4', 'mobilereal', '110010');
INSERT INTO `userlist` VALUES ('12', 'bb5', '天天', '110011');
INSERT INTO `userlist` VALUES ('13', 'bb6', '斗地主', '110012');
INSERT INTO `userlist` VALUES ('14', 'bb7', '腾讯', '110013');
INSERT INTO `userlist` VALUES ('15', 'bb8', '阿里巴巴', '110014');
INSERT INTO `userlist` VALUES ('16', 'bb9', 'taobao', '110015');
INSERT INTO `userlist` VALUES ('17', 'bb10', '淘宝', '110016');
INSERT INTO `userlist` VALUES ('18', 'cc1', '天猫', '110017');
INSERT INTO `userlist` VALUES ('19', 'cc2', 'tmall', '110018');
INSERT INTO `userlist` VALUES ('20', 'cc3', '京东', '110019');
INSERT INTO `userlist` VALUES ('21', 'cc4', '360', '110020');
INSERT INTO `userlist` VALUES ('22', 'cc5', 'jd', '110021');
INSERT INTO `userlist` VALUES ('23', 'cc6', '亚马逊', '110022');
INSERT INTO `userlist` VALUES ('24', 'cc7', 'amazon', '110023');
INSERT INTO `userlist` VALUES ('25', 'cc8', 'google', '110024');
INSERT INTO `userlist` VALUES ('26', 'dd1', '谷歌', '110025');
INSERT INTO `userlist` VALUES ('27', 'dd2', '国航', '110026');
INSERT INTO `userlist` VALUES ('28', 'dd3', '东软', '110027');
INSERT INTO `userlist` VALUES ('29', 'dd4', '汽车', '110028');
INSERT INTO `userlist` VALUES ('30', 'dd5', '大众', '110029');
INSERT INTO `userlist` VALUES ('31', 'dd6', '小众', '110030');
INSERT INTO `userlist` VALUES ('32', 'ee1', '斯柯达', '110031');
INSERT INTO `userlist` VALUES ('33', 'ee2', '奥迪', '110032');
INSERT INTO `userlist` VALUES ('34', 'ee3', '宝马', '110033');
INSERT INTO `userlist` VALUES ('35', 'ee4', '奔驰', '110034');
INSERT INTO `userlist` VALUES ('36', 'ee5', 'smart', '110035');
INSERT INTO `userlist` VALUES ('37', 'ee6', '马自达', '110036');
INSERT INTO `userlist` VALUES ('38', 'ee7', '本田', '110037');
INSERT INTO `userlist` VALUES ('39', 'ee8', '丰田', '110038');
INSERT INTO `userlist` VALUES ('40', 'ff1', '雷克萨斯', '110039');
INSERT INTO `userlist` VALUES ('41', 'ff2', '霸道', '110040');
INSERT INTO `userlist` VALUES ('42', 'ff3', '陆巡', '110041');
INSERT INTO `userlist` VALUES ('43', 'ff4', '野马', '110042');
INSERT INTO `userlist` VALUES ('45', 'ff5', '法拉利', '110043');
INSERT INTO `userlist` VALUES ('46', 'uers', '长江', '12333111');
INSERT INTO `userlist` VALUES ('47', '马大哈', '中山科技', '188244223');
INSERT INTO `userlist` VALUES ('48', '阿萨德', '电子科技', '999999');
INSERT INTO `userlist` VALUES ('52', '1231', '大手大脚', '12312341');
INSERT INTO `userlist` VALUES ('53', 'andy', 'i4u', '2147483647');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL,
  `password` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', 'admin');
INSERT INTO `users` VALUES ('2', 'ws', '123456');
