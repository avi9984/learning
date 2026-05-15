/*
Greet the user
Description:
Write a program that accespts a user's name and age as input and then prints a greeting message in the following format: "Hello Shery you are 12 years old"

Ex1. Sample Input
Shery
12

expected output:
Hello shery you are 12 years old.

Ex2. Sample Input
Alice
1

expected output:
Hello Alice you are 1 years old
*/

function greet(name, age) {
    // if (age > 0) return "Plz inter non-negative numer"
    console.log(`Hello ${name} you are ${age} years old`);
}
greet("Shery", 12)
greet("Alice", 1)