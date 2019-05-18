$(document).ready(function () {
  $(".textRu").css({"display":"none"});
  $(".textUa").css({"display":"block"});
  $(".flagUa").on("click", ".line", function () {
     $(".textUa").css({"display":"block"});
     $(".textRu").css({"display":"none"});

  });
  $(".flagRu").on("click", ".line", function () {
      $(".textRu").css({"display":"block"});
      $(".textUa").css({"display":"none"});

  });
});
