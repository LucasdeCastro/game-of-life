var fs = require("fs"),
  byline = require("byline");

(function GameOfLife() {
  var self = this;
  var help = process.argv.find(e => e == "-h" || e == "--help");

  var time = parseInt(process.argv[2]) || 150;
  var ger = parseInt(process.argv[3]) || 10;
  var file = process.argv[4] || "game.txt";
  var grid = [];

  if (help) {
    console.log(
      `\n\r  Usage: node game_of_life.js [time of print] [number of generations] [file of input]`
    );
    return;
  }

  stream = byline(fs.createReadStream(file, { encoding: "utf8" }));
  stream.on("data", function(line) {
    var tmp = line.split(",");
    tmp = tmp.map(elem => parseInt(elem));
    grid.push(tmp);
  });
  stream.on("finish", function() {
    var loop = setInterval(function() {
      process.stdout.write("\u001b[2J\u001b[0;0H");
      self.print();
      self.start();

      if (ger > 0) ger--;
      else clearInterval(loop);
    }, time);
  });

  self.getVizinhos = function(h, w) {
    var count = 0;
    for (var i = -1; i <= 1; i++)
      for (var j = -1; j <= 1; j++)
        if (
          i + h > -1 &&
          j + w > -1 &&
          !(i === 0 && j === 0) &&
          grid[i + h] &&
          grid[i + h][j + w]
        )
          count += grid[i + h][j + w];
    return count;
  };

  self.print = function() {
    process.stdout.write("\033c");
    for (var i = 0; i < grid.length; i++) {
      var data = "";
      for (var j = 0; j < grid[i].length; j++) {
        data += grid[i][j] == 1 ? "# " : "- ";
      }
      console.log(data);
    }
  };

  self.start = function() {
    var _grid = [];
    for (var h = 0; h < grid.length; h++) {
      var _tmp = [];
      for (var w = 0; w < grid[h].length; w++) {
        var count = self.getVizinhos(h, w);
        var celula = grid[h][w];
        if (count < 2) _tmp.push(0);
        else if ((count == 2 || count == 3) && celula == 1) _tmp.push(1);
        else if (count == 3 && celula === 0) _tmp.push(1);
        else if (count > 3) _tmp.push(0);
        else _tmp.push(0);
      }
      _grid.push(_tmp);
    }
    grid = _grid;
  };
})();
