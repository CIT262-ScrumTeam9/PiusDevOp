import sayhello from "../utils/helloworld.mjs";
import assert from 'assert';

it("hello world", ()=>{
  const hello = sayhello();
  assert.equal(hello,"hello");

})

// Function to return your name
function getName(){
  return "Pius";
}

// Call the function and print the greeting
console.log("Hello " + getName());
