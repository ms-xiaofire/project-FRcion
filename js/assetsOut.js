//资产划转弹窗
$('#assetsOut').click(function () {
    $('#profit-dim').addClass('dim');
    $('#assets-dim').addClass('dim');
    $('.assetsOut_set').show();
    $('#outNum').val('');
});
$('.assetsOut_close').click(function () {
    $('#profit-dim').removeClass('dim');
    $('#assets-dim').removeClass('dim');
    $('.assetsOut_set').hide();
});
//资金划转方向切换
$('#assetsTo').click(function () {
    var from_left = $('#from_left').text();
    var to_right = $('#to_right').text();
    $('#from_left').text(to_right);
    $('#to_right').text(from_left);
});
//资金划转，确认划转
var form, to, outNum;
$('#assetsOut_btn').click(function () {
    form = $('#from_left').text();
    if(form === '账户资产') {
        // console.log('从账户资产到超级分红资产');
    }else {
        // console.log('从超级分红资产到账户资产');
    }
    to = $('#to_right').text();
    outNum = $('#outNum').val();
    if(outNum > 0) {
        $('#formAccount').text(form);
        $('#toAccount').text(to);
        $('#confirmNum').text(outNum);
        $('#charge').text((outNum*0.1).toFixed(2));
        $('.assetsOut').hide();
        $('.assetsConfirm').show();
    }else {
        layer.msg('请输入需要划转的数量')
    }
});
$('.assetsConfirm_close').click(function () {
    $('#profit-dim').removeClass('dim');
    $('#assets-dim').removeClass('dim');
    $('.assetsConfirm').hide();
});
$('.assetsConfirm_sure').click(function () {
    console.log('确定划转');
});
//绑定钱包地址
function bindAddress(obj) {
    var text = $(obj).text();
    if(text === '已绑定') {
        layer.msg('已绑定地址')
    }else {
        $('#profit-dim').addClass('dim');
        $('#assets-dim').addClass('dim');
        $('.bindAddress').show();
        $('#outNum').val('');
    }
}
$('.bindAddress_close').click(function () {
    $('#profit-dim').removeClass('dim');
    $('#assets-dim').removeClass('dim');
    $('.bindAddress').hide();
});
//确定绑定地址
$('#bindAddress_btn').click(function () {
    var address = $('#bindAddress').val();
    if(address === '') {
        layer.msg('请填写要绑定的地址');
    }else {
        layer.msg('绑定成功！');
        $('#profit-dim').removeClass('dim');
        $('#assets-dim').removeClass('dim');
        $('.bindAddress').hide();
        $('#bindAddress').val('');
    }
});