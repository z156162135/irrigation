
let option = {
    tooltip: {
        trigger: 'item'
    },
    color: ['rgba(47, 135, 152, 0.8)', 'rgba(12, 60, 94, 0.8)', 'rgba(146, 59, 61, 0.8)', 'rgba(155, 130, 57, 0.8)'],
    legend: {
        data: [
            'Direct',
            'Marketing',
            'Search Engine'
        ]
    },
    series: [
        {
            name: '种植信息',
            type: 'pie',
            selectedMode: 'single',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
                { value: 335, name: '大豆' },
                { value: 310, name: '水稻' },
                { value: 274, name: '玉米' },
                { value: 235, name: '小麦' }
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
                show: false
            }
        }
    ]
};
var zzxxecharts = echarts.init(document.querySelector('.zzxx>.body>.left'))
zzxxecharts.setOption(option)