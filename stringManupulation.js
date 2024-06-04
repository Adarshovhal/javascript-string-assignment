// stringManipulation.js

// Function to capitalize the first letter of a given string
function capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
}

// Function to capitalize each word in a given sentence
function capitalizeAll(sentence) {
    if (!sentence) return '';
    return sentence.split(' ').map(word => capitalize(word)).join(' ');
}

// Function to check if a given word is part of a given string
function isExist(word, str) {
    if (!word || !str) return false;
    return str.includes(word);
}

// Function to find the number of occurrences of a word/phrase in a given string
function getOccurrenceCount(word, str) {
    if (!word || !str) return 0;
    const regex = new RegExp(word, 'g');
    return (str.match(regex) || []).length;
}

// Function to calculate the word density of a given string
function wordDensity(str) {
    if (!str) return 0;
    const words = str.split(' ');
    const totalWords = words.length;
    const uniqueWords = [...new Set(words)];
    const occurrenceCount = uniqueWords.map(word => getOccurrenceCount(word, str)).reduce((a, b) => a + b, 0);
    return (occurrenceCount / totalWords) * 100;
}

// Function to extract the file extension from a given string representing a file name
function getExt(filename) {
    if (!filename.includes('.')) return null;
    return filename.split('.').pop();
}

// Function to remove all whitespaces from a given string
function removeWhitespace(str) {
    return str.replace(/\s/g, '');
}

// Function to reverse the order of words in a given sentence
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

// Function to count the number of vowels in a given string
function countVowels(str) {
    if (!str) return 0;
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

// Function to check if a given string is a palindrome
function isPalindrome(str) {
    if (!str) return false;
    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Function to truncate a given string to a specified length and append an ellipsis
function truncateString(str, maxLength) {
    if (!str) return '';
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

// Function to mask sensitive information in a string
function maskString(str) {
    // Your implementation for masking sensitive information
}

// Function to validate if a given string is a valid email address
function validateEmail(email) {
    if (!email) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

module.exports = {
    capitalize,
    capitalizeAll,
    isExist,
    getOccurrenceCount,
    wordDensity,
    getExt,
    removeWhitespace,
    reverseWords,
    countVowels,
    isPalindrome,
    truncateString,
    maskString,
    validateEmail
};
