var score = 100; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('Soul', btnPress);         // Create a button element
var scr = new Text(score);                    // Create a text element
var button2 = new Button('enemy', btnPress2); // Make a button
button2.hide()
setInterval(btnPress2, 115); 

   

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
let text1   = new Text('You wake up in a dark room');
let text2   = new Text('In front of you is a button labled Souls, and next to it is a Soul counter it says you curently have 100000 souls');
let text3   = new Text('Beyond the button is a dark tunnel');
let text4   = new Text('Suddenly from the darkness auge red scorpion suddenly jumps out and starts attacking the Soul counter');

function btnPress2() {
  score--;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
if(score <= 0) {
  
}
