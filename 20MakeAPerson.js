/* 
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

source : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
*/ 

const Person = function(firstAndLast) {
    // Variables
    let fullNameArr = firstAndLast.split(" ");
    let firstName = fullNameArr[0];
    let lastName = fullNameArr[1];
    let fullName = firstName + " " + lastName;
    
        // Getters 
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;      
    };

    this.getFullName = function() {
        return fullName;
    };


    // Setters 
    this.setFirstName = function(first) {
      firstName = first;
      fullName = first + " " + lastName;
    };
  
    this.setLastName = function(last) {
      
      fullName = firstName + " " + last;
    };
  
    this.setFullName = function(firstLast) {
      firstName = firstLast.split(" ")[0];
      lastName = firstLast.split(" ")[1];
      fullName = firstName + " " + lastName;
    };
  
};


const bob = new Person('Bob Ross');
  
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob instanceof Person);
  
bob.setFirstName("Haskell");
console.log(bob.getFullName()); 