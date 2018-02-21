
function setMessage(msg) {
    var messageEl = document.getElementById("message");
    messageEl.innerHTML = msg;
}

// Sets the message of who wins or if there is a tie.
// Takes in a number 1,2,or 3
// 1 means the user wins; 2 means the computer wins, and 3 means there is a tie
function setWhoWinsMsg(num) {
    var whoWinsMsgEl = document.getElementById("whoWinsMgs");
    if(num === 1) {
        whoWinsMsgEl.innerHTML = "You Win!";
        whoWinsMsgEl.classList.add("flashit");
    } else if(num === 2) {
        whoWinsMsgEl.innerHTML = "Computer Wins!";
        whoWinsMsgEl.classList.remove("flashit");
    } else if(num === 3) {
        whoWinsMsgEl.innerHTML = "It's a tie!";
        whoWinsMsgEl.classList.remove("flashit");
    } 
}

function compare(choice1, choice2) {
    var msgStr = "";
    // Both choices match
    if (choice1 === choice2) {
        msgStr = "";
        setWhoWinsMsg(3);
        return msgStr;
    }
    // Other scenarios
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            msgStr = "rock beats scissors";
            setWhoWinsMsg(1);
            return msgStr;
        } else { 
            msgStr = "paper beats rock";
            setWhoWinsMsg(2);
            return msgStr;
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            msgStr = "paper beats rock";
            setWhoWinsMsg(1);
            return msgStr;
        } else { 
            msgStr = "scissors beats paper";
            setWhoWinsMsg(2);
            return msgStr;
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            msgStr = "scissors beats paper";
            setWhoWinsMsg(1);
            return msgStr;
        } else { 
            msgStr = "rock beats scissors";
            setWhoWinsMsg(2);
            return msgStr;
        }
    }
}

userClick = function(event) {
    var imgs = event.target
    // console.log(imgs.id);
    // Set userChoice based on which image was selected
    var userChoice = imgs.id;

    // Computer makes random choice (0-1)
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // Call compare function to determine which item wins and 
    // set the message on what user chose, what computer chose
    var result = compare(userChoice,computerChoice);
    setMessage("You chose " + userChoice + "<br>" + "Computer chose " + computerChoice + "<br>" + result);


  }
  
  var imgs = document.querySelectorAll("img");
  // Add click event listeners for all the images
  for(var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', userClick)
  }
