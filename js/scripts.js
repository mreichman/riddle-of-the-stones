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
for (var i=1; i<=11; i++) {
  stones.push(new Stone(i, 1, "none"));
}
stones.push(new Stone(12, 2, "none"));
console.log(stones);
console.log(Stone.number(1));

var scale = new Scale(0);

function weigh() {
  stones.forEach(function(stone) {
    if (stone.side === "left") {
      scale.leftWeight += 1;
    }
    if (stone.side === "right") {
      scale.rightWeight += 1;
    }
    return scale.leftWeight - scale.rightWeight;
    console.log(scale);
  });
}

$(document).ready(function() {
  $(".stone").draggable();
  $("#stone1").data(stones[0]);
});
