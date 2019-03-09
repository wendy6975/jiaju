SET NAMES UTF8;
DROP DATABASE IF EXISTS jj;
CREATE DATABASE jj CHARSET=UTF8;
USE jj;


/**商品表**/
CREATE TABLE jj_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),         #主标题
  img VARCHAR(128),            #主图片
  price DECIMAL(10,2),        #价格
  shelf_time BIGINT,          #上架时间
  sold_count INT             #已售出的数量
);

INSERT INTO jj_laptop VALUES
(NULL, '布艺沙发简约小户型沙发组合可拆洗转角出租房三人客厅整装家具', 'http://127.0.0.1:3000/img/p1-1.jpg', '2450.00', 150123456789, 2968),
(NULL, '法美家美式乡村实木沙发组合三人位欧式小户型轻奢客厅家具套装', 'http://127.0.0.1:3000/img/p2-1.jpg', '16713.00', 150123456789, 2968),
(NULL, '摩登简约美式乡村实木电视柜红橡木小户型客厅家具茶几组合地柜', 'http://127.0.0.1:3000/img/p4-1.jpg', '3080.00', 150123456789, 2968),
(NULL, '秋冬季简约纯色60支长绒棉磨毛四件套纯棉轻奢北欧风裸睡床上用品', 'http://127.0.0.1:3000/img/p5-1.jpg', '456.00', 150123456789, 2968),
(NULL, '问瓷阁 斗战圣佛 齐天大圣孙悟空摆件归来 客厅玄关装饰工艺品', 'http://127.0.0.1:3000/img/p6-1.jpg', '3580.00', 150123456789, 2968),
(NULL, '布艺沙发简约小户型沙发组合可拆洗转角出租房三人客厅整装家具', 'http://127.0.0.1:3000/img/p1-1.jpg', '2450.00', 150123456789, 2968),
(NULL, '法美家美式乡村实木沙发组合三人位欧式小户型轻奢客厅家具套装', 'http://127.0.0.1:3000/img/p2-1.jpg', '16713.00', 150123456789, 2968),
(NULL, '摩登简约美式乡村实木电视柜红橡木小户型客厅家具茶几组合地柜', 'http://127.0.0.1:3000/img/p4-1.jpg', '3080.00', 150123456789, 2968),
(NULL, '秋冬季简约纯色60支长绒棉磨毛四件套纯棉轻奢北欧风裸睡床上用品', 'http://127.0.0.1:3000/img/p5-1.jpg', '456.00', 150123456789, 2968);

/*商品图片表*/
CREATE TABLE jj_laptop_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  lid INT,              #笔记本电脑编号
  img_url VARCHAR(128)          #小图片路径
  
);

INSERT INTO jj_laptop_pic VALUES
(NULL, 1, 'http://127.0.0.1:3000/img/p1-1.jpg'),
(NULL, 1, 'http://127.0.0.1:3000/img/p1-2.jpg'),
(NULL, 1, 'http://127.0.0.1:3000/img/p1-3.jpg'),
(NULL, 1, 'http://127.0.0.1:3000/img/p1-4.jpg'),
(NULL, 2, 'http://127.0.0.1:3000/img/p2-1.jpg'),
(NULL, 2, 'http://127.0.0.1:3000/img/p2-2.jpg'),
(NULL, 2, 'http://127.0.0.1:3000/img/p2-3.jpg'),
(NULL, 2, 'http://127.0.0.1:3000/img/p2-4.jpg'),
(NULL, 2, 'http://127.0.0.1:3000/img/p2-5.jpg'),
(NULL, 3, 'http://127.0.0.1:3000/img/p4-1.jpg'),
(NULL, 3, 'http://127.0.0.1:3000/img/p4-2.jpg'),
(NULL, 3, 'http://127.0.0.1:3000/img/p4-3.jpg'),
(NULL, 3, 'http://127.0.0.1:3000/img/p4-4.jpg'),
(NULL, 3, 'http://127.0.0.1:3000/img/p4-5.png'),
(NULL, 4, 'http://127.0.0.1:3000/img/p5-1.jpg'),
(NULL, 4, 'http://127.0.0.1:3000/img/p5-2.jpg'),
(NULL, 4, 'http://127.0.0.1:3000/img/p5-3.jpg'),
(NULL, 4, 'http://127.0.0.1:3000/img/p5-4.jpg'),
(NULL, 4, 'http://127.0.0.1:3000/img/p5-5.jpg'),
(NULL, 5, 'http://127.0.0.1:3000/img/p6-1.jpg'),
(NULL, 5, 'http://127.0.0.1:3000/img/p6-2.jpg'),
(NULL, 5, 'http://127.0.0.1:3000/img/p6-3.jpg'),
(NULL, 5, 'http://127.0.0.1:3000/img/p6-4.jpg'),
(NULL, 5, 'http://127.0.0.1:3000/img/p6-5.jpg'),
(NULL, 6, 'http://127.0.0.1:3000/img/p1-1.jpg'),
(NULL, 6, 'http://127.0.0.1:3000/img/p1-2.jpg'),
(NULL, 6, 'http://127.0.0.1:3000/img/p1-3.jpg'),
(NULL, 6, 'http://127.0.0.1:3000/img/p1-4.jpg'),
(NULL, 7, 'http://127.0.0.1:3000/img/p2-1.jpg'),
(NULL, 7, 'http://127.0.0.1:3000/img/p2-2.jpg'),
(NULL, 7, 'http://127.0.0.1:3000/img/p2-3.jpg'),
(NULL, 7, 'http://127.0.0.1:3000/img/p2-4.jpg'),
(NULL, 7, 'http://127.0.0.1:3000/img/p2-5.jpg'),
(NULL, 8, 'http://127.0.0.1:3000/img/p4-1.jpg'),
(NULL, 8, 'http://127.0.0.1:3000/img/p4-2.jpg'),
(NULL, 8, 'http://127.0.0.1:3000/img/p4-3.jpg'),
(NULL, 8, 'http://127.0.0.1:3000/img/p4-4.jpg'),
(NULL, 8, 'http://127.0.0.1:3000/img/p4-5.png'),
(NULL, 9, 'http://127.0.0.1:3000/img/p5-1.jpg'),
(NULL, 9, 'http://127.0.0.1:3000/img/p5-2.jpg'),
(NULL, 9, 'http://127.0.0.1:3000/img/p5-3.jpg'),
(NULL, 9, 'http://127.0.0.1:3000/img/p5-4.jpg'),
(NULL, 9, 'http://127.0.0.1:3000/img/p5-5.jpg');




CREATE TABLE jj_shopcar(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,      #用户编号
  lid INT,   #商品编号
  count INT,        #购买数量
  title VARCHAR(128),
  price DECIMAL(10,2),
  pic varchar(128),
  isdelete tinyint(1)
);
INSERT INTO jj_shopcar VALUES
(NULL, 1, 1, 1, '布艺沙发简约小户型沙发组合可拆洗转角出租房三人客厅整装家具', '2450.00', 'http://127.0.0.1:3000/img/p1-1.jpg', 1),
(NULL, 1, 5, 1, '问瓷阁 斗战圣佛 齐天大圣孙悟空摆件归来 客厅玄关装饰工艺品', '3580.00', 'http://127.0.0.1:3000/img/p6-1.jpg', 0);

CREATE TABLE jj_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,      #用户编号
  phone VARCHAR(11),
  address VARCHAR(256),
  name varchar(8)
);
INSERT INTO jj_address VALUES
(NULL, 1, '17826826975', '浙江省杭州市西湖区学院路77', '孙玉兰'),
(NULL, 1, '17869536975', '浙江省杭州市西湖区学院路77号', '乔布斯'),
(NULL, 1, '17869536975', '浙江省杭州市西湖区学院路77号浙江省杭州市西湖区学院路77号', '巴菲特'),
(NULL, 1, '17869653275', '浙江省杭州市江干区白杨街道学院路123号', '马化腾'),
(NULL, 1, '17869946275', '浙江省杭州市西湖区学院路77号浙江省杭州市西湖区学院路77号', '马云'),
(NULL, 1, '41564534534', '杭州市清泰街160号', '娃哈哈'),
(NULL, 1, '14523698547', '高老庄', '猪八戒'),
(NULL, 1, '15698568965', '花果山', '孙悟空');

CREATE TABLE jj_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,      #用户编号
  lid INT,
  title VARCHAR(128),
  price DECIMAL(10,2),
  count INT,
  img VARCHAR(128),
  subtotal DECIMAL(10,2)
);
INSERT INTO jj_order VALUES
(NULL, 1, 2, '法美家美式乡村实木沙发组合三人位欧式小户型轻奢客厅家具套装', '16713.00', 10, 'http://127.0.0.1:3000/img/p2-1.jpg', '167130.00'),
(NULL, 1, 5, '问瓷阁 斗战圣佛 齐天大圣孙悟空摆件归来 客厅玄关装饰工艺品', '3580.00', 3, 'http://127.0.0.1:3000/img/p6-1.jpg', '10740.00'),
(NULL, 1, 9, '秋冬季简约纯色60支长绒棉磨毛四件套纯棉轻奢北欧风裸睡床上用品', '456.00', 1, 'http://127.0.0.1:3000/img/p5-1.jpg', '456.00');
