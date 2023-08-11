// Problem 1: Reverse a String
// Write a function that takes a string as input and returns the string reversed.

const reverseTheString=(str)=>{
    return  str.split("").reverse().join("");
  }
  
  console.log(reverseTheString("hello World"));

// Problem 2: Check for Palindrome
// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

const isPalindrome=(str)=>{
    const res=str.split("").reverse().join("");
    return (str==res) ? true : false;
}

console.log(isPalindrome("helleh"));
console.log(isPalindrome("user"));

// Problem 3: Count Vowels
// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

const countVowels = (str) => {
    str = str.toLowerCase();
    let counter = 0;
    for (let char of str) {
      if (
        char == "a" ||
        char == "e" ||
        char == "i" ||
        char == "o" ||
        char == "u"
      ) {
        counter++;
      }
    }
    return counter;
  };
  
  console.log(countVowels("aeiou"));
  console.log(countVowels("AEIOU"));
  console.log(countVowels("happy happy"));

//   Problem 4: Longest Word
// Write a function that finds the longest word in a sentence.

const findTheLongestWorld = (str) => {
    const strArrayLength = str.split(" ").map((element) => element.length);
    strArrayLength.sort((a, b) => a - b);
    return strArrayLength[strArrayLength.length - 1];
  };
  
  console.log(findTheLongestWorld("hey buddy how you doing is everyting great"));

//   Problem 5: Title Case a Sentence
// Write a function that converts the first letter of each word in a sentence to uppercase.

