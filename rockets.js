function protoRocket(name, life, speed) {
    this.name = name;
    this.life = life;
    this.speed = speed;

    this.showName = function() {
        console.log('Þessi geimflaug heitir ' + this.name);
    }

    this.changeName = function(input) {
        this.name = input;
        console.log(this.name);
    }
}

/*
function enemyRocket(name,life,speed){
    this.name = name;
    this.life = life;
    this.speed = speed;

    this.shoot = function() {
        this.life = this.life - 1
    }
}
*/

var Rocket1 = new protoRocket('SpaceRacer', 10, 5);
var Rocket2 = new protoRocket('SpaceRacerr', 10, 5);
var Rocket3 = new protoRocket('SpaceRacerrr', 10, 5);

var enemyRocket = new protoRocket('EvilSpaceRacer', 10, 5);

protoRocket.prototype.fly = function() {
    return this.speed = this.speed + 1;
};

enemyRockety.prototype.shoot = function() {
    this.life = this.life - 1;
}

Rocket1.showName();
Rocket1.fly();

Rocket2.showName();



