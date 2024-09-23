// let emmaHeight = 170;
// let davidHeight = 140;
// let isEmmaTallerThanDavid = emmaHeight > davidHeight;
// let isEmmaShorterThanDavid = emmaHeight < davidHeight;
// console.log(isEmmaTallerThanDavid);
// console.log(isEmmaShorterThanDavid);

//greater than or equal (>=) and less than or equal (=<)
let valueOne = 500;
let valueTwo = 500;
let valueThree = valueOne >= valueTwo;
let valueFour = valueOne <= valueTwo;

console.log(valueThree);
console.log(valueFour);

// two values are exactly the same thing (===)
// two values are not the same thing (!==)

let password = "emmanuel";
let confirmpassword = "emmanuel";
let ispasswordcorrect = password === confirmpassword;
let ispasswordnotcorrect = password !== confirmpassword; // not correct

console.log(ispasswordcorrect); //true
console.log(ispasswordnotcorrect); //false

// Depending on the datatype of a valueFour, is what determines,
// what will can do with that value, what kind of operations can perform on that value

//string data type
//anything between single quote '' or double quote '' is a string
const M_NAME = "EMMY";
const PLACE_OF_ORIGIN = "edo";
const AGE = "89";

// Number data type
const distance = 546.78;
const DOLLAR_RATE = 1500;
const INTEREST_RATE = 7.8;

// Boolean data type
const IS_EMMY_AVAILABLE = true;
const IS_CLASS_HOLDING = false;

//array data type
//for staring values that are similar together
//each items in an array is seperated by a comma
const STUDENTS = ["oladapo", "Ahmed", "Yusuf"];
const MY_TECH_STACK = ["javascript", "HTML", "CSS", "TAILWIND"];
const studentsScores = [100, 43, 78];

const MY_NAME = "emmanuel";
const age = 70;
const marital_status = "Divorced";
const PLACE_OF_BIRTH = "Edo";
const hobbies = ["sleep", "Gaming", "Fighting"];
//create all this into an object

// object data type
// object allows us to group attribute to a real world object together

const USER_BIO = {
  name: "Emmanuel",
  age: 70,
  marital_status: "Divorced",
  isSick: false,
  hobbies: ["fighting", "sleeping", "Listening to music"],
};

const Laptop = {
  brand: "Apple",
  laptopName: "Macbook pro",
  isFaulty: false,
  isInGoodStatus: true,
  storage: "1 gigabyte",
  color: "silver",
};

//Accessing individual value in an array
//Individual value in an array are accessed by their indexes

const state_in_nigria = ["Lagos", "Edo", "Kano", "Imo"];
console.log(state_in_nigria);

console.log(state_in_nigria[2]);

const ALL_PRODUCTS = [
  {
    product_id: "165246",
    product_name: "Iphone 12",
    product_price: 12000,
    product_quality: "1500",
  },
];

console.log(ALL_PRODUCTS[2]);

// Accessing values in an object
const phone = {
  name: "Tecno",
  storage_capacity: 256,
  color: "Purple",
  camera: "12pixels",
  supportTypeC: true,
  supportESim: false,
};
/*when accessing items in an object,we use the object name follow by a dot then the key name  (objectName.key) 
then the key name (objectName.Key)*/

console.log(phone.camera);

const person = {
  name: "Yusuf",
  place: {
    city: "Abuja",
    country: "Nigeria",
  },
};

console.log(person.place.country);

//function
function greet() {
  alert("welcome emmanuel");
}

greet();

//arrow function
const tellTimeOfDay = () => {
  alert("The time is 13:27");
};

tellTimeOfDay();

// you can call a regular before creating it
processpayment();

function processpayment() {
  alert("Payment successful thank you");
}

processcartitems();



//another example of arrow function and 
function processcartitems() {
  alert("Payment successful thank you");
}



const processcartitem = () => {
  alert("Anything between me and this lo ,is gone");
};

processcartitem();
