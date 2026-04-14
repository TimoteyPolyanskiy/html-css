/*
  ========================================
  Багаторядковий коментар:
  Лабораторна робота №3
  Предмет: Веб-програмування
  Виконав: студент 2 курсу (спеціальність ІПЗ)
  ========================================
*/

// Однорядковий коментар: Ініціалізація 10 змінних з різними типами даних

let userName = "Timotey";
let userAge = 18;
let isStudent = true;
let currentTask;
let emptyValue = null;
let bigNumber = 9007199254740991n;
let uniqueId = Symbol("id");

// Однорядковий коментар: Створення об'єктних типів
let userProfile = { course: 2 };
let marks = [19, 20, 18];
let printHello = function() {};

console.log("userName:", typeof userName);
console.log("userAge:", typeof userAge);
console.log("isStudent:", typeof isStudent);
console.log("currentTask:", typeof currentTask);
console.log("emptyValue:", typeof emptyValue);
console.log("bigNumber:", typeof bigNumber);
console.log("uniqueId:", typeof uniqueId);
console.log("userProfile:", typeof userProfile);
console.log("marks:", typeof marks);
console.log("printHello:", typeof printHello);

// Однорядковий коментар: Математичні операції з операторами присвоєння
let score = 10;
score += 5;
score -= 3;
score *= 2;
score /= 4;
score %= 4;
console.log("Math result:", score);

let a = true;
let b = false;
console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a:", !a);

let x = 5;
let y = 3;
console.log("x & y:", x & y);
console.log("x | y:", x | y);
console.log("x ^ y:", x ^ y);