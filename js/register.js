$(document).ready(function () {
    $('#submit1').click(function () {
        $('#set1').css('display', 'none');
        $('#set2').css('display', 'block');
        $('.bg-white1').css('background-color', '#8e8e8e');
        $('.color-white1').css('color', '#8e8e8e');
        $('.bg-white2').css('background-color', '#fff');
        $('.color-white2').css('color', '#fff');
    });
    $('#submit2').click(function () {
        $('#set2').css('display', 'none');
        $('#set3').css('display', 'block');
        $('.bg-white2').css('background-color', '#8e8e8e');
        $('.color-white2').css('color', '#8e8e8e');
        $('.bg-white3').css('background-color', '#fff');
        $('.color-white3').css('color', '#fff');
    });
    $('#submit3').click(function () {
        $('#set3').css('display', 'none');
        $('#set4').css('display', 'block');
        $('.bg-white3').css('background-color', '#8e8e8e');
        $('.color-white3').css('color', '#8e8e8e');
        $('.bg-white4').css('background-color', '#fff');
        $('.color-white4').css('color', '#fff');
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
