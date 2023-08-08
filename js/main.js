$(function () {

    // 页面开屏效果
    $("div.mv img.torch-logo").css("opacity", "1");
    setTimeout("$('a.btn-scroll').css('opacity', '1')", 3000);

    // 滚动定位页面主体
    $("div.mv a.btn-scroll").click(function () {
        $("html").animate({
            scrollTop: $("#slider").offset().top - 94
        });
    });

    // 轮播图插件
    $(".bxslider").bxSlider({
      auto: true, // 设置自动滑动
      pause: 6400, // 设置轮播图切换时间
      slideWidth: 1040, // 设置轮播图宽度
      touchEnabled: false,
      minSlides: 3, // 设置最小轮播图数量
      maxSlides: 3, // 设置最大轮播图数量
      moveSlides: 1, //
      slideMargin: 4, // 设置轮播图边距
      pager: true, // 设置显示分页
      infiniteLoop: true, // 设置循环滑动
      hideControlOnEnd: true
    });

    // 插入轮播图前后页图标
    $(".bx-prev, .bx-next").append("<p></p>");
});
