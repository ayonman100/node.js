// ============================
// BASIC TYPES
// ============================

let studentName: string = "Tunde";
let studentAge: number = 21;
let isEnrolled: boolean = true;

// Fixed version
// The original declaration was wrong because it used the type 'number'
// while assigning a string value.
let courseName: string = "Frontend Development";


// ============================
// TYPED FUNCTIONS
// ============================

function addNumbers(a: number, b: number): number {
  return a + b;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

function getArea(width: number, height: number): number {
  return width * height;
}


// ============================
// INTERFACES
// ============================

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

const student1: Student = {
  id: 1,
  name: "Tunde",
  age: 21,
  course: "Frontend Development",
  isActive: true
};

const student2: Student = {
  id: 2,
  name: "Ada",
  age: 23,
  course: "Backend Development",
  isActive: false
};


// ============================
// INSTRUCTOR INTERFACE
// ============================

interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const instructor: Instructor = {
  name: "Stanley",
  cohort: 8,
  subjects: ["HTML", "CSS", "JavaScript"]
};

console.log(introduceInstructor(instructor));


// ============================
// ARRAYS + UNION TYPES
// ============================

let names: string[] = ["Ada", "Bola", "Chidi"];

let scores: number[] = [78, 90, 55, 88];

function formatId(id: string | number): string {
  return String(id);
}

console.log(formatId(42));
console.log(formatId("abc"));