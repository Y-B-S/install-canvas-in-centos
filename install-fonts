# Centos 添加苹方字体
- canvas 模块需要用到苹方字体
- 查看系统字体命令`fc-list`
1. centos 服务器创建路径 `/usr/share/fonts/windows`
2. 将苹方字体*.ttf 文件上传到`/usr/share/fonts/windows`目录下
3. 执行命令 `fc-cache -fv` 
4. 查看系统字体`fc-list`,输出显示有刚刚上传的苹方字体则就代表字体添加成功
```sh
[root@MoMoZhou windows]# fc-list
Liberation Sans:style=Regular
苹方,PingFang SC,PingFang SC Regular,苹方 常规,.PingFang SC:style=常规,Regular,Light
苹方,PingFang SC,PingFang SC Light,苹方 细体,.PingFang SC:style=细体,Light,Regular,Thin
Liberation Sans:style=Bold
苹方,PingFang SC,PingFang SC Bold,苹方 粗体,.PingFang SC:style=粗体,Bold,Regular,Medium
Liberation Sans:style=Bold Italic
苹方,PingFang SC,PingFang SC Heavy,苹方 特粗,.PingFang SC:style=特粗,Heavy,Regular,Semibold
苹方,PingFang SC,PingFang SC Medium,苹方 中等,.PingFang SC:style=中等,Medium,Regular
苹方,PingFang SC,PingFang SC ExtraLight,苹方 特细,.PingFang SC:style=特细,ExtraLight,Regular,UltraLight
Liberation Sans:style=Italic
苹方\-繁,蘋方\-繁,PingFang TC:style=常规体,標準體,Regular
```

## Tips :
1. fc-cache,fc-list 命令无效则系统需要执行命令安装 `sudo yum -y install fontconfig`
