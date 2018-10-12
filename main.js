// 1. Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.
   
    //function printInt(n) {
    //var i = 1;
    //while(i <= n) {
    //console.log(i);
    //i = i + 1;
   // }
   //}
  //printInt(20);
    
 //2.Write the function printIntRev(n) taking one parameter n and print all natural numbers in reverse in console(from n to 1.
    
    // let i;
    // for (i = 10; i >= 1; i--) {
    // console.log(i);
    // }

//3. Write the function checkInput(x) taking one parameter x and return the string 'number' if x is a number; return the string 'string' if x is a string; and return boolean if x is a boolean. Otherwise returns -1.

//function checkInput(x) {
    //if (typeof x === "number") {
    //return "number";
 //} else if (typeof x === "string") {
    //return "string";
 //} else if (typeof x === "boolean") {
    // return boolean; 
 //} else {
    //return -1;
 //}
//}
//console.log(checkInput("true"));

//4.Write the function simpleEvenAdding(num taking a number and add up all the even numbers from 1 to num.

//function simpleEvenAdding(num) {
    //var result = 0;
//for (var i = 1; i <= num; i++) {
    //if (i % 2 === 0) {
        //result += i;
   // }
//}
//return result;
//}
//console.log(simpleEvenAdding(15));

//5. Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.

//function letterCapitalize(str) {
   //var splitedArray = str.split(" ");
    //var result = "";
   // for (var i = 0; i < splitedArray.length; i++) 
    //{
    // result += " " + splitedArray[i][0].toUpperCase
       // () + splitedArray[i].slice(1);
//}
    //return result;
//}
//console.log(letterCapitalize("hello my name is Sheila"));

//6. Write the function simpleReverse(str) taking a string and return the string in reversed order.  

//function simpleReverse(str) {
    //var splitedArray = str.split("");
    //var result = "";
    //for (var i = splitedArray.length - 1; i >= 0; 
       // i--) {
     //result += splitedArray[i];
//}
//return result;
//}

//console.log(simpleReverse("Hello Weekend"));

//7.Write the function findDiff(arr) taking and array of numbers as parameter and return the difference between the maximum number and the minimum number (max-min).

//function findDiff(arr) {
    //var max = arr[0];
     //var min = arr[0];

    //for(var i =0; i< arr.length; i++){
    //if(max < arr[i]){
       //max = arr[i];
//}
    //if(min > arr[i]) {
    //min = arr[i];
// } 

//}
//return max - min;
//}

//console.log(findDiff([1, 2, 5, 4, 10, 2]));

//8. Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.

//function timeConvert(num) {
    //var hour = parseInt(num / 60);
    //var min = num % 60;
//return hour + ":" + min;
//}
//console.log(timeConvert(80));

//9. Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.

//function findStr(str, long) {
    //var counter = 0;
    //for(var i = 0; i <= long.length - str.length; i++) {
            //if (long.slice(i, i+ str.length) === str) {
           //counter++;
    //}
//}
//return counter;
//}
//console.log(findStr("ha", "abcde"));

//10. Write the function selfDivingNumbers(left, right) taking two number between them, including the bounds.
 
//function selfDividingNumbers(left, right) {
        //var result = [];
        //for (var i = left; i <= right; i++) {
        //if (selfDividing(i)) {
        //result.push(i);
  // }
//}
   //return result;
//}
   //console.log(selfDividingNumbers(1, 43));

 //function selfDividing(num) {
        //var myArray = num.toString().split("");
       //for (var i = 0; i < myArray.length; i++) {
        //if (num % parseInt(myArray[i]) !== 0) {
        //return false;
        //}
    //}

             //return true;
//}
// console.log(selfDividing(1234));

// 11. Write the function moveZeros(nums)taking and array of numbers and move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//function moveZeros(nums) {  
    //var result = [];
    //var counter = 0;
    //for (var i = 0; i< nums.length; i++) {
    //if (nums[i] === 0) {
        //counter++;
    //} else {
        //result.push(nums[i]);
        //}
    //}
    //while (counter > 0) {
       //result.push(0);
        //counter--;
    //}
    //return result;
//}
//console.log(moveZeros([1, 2, 0, 0, 2, 312, 33, 0, 0]));

// Create an average() fuction that calculates the average of an array of numbers.

//function average(arr) {
//if (arr.length === 0) {
    //return "The input array is empty";
//}  
    //var sum = 0;
    //for (var i = 0; i < arr.length; i++) {
        //sum += arr[i];
//}
//return sum / arr.length;
//}
//console.log(average([2, 4, 6, 12, 6]));
//console.log(average([]));