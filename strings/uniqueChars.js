import { validateStringInput } from '../utils.js';
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// if able to use additional data structure
export function allUniqueChars1(str1) {
    if (!validateStringInput(str1)) return false;

    const seen = new Set();
    for (let i = 0; i < str1.length; i++) {
        if (seen.has(str1[i])) {
            return false;
        } else {
            seen.add(str1[i]);
        }
    }
    return true;
}

// if not able to use additional data structure - O(n^2)
export function allUniqueChars2(str2) {
    if (!validateStringInput(str2)) return false;

    for (let i = 0; i < str2.length; i++) {
        for (let j = i + 1; j < str2.length; j++) {
            if (str2[i] === str2[j]) {
                return false;
            }
        }
    }
    return true;
}

// if not able to use additional data structure but can use sort - O(n long n)
export function allUniqueChars3(str3) {
    if (!validateStringInput(str3)) return false;

    const charArray = str3.split('');
    charArray.sort();

    for (let i = 0; i < charArray.length - 1; i++) {
        if (charArray[i] === charArray[i+1]) {
            return false;
        }
    }
    return true;
}