$(function () {
    $(".container").fullpage({
        //有滚动侧边导航栏
        navigation: true,
        //循环演示
        continuousVertical: true,
        //定义锚链接
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        //绑定菜单，设定的相关属性与anchors的值对应后，菜单可以控制滚动。
        menu: ".nav",
        //导航的tip
        navigationTooltips: ['首页', '关于我', '技能掌握', '我的作品', '工作规划', '联系我'],
        //字体随着窗口缩放而缩放。
        resize: true,
        //内容垂直居中，默认为true
        verticalCentered: false,
        controlArrowColor: ['#254875', '#254875','#254875','#00FF00', '#254587', '#695684'],

    });

//圆形进度指示器
//选中使用圆形指示器的div
    var html1 = $(".s4  #html");
    var css1 = $("#css");
    var js1 = $("#js");
    var jq1 = $("#jq");
    //调用基本的圆形指示器
    html1.radialIndicator({
        showPercentage: false,
        radius: 35,//半径
        barWidth: 10,//刻度条宽度
        fontFamily: "黑体",
        fontWeight: "normal",
        barBgColor: "white",
        barColor: "rgba(247,230,9,0.8)"
    });
    css1.radialIndicator({
        showPercentage: false,
        radius: 35,
        barWidth: 10,
        fontFamily: "黑体",
        fontWeight: "normal",
        barBgColor: "white",
        barColor: "rgba(247,230,9,0.8)"
    });
    js1.radialIndicator({
        showPercentage: false,
        radius: 35,
        barWidth: 10,
        fontFamily: "黑体",
        fontWeight: "normal",
        barBgColor: "white",
        barColor: "rgba(247,230,9,0.8)"
    });
    jq1.radialIndicator({
        showPercentage: false,
        radius: 35,
        barWidth: 10,
        fontFamily: "黑体",
        fontWeight: "normal",
        barBgColor: "white",
        barColor: "rgba(247,230,9,0.8)"
    });
    //获取对象
    var htmlObj = html1.data('radialIndicator');
    var cssObj = css1.data('radialIndicator');
    var jsObj = js1.data('radialIndicator');
    var jqObj = jq1.data('radialIndicator');
    //为圆形指示器设定动画效果
    htmlObj.animate(95);
    cssObj.animate(90);
    jsObj.animate(80);
    jqObj.animate(75);
});

