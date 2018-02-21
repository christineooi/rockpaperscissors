
function setMessage(msg) {
    var messageEl = document.getElementById("message")
    messageEl.innerHTML = msg;
    if(msg.includes("win")) {
        messageEl.style.color = "white";
    } else {
        messageEl.style.color = "black";
    }
}

function compare(choice1, choice2) {
    // Both choices match
    if (choice1 === choice2) {
        return "It's a tie";
    }
    // Other scenarios
    if (choice1 === "rock") {
        if (choice2 === "scissor") {
            return "rock wins";
        } else { 
            return "paper wins";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else { 
            return "scissors win";
        }
    }
    if (choice1 === "scissor") {
        if (choice2 === "paper") {
            return "scissors win";
        } else { 
            return "rock wins";
        }
    }
}

userClick = function(event) {
    var imgs = event.target
    console.log(imgs.id);
    // Set userChoice based on which image was selected
    var userChoice = imgs.id;

    // Computer makes random choice (0-1)
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }

    // Call compare function to determine who wins and set the message
    var result = compare(userChoice,computerChoice);
    setMessage("You chose " + userChoice + "<br>" + "Computer chose " + computerChoice + "<br>" + result + "!");


  }
  
  var imgs = document.querySelectorAll("img");
  // Add click event listeners for all the images
  for(var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', userClick)
  }
