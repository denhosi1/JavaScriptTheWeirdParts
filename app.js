//  /*****     THIS KEYWORD     *****/

// /* Example One */
console.log(window);
console.log(this);

// /* Example Two */
//  var firstname = "James";
//  var lastname = "Bond";

// function showfullname () {
// 	console.log (this.firstname + " " + this.lastname);
// }

// var person = {
// 	firstname:"Jason",
// 	lastname:"Bourne",
// 	showfullname:function() {
// 		console.log (this.firstname + " " + this.lastname);
// 	}
// }
// //What will the following display?
// showfullname();

// window.showfullname();

// this.showfullname();

// person.showfullname();

// this.person.showfullname();

// /* Example Three */
// var user = {
// 	data:[
// 		{name:"T. Woods", age:37},
// 		{name:"P. Mickelson", age:43}
// 	],
// 	clickHandler:function (event) {
// 		var randomNum = ((Math.random () * 2 | 0) + 1) - 1;
// 		console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
// 	}
// }

// document.getElementById("button").addEventListener("click", user.clickHandler);
// //Uses button from index.html. 
// //What will the output be here?

// /******      EQUALITY      ******/

// /* Example One */
// console.log(1 == 1);
// console.log(1 == '1');
// console.log(1 == 2);
// console.log('' == false);
// console.log([] == false);
// console.log(null == undefined);

// /* Example Two */
// console.log(1 === 1);
// console.log(1 === '1');
// console.log(1 === parseInt('1'));
// console.log([] === false);
// console.log(null === undefined);

// /******      THE SCOPE CHAIN      ******/

// /* Example One */
// function b() {
// 	console.log(myVar);
// 	//Will this print 'Undefined', '1' or '2'?
// }

// function a() {
// 	var myVar = 2;
// 	b();
// }

// var myVar = 1;
// a();

// /* Example Two */
// function c() {

// 	function d() {
// 		console.log(myNewVar);
// 		//Will this print 'Undefined', '1' or '2'?
// 	}

// 	var myNewVar = 2;
// 	d();
// }

// var myNewVar = 1;
// c();


// /******      AUTOMATIC SEMICOLON INSERTION      ******/

// /* Example One */
// function doStuff() {
// 	return
// 	{
// 		status: true
// 	}
// }
	
// function doStuffAgain() {
// 	return {
// 		status: true
// 	}
// }
	
// console.log(doStuff());
// console.log(doStuffAgain());

// *****      EXECUTION CONTEXT - CREATION AND HOISTING      *****

// /* Example One */
// var nerf = "Hello Nerf!";

// function NerfThis() {
// 	console.log("Called NerfThis");
// }

// NerfThis();
// console.log(nerf);

// /* Example Two */
// DontNerfThis();
// console.log(newNerf);

// var newNerf = "Hello World!";

// function DontNerfThis() {
// 	console.log("Called DontNerfThis");
// }

// /******      FIRST CLASS FUNTIONS      ******/
// function ThisIsAnObject() {
// 	console.log("I am an object");
// }

// ThisIsAnObject.NickName = "foobar";

// ThisIsAnObject();
// console.log(ThisIsAnObject.NickName);

// var anonymousGreet = function() {
// 	console.log("This");
// }

// anonymousGreet.test = "test";

// anonymousGreet();
// console.log(anonymousGreet.test);

// /******      FUNCTIONAL PROGRAMMING      ******/

// /* Example One */
// var arr1 = [1,2,3];
// console.log(arr1);

// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
// 	arr2.push(arr1[i] * 2);
// };

// console.log(arr2);

// /* Example Two */
// function mapForEach(arr, fn) {
// 	var newArr = [];

// 	for (var i = 0; i < arr.length; i++) {
// 		newArr.push(
// 			fn(arr[i])
// 		);
// 	};

// 	return newArr;
// }

// var arr3 = mapForEach(arr1, function(item){
// 	return item * 3;
// })

// console.log(arr3);

// var arr4 = mapForEach(arr1, function(item){
// 	return item > 2;
// })

// console.log(arr4);

// /******      IMMEDIATELY INVOKED FUNCTION EXPRESSIONS      ******/
// var greeting = function() {
// 	return "Nerf this";
// }

// console.log(greeting);

// var newGreeting = function() {
// 	return "Nerf That";
// }()

// console.log(newGreeting);


// /******      PROTOTYPE      ******/
// /* Example One */
// var x = {};
// var y = function() {};
// var z = [];

// /* Example Two */

// function ProtoPerson(firstName, lastName) {
// 	this.firstname = firstName;
// 	this.lastname = lastName;
// }

// var bob = new ProtoPerson("Bob", "Burger");
// var jane = new ProtoPerson("Jane", "Doe");

// console.log(bob.__proto__);

// ProtoPerson.prototype.GetFullName = function() {
// 	return this.firstname + " " + this.lastname;
// }

// console.log("Jane:" + jane.GetFullName());


/******       CLOSURES      ******/

// /* Example One */
// function greet(whattosay) {
//     return function(name) {
//         console.log(whattosay + ' ' + name);
//     }
// }

// greet('Hi')('Shaun');

// var sayHi = greet('Hi');
// sayHi('Tony');

// /* Example Two */

// function ClosurePerson(pName) {
//     var _name = pName;
// }

// var me = new ClosurePerson('Shaun');

// function NewClosurePerson(pName) {
//     var _name = pName;
    
//     this.getName = function() {
//         return _name;
//     }
// }

// var you = new NewClosurePerson('Someone');

// you.getName();
