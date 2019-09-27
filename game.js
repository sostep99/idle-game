var score = 100; // Create a variable to store the score in
var timer = 20;
var title = new Title('Death will come'); // Create a title element
var button = new Button('Soul', btnPress);         // Create a button element
var scr = new Text('Souls: ' + score);                    // Create a text element
var tim = new Text('Timer: ' + timer)
var button2 = new Button('enemy', btnPress2); // Make a button
var button3 = new Button('timer', btnPress3);
var text1   = new Text('You wake up in a dark room ' + 'In front of you is a button labled Souls, and next to it is a Soul counter it says you curently have 100 souls ' + 'Beyond the button is a dark tunnel ' + 'above the tunnel is timer slowly counting towards 0'); 
var text2   = new Text('Suddenly from the darkness a monster suddenly jumps out and starts attacking the Soul counter ' + 'YOU LOSE SOULS FASTER');
var next = false
var Golum = new Button('Golum: Cost 50 Souls, 1 Soul/sec', btnPress4);
var Holly_water = new Button('Holly Water: Cost 180 Souls, 5 Soul/sec', btnPress5);
var Angel = new Button('Holly Water: Cost 550 Souls, Slows down timer', btnPress6);






button2.hide()
button3.hide()
text2.hide()


function btnPress4() {
  if(score >= 50) {
    score = score - 50
    setInterval(btnPress, 1000);
  }
}
function btnPress5() {
  if(score >= 120) {
    score = score - 120
    setInterval(btnPress, 200);
  }
}
function btnPress6() {
  if(score >= 550) {
    score = score - 50
    setInterval(btnPress2, 1000);
  }
}


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
rowSection2.add(Golum);
rowSection2.add(Holly_water);
rowSection2.add(Angel);
rowSection.add(column1);  // Add the first column to the row
rowSection.add(column2);  // Add the second column to the row

column1.add(text1);  // Add the text to the first column



function btnPress2() {
  score--;         // Increase the score
  scr.edit('Souls: ' + score); // Update the page with the new score
  if(score <= 0) {
  title.edit('YOU LOSE')
  }
}



function enemys() {
  if(timer == 0 && next == false) {
setInterval(btnPress2, 800); 
column2.add(text2);
text2.show()
text1.edit('a monster comes from the darkness')
timer = timer + 30
  }
}
