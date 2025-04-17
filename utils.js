export function validateStringInput(input) {
    if (typeof input !== 'string') {
        console.error("Input must be a string.");
        // throw new TypeError("Input must be a string.");
        return false;
    }
    return true;
}
