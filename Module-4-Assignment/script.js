// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
// see SpeakHello.js and SpeakGoodBye.js
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry",
 "Paula", "Laura", "Jim"];

// loop over the names here
for (var i = 0; i < names.length; i++) {
  //compare the firstLetter using charAt(0) ie: first char
  //to lower, so either J/j can be compared, all converts to j
  var firstLetter = names[i].charAt(0).toLowerCase();

  // if = j invoke bye speaker, else invoke hello speaker

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
