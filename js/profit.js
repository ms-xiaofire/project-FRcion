$(document).ready(function () {
    //实例化layui
    layui.use(['layer', 'form'], function(){
        var layer = layui.layer,form = layui.form;
    });

    //距离某日的倒计时
    var endTime=new Date('2018-09-20');

    // 距离今晚24:0:0的倒计时
    var endYear=new Date().getFullYear();
    var endMonth=new Date().getMonth()+1;
    var endDay=new Date().getDate();
    var endTime2=new Date(endYear,endMonth,endDay);

    var leftDiv=function(){
        var leftTime=endTime-(new Date().getTime());
        var leftDay=addNumber(Math.floor(leftTime/1000/60/60/24));
        var leftHours=addNumber(Math.floor(leftTime/1000/60/60%24));
        var leftMinutes=addNumber(Math.floor(leftTime/1000/60%60));
        var leftSeconds=addNumber(Math.floor(leftTime/1000%60));
        if(leftTime < 0) {
            leftDay = 0;
            leftHours = 0;
            leftMinutes = 0;
            leftSeconds = 0;
        }
        document.getElementById("divTime").innerText="倒计时："+leftDay+'天'+leftHours+"时"+leftMinutes+"分"+leftSeconds+"秒";
        if(leftTime>0){
            setTimeout(function(){
                leftDiv();
            },1000);
        }else{
            clearTimeout(leftDiv());
        }
    };
    leftDiv();

    function addNumber(num){
        var num=(num>9)?num:('0'+num);
        return num;
    }
    //参加超级分红弹窗
    $('#join').click(function () {
        $('#profit-dim').addClass('dim');
        $('.superProfit').show();
    });
    $('.cancel').click(function () {
        $('#profit-dim').removeClass('dim');
        $('.superProfit').hide();
    });
    $('#participate').click(function () {
        let dealPwd = $('#dealPwd').val();
        if(dealPwd === '' || dealPwd.length < 6) {
            layer.msg('请输入正确的密码')
        }else {
            console.log('参加超级分红');
            $('#dealPwd').val('');
            $('#profit-dim').removeClass('dim');
            $('.superProfit').hide();
        }
    });
    //超级分红介绍弹窗
    $('#profitIntro').click(function () {
        $('#profit-dim').addClass('dim');
        $('.profit-intro').show();
    });
    $('.intro-btn').click(function () {
        $('#profit-dim').removeClass('dim');
        $('.profit-intro').hide();
    });
});