$(document).ready(function() {

  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#voteLinks').show();
  } else if (age === 18) {
    alert("congratulations you're 18...");
    $('#voteLinks').show();
  } else {
    $('#dontVote').show();
  }
});
