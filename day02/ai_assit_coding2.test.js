// Import the necessary libraries
const assert = require("assert");

// Import the function to be tested
const { findMinMax } = require("../ai_assit_coding2");

// Describe the test suite for the findMinMax function
describe("findMinMax", () => {
  // Placeholder for unit tests
});
it("should return the correct minimum and maximum numbers for a random array of integers", () => {
  const numbers = [100, 200, 5, 6, 7, 10, 350, 20, 60, 150];
  const result = findMinMax(numbers);
  assert.strictEqual(result.min, 5);
  assert.strictEqual(result.max, 350);
});
it("should return the correct minimum and maximum numbers for an array of negative integers", () => {
  const numbers = [-100, -200, -5, -6, -7, -10, -350, -20, -60, -150];
  const result = findMinMax(numbers);
  assert.strictEqual(result.min, -350);
  assert.strictEqual(result.max, -5);
});
