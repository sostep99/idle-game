var score = 0;
var message = ("get to 100")
var message2 = ("you got to 100")
postToPage(score); // Print to the page

setInterval(btnPress, 1000);   // Set up a loop
let button3 = new Button('hi', btnPress); // Make a button
button3.hide()


createButton('Button', btnPress);
function btnPress() {
  score = score + 2
  postToPage(score);
  if(score > 10) {
    button3.show();    
             }           // If the score reaches 11, show the button!

}

createButton('Button2', btnPress2);


setInterval(btnPress2, 1000);

function btnPress2() {
  score = score - 1;
  postToPage(score);
}
if(score < 100){
  createText(message);
}

if(score > 10) {
  button3.show();               // If the score reaches 11, show the button!
}




