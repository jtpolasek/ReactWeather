 var names = ['todd', 'sara', 'ken'];
//
// names.forEach(function (name){
//   console.log("name", name);
// });
//
//
// names.forEach((name) => {
//   console.log("arrow", name);
// });
//
// names.forEach((name) => console.log(name));
//
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('todd'));
//

// var person = {
//   name: 'Todd',
//   greet: function (name){
//     names.forEach((name) => {
//       console.log(this.name + 'says hi ' + name)
//     });
//   }
// };

// person.greet();

// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(1,3));
// console.log(add(9,0));

//addStatement
var addStatement = (a,b) => {
  return a + b;
};
console.log(addStatement(2,3));

//addExpression
var addEx = (a,b) => a + b;
console.log(addEx(5,6));
