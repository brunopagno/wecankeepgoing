let NEXT_ID = 1;

class Story {
  constructor(text) {
    this.id = NEXT_ID;
    NEXT_ID += 1;

    this.text = text;
  }
}

module.exports = Story;
