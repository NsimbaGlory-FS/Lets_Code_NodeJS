// importing the javascript function
const {add, subtract, multiply, divide, max, sqrt } = require('./math');

describe("Testing the string module", () => {
    
    
    test('Add numbers using the add method', () => {
         expect(add(9, 9)).toBe(18)
    });
    test('Subtract numbers using the subtract method', () => {
         expect(subtract(8, 4)).toBe(4)
    });
    test('Multiply numbers using the multiply method', () => {
         expect(multiply(3, 2)).toBe(6)
    });
    test('Divide numbers using the divide method', () => {
         expect(divide(10, 5)).toBe(2)
    });

    

})

describe("Testing max", () => {
test("testing max", () => {
    expect(Math.max(3, 4)).toBe(4)

})

test("test sqrt", () => {

expect(sqrt(3, 2)).toBe(5);

});

});




