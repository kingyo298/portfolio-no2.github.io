$(function(){

  let h = $("header").height();

  $(window).scroll(function(){
    if($(window).scrollTop() > h - 100){
      $(".page-header").addClass("black-header");
    }else{
      $(".page-header").removeClass("black-header");
    }
  });

  $(".menu-list").hide();
  $(".hamburger-menu").click(function(){
    $(".hamburger-menu, .hamburger-menu-line").toggleClass("open");
    $(".menu-list").fadeToggle(500);
    $("body").toggleClass("noscroll");
  });

  if($(window).width() < 768){
    $(".menu-list li>a").click(function(){
      $(".menu-list").fadeOut(500);
      $(".hamburger-menu, .hamburger-menu-line").removeClass("open");
      $("body").removeClass("noscroll");
    });
  }

  var windowWidth = $(window).width();
  var headerHeight = 85;
  $("a[href^='#']").click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href=="#" || href==""?"html":href);
    var position = target.offset().top - headerHeight;
    $("body,html").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  $(window).on('load', function() {
    var url = $(location).attr('href');
    if(url.indexOf("#") != -1){
      var anchor = url.split("#");
      var target = $('#' + anchor[anchor.length - 1]);
      if(target.length){
        var pos = Math.floor(target.offset().top) - headerHeight;
        $("html, body").animate({scrollTop:pos}, 500,'swing');
      }
    }
  });
});

let horizonal = new Swiper('.horizonal',{
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})