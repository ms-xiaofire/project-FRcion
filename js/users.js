$(document).ready(function () {
    //修改密码
    $('.pwd-left').click(function () {
        $('.pwd-left').addClass('pwd-button');
        $('.pwd-right').removeClass('pwd-button');
        $('.pwd-login').removeClass('pwd-none');
        $('.pwd-deal').addClass('pwd-none');
    })
    $('.pwd-right').click(function () {
        $('.pwd-left').removeClass('pwd-button');
        $('.pwd-right').addClass('pwd-button');
        $('.pwd-login').addClass('pwd-none');
        $('.pwd-deal').removeClass('pwd-none');
    })
    // 修改密码 end
});