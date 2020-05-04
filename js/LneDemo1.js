function myAjax(obj) {

    var defaults = {
        type: "get",
        url: "#",
        dataType: "json",
        data: {},
        async: true,
        success: function (result,articles) {
        }
    };

    for (var key in obj) {
        defaults[key] = obj[key];
    }

    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }


    var params = '';
    for (var attr in defaults.data) {
        params += attr + "=" + defaults.data[attr] + "&";
    }
    if (params) {
        params = params.substring(0, params.length - 1);
    }
    if (defaults.type == 'get') {
        defaults.url += "?" + params;
    }
    xhr.open(defaults.type, defaults.url, defaults.async);

    if (defaults.type == 'get') {
        xhr.send(null);
    } else if (defaults.type == 'post') {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }

    if (defaults.async) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {

                var result = null;
                var articles = null;
                var userId = null;
                if (defaults.dataType == 'json') {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                    articles = xhr.responseText;
                    articles = JSON.parse(articles);
                    userId = xhr.responseText;
                    userId = JSON.parse(userId);
                } else if (defaults.dataType == 'xml') {
                    result = xhr.responseXML;
                    articles = xhr.responseXML;
                    userId = xhr.responseXML;
                } else {
                    articles = xhr.responseText;
                    result = xhr.responseText;
                    userId = xhr.responseText;
                }
                defaults.success(result,articles,userId);
            }
        }
    } else {
        if (xhr.readyState == 4 && xhr.status == 200) {

            var result = null;
            var articles = null;
            var userId = null;
            if (defaults.dataType == 'json') {
                result = xhr.responseText;
                articles = xhr.responseText;
                userId = xhr.responseText;
                result = JSON.parse(result);
                articles = JSON.parse(articles);
                userId = JSON.parse(userId);
            } else if (defaults.dataType == 'xml') {
                result = xhr.responseXML;
            } else {
                result = xhr.responseText;
            }
            defaults.success(result,articles,userId);
        }
    }
}


var article_before = document.getElementsByClassName('article_before');
var article_after = document.getElementsByClassName('article_after');
var article_do = document.getElementsByClassName('article_do');

var onload0to4 = function(){

    var setting = {
    
         dataType: "json",
         type:"get",
         url:"http://47.97.204.234:3000/article/getArticles",
         data:{
             "userId":"5e96e7066dc8847e998b8615",
             "start":0,
             "stop":4
         },
         async:true,
        
         success:function(result,articles){
             for(var i = 0;i < 4;i++){
    
                var before_title = document.createElement('h3');
                before_title.setAttribute('class','before_title');
                article_before[i].appendChild(before_title);
            
            
                var before_userid = document.createElement('span');
                before_userid.setAttribute('class','before_userid');
                article_before[i].appendChild(before_userid);
            
                var before_content = document.createElement('span');
                before_content.setAttribute('class','before_content');
                article_before[i].appendChild(before_content);
            
                before_btn = document.createElement('span');
                before_btn.setAttribute('class','before_btn');
                article_before[i].appendChild(before_btn);
                before_btn.innerHTML = '阅读全文';
            
            
                // var iconfont1 = document.createElement('span');
                // before_btn.setAttribute('class','iconfont');
                // before_btn.appendChild(iconfont1);
                // iconfont1.innerHTML = '&#xe502;';
          
                var after_title = document.createElement('h3');
                after_title.setAttribute('class','after_title');
                article_after[i].appendChild(after_title);
            
                var after_img = document.createElement('img');
                after_img.setAttribute('class','after_img');
                article_after[i].appendChild(after_img);
            
                var after_userid = document.createElement('span');
                after_userid.setAttribute('class','after_userid');
                article_after[i].appendChild(after_userid);
            
                var after_introduce = document.createElement('span');
                before_content.setAttribute('class','after_introduce');
                article_after[i].appendChild(after_introduce);
            
                var after_agree = document.createElement('p');
                after_agree.setAttribute('class','after_agree');
                article_after[i].appendChild(after_agree);
            
                var after_content = document.createElement('p');
                after_content.setAttribute('class','after_content');
                article_after[i].appendChild(after_content);
            
                var after_date = document.createElement('p');
                after_date.setAttribute('class','after_date');
                article_after[i].appendChild(after_date);
    
                var article_agree = document.createElement('span');
                article_agree.setAttribute('class','article_agree iconfont');
                article_do[i].appendChild(article_agree);
                article_agree.innerHTML = '&#xe61d; 赞同';
            
                var article_disagree = document.createElement('span');
                article_disagree.setAttribute('class','article_disagree iconfont');
                article_do[i].appendChild(article_disagree);
                article_disagree.innerHTML = '&#xe640;';
            
                var article_comment = document.createElement('span');
                article_comment.setAttribute('class','article_comment iconfont');
                article_do[i].appendChild(article_comment);
                article_comment.innerHTML = '&#xe650;';
            
                var article_share = document.createElement('span');
                article_share.setAttribute('class','article_share iconfont');
                article_do[i].appendChild(article_share);
                article_share.innerHTML = '&#xe505; 分享';
            
                var article_collect = document.createElement('span');
                article_collect.setAttribute('class','article_collect iconfont');
                article_do[i].appendChild(article_collect);
                article_collect.innerHTML = '&#xe604; 收藏';
            
                var article_like = document.createElement('span');
                article_like.setAttribute('class','article_like iconfont');
                article_do[i].appendChild(article_like);
            
                var iconfont2 = document.createElement('span');
                iconfont2.setAttribute('class','iconfont');
                article_like.appendChild(iconfont2);
                iconfont2.innerHTML = '&#xe51a;';
                article_like.innerHTML = '喜欢';
            
            
                var article_more = document.createElement('span');
                article_more.setAttribute('class','article_more iconfont');
                article_do[i].appendChild(article_more);
    
             var arr = [];
             for(var item in articles){
                 arr.push(articles[item]);
                 
             }
    
             arr.forEach(function(element) {     
    
                
                     
                 before_title.innerHTML = element[i].title;
                 before_userid.innerHTML = element[i].nickname + ":";
    
                 after_title.innerHTML = element[i].title;
                 after_userid.innerHTML = element[i].nickname;
                 after_img.src = element[i].avatar;
             
                 after_introduce.innerHTML = element[i].introduction;
                 after_agree.innerHTML = element[i].likeNum + "人赞同了该回答";
                 after_date.innerHTML = element[i].issueTime;
                 var array = [];
                 for(var items in element[i].content){
                     array.push(element[i].content[items]);
             
                 }
                 before_content.innerHTML = '';
                 for(var j = 0;j < 3;j++){
                     before_content.innerHTML += array[j];
                 }
                 before_content.innerHTML += "...";
                 for(var j = 0;j < array.length;j++){
                      var temp = array[j] + "<br/><br/>";
                      after_content.innerHTML += temp;
                 }
    
                
             
               });   
               
                    
                     
         }
         }
     }
     myAjax(setting);
    
    // before_btn.onclick = function(){
    // article_before.style.display = 'none';
    // }
    }
for(let i = 0;i < 4;i++){
        $(article_before[i]).on('click','.before_btn',function(){
        article_after[i].style.display = 'block';
    })
}
    

var onload4to8 = function(){
    
    var setting = {
    
        dataType: "json",
        type:"get",
        url:"http://47.97.204.234:3000/article/getArticles",
        data:{
            "userId":"5e96e5986dc8847e998b85fb",
            "start":4,
            "stop":8
        },
        async:true,
       
        success:function(result,articles){
            for(var i = 0;i < 4;i++){
   
               var before_title = document.createElement('h3');
               before_title.setAttribute('class','before_title');
               article_before[i+4].appendChild(before_title);
           
           
               var before_userid = document.createElement('span');
               before_userid.setAttribute('class','before_userid');
               article_before[i+4].appendChild(before_userid);
           
               var before_content = document.createElement('span');
               before_content.setAttribute('class','before_content');
               article_before[i+4].appendChild(before_content);
           
               before_btn = document.createElement('span');
               before_btn.setAttribute('class','before_btn');
               article_before[i+4].appendChild(before_btn);
               before_btn.innerHTML = '阅读全文';
           
           
               // var iconfont1 = document.createElement('span');
               // before_btn.setAttribute('class','iconfont');
               // before_btn.appendChild(iconfont1);
               // iconfont1.innerHTML = '&#xe502;';
         
               var after_title = document.createElement('h3');
               after_title.setAttribute('class','after_title');
               article_after[i+4].appendChild(after_title);
           
               var after_img = document.createElement('img');
               after_img.setAttribute('class','after_img');
               article_after[i+4].appendChild(after_img);
           
               var after_userid = document.createElement('span');
               after_userid.setAttribute('class','after_userid');
               article_after[i+4].appendChild(after_userid);
           
               var after_introduce = document.createElement('span');
               before_content.setAttribute('class','after_introduce');
               article_after[i+4].appendChild(after_introduce);
           
               var after_agree = document.createElement('p');
               after_agree.setAttribute('class','after_agree');
               article_after[i+4].appendChild(after_agree);
           
               var after_content = document.createElement('p');
               after_content.setAttribute('class','after_content');
               article_after[i+4].appendChild(after_content);
           
               var after_date = document.createElement('p');
               after_date.setAttribute('class','after_date');
               article_after[i+4].appendChild(after_date);
   
               var article_agree = document.createElement('span');
               article_agree.setAttribute('class','article_agree iconfont');
               article_do[i+4].appendChild(article_agree);
               article_agree.innerHTML = '&#xe61d; 赞同';
           
               var article_disagree = document.createElement('span');
               article_disagree.setAttribute('class','article_disagree iconfont');
               article_do[i+4].appendChild(article_disagree);
               article_disagree.innerHTML = '&#xe640;';
           
               var article_comment = document.createElement('span');
               article_comment.setAttribute('class','article_comment iconfont');
               article_do[i+4].appendChild(article_comment);
               article_comment.innerHTML = '&#xe650;';
           
               var article_share = document.createElement('span');
               article_share.setAttribute('class','article_share iconfont');
               article_do[i+4].appendChild(article_share);
               article_share.innerHTML = '&#xe505; 分享';
           
               var article_collect = document.createElement('span');
               article_collect.setAttribute('class','article_collect iconfont');
               article_do[i+4].appendChild(article_collect);
               article_collect.innerHTML = '&#xe604; 收藏';
           
               var article_like = document.createElement('span');
               article_like.setAttribute('class','article_like iconfont');
               article_do[i+4].appendChild(article_like);
           
               var iconfont2 = document.createElement('span');
               iconfont2.setAttribute('class','iconfont');
               article_like.appendChild(iconfont2);
               iconfont2.innerHTML = '&#xe51a;';
               article_like.innerHTML = '喜欢';
           
           
               var article_more = document.createElement('span');
               article_more.setAttribute('class','article_more iconfont');
               article_do[i+4].appendChild(article_more);
   
            var arr = [];
            for(var item in articles){
                arr.push(articles[item]);
                
            }
   
            arr.forEach(function(element) {     
        
   
               
                    
                before_title.innerHTML = element[i].title;
                before_userid.innerHTML = element[i].nickname + ":";
   
                after_title.innerHTML = element[i].title;
                after_userid.innerHTML = element[i].nickname;
                after_img.src = element[i].avatar;
            
                after_introduce.innerHTML = element[i].introduction;
                after_agree.innerHTML = element[i].likeNum + "人赞同了该回答";
                after_date.innerHTML = element[i].issueTime;
                var array = [];
                for(var items in element[i].content){
                    array.push(element[i].content[items]);
            
                }
                before_content.innerHTML = '';
                for(var j = 0;j < 3;j++){
                    before_content.innerHTML += array[j];
                }
                before_content.innerHTML += "...";
                for(var j = 0;j < array.length;j++){
                     var temp = array[j] + "<br/><br/>";
                     after_content.innerHTML += temp;
                }
   
               
            
              });   
              
                   
                    
        }
        }
    }
    myAjax(setting);
   
   // before_btn.onclick = function(){
   // article_before.style.display = 'none';
   // }
   }
   // for(let i = 0;i < 4;i++){
   //     $(article_before[i]).on('click','.before_btn',function(){
   //     article_after[i].style.display = 'block';
   // })
   
   




var onload8to9 = function(){
    
    var setting = {
    
        dataType: "json",
        type:"get",
        url:"http://47.97.204.234:3000/article/getArticles",
        data:{
            "userId":"5e96e5986dc8847e998b85fb",
            "start":8,
            "stop":9
        },
        async:true,
       
        success:function(result,articles){
            for(var i = 0;i < 2;i++){
   
               var before_title = document.createElement('h3');
               before_title.setAttribute('class','before_title');
               article_before[i+8].appendChild(before_title);
           
           
               var before_userid = document.createElement('span');
               before_userid.setAttribute('class','before_userid');
               article_before[i+8].appendChild(before_userid);
           
               var before_content = document.createElement('span');
               before_content.setAttribute('class','before_content');
               article_before[i+8].appendChild(before_content);
           
               before_btn = document.createElement('span');
               before_btn.setAttribute('class','before_btn');
               article_before[i+8].appendChild(before_btn);
               before_btn.innerHTML = '阅读全文';
           
           
               // var iconfont1 = document.createElement('span');
               // before_btn.setAttribute('class','iconfont');
               // before_btn.appendChild(iconfont1);
               // iconfont1.innerHTML = '&#xe502;';
         
               var after_title = document.createElement('h3');
               after_title.setAttribute('class','after_title');
               article_after[i+8].appendChild(after_title);
           
               var after_img = document.createElement('img');
               after_img.setAttribute('class','after_img');
               article_after[i+8].appendChild(after_img);
           
               var after_userid = document.createElement('span');
               after_userid.setAttribute('class','after_userid');
               article_after[i+8].appendChild(after_userid);
           
               var after_introduce = document.createElement('span');
               before_content.setAttribute('class','after_introduce');
               article_after[i+8].appendChild(after_introduce);
           
               var after_agree = document.createElement('p');
               after_agree.setAttribute('class','after_agree');
               article_after[i+8].appendChild(after_agree);
           
               var after_content = document.createElement('p');
               after_content.setAttribute('class','after_content');
               article_after[i+8].appendChild(after_content);
           
               var after_date = document.createElement('p');
               after_date.setAttribute('class','after_date');
               article_after[i+8].appendChild(after_date);
   
               var article_agree = document.createElement('span');
               article_agree.setAttribute('class','article_agree iconfont');
               article_do[i+8].appendChild(article_agree);
               article_agree.innerHTML = '&#xe61d; 赞同';
           
               var article_disagree = document.createElement('span');
               article_disagree.setAttribute('class','article_disagree iconfont');
               article_do[i+8].appendChild(article_disagree);
               article_disagree.innerHTML = '&#xe640;';
           
               var article_comment = document.createElement('span');
               article_comment.setAttribute('class','article_comment iconfont');
               article_do[i+8].appendChild(article_comment);
               article_comment.innerHTML = '&#xe650;';
           
               var article_share = document.createElement('span');
               article_share.setAttribute('class','article_share iconfont');
               article_do[i+8].appendChild(article_share);
               article_share.innerHTML = '&#xe505; 分享';
           
               var article_collect = document.createElement('span');
               article_collect.setAttribute('class','article_collect iconfont');
               article_do[i+8].appendChild(article_collect);
               article_collect.innerHTML = '&#xe604; 收藏';
           
               var article_like = document.createElement('span');
               article_like.setAttribute('class','article_like iconfont');
               article_do[i+8].appendChild(article_like);
           
               var iconfont2 = document.createElement('span');
               iconfont2.setAttribute('class','iconfont');
               article_like.appendChild(iconfont2);
               iconfont2.innerHTML = '&#xe51a;';
               article_like.innerHTML = '喜欢';
           
           
               var article_more = document.createElement('span');
               article_more.setAttribute('class','article_more iconfont');
               article_do[i+8].appendChild(article_more);
      
   
            var arr = [];
            for(var item in articles){
                arr.push(articles[item]);
                
            }
   
            arr.forEach(function(element) {     

               
                    
                before_title.innerHTML = element[i].title;
                before_userid.innerHTML = element[i].nickname + ":";
   
                after_title.innerHTML = element[i].title;
                after_userid.innerHTML = element[i].nickname;
                after_img.src = element[i].avatar;
            
                after_introduce.innerHTML = element[i].introduction;
                after_agree.innerHTML = element[i].likeNum + "人赞同了该回答";
                after_date.innerHTML = element[i].issueTime;
                var array = [];
                for(var items in element[i].content){
                    array.push(element[i].content[items]);
            
                }
                before_content.innerHTML = '';
                for(var j = 0;j < 3;j++){
                    before_content.innerHTML += array[j];
                }
                before_content.innerHTML += "...";
                for(var j = 0;j < array.length;j++){
                     var temp = array[j] + "<br/><br/>";
                     after_content.innerHTML += temp;
                }
   
               
            
              });   
              
                   
                    
        }
        }
    }
    myAjax(setting);
   
   // before_btn.onclick = function(){
   // article_before.style.display = 'none';
   // }
   }
   // for(let i = 0;i < 4;i++){
   //     $(article_before[i]).on('click','.before_btn',function(){
   //     article_after[i].style.display = 'block';
   // })
   
   


var onload10to14 = function(){
    
    var setting = {
    
        dataType: "json",
        type:"get",
        url:"http://47.97.204.234:3000/article/getArticles",
        data:{
            "userId":"5e96e5986dc8847e998b85fb",
            "start":10,
            "stop":14
        },
        async:true,
       
        success:function(result,articles){
            for(var i = 0;i < 4;i++){
   
               var before_title = document.createElement('h3');
               before_title.setAttribute('class','before_title');
               article_before[i+10].appendChild(before_title);
           
           
               var before_userid = document.createElement('span');
               before_userid.setAttribute('class','before_userid');
               article_before[i+10].appendChild(before_userid);
           
               var before_content = document.createElement('span');
               before_content.setAttribute('class','before_content');
               article_before[i+10].appendChild(before_content);
           
               before_btn = document.createElement('span');
               before_btn.setAttribute('class','before_btn');
               article_before[i+10].appendChild(before_btn);
               before_btn.innerHTML = '阅读全文';
           
           
               // var iconfont1 = document.createElement('span');
               // before_btn.setAttribute('class','iconfont');
               // before_btn.appendChild(iconfont1);
               // iconfont1.innerHTML = '&#xe502;';
         
               var after_title = document.createElement('h3');
               after_title.setAttribute('class','after_title');
               article_after[i+10].appendChild(after_title);
           
               var after_img = document.createElement('img');
               after_img.setAttribute('class','after_img');
               article_after[i+10].appendChild(after_img);
           
               var after_userid = document.createElement('span');
               after_userid.setAttribute('class','after_userid');
               article_after[i+10].appendChild(after_userid);
           
               var after_introduce = document.createElement('span');
               before_content.setAttribute('class','after_introduce');
               article_after[i+10].appendChild(after_introduce);
           
               var after_agree = document.createElement('p');
               after_agree.setAttribute('class','after_agree');
               article_after[i+10].appendChild(after_agree);
           
               var after_content = document.createElement('p');
               after_content.setAttribute('class','after_content');
               article_after[i+10].appendChild(after_content);
           
               var after_date = document.createElement('p');
               after_date.setAttribute('class','after_date');
               article_after[i+10].appendChild(after_date);
   
               var article_agree = document.createElement('span');
               article_agree.setAttribute('class','article_agree iconfont');
               article_do[i+10].appendChild(article_agree);
               article_agree.innerHTML = '&#xe61d; 赞同';
           
               var article_disagree = document.createElement('span');
               article_disagree.setAttribute('class','article_disagree iconfont');
               article_do[i+10].appendChild(article_disagree);
               article_disagree.innerHTML = '&#xe640;';
           
               var article_comment = document.createElement('span');
               article_comment.setAttribute('class','article_comment iconfont');
               article_do[i+10].appendChild(article_comment);
               article_comment.innerHTML = '&#xe650;';
           
               var article_share = document.createElement('span');
               article_share.setAttribute('class','article_share iconfont');
               article_do[i+10].appendChild(article_share);
               article_share.innerHTML = '&#xe505; 分享';
           
               var article_collect = document.createElement('span');
               article_collect.setAttribute('class','article_collect iconfont');
               article_do[i+10].appendChild(article_collect);
               article_collect.innerHTML = '&#xe604; 收藏';
           
               var article_like = document.createElement('span');
               article_like.setAttribute('class','article_like iconfont');
               article_do[i+10].appendChild(article_like);
           
               var iconfont2 = document.createElement('span');
               iconfont2.setAttribute('class','iconfont');
               article_like.appendChild(iconfont2);
               iconfont2.innerHTML = '&#xe51a;';
               article_like.innerHTML = '喜欢';
           
           
               var article_more = document.createElement('span');
               article_more.setAttribute('class','article_more iconfont');
               article_do[i+10].appendChild(article_more);
   
            var arr = [];
            for(var item in articles){
                arr.push(articles[item]);
                
            }
   
            arr.forEach(function(element) {     
              
   
               
                    
                before_title.innerHTML = element[i].title;
                before_userid.innerHTML = element[i].nickname + ":";
   
                after_title.innerHTML = element[i].title;
                after_userid.innerHTML = element[i].nickname;
                after_img.src = element[i].avatar;
            
                after_introduce.innerHTML = element[i].introduction;
                after_agree.innerHTML = element[i].likeNum + "人赞同了该回答";
                after_date.innerHTML = element[i].issueTime;
                var array = [];
                for(var items in element[i].content){
                    array.push(element[i].content[items]);
            
                }
                before_content.innerHTML = '';
                for(var j = 0;j < 3;j++){
                    before_content.innerHTML += array[j];
                }
                before_content.innerHTML += "...";
                for(var j = 0;j < array.length;j++){
                     var temp = array[j] + "<br/><br/>";
                     after_content.innerHTML += temp;
                }
   
               
            
              });   
              
                   
                    
        }
        }
    }
    myAjax(setting);
   
   // before_btn.onclick = function(){
   // article_before.style.display = 'none';
   // }
   }
   // for(let i = 0;i < 4;i++){
   //     $(article_before[i]).on('click','.before_btn',function(){
   //     article_after[i].style.display = 'block';
   // })
   
   

var onload14to18 = function(){
    
    var setting = {
    
        dataType: "json",
        type:"get",
        url:"http://47.97.204.234:3000/article/getArticles",
        data:{
            "userId":"5e96e5986dc8847e998b85fb",
            "start":14,
            "stop":18
        },
        async:true,
       
        success:function(result,articles){
            for(var i = 0;i < 4;i++){
   
               var before_title = document.createElement('h3');
               before_title.setAttribute('class','before_title');
               article_before[i+14].appendChild(before_title);
           
           
               var before_userid = document.createElement('span');
               before_userid.setAttribute('class','before_userid');
               article_before[i+14].appendChild(before_userid);
           
               var before_content = document.createElement('span');
               before_content.setAttribute('class','before_content');
               article_before[i+14].appendChild(before_content);
           
               before_btn = document.createElement('span');
               before_btn.setAttribute('class','before_btn');
               article_before[i+14].appendChild(before_btn);
               before_btn.innerHTML = '阅读全文';
           
           
               // var iconfont1 = document.createElement('span');
               // before_btn.setAttribute('class','iconfont');
               // before_btn.appendChild(iconfont1);
               // iconfont1.innerHTML = '&#xe502;';
         
               var after_title = document.createElement('h3');
               after_title.setAttribute('class','after_title');
               article_after[i+14].appendChild(after_title);
           
               var after_img = document.createElement('img');
               after_img.setAttribute('class','after_img');
               article_after[i+14].appendChild(after_img);
           
               var after_userid = document.createElement('span');
               after_userid.setAttribute('class','after_userid');
               article_after[i+14].appendChild(after_userid);
           
               var after_introduce = document.createElement('span');
               before_content.setAttribute('class','after_introduce');
               article_after[i+14].appendChild(after_introduce);
           
               var after_agree = document.createElement('p');
               after_agree.setAttribute('class','after_agree');
               article_after[i+14].appendChild(after_agree);
           
               var after_content = document.createElement('p');
               after_content.setAttribute('class','after_content');
               article_after[i+14].appendChild(after_content);
           
               var after_date = document.createElement('p');
               after_date.setAttribute('class','after_date');
               article_after[i+14].appendChild(after_date);
   
               var article_agree = document.createElement('span');
               article_agree.setAttribute('class','article_agree iconfont');
               article_do[i+14].appendChild(article_agree);
               article_agree.innerHTML = '&#xe61d; 赞同';
           
               var article_disagree = document.createElement('span');
               article_disagree.setAttribute('class','article_disagree iconfont');
               article_do[i+14].appendChild(article_disagree);
               article_disagree.innerHTML = '&#xe640;';
           
               var article_comment = document.createElement('span');
               article_comment.setAttribute('class','article_comment iconfont');
               article_do[i+14].appendChild(article_comment);
               article_comment.innerHTML = '&#xe650;';
           
               var article_share = document.createElement('span');
               article_share.setAttribute('class','article_share iconfont');
               article_do[i+14].appendChild(article_share);
               article_share.innerHTML = '&#xe505; 分享';
           
               var article_collect = document.createElement('span');
               article_collect.setAttribute('class','article_collect iconfont');
               article_do[i+14].appendChild(article_collect);
               article_collect.innerHTML = '&#xe604; 收藏';
           
               var article_like = document.createElement('span');
               article_like.setAttribute('class','article_like iconfont');
               article_do[i+14].appendChild(article_like);
           
               var iconfont2 = document.createElement('span');
               iconfont2.setAttribute('class','iconfont');
               article_like.appendChild(iconfont2);
               iconfont2.innerHTML = '&#xe51a;';
               article_like.innerHTML = '喜欢';
           
           
               var article_more = document.createElement('span');
               article_more.setAttribute('class','article_more iconfont');
               article_do[i+14].appendChild(article_more);
   
            var arr = [];
            for(var item in articles){
                arr.push(articles[item]);
                
            }
   
            arr.forEach(function(element) {     
          
   
               
                    
                before_title.innerHTML = element[i].title;
                before_userid.innerHTML = element[i].nickname + ":";
   
                after_title.innerHTML = element[i].title;
                after_userid.innerHTML = element[i].nickname;
                after_img.src = element[i].avatar;
            
                after_introduce.innerHTML = element[i].introduction;
                after_agree.innerHTML = element[i].likeNum + "人赞同了该回答";
                after_date.innerHTML = element[i].issueTime;
                var array = [];
                for(var items in element[i].content){
                    array.push(element[i].content[items]);
            
                }
                before_content.innerHTML = '';
                for(var j = 0;j < 3;j++){
                    before_content.innerHTML += array[j];
                }
                before_content.innerHTML += "...";
                for(var j = 0;j < array.length;j++){
                     var temp = array[j] + "<br/><br/>";
                     after_content.innerHTML += temp;
                }
   
               
            
              });   
              
                   
                    
        }
        }
    }
    myAjax(setting);
   }
   
   

