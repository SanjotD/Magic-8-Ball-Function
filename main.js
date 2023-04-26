// 8 Ball

// Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let userQuestion = document
    .getElementById("questionInput")
    .value.toLowerCase();
  let answerOutput = document.getElementById("answer");
  let answer = checkQuestion(userQuestion);
  answerOutput.innerHTML = answer;
  if (answer === "") {
    answer = randomResponse();
    answerOutput.innerHTML = answer;
  }
}

// Check Question Function
function checkQuestion(question) {
  if (question === "") {
    return "Please ask a question...";
  } else if (question === "does a magic 8 ball actually work?") {
    return "How dare you doubt me!";
  } else if (question === "is javascript awesome?") {
    return "Of Course!";
  } else {
    return "";
  }
}

// Random Response to Question
function randomResponse() {
  let randNum = Math.random();
  if (randNum < 0.2) {
    return "Without a Doubt.";
  } else if (randNum < 0.4) {
    return "As I see it, yes";
  } else if (randNum < 0.6) {
    return "Concentrate and ask again.";
  } else if (randNum < 0.8) {
    return "Don't count on it.";
  } else {
    return "Outlook not so good.";
  }
}
