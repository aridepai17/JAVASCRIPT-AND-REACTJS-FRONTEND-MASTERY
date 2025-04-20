// Write a regular expression to validate an email address.

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
    return emailRegex.test(email);
}

const testEmails = [
    'BtCtG@example.com',
    'AxLgM@example.com',
    'invalid-email',
];

console.log(validate(testEmails[0])); // true
console.log(validate(testEmails[1])); // true
console.log(validate(testEmails[2])); // false