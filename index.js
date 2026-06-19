// ============================
// ES MODULES - MAIN FILE
// ============================

import formatCurrency, {
  add,
  capitalize,
  APP_VERSION
} from "./utils.js";

// Test functions
console.log("Add:", add(2, 3));
console.log("Capitalize:", capitalize("frontend"));
console.log("App Version:", APP_VERSION);
console.log("Currency:", formatCurrency(45000));


// ============================
// ARROW FUNCTIONS
// ============================

const square = n => n * n;

const greet = name => `Hello, ${name}!`;

const multiply = (a, b) => a * b;

const getFullName = (firstName, lastName) =>
  `${firstName} ${lastName}`;

console.log(square(5));
console.log(greet("Ayomide"));
console.log(multiply(4, 3));
console.log(getFullName("Ayomide", "Adeyemi"));


// ============================
// DESTRUCTURING
// ============================

const student = {
  name: "Amaka",
  age: 22,
  course: "Frontend Development",
  city: "Abuja"
};

const scores = [88, 72, 95, 60, 45];

const { name, course } = student;
const { age: studentAge } = student;

const [firstScore, secondScore] = scores;

console.log(name);
console.log(course);
console.log(studentAge);
console.log(firstScore);
console.log(secondScore);


// ============================
// SPREAD OPERATOR
// ============================

const frontend = ["HTML", "CSS", "JavaScript"];

const backend = ["Node.js", "Express", "MongoDB"];

const userProfile = {
  username: "coder_ade",
  email: "ade@example.com"
};

const fullStack = [...frontend, ...backend];

const updatedProfile = {
  ...userProfile,
  email: "newemail@example.com"
};

console.log("Full Stack:", fullStack);

console.log("Original Profile:", userProfile);

console.log("Updated Profile:", updatedProfile);


// ============================
// TEMPLATE LITERALS
// ============================

const name2 = "Fatima";

const age = 24;

const intro = `My name is ${name2} and I am ${age} years old.`;

const area = `The area of the rectangle is ${8 * 5}`;

console.log(intro);
console.log(area);


// ============================
// ARRAY METHODS
// ============================

const products = [
  { name: "Laptop", price: 450000, inStock: true },
  { name: "Mouse", price: 8000, inStock: true },
  { name: "Monitor", price: 120000, inStock: false },
  { name: "Keyboard", price: 15000, inStock: true }
];

// Get array of product names
const productNames = products.map(product => product.name);

// Get only products in stock
const inStockProducts = products.filter(product => product.inStock);

// Get uppercase names of products in stock
const inStockUppercaseNames = products
  .filter(product => product.inStock)
  .map(product => product.name.toUpperCase());

console.log(productNames);
console.log(inStockProducts);
console.log(inStockUppercaseNames);


// ============================
// TERNARY + LOGICAL &&
// ============================

const role = "editor";

const cartItems = 0;

const access =
  role === "admin"
    ? "Full Access"
    : role === "editor"
    ? "Edit Access"
    : role === "viewer"
    ? "Read Only"
    : "No Access";

console.log(access);

// Returns 0 because cartItems is 0 (falsy).
// JavaScript stops at the first falsy value and returns it.
console.log(cartItems && "View Cart");

// Only displays "View Cart" when there are items in the cart.
console.log(cartItems > 0 && "View Cart");