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
});