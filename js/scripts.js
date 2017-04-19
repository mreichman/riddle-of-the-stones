function Stone(number, weight, side) {
  this.number = number;
  this.weight = weight;
  this.side = side;
}

function Scale(timesUsed, leftWeight, rightWeight) {
  this.timesUsed = timesUsed;
  this.leftWeight = leftWeight;
  this.rightWeight = rightWeight;
}

var stones = [];
for (var i=1; i<=6; i++) {
  stones.push(new Stone(i, 1, "none"));
}
for (var i=1; i<=5; i++) {
  stones.push(new Stone(i, 1, "none"));
}
stones.push(new Stone(12, 2, "none"));

var scale = new Scale(0, 0, 0);

function weigh() {
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
  $(".stone").draggable();
  $("#stone1").data(stones[0]);
  var scalePosition = $(".row").position();
  console.log(scalePosition);
  var positionStone1 = $("#stone1").position();
  console.log(positionStone1);
});
