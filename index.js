// function customerName(scope){
//        const myvar = upperCaseCustomerName
//     return 'bob'
// }
// // function

// function customerName(){
//     const scope = "bob"
//  }
// // var customerName;
// function myvar() {
//      return 'bob'
//}

// var customerName;

// Function to uppercase customerName
//function upperCaseCustomerName() {
//   // Access the global customerName variable and convert it to uppercase
customerName = customerName.toUpperCase();
//}

// // Function to set bestCustomer in global scope
//function setBestCustomer() {
//   // Declare bestCustomer in global scope and assign it 'not bob'
//bestCustomer = 'not bob';
//}

// // Function to overwrite bestCustomer in global scope
//function overwriteBestCustomer() {
//   // Change the value of bestCustomer
//bestCustomer = 'new value';
//}

// // Declare leastFavoriteCustomer as a constant in global scope
// const leastFavoriteCustomer = 'initial value';

/// Function to attempt changing leastFavoriteCustomer
//function changeLeastFavoriteCustomer() {
//   // Attempt to change the value of leastFavoriteCustomer
//   // This will result in an error because it is a constant
//leastFavoriteCustomer = 'new value';
// This will throw an error
// }
//var customerName;
//function upperCaseCustomerName(){
//customerName = customerName.toUpperCase();
//}
// function  setBestCustomer(){
// customerName = 'Bob'
// }// function overwriteBestCustomer() {
//     bestCustomer = 'new value';
//  }
//  function changeLeastFavoriteCustomer() {
//     leastFavoriteCustomer = 'new value';
//  }
//  function upperCaseCustomerName(){
//     customerName = customerName.toUpperCase();
// }

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
// function customerName(){
//     const scope = "bob"
//  }
//  function myvar() {
//     return 'BOB'
// }
// function upperCaseCustomerName() {
//     customerName = customerName.toUpperCase();
//     return 'undefined'
//}
function setBestCustomer() {
  bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = "";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value';
}
