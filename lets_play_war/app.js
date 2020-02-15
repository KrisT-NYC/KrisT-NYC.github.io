
    let aUsersturns = [];
    let aDealerTurns = [];

    let userScore = 26;
    let dealerScore = 26;

    function getCards() {

        let usercard = Math.floor(Math.random() * 13 + 2);
        console.log(usercard)
        aUsersturns.push(usercard);
        console.log(aUsersturns);

        let usercardoutput = "";
        if(usercard === 11) {
            usercardoutput = "J"
        } else {
            if(usercard === 12) {
                usercardoutput = "Q";
            } else {
                if(usercard === 13) {
                    usercardoutput = "K";
                } else {
                    if(usercard ===14) {
                        usercardoutput = "A";
                    } else {
                        usercardoutput = usercard;
                    }
                }
            }
        }

        document.getElementById("userCardNum").innerHTML = usercardoutput;

        let dealercard = Math.floor(Math.random() * 13 + 2);
        aDealerTurns.push(dealercard);
        console.log(aDealerTurns);

        let dealercardoutput = "";
        if(dealercard === 11) {
            dealercardoutput = "J"
        } else {
            if(dealercard === 12) {
                dealercardoutput = "Q";
            } else {
                if(dealercard === 13) {
                    dealercardoutput = "K";
                } else {
                    if(dealercard ===14) {
                        dealercardoutput = "A";
                    } else {
                        dealercardoutput = dealercard;
                    }
                }
            }
        }

        document.getElementById("dealerCardNum").innerHTML = dealercardoutput;

        // Dealer Chars:
        let dealerChar = Math.floor(Math.random() * 4 + 1);
        console.log("dealerChar " + dealerChar);

        switch(dealerChar) {
            case 1:
                dealerChar = "&hearts;";
                document.getElementById("dealerChar").style.color = "red";
                document.getElementById("dealerbigChar").style.color = "red";
            break;

            case 2:
                dealerChar = "&spades;";
                document.getElementById("dealerChar").style.color = "black";
                document.getElementById("dealerbigChar").style.color = "black";
            break;

            case 3:
                dealerChar = "&diams;";
                document.getElementById("dealerChar").style.color = "red";
                document.getElementById("dealerbigChar").style.color = "red";
            break;

            case 4:
                dealerChar = "&clubs;";
                document.getElementById("dealerChar").style.color = "black";
                document.getElementById("dealerbigChar").style.color = "black";
            break;
        }
        document.getElementById("dealerChar").innerHTML = dealerChar;
        document.getElementById("dealerbigChar").innerHTML = dealerChar;

        // User Chars:
        let userChar = Math.floor(Math.random() * 4 + 1);
        console.log("userChar " + userChar);

        switch(userChar) {
            case 1:
                userChar = "&hearts;";
                document.getElementById("userChar").style.color = "red";
                document.getElementById("userBigChar").style.color = "red";
            break;

            case 2:
                userChar = "&spades;";
                document.getElementById("userChar").style.color = "black";
                document.getElementById("userBigChar").style.color = "black";
            break;

            case 3:
                userChar = "&diams;";
                document.getElementById("userChar").style.color = "red";
                document.getElementById("userBigChar").style.color = "red";
            break;

            case 4:
                userChar = "&clubs;";
                document.getElementById("userChar").style.color = "black";
                document.getElementById("userBigChar").style.color = "black";
            break;
        }
        document.getElementById("userChar").innerHTML = userChar;
        document.getElementById("userBigChar").innerHTML = userChar;


        // Scores:
        if(usercard === dealercard) {
            ifqual();
            document.getElementById("pointer").innerHTML = "=";
        } else {
            if(usercard > dealercard) {
                userScore++;
                dealerScore--;
                document.getElementById("pointer").innerHTML = "►";
            } else {
                if(dealercard > usercard) {
                    dealerScore++;
                    userScore--;
                    document.getElementById("pointer").innerHTML = "◄";
                }
            }
        }

        if(userScore < 10) {
            document.getElementById("userScore").style.color = "red";
        } else {
            document.getElementById("userScore").style.color = "black";
        }

        if(dealerScore < 10) {
            document.getElementById("dealerScore").style.color = "red";
        } else {
            document.getElementById("dealerScore").style.color = "black";
        }

        // Display Scores:
        document.getElementById("dealerScore").innerHTML = dealerScore;
        document.getElementById("userScore").innerHTML = userScore;

        console.log("user score: " + userScore);
        console.log("dealer score: " + dealerScore);

        // Display Turns:
        let dealerTurns = "";
        let i;
        for(i = 0; i < aDealerTurns.length; i++) {
            dealerTurns = dealerTurns + aDealerTurns[i] + ", ";
            document.getElementById("dealerTurns").innerHTML = dealerTurns
        }

        let userTurns = "";
        let j;
        for(j = 0; j < aUsersturns.length; j++) {
            userTurns = userTurns + aUsersturns[j] + ", ";
            document.getElementById("userTurns").innerHTML = userTurns
        }

        checkingscores();
    }

    function ifqual() {
            let usercard = Math.floor(Math.random() * 13 + 2);
            aUsersturns.push(usercard);
            console.log(aUsersturns);

            let dealercard = Math.floor(Math.random() * 13 + 2);
            aDealerTurns.push(dealercard);
            console.log(aDealerTurns);

            if(usercard === dealercard) {
                ifqual();
                document.getElementById("pointer").innerHTML = "=";
            } else {
                if(usercard > dealercard) {
                    userScore = userScore +4;
                    dealerScore = dealerScore -4;
                    document.getElementById("pointer").innerHTML = "►";
                } else {
                    if(dealerScore > userScore) {
                        dealerScore = dealerScore +4;
                        userScore = userScore -4;
                        document.getElementById("pointer").innerHTML = "◄";
                    }
                }
            }
        }


function checkingscores() {

            if(userScore > 29) {
                userScore = 0;
                dealerScore = 0;
                alert("You Win!");

                // $(document).ready(function(){
                //   $("pointer").text(function(){
                //     return "The Dealer Wins";
                //   });
                // });

                // $(#pointer).html("Dealer Wins!!!");
                document.getElementById("pointer").innerHTML = "You Win!!!";
                document.getElementById("mainbtn").disabled = true;
            } else {
                if(dealerScore > 29) {
                    userScore = 0;
                    dealerScore = 0;
                    alert("Dealer Wins!");

                    // $(document).ready(function(){
                    //   $("pointer").text(function(){
                    //     return "The User Wins";
                    //   });
                    // });
                    //
                    // // $(#pointer).html("User Wins!!!");
                    document.getElementById("pointer").innerHTML = "Dealer Wins!";
                    document.getElementById("mainbtn").disabled = true;
                }
            }
        }
