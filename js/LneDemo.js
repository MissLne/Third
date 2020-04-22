function myAjax(obj) {

    var defaults = {
        type:"get",
        url:"#",
        dataType:"json",
        data:{},
        async:true,
        success:function(result){console.log(result);}
    };

    for(var key in obj){
        defaults[key] = obj[key];
    }

    var xhr = null;
    if(window.XMLHttpRequest) {
         xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }


    var params = '';
    for(var attr in defaults.data){
        params += attr + "=" + defaults.data[attr] + "&";
    }
    if(params){
        params = params.substring(0,params.length - 1);
    }
    if(defaults.type == 'get'){
        defaults.url += "?" + params;
    }
    xhr.open(defaults.type,defaults.url,defaults.async);

    if(defaults.type == 'get'){
        xhr.send(null);
    } else if(defaults.type == 'post') {
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params);
    }

    if(defaults.async){
        xhr.ajax.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            var result = null;
            if(defaults.dataType == 'json'){
                result = xhr.responseText;
                result = JSON.parse(result);
            } else if(defaults.dataType == 'xml') {
                result = xhr.responseXML;
            } else {
                result = xhr.responseText;
            }
            defaults.success(result);
        }
        }
    }else{
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            var result = null;
            if(defaults.dataType == 'json'){
                result = xhr.responseText;
                result = JSON.parse(result);
            } else if(defaults.dataType == 'xml') {
                result = xhr.responseXML;
            } else {
                result = xhr.responseText;
            }
            defaults.success(result);
        }
    }
}


// function myAjax1(obj){
//     var defaults = {
//         type:"get",
//         url:"#",
//         data:{},
//         success:function(data){},
//         jsonp:"callback",
//         jsonpCallback:"hehe"
//     };

//     for(var key in obj) {
//         defaults[key] = obj[key];
//     }

//     var params = '';
//     for(var attr in defaults.data){
//         params += attr + "=" + defaults.data[attr] + "&";
//     }
//     if(params){
//         params = params.substring(0,params.length - 1);
//         defaults.url += "?" + params;
//     }
//     defaults.url += "&" + defaults.jsonp + "=" + defaults.jsonpCallback;

//     var script = document.createElement("script");
//     script.src = defaults.url;

//     window[defaults.jsonpCallback] = function(data){
//         defaults.success(data);
//     }

//     var head = document.querySelector("head");
//     head.appendChild(script);
// }

var head_container1 = document.querySelector('.head_container1');
var head_container2 = document.querySelector('.head_container2');
var head_input = document.querySelector('.head_input');
var head_button = document.querySelector('.head_button');

head_input.onfocus = function(){
    head_input.style.width = '400px';
    head_input.style.border = '1px solid #444';
    head_button.style.transform = 'scale(0)';
}
head_input.onblur = function(){
    head_input.style.width = '300px';
    head_input.style.border = '1px solid #ebe9e9';
    head_button.style.transform = 'scale(1)';
}
var copyright = document.getElementById('copyright');
var massage_box = document.getElementsByClassName('massage_box');


window.onscroll = function(){ 
    var t = window.pageYOffset; 
    if(t > 1460){
        massage_box[0].style.transform = 'translateY(0)';
        massage_box[1].style.transform = 'translateY(0)';
    }else if(t < 1460){
        massage_box[0].style.transform = 'translateY(50px)';
        massage_box[1].style.transform = 'translateY(50px)';
    }
    if(t > 859){
        copyright.style.position = 'fixed';
        copyright.style.top = '50px';
    } else if ( t < 859){
            copyright.style.position = 'static';
    }
}
var timer = null; //定义一个定时器
var isTop = true; //定义一个布尔值，用于判断是否到达顶部


massage_box[1].onclick = function(){    //回到顶部按钮点击事件
    //设置一个定时器
    timer = setInterval(function(){
        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        //用于设置速度差，产生缓动的效果
        var speed = Math.floor(-osTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
        isTop =true;  //用于阻止滚动事件清除定时器
        if(osTop == 0){
            clearInterval(timer);
        }
    },30);
}

var scrollFunc = function (e) { 
    e = e || window.event; 
    if (e.wheelDelta) { //先判断浏览器IE，谷歌滑轮事件    
     if (e.wheelDelta > 0) { //当滑轮向上滚动时 
        head_container2.style.transform = 'translateY(0)';
        head_container1.style.transform = 'translateY(0)';
     } 
     if (e.wheelDelta < 0) { //当滑轮向下滚动时 
        head_container2.style.transform = 'translateY(-70px)';
        head_container1.style.transform = 'translateY(-70px)';
     } 
    } else if (e.detail) { //Firefox滑轮事件 
     if (e.detail> 0) { //当滑轮向上滚动时 
        head_container2.style.transform = 'translateY(0)';
        head_container1.style.transform = 'translateY(0)';
     } 
     if (e.detail< 0) { //当滑轮向下滚动时 
        head_container2.style.transform = 'translateY(-70px)';
        head_container1.style.transform = 'translateY(-70px)';
     } 
    } 
   }

   if (document.addEventListener) {//firefox 
    document.addEventListener('DOMMouseScroll', scrollFunc, false); 
   } 
   window.onmousewheel = document.onmousewheel = scrollFunc;


var pictrue_btn = document.querySelector('.pictrue_btn');
var pictrue = document.getElementById('pictrue');

pictrue_btn.onclick = function(){
    pictrue.style.height = '0';
}