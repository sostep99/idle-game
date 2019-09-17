var score = 0;

postToPage(score); // Print to the page

createButton('Button', btnPress);
changeTitle('Clicker Game');

setInterval(btnPress, 1000);

function btnPress() {
  score = score + 2
  postToPage(score);
}

createButton('Button2', btnPress2);


setInterval(btnPress2, 1000);

function btnPress2() {
  score = score - 1;
  postToPage(score);
}