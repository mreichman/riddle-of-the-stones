function Stone(weight, side) {
  this.weight = weight;
  this.side = side;
}

function Scale(timesUsed, leftWeight, rightWeight) {
  this.timesUsed = timesUsed;
  this.leftWeight = leftWeight;
  this.rightWeight = rightWeight;
}

var stones = [];
for (var i=1; i<=12; i++) {
  stones.push(new Stone(1, "none"));
}

var randomStone = Math.floor(Math.random() * 12);

var heavierOrLighter = Math.random();
if (heavierOrLighter > 0.5) {
  stones[randomStone].weight = 2;
} else {
  stones[randomStone].weight = 0;
}

var scale = new Scale(0, 0, 0);

function weigh() {
  scale.leftWeight = 0;
  scale.rightWeight = 0;
  stones.forEach(function(stone) {
    if (stone.side === "left") {
      scale.leftWeight += stone.weight;
    }
    if (stone.side === "right") {
      scale.rightWeight += stone.weight;
    }
  });
  scale.timesUsed += 1;
  var balance = (scale.leftWeight - scale.rightWeight);
  return balance;
}

$(document).ready(function() {
  var oddStoneOut = randomStone + 1;
  var currentStone = "";
  $(".stone").draggable();
  $(".stone").mouseup(function() {
    currentStone = "";
    var rightEdge = $("#right-side").position();
    var divider = rightEdge.left - 37;
    var scaleTop = rightEdge.top;
    var scaleBottom = rightEdge.top + 250;
    var stonePosition = $(this).position();
    if (stonePosition.left < divider && stonePosition.top > scaleTop && stonePosition.top < scaleBottom) {
      currentStone = $(this).attr('id');
      stones[currentStone].side = "left";
    } else if (stonePosition.left > divider && stonePosition.top > scaleTop && stonePosition.top < scaleBottom) {
      currentStone = $(this).attr('id');
      stones[currentStone].side = "right";
    } else {
      currentStone = $(this).attr('id');
      stones[currentStone].side = "none";
    }
    $("#left-heavier").hide();
    $("#right-lighter").hide();
    $("#right-heavier").hide();
    $("#left-lighter").hide();
    $("#equal").hide();
    $("#weigh").show();
  });
  $("#weigh").click(function() {
    var result = weigh();
    $(this).hide();
    if (scale.timesUsed >= 3) {
      if (result > 0) {
        $("#left-heavier").show();
        $("#right-lighter").show();
      } else if (result < 0) {
        $("#right-heavier").show();
        $("#left-lighter").show();
      } else {
        $("#equal").show();
      }
      $("#weigh").remove();
      $("#scale-used").show();
      $("#answer-submit").show();
    } else if (result > 0) {
      $("#left-heavier").show();
      $("#right-lighter").show();
    } else if (result < 0) {
      $("#right-heavier").show();
      $("#left-lighter").show();
    } else {
      $("#equal").show();
    }
  });
  $("#answer-submit").submit(function(event) {
    var answerInput = $("#answerInput").val();
    if (parseInt(answerInput) === oddStoneOut) {
      $("#correct").show();
    } else {
      $("#oddStoneOut").text(oddStoneOut);
      $("#incorrect").show();
    }
    $("#answer-submit :input").prop("disabled", true);
    event.preventDefault();
  });
});
