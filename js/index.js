$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      $("header").addClass("scroll");
      $("button.back_to_top_btn").fadeIn();
    } else {
      $("header").removeClass("scroll");
      $("button.back_to_top_btn").fadeOut();
    }
  });

  $("li").on("click", function () {
    $("ul").find("li.active").removeClass("active");
    $(this).addClass("active");
  });

  $("header nav .menu ul li a, header nav .haburger_menu").click(function () {
    $("header nav .haburger_menu").toggleClass("active");
    $("header nav .overlay").toggleClass("active");
    $("header nav .menu").toggleClass("active");
  });

  $(".gallery a").simpleLightbox();

  $(
    "header nav [href='#Strona-główna'], header nav h2, button.back_to_top_btn"
  ).on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 900);
  });

  $("header nav ul li [href='#Oferta-sklepu'], .home .arrow span").on(
    "click",
    function () {
      $("html, body").animate(
        { scrollTop: $(".home .arrow span").offset().top },
        900
      );
    }
  );

  $("header nav ul li [href='#O-serwisie']").on("click", function () {
    $("html, body").animate(
      { scrollTop: $("section.about").offset().top - 70 },
      900
    );
  });

  $("header nav ul li [href='#Asortyment']").on("click", function () {
    $("html, body").animate(
      { scrollTop: $("section.assortment").offset().top - 80 },
      900
    );
  });

  $("header nav ul li [href='#Kontakt']").on("click", function () {
    $("html, body").animate(
      { scrollTop: $("section.contact").offset().top },
      900
    );
  });

  $().ready(function () {
    var sName = "cookiesok";
    $("#close-cookie-warn").click(function () {
      var oExpire = new Date();
      oExpire.setTime(new Date().getTime() + 3600000 * 24 * 365);
      document.cookie = sName + "=1;expires=" + oExpire;
      $("#cookie-warn").hide("slow");
    });

    var sStr = "; " + document.cookie + ";";
    var nIndex = sStr.indexOf("; " + escape(sName) + "=");
    if (nIndex === -1) {
      $("#cookie-warn").show();
    }
  });
});
