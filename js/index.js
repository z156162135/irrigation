window.onresize = reset;
function reset() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 1920 * 16 + 'px';
    myecharts.resize();
    yshzecharts.resize();
    zzxxecharts.resize();
}
setTimeout(() => {
    reset();
}, 1)
setInterval(() => {
    let date = new Date();
    let objs = {
        0: '日',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六'
    }
    let str = `${date.getFullYear()}-${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)}-${date.getDate() > 9 ? date.getDate() : '0' + date.getDate()} 星期${objs[date.getDay()]} ${date.getHours() > 9 ? date.getHours() : '0' + (date.getHours() + 1)}:${date.getMinutes() + 1 > 9 ? date.getMinutes() + 1 : '0' + (date.getMinutes() + 1)}:${date.getSeconds() + 1 > 9 ? date.getSeconds() : '0' + (date.getSeconds())}`
    document.querySelector('#times').innerText = str
}, 1000)
document.querySelector('.d2').onclick = function () {
    alert('设置')
}
document.querySelector('.d3').onclick = function () {
    alert('全屏')
}
let pos = 0;
let fligsaf = true;
function ydFun() {
    if (fligsaf) {
        pos = pos - 0.08
        if (pos < -70) {
            fligsaf = !fligsaf
        }
    } else {
        pos = pos + 0.08
        if (pos > 0) {
            fligsaf = !fligsaf
        }
    }
    document.querySelector('.jiankong').style.transform = `translateX(${pos}%)`;
}
let yiDong = setInterval(ydFun, 10)
document.querySelector('.jkboss').onmouseenter = function () {
    clearInterval(yiDong)
}
document.querySelector('.jkboss').onmouseleave = function () {
    yiDong = setInterval(ydFun, 10)
}
document.querySelectorAll('.jkleft,.jkright').forEach(el => {
    el.onmousedown = function () {
        var clickYiDong;
        if (this.classList[0] == 'jkleft') {
            clickYiDong = setInterval(() => {
                pos = pos + 0.1
                document.querySelector('.jiankong').style.transform = `translateX(${pos}%)`;
                if(pos > 0){
                    clearInterval(clickYiDong)
                }
            }, 10);
        }else{
            clickYiDong = setInterval(() => {
                pos = pos - 0.1
                document.querySelector('.jiankong').style.transform = `translateX(${pos}%)`;
                if(pos < -70){
                    clearInterval(clickYiDong)
                }
            }, 10);
        }
       this.onmouseup = function(){
            clearInterval(clickYiDong)
        }
    }
})