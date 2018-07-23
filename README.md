## JS弹幕实现


基于直播平台的流行，利用原生实现一下弹幕效果。
![弹幕](http://ox2ualtw3.bkt.clouddn.com/barrage.png)
<!--more-->

### 实现原理

1、设置展示弹幕元素位置属性为relative
2、动态创建弹幕元素，位置属性设置absolute，left为展示宽度
3、随机设置弹幕元素top值
4、随机产生弹幕元素移动速率，修改left值

### 随机颜色

    第一种实现
    let color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    
    第二种实现
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    第三种实现
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let color = `rgb(${r},${g},${b})`;

### 随机速率

    50 * +Math.random().toFixed(2)

### 效果

![](http://ox2ualtw3.bkt.clouddn.com/barrage.gif)
