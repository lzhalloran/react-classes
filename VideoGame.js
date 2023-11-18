const { Media } = require("./Media.js");

class VideoGame extends Media {
  constructor(newName, platform, players = 1) {
    super(newName);
    this.players = players;
    this.platform = platform;
  }

  getVideoGame() {
    return `${this.name} is a video game for ${this.players} players and can be played in ${this.platform}.`;
  }
}

// let someVideoGame = new VideoGame("Runescape", "PC", 4);
// console.log(someVideoGame.getVideoGame());
// console.log(Media.count);

module.exports = {
    VideoGame
}