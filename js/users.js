$(document).ready(function () {
    //实例化layui
    layui.use(['layer', 'form'], function(){
        var layer = layui.layer,form = layui.form;
    });
    //修改密码
    $('.pwd-left').click(function () {
        $('.pwd-left').addClass('pwd-button');
        $('.pwd-right').removeClass('pwd-button');
        $('.pwd-login').removeClass('pwd-none');
        $('.pwd-deal').addClass('pwd-none');
    });
    $('.pwd-right').click(function () {
        $('.pwd-left').removeClass('pwd-button');
        $('.pwd-right').addClass('pwd-button');
        $('.pwd-login').addClass('pwd-none');
        $('.pwd-deal').removeClass('pwd-none');
    });
    $('#loginPwd').click(function () {
        let oldLoginPwd = $('#oldLoginPwd').val();
        let newLoginPwd = $('#newLoginPwd').val();
        let againNLP = $('#againNLP').val();
        if(oldLoginPwd === '' || oldLoginPwd.length < 6) {
            layer.msg('请正确填写原始登录密码');
        }else {
            if(newLoginPwd === '' || newLoginPwd.length < 6) {
                layer.msg('请正确填写新登录密码');
            }else {
                if(againNLP !== newLoginPwd) {
                    layer.msg('新登录密码两次输入不一致');
                } else {
                    layer.msg('修改成功');
                    $('#oldLoginPwd').val('');
                    $('#newLoginPwd').val('');
                    $('#againNLP').val('');
                }
            }
        }
    });
    $('#buyPwd').click(function () {
        let oldBuyPwd = $('#oldBuyPwd').val();
        let newBuyPwd = $('#newBuyPwd').val();
        let againNBP = $('#againNBP').val();
        if(oldBuyPwd === '' || oldBuyPwd.length < 6) {
            layer.msg('请正确填写原始交易密码');
        }else {
            if(newBuyPwd === '' || newBuyPwd.length < 6) {
                layer.msg('请正确填写新交易密码');
            }else {
                if(againNBP !== newBuyPwd) {
                    layer.msg('新交易密码两次输入不一致');
                } else {
                    layer.msg('修改成功');
                    $('#oldBuyPwd').val('');
                    $('#newBuyPwd').val('');
                    $('#againNBP').val('');
                }
            }
        }
    });
    $('#oldLoginPwd').blur(function () {
        let oldLoginPwd = $('#oldLoginPwd').val();
        let newLoginPwd = $('#newLoginPwd').val();
        if(oldLoginPwd !== '' && oldLoginPwd === newLoginPwd) {
            layer.msg('新登录密码与旧密码不能相同');
        }
    });
    $('#newLoginPwd').blur(function () {
        let oldLoginPwd = $('#oldLoginPwd').val();
        let newLoginPwd = $('#newLoginPwd').val();
        if(oldLoginPwd !== '' && oldLoginPwd === newLoginPwd) {
            layer.msg('新登录密码与旧密码不能相同');
        }
    });
    $('#oldBuyPwd').blur(function () {
        let oldBuyPwd = $('#oldBuyPwd').val();
        let newBuyPwd = $('#newBuyPwd').val();
        if(oldBuyPwd !== '' && oldBuyPwd === newBuyPwd) {
            layer.msg('新交易密码与旧密码不能相同');
        }
    });
    $('#newBuyPwd').blur(function () {
        let oldBuyPwd = $('#oldBuyPwd').val();
        let newBuyPwd = $('#newBuyPwd').val();
        if(oldBuyPwd !== '' && oldBuyPwd === newBuyPwd) {
            layer.msg('新交易密码与旧密码不能相同');
        }
    });
    // 修改密码 end
    // 个人信息
    $('#nickname').click(function () {
        $('.nickname').hide();
        $('.nickname-input').show();
        $('#submit').show();
    });
    $('#place').click(function () {
        $('.place').hide();
        $('.place-select').show();
        $('#submit').show();
    });
    $('#submit').click(function () {
        let nicknames = $('#nicknames').val();
        if(nicknames === '' || nicknames.length < 2) {
            layer.msg('请填写正确的昵称');
        }else {
            layer.msg('修改成功');
            $('#nicknames').val('');
            $('.nickname').show();
            $('.nickname-input').hide();
            $('.place').show();
            $('.place-select').hide();
            $('#submit').hide();
        }
    });
    // 个人信息 end
    //充币
    $('#recharge').click(function () {
        let rechargeNum = $('#rechargeNum').val();
        let rechargePwd = $('#rechargePwd').val();
        if(rechargeNum === '') {
            layer.msg('请填充值数量');
        }else {
            if(rechargePwd === '' || rechargePwd.length < 6) {
                layer.msg('请正确输入交易密码');
            }else {
                layer.msg('充值成功');
                $('#rechargeNum').val('');
                $('#rechargePwd').val('');
            }
        }
    });
    //充币 end
    //提币
    $('#addIcon').click(function () {
        $('.fetch-dim').addClass('dim');
        $('.fetchAddress').show();
    });
    $('.shuts').click(function () {
        $('.fetch-dim').removeClass('dim');
        $('.fetchAddress').hide();
    });
    $('#fetch').click(function () {
        let coinNum = $('#coinNum').val();
        let coinPwd = $('#coinPwd').val();
        if(coinNum === '') {
            layer.msg('请填写提币数量');
        }else {
            if(coinPwd === '' || coinPwd.length < 6) {
                layer.msg('请正确输入交易密码');
            }else {
                layer.msg('提币成功');
                $('#coinNum').val('');
                $('#coinPwd').val('');
            }
        }
    });
    $('#addAddress').click(function () {
        let addressLabel = $('#addressLabel').val();
        let fetchAddress = $('#fetchAddress').val();
        if(addressLabel === '') {
            layer.msg('请填写地址标签');
        }else {
            if(fetchAddress === '') {
                layer.msg('请填写币提现地址');
            }else {
                layer.msg('新增成功');
                $('#addressLabel').val('');
                $('#fetchAddress').val('');
                $('.fetch-dim').removeClass('dim');
                $('.fetchAddress').hide();
            }
        }
    });
    //提币 end
    //用户中心
    $('.phone').click(function () {
        $('.user-dim').addClass('dim');
        $('#phone').show();
    });
    $('.wallet').click(function () {
        $('.user-dim').addClass('dim');
        $('#wallet').show();
    });
    $('.cancel').click(function () {
        $('.user-dim').removeClass('dim');
        $('#phone').hide();
        $('#wallet').hide();
    });
    $('#surePhone').click(function () {
        let bindingPhone = $('#bindingPhone').val();
        if(bindingPhone === '' || bindingPhone.length < 11) {
            layer.msg('请填写正确的手机号码');
        }else {
            layer.msg('绑定成功');
            $('#bindingPhone').val('');
            $('.user-dim').removeClass('dim');
            $('#phone').hide();
        }
    });
    $('#sureAddress').click(function () {
        let walletAddress = $('#walletAddress').val();
        if(walletAddress === '') {
            layer.msg('请填写钱包地址');
        }else {
            layer.msg('绑定成功');
            $('#walletAddress').val('');
            $('.user-dim').removeClass('dim');
            $('#wallet').hide();
        }
    });
    // 用户中心 end
    // 邀请好友
    $('.invite').click(function () {
        $('.poster-dim').addClass('dim');
        $('.poster').show();
    });
    $('.poster-close').click(function () {
        $('.poster-dim').removeClass('dim');
        $('.poster').hide();
    })
    // 邀请好友 end
});