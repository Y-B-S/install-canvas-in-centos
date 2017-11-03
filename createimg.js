'use strict';

const fs = require('fs')
const path = require('path')


/**
 * canvas生成图片logo
 * 
 * @param {any} nRadius   圆半径
 * @param {any} sText     logo 文字
 * @param {any} sFilePath 生成的图片地址
 * @returns 
 */
let fCreateLogo = function(nRadius, sText, sFilePath) {
    //canvas 模块需要与node版本绑定
    const Canvas = require('canvas');
    return new Promise((resolve, reject) => {
        let nDiameter = nRadius * 2;
        let canvas = new Canvas(nDiameter, nDiameter); //正方形
        let ctx = canvas.getContext('2d');

        ctx.globalAlpha = 0.5; //背景透明度
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.strokeStyle = '#00a1ff'; //线颜色
        ctx.lineWidth = '3'; //划线粗

        //圆环半径
        let nStrokRadius = nRadius - ctx.lineWidth;
        //画圆环
        ctx.arc(nRadius, nRadius, nStrokRadius, 0, Math.PI * 2, true); //圆的属性
        ctx.closePath();
        ctx.stroke();


        ctx.globalAlpha = 1;
        ctx.font = nRadius + "px PingFang SC Light"; //字体设置 PingFang SC  苹方细体(Light)  苹方常规(Regular)
        ctx.fillStyle = '#00a1ff'; //填充颜色
        ctx.textAlign = 'center'; //文本水平对齐方式
        ctx.textBaseline = 'middle'; //文本垂直方向，基线位置 
        ctx.fillText(sText, nRadius, nRadius);
        canvas.createPNGStream().pipe(fs.createWriteStream(path.join(sFilePath))).on('close', function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(sFilePath);
            }
        })
    });
};

 fCreateLogo(40, '水', '11.png').then(console.log)
