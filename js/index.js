$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 300) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  });

  $("li").on("click", function() {
    $("ul")
      .find("li.active")
      .removeClass("active");
    $(this).addClass("active");
  });

  $("header nav .haburger_menu, header nav .menu ul li a").click(function() {
    $("header nav .haburger_menu").toggleClass("active");
    $("header nav .overlay").toggleClass("active");
    $("header nav .menu").toggleClass("active");
  });

  $("header nav ul li [href='#Strona główna'], header nav h2").on(
    "click",
    function() {
      $("html, body").animate({ scrollTop: 0 }, 900);
    }
  );

  $(".home .arrow span, header nav ul li [href='#Oferta']").on(
    "click",
    function() {
      $("html, body").animate(
        { scrollTop: $(".home .arrow span").offset().top },
        900
      );
    }
  );

  $("header nav ul li [href='#O serwisie']").on("click", function() {
    $("html, body").animate({ scrollTop: $(".about").offset().top - 70 }, 900);
  });

  $("header nav ul li [href='#Asortyment']").on("click", function() {
    $("html, body").animate(
      { scrollTop: $(".images_gallery").offset().top - 80 },
      900
    );
  });

  $("header nav ul li [href='#Kontakt']").on("click", function() {
    $("html, body").animate({ scrollTop: $(".contact").offset().top }, 900);
  });

  $(".gallery a").simpleLightbox();
});
