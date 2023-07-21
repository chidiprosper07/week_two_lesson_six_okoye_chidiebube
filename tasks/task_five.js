// Create multiple objects with different properties
const person1 = {
    name: "victor",
    age: 25
  };
  
  const person2 = {
    occupation: "Engineer",
    email: "victor123@yahoo.com"
  };
  
  const person3 = {
    city: "New York",
    country: "uk"
  };
  
  // Use Object.assign() to merge the objects into a single object
  const mergedObject = Object.assign({}, person1, person2, person3);
  
  // Log the merged object to the console
  console.log(mergedObject);
  