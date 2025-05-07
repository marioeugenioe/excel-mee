/*Navegar entre pestañas*/
$(window).on("load", function () {
  let elem = "input[type=radio]";
  let url = window.location.href;
  let keyVal = "";

  if (url.indexOf("?") !== -1) keyVal = url.split("?")[1].split("=")[1];

  let id = keyVal;

  $(elem).each(function (i) {
    if ($(this).prop("id") === id) $(this).prop("checked", true);
  });
});

$(document).ready(function() {
  $(".view-downloads-btn").click(function() {
   $(".welcome-section").fadeOut("slow", function() {
    $(".warpper").fadeIn("slow");
   });
  });

  // Asegurarse de que la primera pestaña esté activa al cargar (opcional)
  $("#one").prop("checked", true);
  $("#one-panel").show();
  $("#one-tab").css({
   "background": "#fff",
   "color": "#818589",
   "border-top": "3px solid #3bb056"
  });
 });