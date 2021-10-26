const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
    // , password: '12345'
}
const password = '12345';

const { password: hashedPassword } = person;  

//Predict the output

console.log(password);
console.log(hashedPassword);

// Output: 12345 , undefined

// Undefined is being output because no info regarding a password is being held be the person. 

// To fix this problem the follow code: , password: '12345' would need to be added with in all the info being held by the person.