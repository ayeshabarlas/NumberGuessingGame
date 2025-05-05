<script>
      let secnum=61;
      function resetGame() {
        secnum = Math.floor(Math.random() * 100) + 1; // New secret number
        document.getElementById("guess").value = ""; // Reset the input field
        document.getElementById("enterline").textContent = ""; // Clear feedback message
        document.getElementById("click").textContent = "Submit"; // Change button back to "Submit"
    }



       function check(){
        const guess= document.getElementById("guess");
        const hell= document.getElementById("enterline");
        const userGuess = Number(guess.value);
        const buton= document.getElementById("click","enter");


        if(!userGuess || userGuess<1  || userGuess >100){
            hell.textContent= "⛔ Please enter a number between 1 and 100.";
        }
        else if(userGuess == secnum){
        hell.textContent="🎉 Correct! You guessed it! ",+secnum;
    }
    else if(userGuess < secnum){
        hell.textContent="📉 Too low! Try again.";
    }
    else if(userGuess > secnum){
        hell.textContent="📈 Too high! Try again.";
        button.textContent = "Retry";
    }
    setTimeout(() => {
            window.location.reload();
        }, 1000); // Reload after 1 second
      
       }
       document.getElementById("click").addEventListener("click", function() {
        // If the button text is "Retry", reset the game
        if (document.getElementById("click").textContent === "Retry") {
            resetGame();
        } else {
            check();
        }
    });
    document.getElementById("guess").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("click").click();
        }
    });
      


</script>


</body>
</html>
