$(function(){
  let h = $("header").height();

  $(window).scroll(function(){
    if($(window).scrollTop() > h - 100){
      $(".page-header").hide();
    }else{
      $(".page-header").show();
    }
  });
  // hamburger-menu
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
  
});