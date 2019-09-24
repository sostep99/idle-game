var score = 100; // Create a variable to store the score in
var timer = 20;
var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('Soul', btnPress);         // Create a button element
var scr = new Text(score);                    // Create a text element
var button2 = new Button('enemy', btnPress2); // Make a button
var button3 = new Button('timer', btnPress3);
var tim = new Text(timer)
button2.hide()
button3.hide()


setInterval(btnPress3, 1000); 



function btnPress3() {
  timer--;         // Increase the score
  tim.edit(timer); // Update the page with the new score
  scorpion()
}

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
}
let text1   = new Text('You wake up in a dark room');
let text2   = new Text('In front of you is a button labled Souls, and next to it is a Soul counter it says you curently have 100000 souls');
let text3   = new Text('Beyond the button is a dark tunnel');
let text4   = new Text('above the tunnel is timer slowly counting towards 0');




function btnPress2() {
  score--;         // Increase the score
  scr.edit(score); // Update the page with the new score
}

function scorpion() {
  if(timer == 0) {
setInterval(btnPress2, 1000); 
let text5   = new Text('Suddenly from the darkness auge red scorpion suddenly jumps out and starts attacking the Soul counter');
let text6   = new Text('YOU LOSE -1 SOULS PER SECOND');
  }
}