function myModule(){
    //私有数据
    var msg = "diandkzlnsxkk";
    //操作数据的行为
    function doSomething(){
        console.log('doSomething'+msg.toUpperCase());
    };
    function doOtherthing(){
        console.log('doOtherthing'+msg.toLowerCase());
    }
    // return doSomething
    //向外暴露对象（给外部使用的方法）
    return{
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
}