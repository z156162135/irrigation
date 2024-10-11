
option = {
    title: {
        left: 'left',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: [],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'china',
        zoom: 1.25,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: 'rgba(8, 78, 94, 0.8)',
                borderColor: '#fff'
            },
            emphasis: {
                areaColor: '#0b1c2d'
            }
        }
    },
    series: [],
};
var myecharts = echarts.init(document.querySelector('.ditu'))
myecharts.setOption(option)