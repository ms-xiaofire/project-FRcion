//实例化layui
layui.use(['layer', 'form'], function(){
    var layer = layui.layer,form = layui.form;
});
//阻止事件冒泡  公用函数
function prevent(event) {
    let e = arguments.callee.caller.arguments[0] || event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
    if(e && e.stopPropagation) {
        // this code is for Mozilla and Opera
        e.stopPropagation();
    } else if(window.event) {
        // this code is for IE
        window.event.cancelBubble = true;
    }
}
//币种选择框收起
$(document).click(function () {
    $('.iconTab').slideUp();
});
//选择币种
$('#currency').click(function () {
    $('.iconTab').slideToggle();
    prevent(event);
});
$('.iconTab>li').click(function () {
    let language = $(this).html();
    $('#icon').html(language);
});
//输入单价显示可买数量
$('#buyPrice').keyup(function () {
    let usable = $('#usable').text();
    let unitPrice = $('#buyPrice').val();
    let priceNum = Number(usable/unitPrice).toFixed(2);
    $('#buyPriceNum').text(priceNum);
});
//输入单价显示可卖数量
$('#dealPrice').keyup(function () {
    let usable = $('#usable').text();
    let unitPrice = $('#dealPrice').val();
    let priceNum = Number(usable/unitPrice).toFixed(2);
    $('#dealPriceNum').text(priceNum);
});

//撤销框显示
$('#buy-button').click(function () {
    let buyPrice = $('#buyPrice').val();
    let buyNum = $('#buyNum').val();
    let buyPwd = $('#buyPwd').val();
    if(buyPrice === '') {
        layer.msg('请输入买入单价');
    }else {
        if(buyNum === '') {
            layer.msg('请输入买入数量');
        }else {
            if(buyPwd === '' || buyPwd.length < 6) {
                layer.msg('请输入正确的交易密码');
            } else {
                $('.dim').css('filter', 'blur(5px)');
                $('.repeal').show()
            }
        }
    }
});
$('#sale-button').click(function () {
    let dealPrice = $('#dealPrice').val();
    let dealNum = $('#dealNum').val();
    let dealPwd = $('#dealPwd').val();
    if(dealPrice === '') {
        layer.msg('请输入卖出单价');
    }else {
        if(dealNum === '') {
            layer.msg('请输入卖出数量');
        }else {
            if(dealPwd === '' || dealPwd.length < 6) {
                layer.msg('请输入正确的交易密码');
            } else {
                $('.dim').css('filter', 'blur(5px)');
                $('.repeal').show()
            }
        }
    }
});
//撤销框隐藏
$('.shut').click(function () {
    $('.dim').css('filter', 'blur(0)');
    $('.repeal').hide()
});
$('#selectDeal').click(function () {
    let s = $('#myEntrust').val();
});


//K线图
//获取产品名字
var lineTime = sessionStorage.getItem('lineTime');
$('#kline_container').on('click', 'div div div ul li a', function () {
    var time = $(this).text();
    if(time === '1分钟') {
        sessionStorage.setItem('lineTime', 'min,1');
        window.location.reload();
    }
    if(time === '5分钟') {
        sessionStorage.setItem('lineTime', 'min,5');
        window.location.reload();
    }
    if(time === '10分钟') {
        sessionStorage.setItem('lineTime', 'min,10');
        window.location.reload();
    }
    if(time === '15分钟') {
        sessionStorage.setItem('lineTime', 'min,15');
        window.location.reload();
    }
    if(time === '30分钟') {
        sessionStorage.setItem('lineTime', 'min,30');
        window.location.reload();
    }
    if(time === '1小时') {
        sessionStorage.setItem('lineTime', 'min,60');
        window.location.reload();
    }
    if(time === '2小时') {
        sessionStorage.setItem('lineTime', 'min,120');
        window.location.reload();
    }
    if(time === '日线') {
        sessionStorage.setItem('lineTime', 'day');
        window.location.reload();
    }
    if(time === '分时') {
        sessionStorage.setItem('lineTime', 'min,1');
        window.location.reload();
    }
});

// K线图
var box = $('#chart').css('width');
box = box.substring(0, box.length - 2);
var kLineW = box - 2;
var width = $(window).width();
$(window).resize(function () {
    window.location.reload();
});
var kline = new Kline({
    element: "#kline_container",
    width: kLineW,
    height: 400,
    theme: 'light', // light/dark
    language: 'zh-cn', // zh-cn/en-us/zh-tw
    ranges: ["1d", "2h", "1h", "30m", "15m", "10m", "5m", "1m", "line"],
    symbol: "coin5/coin4",
    symbolName: "COIN5_COIN4",
    type: "poll", // poll/socket
    url: "http://dt.jctytech.com/stock.php?u=jurunjob&type=kline&num=1000&symbol=NENGH0",
    limit: 1000,
    intervalTime: 5000,
    debug: false,
    showTrade: true,
});
kline.draw();
kline.toggleTrade();
//K线图风格


