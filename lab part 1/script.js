$(document).ready(function() {
  $(".available").mouseenter(function() {
    $(this).fadeTo(150, 0.5);
  });
  $(".available").mouseleave(function() {
    $(this).fadeTo(0, 1);
  });
  $(".available").click(function(){
    var roomNumber = $(this).text();
    $("form").css("display", "flex");
    $(this).attr("class", "reserved");
    $(this).attr("class2", "true");
    $(".tablenumber").text("Table Number: " + roomNumber);
  });
  $("i").click(function() {
    $("form").css("display", "none");
    $("div").filter("[class2=true]").attr("class", "available");
  });
  $("#save").click(function() {
    $("form").css("display", "none");
    $("div").filter("[class2=true]").attr("class2", "false");
    $("div").filter("[class2=false]").addClass("is-disabled");
  });
});