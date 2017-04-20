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
for (var i=1; i<=11; i++) {
  stones.push(new Stone(1, "none"));
}
stones.push(new Stone(2, "none"));
console.log(stones);

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
  var currentStone = "";
  var rightEdge = $("#right-side").position();
  var divider = rightEdge.left;
  $(".stone").draggable();
  $(".stone").mouseup(function() {
    currentStone = "";
    stonePosition = $(this).position();
    console.log(stonePosition);
    if (stonePosition.left < divider && stonePosition.top > 56 && stonePosition.top < 356) {
      console.log("left");
      currentStone = $(this).attr('id');
      stones[currentStone].side = "left";
    } else if (stonePosition.left > divider && stonePosition.top > 56 && stonePosition.top < 356) {
      console.log("right");
      currentStone = $(this).attr('id');
      stones[currentStone].side = "right";
    } else {
      console.log("none");
      currentStone = $(this).attr('id');
      stones[currentStone].side = "none";
    }
    console.log(stones);
  });
  var scalePosition = $("#right-side").position();
  var positionStone1 = $("#stone11").position();
});
