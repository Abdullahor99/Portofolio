$(document).ready(function ()
{
  $("#aboutme__info-link").click(function (event)
  {
    event.preventDefault();
    let icon = document.getElementById("aboutme__info-link-icon");
    if (icon.classList.contains("fa-caret-down"))
    {
      $(".aboutme__p-2 , .aboutme__p-3").fadeIn(2000);
      $("#aboutme__info-link-text").html("Less info ");
      icon.classList.remove("fa-caret-down");
      icon.classList.add("fa-caret-up");
    }
    else
    {
      $(".aboutme__p-2 , .aboutme__p-3").hide();
      $("#aboutme__info-link-text").html("More info");
      icon.classList.remove("fa-caret-up");
      icon.classList.add("fa-caret-down");
    }
  });
});