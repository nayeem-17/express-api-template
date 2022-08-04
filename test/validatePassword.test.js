const { validatePassword } = require("../services/validator");

test('return false for empty password', () => {
    expect(validatePassword("")).toBe(false);
})

test('return false for password without chars', () => {
    expect(validatePassword("345678878")).toBe(false);
})

test('return false for password without numbers', () => {
    expect(validatePassword("dasefeaea")).toBe(false);
})

test('return false for password less than 8 chars', () => {
    expect(validatePassword("45fcvb6")).toBe(false);
})

test('return true for valid password', () => {
    expect(validatePassword("6ty86ybd")).toBe(true);
})

// test('should false for empty password', () => {
//     expect(validatePassword("")).toBe(false);
// })

// test('should false for empty password', () => {
//     expect(validatePassword("")).toBe(false);
// })

// test('should false for empty password', () => {
//     expect(validatePassword("")).toBe(false);
// })

// test('should false for empty password', () => {
//     expect(validatePassword("")).toBe(false);
// })

// test('should false for empty password', () => {
//     expect(validatePassword("")).toBe(false);
// })

