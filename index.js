function reverseString(word) {
  // Write your algorithm here
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}
function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
/* 
  Add your pseudocode here
1. Accept input in lowercase.
2. create two pointers, pointer1 to start at the begining and pointer2 to start at the end.
3. create a loop while for pointer1 less than or equal to pointer2
4. create an If loop for the characters at pointer1 and pointer2, to return false if the characters are not the same.
5. create an Increment for pointer1 and a decrement for pointer2.
6. Finally If the loop completes successfully it returns false, otherwise it returns true as the string is a palindrome.

reverse the input string
create an array from the input string
reverse the array
create a string from the reversed array
return the reversed string
if the reversed string is the same as the input
  return true
else
  return false

*/

/*
  Add written explanation of your solution here
    Add written explanation of your solution here
  The funtion should iterate through the string and from both ends to see if the characters are the same then returns true 
  if they are the same, otherwise the return will be false

isPalindrome? ("racecar") should return true.
isPalindrome? ("host") should return false.
isPalindrome? ("saas") should return true.
isPalindrome? ("2002") should return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;
