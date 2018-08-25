//实例化layui
layui.use(['layer', 'form'], function(){
    let layer = layui.layer,form = layui.form;
});
$('#next1').on('click', function(){
    let phone = $('#phone').val();
    let pwd = $('#pwd').val();
    let againPwd = $('#againPwd').val();
    let invite = $('#invite').val();
    let agree = $('#agree').is(':checked');
    if(phone === '' || phone.length !== 11) {
        layer.msg('请填写正确的手机号');
    } else {
        if(pwd === '' || pwd.length < 6) {
            layer.msg('请填写正确的密码');
        } else {
            if(pwd !== againPwd) {
                layer.msg('两次密码输入不一致');
            } else {
                if(agree === false) {
                    layer.msg('还未同意服务协议');
                }else {
                    location.href = 'register2.html';
                }
            }
        }
    }
});
$('#next2').on('click', function(){
    let buyPwd = $('#buyPwd').val();
    let againBuyPwd = $('#againBuyPwd').val();
    if(buyPwd === '' || buyPwd.length < 6) {
        layer.msg('请填写正确的交易密码');
    } else {
        if(buyPwd !== againBuyPwd) {
            layer.msg('两次密码输入不一致');
        } else {
            location.href = 'register3.html';
        }
    }
});
$('#next3').on('click', function(){
    let nickname = $('#nickname').val();
    let realName = $('#realName').val();
    let cardType = $('#cardType').val();
    let cardNum = $('#cardNum').val();
    let phoneNum = $('#phoneNum').val();
    let verification = $('#verification').val();
    if(nickname === '' || nickname.length < 2) {
        layer.msg('请填写正确的昵称');
    } else {
        if(realName === '') {
            layer.msg('请填写真实姓名');
        } else {
            if(cardType === '') {
                layer.msg('请确认证件类型');
            } else {
                if(cardNum === '') {
                    layer.msg('请填写证件号码');
                }else {
                    if(phoneNum === '' || phoneNum.length !== 11) {
                        layer.msg('请填写正确的手机号');
                    } else {
                        if(verification === '') {
                            layer.msg('请填写验证码');
                        } else {
                            location.href = 'register4.html';
                        }
                    }
                }
            }
        }
    }
});
$('#login').on('click', function () {
    location.href = '../login.html';
});