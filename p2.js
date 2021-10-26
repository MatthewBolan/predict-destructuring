const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// const { name: name } = employee;


//Predict the output
console.log(name);
console.log(otherName);

// ReferenceError: name is not defined

// To fix this problem you need to add the following code: const { name: name } = employee;  

// Output: Elon, Elon If code above is applied.


