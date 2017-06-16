//搜索框的函数
function search(di){
	var zt=document.getElementById(di).style.display;
		if(zt=="block"){
			document.getElementById(di).style.display="none";
			return false;
		}
	document.getElementById(di).style.display="block";
	document.getElementById("navsearch").placeholder="";
	document.getElementById(di).style.zIndex=1;
}

//搜索框的提示信息
function showsearch(){
	document.getElementById("navsearch").placeholder="search";
}

//图片轮播函数
function imgTurn(){
	var i=1;
	function imgTurn(){
	document.getElementById('img-turn').style.backgroundImage="url(./img/"+i+".png)";
//	document.getElementById('img-turn').src="./img/"+i+".png";
	i=i+1;
	if(i==5)
	i=1;
	}
	setInterval(imgTurn,3000);		
}

//获取日期的函数
	function date(){
	var dat=new Date();
	var month=dat.getMonth();
	//console.log(month);//注意，月份是从0月开始计算的
	month=month+1;
	var year=dat.getFullYear();
	var days=dat.getDay();//获取一周中的第几天
	var dates=dat.getDate();//返回一月中的第几天
	document.getElementById('data-header').innerHTML=year+"年"+month+"月";
}

//当文档加载完毕的时候，执行获取的日期函数，与图片轮播函数
window.onload=function(){date();imgTurn();};

//点击四个小图片，出现在大图部分的效果函数
function clickImg(di){
	document.getElementById('img-turn').style.backgroundImage="url(./img/"+di+".png)";;
	document.getElementById('img-turn').cssText="background-size:cover;";
	console.log(1);
}

//显示回到顶部图标函数
function backTop(){
	console.log(1);
	var scrolltop=document.body.scrollTop;
	console.log(scrolltop);
		if(scrolltop>=300){
			document.getElementById('backtop').style.display="block";
			document.getElementById('backtop').style.zIndex=4;
			
		}
		else{
				document.getElementById('backtop').style.display="none";
		}
}

//回到顶部按钮
function back(){
	//var height=document.body.scrollTop;
			document.body.scrollTop=0;			
	}

//第二种菜单栏展开样式
function show(){
	document.getElementById('nav-line').style.height='400px';
}
function backstyle(){
	document.getElementById('nav-line').style.height='240px';
}

//展开第二种导航菜单
function  shownav(){
	var k=document.getElementById('nav-line').style;
	if(k.display=="block"){
		k.display="none";
		return false;
	}
	else{
		k.display="block";
	}
}

