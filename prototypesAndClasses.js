class Character {
  static count = 0;

  constructor() {
    if (this.constructor === Character) {
      throw new Error("Class Character cannot be instantiated!");
    }

    this.x = Math.round(Math.random() * 10);
    this.y = Math.round(Math.random() * 10);
    Character.count++;
  }

  set position(place) {
    if (place[0] > 10 || place[1] > 10 || place[0] <= 0 || place[1] <= 0) {
      throw new Error("Out of bounds");
    }
    this.x = place[0];
    this.y = place[1];
  }
}

class PlayerCharacter extends Character {
  constructor() {
    super();
  }
}

class NonPlayerCharacter extends Character {
  constructor() {
    super();
  }
}

let playerOne = new PlayerCharacter();
let nonPlayerOne = new NonPlayerCharacter();

console.log("Number of players:" + Character.count);
console.log(playerOne);
console.log(nonPlayerOne);

try {
  let testClassCharacter = new Character();
} catch {
  console.log("Character class cannot be instantiated");
}



//Prototype
const CharacterProto = function () {
  this.x = Math.round(Math.random() * 10);
  this.y = Math.round(Math.random() * 10);
};

CharacterProto.prototype = {
  set position(place) {
    if (place[0] > 10 || place[1] > 10 || place[0] <= 0 || place[1] <= 0) {
      throw new Error("Out of bounds");
    }
    this.x = place[0];
    this.y = place[1];
  },
};

const NonPlayerCharacterProto = function () {
  CharacterProto.call(this);
};

const PlayerCharacterProto = function () {
  CharacterProto.call(this);
};

NonPlayerCharacterProto.prototype = Object.create(CharacterProto.prototype);
NonPlayerCharacterProto.prototype.constructor = NonPlayerCharacterProto;

PlayerCharacterProto.prototype = Object.create(Character.prototype);
PlayerCharacterProto.prototype.constructor = PlayerCharacterProto;

let playerOneProto = new PlayerCharacterProto();
let nonPlayerProto = new NonPlayerCharacterProto();

console.log(playerOneProto);
console.log(nonPlayerProto);