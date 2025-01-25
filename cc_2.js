// Task 1: Working with Arrays

let products = ["Apple", "Banana", "Coconut", "Dragonfruit", "Pear"];
products.unshift("Watermelon");
let selected = products.slice(0,5);
console.log(selected);

// Task 2: Accessing and Modifying Arrays

let scores = [2, 4, 6, 8, 10];
scores[1] = 10;
let total = scores.reduce((total, amount) => total + amount, 0);
let average = total / scores.length;

console.log(scores);
console.log(average);

// Task 3: Working with Objects

let employee = {
    name: "Jane Smith",
    age: 22,
    department: "Sales",
    isActive: true
};
employee.department = "Marketing";
employee.position = "Manager";
console.log(employee);

// Task 4: Array of Objects

let customers = [
{name: "John Smith", email: "JohnSmith@gmail.com", purchaseAmount: 150},
{name: "Peter Griffin", email: "birdistheword@gmail.com", purchaseAmount: 100},
{name: "Markum Reed", email: "Reed@usf.edu", purchaseAmount: 2000}
];
let newCustomer = {name: "George Washington", email: "Georgey@gmail.com", purhcaseAmount: 1753};
customers.push(newCustomer);
console.log(customers);
