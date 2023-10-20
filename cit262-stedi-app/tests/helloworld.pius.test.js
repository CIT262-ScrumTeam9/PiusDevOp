import {sayHello, sayName} from '../utils/helloworld.pius.js';
import assert from "assert";

//Manual testing

  it('Testing sayHello function', () => {
    const result = sayHello();
    assert.equal(result,'hello');

  });

// Automated Unit Tests

it('Should say Pius', () => {
    const myName = sayName();
    console.log(myName);
    expect(myName).toBe('Pius');

});
