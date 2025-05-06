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
