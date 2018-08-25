$(document).ready(function () {
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
    //实例化layui
    layui.use(['layer', 'form'], function(){
        var layer = layui.layer,form = layui.form;
    });
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
    })
});