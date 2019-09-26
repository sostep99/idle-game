var score = 100; // Create a variable to store the score in
var timer = 20;
var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('Soul', btnPress);         // Create a button element
var scr = new Text('Souls: ' + score);                    // Create a text element
var tim = new Text('Timer: ' + timer)
var button2 = new Button('enemy', btnPress2); // Make a button
var button3 = new Button('timer', btnPress3);
var text1   = new Text('You wake up in a dark room ' + 'In front of you is a button labled Souls, and next to it is a Soul counter it says you curently have 100 souls ' + 'Beyond the button is a dark tunnel ' + 'above the tunnel is timer slowly counting towards 0'); 
var text2   = new Text('Suddenly from the darkness auge red scorpion suddenly jumps out and starts attacking the Soul counter ' + 'YOU LOSE -1 SOULS PER SECOND');
var next = false






button2.hide()
button3.hide()
text2.hide()





setInterval(btnPress3, 400); 



function btnPress3() {
  timer--;         // Increase the score
  tim.edit('Timer: ' + timer); // Update the page with the new score
  enemys()

}

function btnPress() {
  score++;         // Increase the score
  scr.edit('Souls: ' + score); // Update the page with the new score
}


var rowSection = new Section('row'); // Create the row to store the columns in
var rowSection2 = new Section('row');
var column1 = new Section('col');    // Create the first column
var column2 = new Section('col');    // Create the second column
rowSection2.add(button);
rowSection.add(column1);  // Add the first column to the row
rowSection.add(column2);  // Add the second column to the row

column1.add(text1);  // Add the text to the first column



function btnPress2() {
  score--;         // Increase the score
  scr.edit(score); // Update the page with the new score
}



function enemys() {
  if(timer == 0 && next == false) {
setInterval(btnPress2, 1000); 
column2.add(text2);
text2.show()
timer = timer + 30
  }
}
