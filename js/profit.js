$(document).ready(function () {
    //距离某日的倒计时
    // var endTime=new Date('2018-09-01');

    // 距离今晚24:0:0的倒计时
    var endYear=new Date().getFullYear();
    var endMonth=new Date().getMonth()+1;
    var endDay=new Date().getDate();
    var endTime2=new Date(endYear,endMonth,endDay);


    var leftDiv=function(){
        var leftTime=endTime2-(new Date().getTime());
        var leftHours=addNumber(Math.floor(leftTime/1000/60/60%24));
        var leftMinutes=addNumber(Math.floor(leftTime/1000/60%60));
        var leftSeconds=addNumber(Math.floor(leftTime/1000%60));
        document.getElementById("divTime").innerText="倒计时："+leftHours+"时"+leftMinutes+"分"+leftSeconds+"秒";
        if(leftTime>0){
            setTimeout(function(){
                leftDiv();
            },500);
        }else{
            clearTimeout(leftDiv())
        }

    }
    leftDiv();

    function addNumber(num){
        var num=(num>9)?num:('0'+num);
        return num;
    }

});