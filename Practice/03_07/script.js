/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const mouse = {
  name: "Computer bluetooth mouse",
  wigthtGrams: 128,
  color: "black",
  price: 55.99,
  currency: "EUR",
  TwoButonns: {
    left: "go in function",
    rigth: "additional menus",
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newTwoButonns: function (butonnLeft, butoonRigth) {
    this.TwoButonns.left = butonnLeft;
    this.TwoButonns.rigth = butoonRigth;
  },
};

console.log("Name:", mouse);
console.log("Wigth of mouse, grams:", mouse.wigthtGrams);
console.log("Color:", mouse.color);
console.log("Price:", mouse.price, mouse.currency);
console.log("test 1:", mouse.TwoButonns);
mouse.newTwoButonns("1", "2");
console.log("test 2:", mouse.TwoButonns);
