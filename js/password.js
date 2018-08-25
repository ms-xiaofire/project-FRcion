//实例化layui
layui.use(['layer', 'form'], function(){
    var layer = layui.layer,form = layui.form;
});
$('#password').on('click', function(){
    let phone = $('#phone').val();
    let newPwd = $('#newPwd').val();
    let againPwd = $('#againPwd').val();
    let verify = $('#verify').val();
    if(phone === '' || phone.length !== 11) {
        layer.msg('请填写正确的手机号');
    } else {
        if(newPwd === '' || newPwd.length < 6) {
            layer.msg('请填写正确的密码');
        } else {
            if(newPwd !== againPwd) {
                layer.msg('两次密码输入不一致');
            } else {
                if(verify === '') {
                    layer.msg('验证码不能为空');
                }else {
                    location.href = 'login.html';
                }
            }
        }
    }
});