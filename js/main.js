$(document).ready(function () {

  $(".flagUa").on("click", ".line", function () {

   $(".textUa").removeClass("disactiveText");
   $(".textUa").addClass(" activeText");
   $(".textRU").addClass(" disactiveText");
   $(".textRU").removeClass("activeText");

  });
  $(".flagRu").on("click", ".line", function () {

    $(".textUa").removeClass("disactiveText");
    $(".textUa").addClass(" activeText");
    $(".textRU").addClass(" disactiveText");
    $(".textRU").removeClass("activeText");

  });
});
