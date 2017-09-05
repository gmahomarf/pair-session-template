var Calculator = require('../src/calc');
var assert = require('chai').assert;

var calc = new Calculator();

describe('Calculator', function() {
    it('Test no numbers', function() {
        assert.equal(calc.Add(''), 0);
    });

    it('test one number', () => {
        assert.equal(calc.Add('5'), 5);
    })

    it('Test two numbers', function() {
        assert.equal(calc.Add('1,2'), 3);
    })
})