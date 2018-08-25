//实例化layui
layui.use(['layer', 'form'], function(){
    var layer = layui.layer,form = layui.form;
});
$('#login').on('click', function(){
    let phone = $('#phone').val();
    let pwd = $('#pwd').val();
    if(phone === '' || phone.length !== 11) {
        layer.msg('请填写正确的手机号');
    } else {
        if(pwd === '' || pwd.length < 6) {
            layer.msg('请填写正确的密码');
        } else {
            location.href = 'home.html';
        }
    }
});