// 1: Student Report System
const Students = [
{ name: 'Yash', marks: [85, 75, 55] },
{ name: 'Neel', marks: [65, 80, 65] },
{ name: 'Rohan', marks: [35, 54, 89] },
];

const studentAverage = Students.map((student) => {
const totalMarks = student.marks.reduce((num, res) => num + res, 0);
const averageMarks = totalMarks / student.marks.length;
return { ...student, average: averageMarks };
});

const studentResult = studentAverage.map((student) => {
let result;
if (student.average >= 75) {
    result = 'Distinction';
} else if (student.average >= 50) {
    result = 'Pass';
} else {
    result = 'Fail';
}
return { ...student, result };
});
console.log(studentResult);


// 2: Shopping Cart Analyzer
function shoppingCart(...prices){ 
let sum = 0;
let countItems = 0; 
for(let n of prices){
    sum = sum + n;
    countItems++;
}
console.log(`Total Amount is ${sum} and Number of items are ${countItems}`);
}
shoppingCart(40,50,80,40);

// 3: User Profile Updater
let Profile = {
    firstName : 'Yash',
    lastName : 'Mistry',
    age : 21,
    hobbies: ['A','B']
}
let copyProfile = {...Profile}
copyProfile.profession = 'Fresher';
console.log(Profile);
console.log(copyProfile);


// 4: Product Filter & Transform
const products = [
  { name: "Laptop", price: 70000 },
  { name: "Mouse", price: 700 },
  { name: "PS5", price: 45000 },
  { name: "Keyboard", price: 1000 }
];

const result = products
  .filter(product => product.price > 1000)   
  .map(product => {                          
    const discountedPrice = product.price * 0.9; 
    return { ...product, discountedPrice };
  });
console.log(result);

// 5: Dynamic Number Processor

function Numbers(...nums){
  const Even = nums.filter(n => n%2 === 0);
  const Odd = nums.filter(n => n%2 !== 0);
  let sumOdd = 0;
  let sumEven = 0;
  for(let x of Even){
    sumEven += x;
  }

  for(let x of Odd){
    sumOdd += x;
  }

  console.log(Even);
  console.log(`The sum of Even Numbers are ${sumEven}`);
  console.log(Odd);
  console.log(`The sum of Odd Numbers are ${sumOdd}`);
}

Numbers(1,2,3,4,5,6,7,8,9,10);
