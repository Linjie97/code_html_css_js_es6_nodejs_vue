//定义一个函数，用来获取指定元素的当前样式
//参数：obj要获取样式的元素   name要获取的样式名
function getStyle(obj, name) {
    //如果判别条件是getComputedStyle，作为变量在函数作用域及全局中查找，
    //找不到会报错；而判别条件是window.getComputedStyle，作为
    //对象.属性查找，找不到会返回undefined

    // if (window.getComputedStyle) {
    //     //正常浏览器有getComputedStyle（）方法
    //     return getComputedStyle(obj, null)[name];
    // }else{
    // //IE8
    // return obj.currentStyle[name];
    // }

    //可以简化为 三目运算符
    return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.currentStyle[name];
};


function move(obj, attr, target, speed, callback) {
    //关闭之前的定时器
    clearInterval(obj.timer);

    //获取元素目前位置
    var current = parseInt(getStyle(obj, attr));
    //判断速度的正负值
    //如果从0向800移动，则speed为正；如果从800向0移动，则speed为负
    if (current > target) {
        //此时速度为负值
        speed = -speed;
    }

    //开启定时器，用来执行动画效果
    //向执行动画的对象中添加一个timer属性，用来保存obj自己的定时器标识
    obj.timer = setInterval(function () {
        //获取obj原来的left值
        //parseInt()获取数值不带px
        var oldValue = parseInt(getStyle(obj, attr));

        //修改
        var newValue = oldValue + speed;
        //向左移动时，判断newValue是否小于target
        if (speed < 0 && newValue < target) {
            newValue = 0;
        }
        //向右移动时，判断newValue是否大于target
        if (speed > 0 && newValue > target) {
            newValue = target;
        }
        //将新值设置给obj
        obj.style[attr] = newValue + "px";

        //当元素移动到target时，使其停止执行动画
        if (newValue == target) {
            clearInterval(obj.timer);
            //动画执行完毕，如果有回调函数则调用
            callback && callback();
        }
    }, 30);
};

//定义一个函数用来向一个元素中添加指定的class属性值（增）
/*
  参数：
       obj 要添加class属性的元素
       cn  要添加的class值
*/
function addClass(obj, cn) {
    //检查obj中是否含有cn
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

/*
  上述addClass中，当点击多次按钮添加b2类时，不会改变样式，
  但重新添加b2类过于多余，因此用函数判断是否含有该类
    判断一个元素中是否含有指定的class属性值（查）
      如果有，则返回true，没有false
*/
function hasClass(obj, cn) {
    //判断obj中是否有cn class
    //创建一个正则表达式,判断是否有单独的单词b2（\b单词边界）
    //var reg = /\bb2\b/;//这种方法写死不行
    var reg = new RegExp("\\b" + cn + "\\b");
    // alert(reg);
    return reg.test(obj.className);
}

/*
  删除一个元素中的指定的class属性（删）
*/
function removeClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");

    //删除class
    obj.className = obj.className.replace(reg, "");
}

/*
  toggleClass()可以用来切换一个类（改）
    如果元素中具有该类，则删除该类
    如果元素中没有该类，则添加该类
*/
function toggleClass(obj, cn) {
    //判断obj中是否含有cn
    if (hasClass(obj, cn)) {
        //则删除该类
        removeClass(obj, cn);
    } else {
        //则添加该类
        addClass(obj, cn);
    }
};