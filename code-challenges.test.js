// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe('secretWord', ()=>{
    it('returns a string with a coded message', ()=>{
      expect(secretWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(secretWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(secretWord(SecretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
  
  // cool got red


// b) Create the function that makes the test pass.

// Create a function that takes in a string as an argument
// declare vowels as a variable
// input = secretCodeword1, secretCodeWord2, secretCodeWord3
// use a conditional statement stating if the word includes "a", "e", "i", "o" using .includes()
// convert a to 4, e to 3, i to 1, and o to 0
// return output = "L4ck4d41s1c4l", "G0bbl3dyg00k", "3cc3ntr1c" 
// else return string


// const secretWord = (string) => {
//     newArr = string.split("")
//     for (let i=0; i<newArr.length; i++){
//         if (newArr[i].includes("a" || "e" || "i" || "o")){
//             newArr.push(newArr.replace("a", 4), ("e", 3), ("i", 1) ("o", 0))
//         }
//             return newArr.join("")
//     }
// }
// tried to solve it this way^

const secretWord = (string) => {
    if (string.includes("a") || ("e") || ("i") || ("o")){
    var newWord = string.replace(/[aA]/g, '4').replace(/[eE]/g, '3').replace(/[iI]/g, '1').replace(/[oO]/g, '0')
}
return newWord
}

// cool got green

// const secretWord = (string) => {
//    if (string.includes("a", "e", "i", "o")){
//     return secretWord(vowels)
//    }else {
//        return string
//    }
// }


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe('wordsWithAorE', ()=>{
    it('returns an array of only words that contain a and/or e', ()=>{
      expect(wordsWithAorE(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
      expect(wordsWithAorE(arrayOfWords2)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

  //cool got red

// b) Create the function that makes the test pass.

// create a function that takes in an array and a string as an argument
// iterates through the array using filter to remove anything that doesn't contain the value
// determines which words contain either a or e
// catch edgecases using or operator and .touppercase 
// return new array of words that only contain a or e


const wordsWithAorE = (array, string) => {
    let newArr = array.filter(value => {
        return value.includes(string) ||
        value.includes(string.toUpperCase())
    })
    return newArr
}

//cool got green


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe('fullHouse', ()=>{
    it('returns a boolean value if an array is a full house or not', ()=>{
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
  })

  //cool got red

// b) Create the function that makes the test pass.

//create a function that takes in an array
//iterate through array to count instances of a number/value
//use conditional if 3 instances of a number && 2 instances of a number return true
//else return false
//got stuck with this one. I wanted to use an increment to count the instances and then use that to
//create a conditional that would return a boolean value, but after several attempts I couldn't get it. However, I was experimenting with this solution. I did ask for help from fellow classmates that were available (not in 2021d) chat, but those few weren't successful either

    
    const fullHouse = arr => {
        const copy = arr.slice();
        for(let i = 0; i < arr.length; ){
           const el = copy.splice(i, 1)[0]
           if(copy.includes()){
              copy.splice(copy.indexOf(), 1)
              if(copy.includes()){
                 return true;
              }
           }else{
              i++
           }
        }
        return false
     }