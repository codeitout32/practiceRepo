
let newCar = function(){

	this.class = "LMV 4 wheels";
}


let swift = new newCar();

//console.log(swift.class);


var alto = {
	fuel : "Petrol, Gas",
  maxspd: "50",
};

var petrolcar = {
	maxspd : "80",
  start : function() { this.state = "moving"; return this.state;}

};

alto.__proto__ = petrolcar;
alto.start();



petrolcar.__proto__ = {
	vehicle: "YES",
}

console.log(alto.vehicle);

// for loop for only object properties
for (var x in alto){
	if(alto.hasOwnProperty(x))
    console.log(alto[x]);
}

// standard ways to create objects with prototype
// #1 using Object.create
var alto = Object.create(petrolcar);


// #2 using Constructor, Prototype will be given to objects which are created using constructor with new keyword.

Myconstructor.prototype = {
	maxspd : "80",
  start : function() { this.state = "moving"; return this.state;}
}

// However, the wrapper objects and the regular builtins share a prototype, so
// you can actually add functionality to a string, for instance.
String.prototype.firstCharacter = function(){
    return this.charAt(0);
};
"abc".firstCharacter(); // = "a"

// This fact is often used in "polyfilling", which is implementing newer
// features of JavaScript in an older subset of JavaScript, so that they can be
// used in older environments such as outdated browsers.

// For instance, we mentioned that Object.create isn't yet available in all
// implementations, but we can still use it with this polyfill:
if (Object.create === undefined){ // don't overwrite it if it exists
    Object.create = function(proto){
        // make a temporary constructor with the right prototype
        var Constructor = function(){};
        Constructor.prototype = proto;
        // then use it to create a new, appropriately-prototyped object
        return new Constructor();
    };
}