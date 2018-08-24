$(document).ready(function () {
    //导航栏高亮
    $('#nav-light').css({
        'color': '#fff',
        'background-color': '#013567'
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
    //语言选择框收起
    $(document).click(function () {
        $('.tab-language').slideUp();
    });
    //选择语言
    $('#pc-language').click(function () {
        $('.tab-language').slideToggle();
        prevent(event);
    });
    $('.tab-language>li').click(function () {
        let language = $(this).html();
        $('#pc-language').html(language);
        $('#move-language').html(language);
    });
    $('#move-language').click(function () {
        $('.tab-language').slideToggle();
        prevent(event);
    });
    //在线客服悬浮窗
    $('#online').click(function () {
        $('#service').css('display', 'block');
    });
    $('#close').click(function () {
        $('#service').css('display', 'none');
    });
    $('#closes').click(function () {
        $('#service').css('display', 'none');
    });
});
