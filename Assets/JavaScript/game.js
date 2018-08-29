/*Game JavaScript Controls*/

$(document).ready(function() {

    //Remember FizzBuzz activity 	
    /* var randomNumber =100;
        if (randomNumber %3 === 0 ) {
                if (randomNumber %5 === 0){
                    console.log("fizzbuzz");
                }
            else {
                console.log("fizz");
            }
            }
            else if (randomNumber%5 === 0){
                console.log("buzz");
            }
            else {
                console.log(randomNumber);
            }
        } */


    //Computer picks random nummber that is automatically displayed on page to begin game
    var compPick = Math.floor(Math.random() * 102) + 19; 
    console.log("compPick: " + compPick); 
    $(".randomNumber").html(compPick); 


        // Game begins - score and cyrstal random number generator 0
        function reset () {
            compPick = Math.floor(Math.random() * 102) + 19; 
                console.log("compPick: " + compPick); 
            $(".randomNumber").html(compPick); 
    
            score = 0; 
            $(".scoreDisplay").html(score); 
    
            crystalOne = Math.floor(Math.random() * 12) + 1;  
                console.log("Crystal 1: " + crystalOne); 
            $("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + crystalOne + ">"); 
    
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



