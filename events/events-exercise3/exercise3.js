var footbalField = $(".field");
var body = $("body");
var player = $(".player");

footbalField.on("click", function (event) {
  var xPosition = event.pageX ;
  var yPosition = event.pageY ;
  player.offset({ top: yPosition, left: xPosition });
});