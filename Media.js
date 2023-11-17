// Media class as a generic starting point
// Then we can have videogames, books, movies, etc.

// Blueprint of data
class Media {
  constructor() {
    this.name = "Default generic media";
    Media.count += 1;
  }

  // count of all Media that exists
  static count = 0;

  getMediaName() {
    if (this.name) {
      return this.name;
    } else {
      return "Media does not have a name";
    }
  }

  static version() {
    return "class version 0.0.1";
  }

  version() {
    return "instance version 0.0.1";
  }
}

let media1 = new Media();
media1.name = "A cool book about programming";
console.log(media1.getMediaName());
console.log(media1.version());

let media2 = new Media();
console.log(media2.name);

console.log("Media count: " + Media.count);
console.log(Media.version());
console.log(Media.prototype.version());
console.log(Media.prototype.getMediaName());
