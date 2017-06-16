// 金字塔图
 var myChart = echarts.init(document.getElementById('gold'));

var option = {
    // title: {
    //     text: '漏斗图',
    //     subtext: '纯属虚构',
    //      top: 300,
    //     textStyle: {
    //         color: '#ccc'
    //     }
    // },
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b} : {c}%"
    // },
    // toolbox: {
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            // left: '10%',
            top: 50,
            //x2: 80,
            bottom: 60,
            width: '50%',
            // height: {totalHeight} - y - y2,
            min: 60,
            max: 0,
            minSize: '0%',
            maxSize: '140%',
            sort: 'descending',
            gap: 3,
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
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    // borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 60},
                {value: 40, name: '产业拓展更优化'},
                {value: 20, name: '生活服务是前景'},
            ]
        }
    ]
    ,color:['rgb(251,229,214)','rgb(152,192,229)','rgb(197,90,17)']
};

 myChart.setOption(option);