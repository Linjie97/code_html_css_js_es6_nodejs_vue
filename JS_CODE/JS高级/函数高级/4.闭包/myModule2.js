(function(window){
    var msg = "diandkzlnsxkk";
    //操作数据的行为
    function doSomething(){
        console.log('doSomething'+msg.toUpperCase());
    };
    function doOtherthing(){
        console.log('doOtherthing'+msg.toLowerCase());
    }

    //将要暴露的内容设置为window属性
    window.myModule2 = {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
})(window)
//外部是匿名函数调用，立即执行函数