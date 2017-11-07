$(document).ready(function() {
  var ogText = null;
  var available = null;
  var usersName = null;
  var name = null;
  var phoneNumber = null;
  var phone = null;
  var guestNum = null;
  var guests = null;
  $(".available").on("mouseenter", function(event) {
    ogText = $(this).text();
    guestNum = $(this).attr("guests");
    phone = $(this).attr("phone");
    name = $(this).attr("name");
    if ($(this).hasClass("reserved")) {
      $(this).css("cursor", "not-allowed");
      $(this).off("click");
      $(this).after("<div class='hover'><p>Name: " + name + "</p>" + "<p>Party Size: " + guestNum + "</p></div>");
    }
    $(this).fadeTo(150, 0.5);
  }).on("mouseleave", function(event) {
    $(this).text(ogText);
    $(this).fadeTo(50, 1);
    $("div").filter(".hover").remove();
  });
  $(".available").on("click", function(event){
    tableClass = this;
    available = event;
    var roomNumber = $(this).text();
    $("form").fadeIn(500).css("display", "flex");
    $(".tablenumber").text("Table Number: " + roomNumber);
  });
  $("i").on("click", function(event) {
    $("form").fadeOut(500);
  });
  $("#save").on("click", function(event) {
    $(tableClass).addClass("reserved");
    phoneNumber = $("#phone").val();
    guests = $("#guests").val();
    usersName = $("#name").val();
    available.target.setAttribute("guests", guests);
    available.target.setAttribute("phone", phoneNumber);
    available.target.setAttribute("name", usersName);
    $("form").fadeOut(500);
    $("input").val("");
  });
});