var myChart = echarts.init(document.getElementById('pancake'));
var option = {
    title : {
        text: 'Web前端薪资趋势图(单位：千/月)',
        // subtext: '纯属虚构',
        x:'center',
        top:'470',
        textStyle: {
            color: '#ccc',
            fontWeight:'400',
            fontSize:'16'
         }
    },
    // tooltip : {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
    // },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '63%',
            center: ['50%', '60%'],
             label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 16
                    }
                }
            },
            data:[
                {value:450, name:'16.4%\n15~20k'},
                {value:240, name:'7.7%\n20~30k'},
                {value:150, name:'4%<2k'},
                {value:220, name:'7.4%\n4.5~6k'},
                {value:454, name:'16.5%\n6~8k'},
                {value:555, name:'19.1%\n8~10k'},
                {value:868, name:'28.9%\n10~15k'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }

        }
    ]
    ,color: ['rgb(255,180,27)','rgb(255,167,12)','rgb(255,141,27)','rgb(254,119,0)','rgb(255,96,5)','rgb(240,88,42)','rgb(229,77,38)']
};
 myChart.setOption(option);