$(document).ready(function () {
    //导航栏高亮
    $('#home').css({
        'color': '#fff',
        'background-color': '#013567'
    });
    $('#buy').css({
        'color': '#fff',
        'background-color': '#013567'
    });
    $('#profit').css({
        'color': '#fff',
        'background-color': '#013567'
    });
    $('#users').css({
        'color': '#fff',
        'background-color': '#013567'
    });
    $('#help').css({
        'color': '#fff',
        'background-color': '#013567'
    });
    $('#news').css({
        'color': '#fff',
        'background-color': '#013567'
    });
    $('#market').css({
        'color': '#fff',
        'background-color': '#013567'
    });
    //PC端选择语言
    $('#pc-language').click(function () {
        $('.tab-language').slideToggle();
    });
    //移动端选择语言
    $('#move-language').click(function () {
        $('.tab-language').slideToggle();
    });
    //语言选择框收起
    // $(document).click(function () {
    //     $('.tab-language').slideUp();
    // });
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
