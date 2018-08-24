$(document).ready(function () {
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
        $('.nickname').show();
        $('.nickname-input').hide();
        $('.place').show();
        $('.place-select').hide();
        $('#submit').hide();
    });
    // 个人信息 end
    //实名认证
    function uploadPic() {
        let form = document.getElementById('upload'),
            formData = new FormData(form);
        $.ajax({
            url:"https://sscpre.boe.com/v1/medical-console/medical/file/upload",
            type:"post",
            data:formData,
            processData:false,
            contentType:false,
            success:function(res){
                if(res){
                    alert("上传成功！");
                }
                console.log(res);
                $("#pic").val("");
                $(".showPic").attr("src",res);
            },
            error:function(err){
                alert("网络连接失败,稍后重试",err);
            }

        })

    }
    //实名认证 end
    //提币
    $('#addIcon').click(function () {
        $('.fetch-dim').addClass('dim');
        $('.fetchAddress').show();
    });
    $('.shuts').click(function () {
        $('.fetch-dim').removeClass('dim');
        $('.fetchAddress').hide();
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