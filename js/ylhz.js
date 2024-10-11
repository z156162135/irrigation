var colorArr = ['#0C628C', '#3887D5', '#2570BB'];
var color = {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [
        {
            offset: 0,
            color: colorArr[0]
        },
        {
            offset: 0.5,
            color: colorArr[0]
        },
        {
            offset: 0.5,
            color: colorArr[1]
        },
        {
            offset: 1,
            color: colorArr[1]
        }
    ]
};

const industryData = [22, 35, 30, 25];
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '0%',
        top: '10px',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['数据1', '数据2', '数据3'],
        axisLabel: {
            color: '#E6F7FF'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 2555, 0.1)'
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#E6F7FF'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            }
        }
    },
    series: [
        {
            itemStyle: {
                normal: {
                    // 这里是用一个柱子，从左到右的渐变。也可以用两个柱子做从上往下的渐变，和上面的透明渐变一样用法
                    color
                }
            },
            data: industryData,
            type: 'bar',
            barWidth: 18,
            z: 2,
            name: '产业结构'
        },
        {
            z: 1,
            name: '产业结构',
            // 柱子底部
            type: 'pictorialBar',
            data: industryData,
            symbol: 'diamond',
            symbolOffset: [0, 4],
            symbolSize: [0, 80],
            itemStyle: {
                normal: {
                    color: color
                }
            },
            tooltip: {
                show: false
            }
        },
        {
            z: 3,
            name: '产业结构',
            type: 'pictorialBar',
            // 柱子顶部
            symbolPosition: 'end',
            data: industryData,
            symbol: 'diamond',
            symbolOffset: [0, -11],
            symbolRotate: 90,
            symbolSize: [8, 19],
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    color: colorArr[2]
                }
            },
            tooltip: {
                show: false
            }
        }
    ]
};
var yshzecharts = echarts.init(document.querySelector('.yshz>.body'))
yshzecharts.setOption(option)