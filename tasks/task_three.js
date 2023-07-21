// Create an object with multiple properties
const person = {
    name: "max",
    age: 25,
    occupation: "footballer",
    email: "max@yahoo.com"
  };
  
  // Use a for...in loop to iterate over the object properties
  for (const key in person) {
    // Check if the property is a direct property of the object (not inherited from the prototype chain)
    if (person.hasOwnProperty(key)) {
      // Log the key and value of each property to the console
      console.log(`${key}: ${person[key]}`);
    }
  }
  