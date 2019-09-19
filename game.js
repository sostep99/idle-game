var score = 1; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop
let button3 = new Button('hi', btnPress); // Make a button
button3.hide()


createButton('Button', btnPress);
function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}
if(score < 100){
  createText(message);
}

if(score > 10) {
  button3.show();               // If the score reaches 11, show the button!
}




