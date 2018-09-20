var pageLayout;

$(document).ready(function(){
    // create page layout
    pageLayout = $('body').layout({
        scrollToBookmarkOnLoad:        false // handled by custom code so can 'unhide' section first
        ,    defaults: {
            contentSelector:        ".content"    // inner div to auto-size so only it scrolls, not the entire pane!
        }
        ,    north: {
            size:                    80
            ,    spacing_open:            0
            ,    closable:                false
            ,    resizable:                false
        }
        ,    west: {
            size:                    280
            ,    spacing_closed:            10
            ,    togglerLength_closed:    140
            ,    togglerAlign_closed:    "center"
            //,    togglerContent_closed:    "设<br><br>置"
            ,    togglerTip_closed:        "Open & Pin Contents"
            ,    sliderTip:                "Slide Open Contents"
            ,    slideTrigger_open:        "mouseover"
        }
        ,
        south: {
            size:                    40
            ,    spacing_open:            0
            ,    closable:                false
            ,    resizable:                false
        }
    });

    innerLayout = $('#main-layout').layout({
        center__paneSelector:    ".inner-center"
        ,    west__paneSelector:        ".inner-west"
        ,    east__paneSelector:        ".inner-east"
        ,   south__paneSelector:    ".inner-south"
        ,    west__size:                200
        ,    east__size:                300
        ,   south__size:            75
        ,    spacing_open:            8  // ALL panes
        ,    spacing_closed:            8  // ALL panes
        ,    west__spacing_closed:    12
        ,    east__spacing_closed:    12

    });

    $("#topmenu li").mouseover(function(){
        //alert($(this).attr("class"));
        if($(this).attr("class")!="current")
        {
            if(!$(this).hasClass("hover"))
            {
                $(this).addClass("hover");
            }
        }
    });
    $("#topmenu li").mouseout(function(){
        if($(this).attr("class")!="current")
        {
            if($(this).hasClass("hover"))
            {
                $(this).removeClass("hover");
            }
        }
    });
});
