/*Game JavaScript Controls

-----------------------------------------------
1. What do you want to make?:
-----------------------------------------------

I want to create a crystal collector where there are four crystals, that will be displayed as buttons.
The player will be shown a random number at the start of the game. 
When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
The player wins if their total score matches the random number from the beginning of the game.
The player losses if their score goes above the random number.

Loop:
The game restarts whenever the playerr wins or loses.
This will result in a score being displayed as a win or loss, and a new random number will be generated.

*/



$(document).ready(function() {

    //Computer picks random nummber that is automatically displayed on page to begin game
    for (var compPick=19; compPick <= 120; compPick++){
        var compPick = Math.floor(Math.random() * 102) + 19; 
        console.log("compPick: " + compPick); 
        $(".randomNumber").html(compPick); 
    }

        // Game begins - score and cyrstal random number generator 0
        function reset () {
            compPick = Math.floor(Math.random() * 102) + 19; 
                console.log("compPick: " + compPick); 
            $(".randomNumber").html(compPick); 
    
            score = 0; 
            $(".scoreDisplay").html(score); 
    
            crystalOne = Math.floor(Math.random() * 12) + 1;  
                console.log("Crystal 1: " + crystalOne); 
            $("#img1").html("<img src=" + "Assets/Images/image1.png" + " value=" + crystalOne + ">"); 
    
            crystalTwo = Math.floor(Math.random() * 12) + 1; 
                console.log("Crystal 2: " + crystalTwo); 
            $("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + crystalTwo + ">"); 
    
            crystalThree = Math.floor(Math.random() * 12) + 1; 
                console.log("Crystal 3: " + crystalThree); 
            $("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + crystalThree + ">");
        
            crystalFour = Math.floor(Math.random() * 12) + 1; 
                console.log("Crystal 4: " + crystalFour); 
            $("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + crystalFour + ">");
    
            $("img").on("click", function () {
                var newScore = score += parseInt($(this).attr("value")); 
                    console.log("New Score: " + newScore); 
                $(".scoreDisplay").html(newScore); 
    
                if(newScore === compPick) { 
                    wins++ ; 
                    $(".wins").html("Wins: " + wins); 
                        console.log("Wins: " + wins); 
                        reset(); 
                } 
    
                else if(newScore > compPick) {
                    losses++ ; 
                    $(".losses").html("Losses: " + losses); 
                        console.log("Losses: " + losses); 
                        reset(); 
                    
                }
            }); 
        }
        


    //Set Each crystal to display random number when selected
	var crystalOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 1: " + crystalOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + crystalOne + ">"); 

	var crystalTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 2: " + crystalTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + crystalTwo + ">"); 

	var crystalThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 3: " + crystalThree); 
		$("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + crystalThree + ">");
	
	var crystalFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 4: " + crystalFour); 
		$("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + crystalFour + ">");
    
        
    //Update scores
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 


    //Function to attach crystals to score
	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 



