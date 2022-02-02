function reverseCharacters(x){
    const splitLetters = x.split('');
    console.log(splitLetters);
    const reverseLetters = splitLetters.reverse();
    console.log(reverseLetters);
    const joinLetters = reverseLetters.join('');
    return joinLetters;
}

console.log(reverseCharacters("Hello I am John . I'm 25 years old."));

function reverseString(){
    const x = prompt()
    return x.split(" ").reverse().join(" ");

}
console.log(reverseString());

/* function reverseLetters(x){
    var splitLetters = x.split('');
    var reverseLetters = splitLetters.reverse();
    var joinLetters = reverseLetters.join('');
    return joinLetters;
}
console.log(reverseLetters('Merhaba benim adim Muammer.'));

function reverseWords(y){
    var splitWords = y.split(' ');
    var reverseWords = splitWords.reverse();
    var joinWords = reverseWords.join(' ');
    return joinWords;
}
console.log(reverseWords('Merhaba benim adim Muammer'));

 */

/* // 1.Yontem 
//function reverseWords(str){
    //var splitWords = str.split('');
    /* console.log(splitWords); */
    //var reverseArray = splitWords.reverse();
    /* console.log(reverseArray); */
    //var joinArray = reverseArray.join('');
    /* console.log(joinArray); */
    //return joinArray;
//}
//console.log(reverseWords('Muammer Tasli cok guzel'));

//1.yontem birlesik yazilmis hali
/* function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
 */

//2.Yontem
/* function reverseString(str) {
                                  // Step 1. Create an empty string that will host the new created string
    var newString = ""; */
 
                                  // Step 2. Create the FOR loop
                                  // The starting point of the loop will be (str.length - 1) which corresponds to the 
                                  //  last character of the string, "o"
                                 //   As long as i is greater than or equals 0, the loop will go on
                                 //   We decrement i after each iteration */
   /*  for (var i = str.length - 1; i >= 0; i--) { 
    newString += str[i];        // or newString = newString + str[i];
    } */                        
    // Here hello's length equals 5
    //    For each iteration: i = str.length - 1 and newString = newString + str[i]
    //    First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
    //    Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
    //    Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
    //    Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
    //    Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    // End of the FOR Loop
 
    // Step 3. Return the reversed string
    /* return newString; 
}
 
console.log(reverseString('hi')); 

var s = [] */


/* function reverseWords(str){
    var splitWords = str.split('');
    var reverseArray = splitWords.reverse();
    var joinArray = reverseArray.join('');
    return joinArray;
}
console.log(reverseWords('Muammer Tasli cok guzel')); */

/* function reverseLetters(x){
    var splitLetters = x.split('');
    var reverseLetters = splitLetters.reverse();
    var joinLetters = reverseLetters.join('');
    return joinLetters;
}
console.log(reverseLetters('Merhaba benim adim Muammer.')); */

/* 
function reverseCharacters(x){
    const splitLetters = x.split(' ');
    console.log(splitLetters);
    const reverseLetters = splitLetters.reverse();
    console.log(reverseLetters);
    const joinLetters = reverseLetters.join(' ');
    return joinLetters;

}
console.log(reverseCharacters("Hello I am John. I'm 25 years old.")); */



function reverseString() {
    const x = prompt()
    console.log(x.split(" ").reverse().join('_'));
    
}
console.log(reverseString()); //jenerik kod