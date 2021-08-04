# Unity 基础

## 1 游戏引擎 & unity

### 1.1 游戏引擎

#### 1.1.1 概念

游戏引擎（Game Engine）：可以快速制作游戏的软件框架，其中包含处理图像、声音等素材的预制功能，包含物理引擎等等...  
小白可以暂时只记住，它是可以帮助我们快速开发游戏的工具

##### 1.1.2 优秀游戏引擎

* 业界双雄：Unity（联合，意思应该是“我全包圆儿了，关于游戏开发的事儿”） & Unreal （虚幻）
* 免费新秀： Godot

### 1.2 Unity

也称为 Unity 3D，特点：易用，功能强大，大幅度提升开发效率

## 2. Unity 安装运行

### 2.1 Unity Hub（中心）


字面意思 unity 管理中心 ，unity 有很多版本，更新很频繁，很多版本并不互相兼容，就需要有一个管理中心来统一管理不同版本的 unity ，unity hub 因此而生。

可简化查找、下载和管理 Unity 项目和安装内容

[unity hub 官方文档资料](https://docs.unity.cn/cn/2021.1/Manual/GettingStartedUnityHub.html)

### 2.2 Unity hub 下载安装

[unity hub 安装 官方文档](https://docs.unity.cn/cn/2021.1/Manual/GettingStartedInstallingHub.html)

* 注册 unity 账号
* 注册许可证
* 下载 unity hub
* 安装 unity hub

### 2.3 安装 Unity

[使用 unity hub 下载安装 unity 官方文档](https://docs.unity.cn/cn/2021.1/Manual/GettingStartedInstallingHub.html)

* 打开 unity hub
* 登录 unity 账号
* 选择 unity 版本 ，下载，安装
* 选择安装好的 unity 版本，运行

### 2.4 运行 unity 项目

两种方式：

1. 直接打开指定版本的 unity ，打开项目
2. 通过 unity hub 直接打开项目（推荐） 

[运行 unity 官方文档](https://docs.unity.cn/cn/2021.1/Manual/GettingStarted.html)

### 2.5 unity 许可证

unity 虽然开源，但并不完全免费，分多个版本，个人版免费，专业版和企业版收费，所以需要许可证激活才能使用。

普通用户学习或非盈利性使用时，应选择个人版，申请对应的许可证激活 unity

具体操作步骤，参照 [许可证和激活 官方文档](https://docs.unity.cn/cn/2021.1/Manual/LicensesAndActivation.html)

## 3. 使用学习项目

* 打开 unity hub
* 左侧选择 “学习” , 右侧选择要使用的项目，点击并下载
* 等待下载过程中，可以点开 “查看教程” ， 在浏览器中查看示例项目对应教程
* 按照教程进行项目实操

## 4. Hello World

游戏开发属于软件开发的一个分支，自然需要用到一门编程语言，unity 中，使用 C# ，一个微软公司设计的程序开发语言

### 4.1 安装 C# 编译器

C# 编译器就是用来编写 C# 代码，并将其编译成机器可执行程序的编程工具，这里我们使用微软管饭的 Visual studio

* 下载 visual studio community 2019/2021（免费社区版），安装
* 或者在安装 unity 的同时，选择扩展工具中的 visual studio community 2019，安装

### 4.2 创建并编写 hello world 项目

``` C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HelloWorld : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnGUI(){
        GUI.skin.label.fontSize = 100;
        GUI.Label(new Rect(10, 10, Screen.width, Screen.height), "Hello World!");
    }
}

```