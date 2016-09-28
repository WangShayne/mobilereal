# 测试项目

## 项目分析
  登录账号,实现对用户的增删改查

## 目的
  - 熟悉nodejs && express框架的使用
  - 熟悉nodejs的路由机制及界面跳转  
  -  nodejs和数据库mysql的配合
  -  分页操作

## 逻辑分析
    1.访问网页"xx.com"如果已登录,跳转到主页,否则跳转到"xx.com/login",输入账号密码登录.
    2.登录成功后跳转到"xx.com/home"主页,并保持登录状态.(如果直接访问"xx.com/home",则跳转到"xx.com/login页面")
    3."xx.com/userslist"分页展示用户列表.
    4."xx.com/adduser"新增用户,成功后跳转回userslist.

## 任务计划
##### 一. 本地测试环境搭建 express+mysql
    时间:0.5 day
待添加

##### 二. 登录页面
    时间:1 day
    需求:
            1. 连接数据库,验证登录信息
            2. 信息正确,保持登录状态

##### 三. 主页
    时间: 1 day
    需求:
            1.新增用户按钮 && 用户管理按钮

##### 四. 新增用户页面
    时间: 0.5 day
    需求:
            1.连接数据库,增加users记录,成功后跳转用户列表页面

##### 五. 用户列表页面
    时间: 1 day 
    需求:
            1.连接数据库,查询所有数据记录,返回给页面
            2.页面拿到数据后,分页展示在页面上
