import sayHello from '../utils/helloworld.js';
import assert from "assert";

  it('should return "hello"', () => {
    const result = sayHello();
    assert.equal(result,'hello');

  });
