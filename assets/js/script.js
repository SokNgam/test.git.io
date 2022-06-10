$("#btn-login").click(function(){
    $(".main-bg-form-login").slideDown(10);
});

$("#close-login").click(function(){
    $(".main-bg-form-login").slideUp(10);
});

$("#btn-register").click(function(){
    $(".main-bg-form-register").slideDown(10);
});

$("#close-register").click(function(){
    $(".main-bg-form-register").slideUp(10);
});

$("#btn-login").click(function(){
    $(".main-bg-form-register").hide(10);
});

$("#btn-register").click(function(){
    $(".main-bg-form-login").hide(10);
});

// Mobile menu
$("#show-mobile-menu").click(function(){
    $(".sidenav").show(200);
});

$(".close-mobile-menu").click(function(){
    $(".sidenav").hide(200);
});

$("#user-mobile-menu").click(function(){
    $(".main-user-for-mobile").show(10);
});

$("#close-user-login-mobile").click(function(){
    $(".main-user-for-mobile").hide(10);
});

$("#user-register-link").click(function(){
    $(".main-user-register-for-mobile").show(10);
});

$("#user-register-link").click(function(){
    $(".main-user-for-mobile").hide(10);
});

$("#close-user-signup-mobile").click(function(){
    $(".main-user-register-for-mobile").hide(10);
});

$("#user-login-link").click(function(){
    $(".main-user-for-mobile").show(10);
});

$("#user-login-link").click(function(){
    $(".main-user-register-for-mobile").hide(10);
});
