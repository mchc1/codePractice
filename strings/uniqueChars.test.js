import { allUniqueChars1, allUniqueChars2, allUniqueChars3 } from './uniqueChars.js';

describe('Tests for Strings with All Unique Characters', () => {
    const uniqueStrings = ["abcdefg", "xyz", "123!@#", "AaBbCc"];
  
    uniqueStrings.forEach(str => {
      test(`should return true for unique string: "${str}"`, () => {
        expect(allUniqueChars1(str)).toBe(true);
        expect(allUniqueChars2(str)).toBe(true);
        expect(allUniqueChars3(str)).toBe(true);
      });
    });
  });
  
  describe('Tests for Strings with Duplicate Characters', () => {
    const duplicateStrings = ["hello", "apple", "abca", "abc dea ", "aaaa"];
  
    duplicateStrings.forEach(str => {
      test(`should return false for string with duplicates: "${str}"`, () => {
        expect(allUniqueChars1(str)).toBe(false);
        expect(allUniqueChars2(str)).toBe(false);
        expect(allUniqueChars3(str)).toBe(false);
      });
    });
  });
  
  describe('Tests for Edge Cases (Empty, Single Char)', () => {
    test('should return true for an empty string ""', () => {
      const str = "";
      expect(allUniqueChars1(str)).toBe(true);
      expect(allUniqueChars2(str)).toBe(true);
      expect(allUniqueChars3(str)).toBe(true);
    });
  
    test('should return true for a single character string "a"', () => {
      const str = "a";
      expect(allUniqueChars1(str)).toBe(true);
      expect(allUniqueChars2(str)).toBe(true);
      expect(allUniqueChars3(str)).toBe(true);
    });
  });
  
  describe('Tests for Non-String Inputs', () => {
    const invalidInputs = [null, undefined, 12345, {}, []];
  
    invalidInputs.forEach(input => {
      test(`should handle invalid input gracefully: ${JSON.stringify(input)}`, () => {
        expect(allUniqueChars1(input)).toBe(false);
        expect(allUniqueChars2(input)).toBe(false);
        expect(allUniqueChars3(input)).toBe(false);
      });
    });
  });