// Classes

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }
    say() {
        console.log(this.name, "goes", this.voice);
    }
}

// duck -> Bird.prototype ->
// -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
    constructor(name, voice, canFly) {
        super(name, voice);
        this.canFly = canFly;
    }
}

const duck = new Bird("duck", "quack", true);
duck.say();