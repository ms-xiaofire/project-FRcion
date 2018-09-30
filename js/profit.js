$(document).ready(function () {
    //实例化layui
    layui.use(['layer', 'form'], function(){
        var layer = layui.layer,form = layui.form;
    });

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