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
  stones.push(new Stone(i, 1, "left"));
}
for (var i=1; i<=5; i++) {
  stones.push(new Stone(i, 1, "right"));
}
stones.push(new Stone(12, 2, "none"));
console.log(stones);

var scale = new Scale(0, 0, 0);

function weigh() {
  stones.forEach(function(stone) {
    if (stone.side === "left") {
      scale.leftWeight += 1;
    }
    if (stone.side === "right") {
      scale.rightWeight += 1;
    }
  });
  scale.timesUsed += 1;
  console.log(scale.timesUsed);
  var balance = (scale.leftWeight - scale.rightWeight);
  return balance;
}

$(document).ready(function() {
  $(".stone").draggable();
  weighResult = weigh();
  console.log(weighResult);
  $("#stone1").data(stones[0]);
});
