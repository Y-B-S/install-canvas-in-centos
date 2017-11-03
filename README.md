# install-canvas-in-centos
centos 安装canvas
# nodejs 使用canvas模块生成图片

- 环境centos 7,centos 6.5
- canvas 模块版本1.6.7

现在有一个需求需要在服务器上使用nodejs生成自定义图片,决定使用canvas模块来实现.  
canvas 模块依赖Cairo and Pango 软件.  
#### 安装过程如下:  
 1. centos输入命令安装依赖:
 ```
 sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel
 ```
2. 安装canvas模块  
 ```
 npm install canvas
 ```

3. 安装完毕输入命令 `node -p 'require("canvas")'`   
 如出下面的输出,代表canvas模块安装成功了:
 ```
 { [Function: Canvas]
  version: '1.6.7',
  cairoVersion: '1.8.8',
  jpegVersion: '6b',
  gifVersion: '4.1',
  freetypeVersion: '2.3.11',
  Context2d: { [Function: CanvasRenderingContext2D] parseFont: [Function] },
  PNGStream: [Function: PNGStream],
  PDFStream: [Function: PDFStream],
  JPEGStream: [Function: JPEGStream],
  Image: [Function: Image],
  ImageData: [Function: ImageData],
  Font: [Function: Font] }
 ```
## Tips 安装过程注意事项
1. 不同node版本使用canvas模块需要重新编译(重新安装),操作系统不一致也需要重新编译  
2. npm install canvas 若C++版本低于11编译会报错,需要重新安装gcc以支持c++11
3. 若安装Cairo and Pango 依赖出问题,可以先使用yum update 然后再执行安装命令

canvas模块github地址[这里](https://github.com/Automattic/node-canvas)

### Centos 安装苹方字体[传送](./install-fonts.md)

