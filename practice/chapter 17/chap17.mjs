// let pets = ["dog","cat","bird"];
// document.write(pets);
// console.log(pets);

// shift() remove first element from array
// example
// let pets=["dog","cat","bird"];
// pets.shift();
// document.write(pets);
// console.log(pets);

// adding element in start we use unshift()
// example
// let pets=["dog","cat","bird"];
// pets.unshift("kangroo","parrot");
// document.write(pets);
// console.log(pets);

// to remove and add any element we use splice()
//example
// let pets = ["dog","cat","bird","parrots","owl"]
// pets.splice(0,3)
// document.write(pets)

let pets = ["dog", "cat", "bird", "fish", "hamster"];
let noPets = pets.slice(1, 3);
console.log(noPets);
document.write(noPets)
