//CUSTOM ARRAYS AND METHODS

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   get(index) {
//     return this.data[index];
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   shift() {
//     const firstItem = this.data[0];
//     for (let i = 0; i < this.length; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//     return firstItem;
//   }

//   deleteByIndex(index) {
//     const itemToDelete = this.data[index];
//     if (index < this.length) {
//       for (let i = index; i < this.length; i++) {
//         this.data[i] = this.data[i + 1];
//       }
//       delete this.data[this.length - 1];
//       this.length--;
//     }
//     return itemToDelete;
//   }
// }

// const newArray = new MyArray();
// newArray.push("mine");
// newArray.push("nou");
// newArray.push("lool");
// console.log(newArray);

// const item = newArray.deleteByIndex(2);

// console.log(item);
// console.log(newArray);

//REVERSING STRING

//method 1
// const reverseString = (item) => {
//   const stringArray = item.split("");
//   let newArray = [];
//   for (let i = 0; i < stringArray.length; i++) {
//     let lastIndex = stringArray.length - 1;
//     newArray[i] = stringArray[lastIndex - i];
//   }
//   return newArray.join("");
// };

// //method 2
// const reverseString = (item) => {
//   return item.split("").reverse().join("");
// };

// const items = reverseString("Shafi");
// console.log(items);

// //PALINDROMES

// const checkPalindromes = (item) => {
//   const newString = item.split("").reverse().join("");
//   if (newString === item) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkPalindromes("malayalam"));

// //INTEGER REVERSAL

// const reverseInteger = (item) => {
//   const reversedString = item.toString().split("").reverse().join("");
//   return parseInt(reversedString);
// };

// console.log(reverseInteger(1234));

// //SENTENCE CAPITALISATION

// const capitaliseString = (item) => {
//   const lowerArray = item.toLowerCase().split(" ");

//   const newArray = lowerArray.map((element) => {
//     return element.slice(0, 1).toUpperCase() + element.slice(1);
//   });

//   const capitalised = newArray.join(" ");
//   return capitalised;
// };

// console.log(capitaliseString("hello world"));

///thidsrvgjjo
