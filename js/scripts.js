function Stone(number, weight) {
  this.number = number;
  this.weight = weight;
}

function Scale(timesUsed) {
  this.timesUsed = timesUsed;
}

var stones = [];
for (var i=1; i<=11; i++) {
  stones.push(new Stone(i, 1));
}
stones.push(new Stone(12, 2));

var scale = new Scale(0);

$(document).ready(function() {
  $("#stone1").data(stones[0]);
});
