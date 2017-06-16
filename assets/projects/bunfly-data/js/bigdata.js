// 饼状图的配置
var myChart = echarts.init(document.getElementById('main'));
var option = {

	tooltip: {},
	xAxis: {
		splitLine: { show: false },
		axisLabel: {

			textStyle: {
				color: '#fff'
			}
		},
		data: ["4-5K", "5-8k", "8-10k", "10-12k", "12-15k", "15-20k", "20+"]
	},
	yAxis: {
		axisLabel: {

			textStyle: {
				color: 'rgb(25, 27, 38)'

			}
		},
		type: 'value',
		data: ["8%", "9%", "19%"],
		min: 0,
		axisLine: false,

		scale: true,

	},
	series: [{
		type: 'bar',
		data: [5, 20, 25, 10, 20, 15, 10]
	}]
};
myChart.setOption(option);
var myChart1 = echarts.init(document.getElementById('pie'));
var myChart2 = echarts.init(document.getElementById('pie2'));

// 指定图表的配置项和数据
option = {

	series: [{
		type: 'pie',
		radius: '80%',
		center: ['50%', '50%'],
		data: [
			{ value: 45, name: '4.5%' },
			{ value: 42, name: '4.2%' },
			{ value: 41, name: '4.1%' },
			{ value: 38, name: '3.8%' },
			{ value: 130, name: '13%' },
			{ value: 700, name: '70%' }
		],
		itemStyle: {
			emphasis: {
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowColor: 'rgba(0,0,0,0.5)'
			},
			normal: {
				label: {
					show: true,
					position: 'outside',
					textStyle: {
						color: '#800080'
					}
				},
				labelLine:{
					show: true,
					length:0,
					length2:0,
					smooth:true
				}
			}
		}
	}],
	color: ['rgba(57,222,88,0.6)', 'rgba(57,222,88,0.4)', 'rgba(57,222,88,0.2)', 'rgba(57,222,88,0.1)', 'rgba(57,222,88,0.8)', 'rgb(57,222,88)']
};

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option);
myChart2.setOption(option);
$(function() {
	$(".bgw24").addClass("animated bounceInDown");
	$(".inter").addClass("animated rubberBand");
	$(".fontsize p:first").addClass("animated bounceInLeft");
	$(".fontsize p:nth-child(2)").addClass("animated bounceInRight");
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		$('.pol-con').addClass('animated  pulse  infinite');
		if(top>0&top<400) {
		$(".bgw24").addClass("animated bounceInDown");			
	}else if(top>400&top<650){
		$(".inter").addClass("animated rubberBand");
		$(".fontsize p:first").addClass("animated bounceInLeft");
		$(".fontsize p:nth-child(2)").addClass("animated bounceInRight");
		$(".bgw24").removeClass("animated bounceInDown");
	}else if(top > 650&top<1050){
		$(".inter").removeClass("animated rubberBand");
		$(".fontsize p:first").removeClass("animated bounceInLeft");
		$(".fontsize p:nth-child(2)").removeClass("animated bounceInRight");
	};
	if(top>1000&top<2100){
			$('.job-tit h2').addClass('animated bounceIn');
			$('.job-tit p').addClass('animated bounceInLeft');
			$('.job-classify').addClass('animated bounceInRight');
			$('.job-change h2').addClass('animated bounceInLeft');
		}else{
			$('.job-tit h2').removeClass('animated bounceIn');
		};
		if(top>2100&top<2700){
				$('.kil').addClass('animated lightSpeedIn');
		}else{
			$('.kil').removeClass('animated lightSpeedIn');
		};
		if(top>2500&top<3300){
			$('.forte-tit').addClass('animated rotateIn');
		}else if(top>3300||top<2500){
			$('.forte-tit').removeClass('animated rotateIn');
		};
		if(top>2800){
			$('.forte-content div').addClass('animated fadeInUp');
		};
		if( top > 400 & top < 1000 ) {
			$(".ctr-cen.ctr-text h2").addClass("animated zoomIn");
		};
		if(top > 500 & top <1100) {
			$(".ctr-cen.ctr-text p").addClass("animated zoomIn");
		};
		if(top > 700 & top <1200 ){
			$(".ctr-left").addClass("animated fadeInLeft");
			$(".ctr-ch1").animate({'width':'45%'},1000);
			$(".ctr-ch2").animate({'width':'35%'},1000);
			$(".ctr-ch3").animate({'width':'14%'},1000);
			$(".ctr-ch4").animate({'width':'8%'},1000);
			$(".ctr-right").addClass("animated fadeInRight");
		};
		if(top >3100 & top < 3700){
			$(".ps-up h2").addClass("animated zoomIn");
		};
		if(top > 3200 & top <3800) {
			$(".ps-up p").addClass("animated zoomIn");
		};
		if(top > 3700 & top < 4300){
			$(".ps-left img").addClass("animated zoomIn");
			$(".ps-right img").addClass("animated zoomIn");
		};
		if(top > 4000 & top <4600) {
			$(".ps-p").addClass("animated flip");
		}

	
		
});
});