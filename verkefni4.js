
var NewRocket = {
    name: 'SpaceRacer',
    life: 10,
    speed: 5,
    fly: function(speed){

    },
    showName: function(){
        console.log(this.name);
    },
    changeName: function(input){
        this.name = input;
        console.log(this.name);
    },
    displayInfo: function(){
        console.log(this.name, this.life, this.speed)
    }
};

var Rocket1 = Object.create(NewRocket)
Rocket1.showName();
Rocket1.displayInfo();

NewRocket.prototype.fly = function() {
    this.speed = this.speed + 1;
    console.log("Geimfluginn hefur aukið hraðann um " + this.speed)
};

/*
enemyRocket.prototype.shoot = function() {
    this.life = this.life - 1;
    console.log(this.life);
};
*/

/*
function NewRocket() {
    var Rocket = {};
    Rocket.name = 'SpaceRacer';
    Rocket.life = 10;
    Rocket.speed = 5;

    Rocket.showName = function() {
        console.log(this.name);
    };

    Rocket.changeName = function() {
        this.name = input;
        console.log(this.name);
    };

    Rocket.shoot = function() {
        this.life = this.life - 1;
        console.log(this.life);
    };

    Rocket.displayInfo = function() {
        console.log(this.name, this.life, this.speed)
    };


    return Rocket;
}
*/





