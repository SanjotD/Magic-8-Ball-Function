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
    randomResponse();
    answerOutput.innerHTML = answer;
  }
}

// Check Question Function
function checkQuestion(question) {
  if (question === "") {
    return (answer = "Please ask a question...");
  } else if (question === "does a magic 8 ball actually work?") {
    return (answer = "How dare you doubt me!");
  } else if (question === "is javascript awesome?") {
    return (answer = "Of Course!");
  } else {
    return (answer = "");
  }
}

// Random Response to Question
function randomResponse() {
  let randNum = Math.random();
  if (randNum < 0.2) {
    return (answer = "Without a Doubt.");
  } else if (randNum < 0.4) {
    return (answer = "As I see it, yes");
  } else if (randNum < 0.6) {
    return (answer = "Concentrate and ask again.");
  } else if (randNum < 0.8) {
    return (answer = "Don't count on it.");
  } else {
    return (answer = "Outlook not so good.");
  }
}
