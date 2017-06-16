/* 导航栏*/
$(function(){
    $('#dowebok').fullpage({
        // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','red'],       //背景颜色
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],      //相当于鼠标hover的左右移动效果
        menu: '#menu',                              //类似滚动监听
        navigation: 'false',                            //是否有小圆点
        navigationPosition: 'left',                     //小圆点的位置
        scrollBar: 'true',                             //滚动条
        navigationTooltips:['首页','技能','项目','联系','致谢'],       //鼠标移动到小圆点上显示的文字
        keyboardScrolling: 'false',                 //是否通过键盘控制section滚动
        resize: false
    });
});

/*点击菜单按钮*/
$(function(){
    $(".navbar-collapse ul li a").click(function(){
        $(".navbar-toggle:visible").click();
    });
});

/*项目tab切换卡*/
$(function(){
    var win=$(".win");
    var links=$(".title a");
    var float=$(".float");
    var divs=$(".box div");
    var num1=0;  //当前内容的下标
    var num2=0;
    win.hover(function(){
        $(".leftB,.rightB").css("display","block");
    },function(){
        $(".leftB,.rightB").css("display","none");
    });
    $(".leftB").click(function(){
        divs.finish();
        float.stop(true);
        var temp=num1;
        num1--;
        if(num1==-1){
            num1=4;
        }
        divs.eq(num1).css("left",700).animate({left:0});
        divs.eq(temp).animate({left:-700});
        links.css("color","#009797");
        float.animate({left:links.eq(num1).position().left})
        links.eq(num1).css("color","#fff");
    });
    $(".rightB").click(function(){
        divs.finish();
        float.stop(true);
        var temp=num1;
        num1++;
        if(num1==5){
            num1=0;
        }
        divs.eq(num1).css("left",-700).animate({left:0});
        divs.eq(temp).animate({left:700});
        links.css("color","#009797");
        float.animate({left:links.eq(num1).position().left})
        links.eq(num1).css("color","#fff");
    });
    links.hover(function(){
        //滑块操作
        divs.finish();
        float.stop(true);
        links.css("color","#009797");
        var that=$(this);
        var lefts=$(this).position().left;
        float.animate({left:lefts},function(){
            that.css("color","#fff");
        })
        //滑块操作
        //内容变化
        var index=$(this).index(".title a");
        num2=index;
        if(num1==num2){
            return;
        }else if(num1<num2){
            divs.eq(num2).css("left",700).animate({left:0});
            divs.eq(num1).animate({left:-700});
        }else if(num1>num2){
            divs.eq(num2).css("left",-700).animate({left:0});
            divs.eq(num1).animate({left:700});
        }
        num1=num2;
        num2="";
    },function(){
    })
})

/*项目*/
function getStyle(obj,sName){
//获取样式函数
    return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function move(obj,json,options){
//自定义move函数 类似jquery animation
    options = options||{};
    options.duration = options.duration||700;
    options.easing = options.easing||'ease-out';

    var start = {};
    var dis = {};
    for(var name in json){
        start[name] = parseFloat(getStyle(obj,name));
        dis[name] = json[name]-start[name];
    }
    var count = Math.floor(options.duration/30);
    var n = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        n++;
        for(var name in json){
            switch(options.easing){
                case 'linear':
                    var cur = start[name]+dis[name]*n/count;
                    break;
                case 'ease-in':
                    var a = n/count;
                    var cur = start[name]+dis[name]*Math.pow(a,3);
                    break;
                case 'ease-out':
                    var a = 1-n/count;
                    var cur = start[name]+dis[name]*(1-Math.pow(a,3));
                    break;
            }
            if(name=='opacity'){
                obj.style.opacity = cur;
                obj.style.filter = 'alpha(opacity:'+cur*100+')';
            }else{
                obj.style[name] = cur+'px';
            }
        }
        if(n==count){
            clearInterval(obj.timer);
            options.complete&&options.complete();
        }
    },30);
}
function a2d(n){
//弧度转换为角度
    return n*180/Math.PI;
}
function hoverDir(ev,obj){
//判断鼠标位于每个方形区域的角度（相对于方形中心）
    var a = ev.clientX-obj.offsetLeft-obj.offsetWidth/2;
    var b = obj.offsetTop+obj.offsetHeight/2-ev.clientY;

    return Math.round((a2d(Math.atan2(b,a))+180)/90)%4;
}
function through(obj){
//穿墙函数
    var oS = obj.children[0];
    obj.onmouseenter = function(ev){
        var oEvent = ev||event;
        var dir = hoverDir(oEvent,obj);
        switch(dir){
            case 0:
                //左
                oS.style.left = '-200px';
                oS.style.top = 0;
                break;
            case 1:
                //下
                oS.style.left = 0;
                oS.style.top = '200px';
                break;
            case 2:
                //右
                oS.style.left = '200px';
                oS.style.top = 0;
                break;
            case 3:
                //上
                oS.style.left = 0;
                oS.style.top = '-200px';
                break;
        }
        move(oS,{left:0,top:0});
    };
    obj.onmouseleave = function(ev){
        var oEvent = ev||event;
        var dir = hoverDir(oEvent,obj);
        switch(dir){
            case 0:
                move(oS,{left:-200,top:0});
                break;
            case 1:
                move(oS,{left:0,top:200});
                break;
            case 2:
                move(oS,{left:200,top:0});
                break;
            case 3:
                move(oS,{left:0,top:-200});
                break;
        }
    };
}
window.onload = function(){
    var aLi = document.getElementsByClassName('proli');
    for(var i=0;i<aLi.length;i++){
        through(aLi[i]);
    }
};

/*联系*/

/*正则表达式*/
function Name(){
    var db=document.getElementById("db").value;
    var reg=/^[a-zA-Z]\w{6,16}$/;
    if(reg.test(db)==false){
//					alert("请输入正确的账号");
        document.getElementById("dbname").innerHTML="以字母开头，长度在6-16之间，只能包含字符，数字和下划线。";
    }else{
        document.getElementById("dbname").innerHTML="输入正确";
    }
}