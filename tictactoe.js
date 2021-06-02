document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid button');
    const playerDisplay = document.querySelector('#player');
    var square1 = document.getElementById('square1');
    var square2 = document.getElementById('square2');
    var square3 = document.getElementById('square3');
    var square4 = document.getElementById('square4');
    var square5 = document.getElementById('square5');
    var square6 = document.getElementById('square6');
    var square7 = document.getElementById('square7');
    var square8 = document.getElementById('square8');
    var square9 = document.getElementById('square9');

    var targetSquare =
    [null, null, null, null, null,null, null, null, null 
        //         square1: "",
        //         square2: "",
        //         square3: "",
        //         square4: "",
        //         square5: "",
        //         square6: "",
        //         square7: "",
        //         square8: "",
        //         square9: ""
    ]


    let currentPlayer = 'playerX'

    squares.forEach(square => {
        square.addEventListener('click', clickOutCome)
    })

    function clickOutCome(e) {
        const squareArray = Array.from(squares)
        console.log("squareArray", squareArray)
        const index = squareArray.indexOf(e.target)
        console.log("index", index)
        console.log("e.target", e.target)
        console.log("im clicked")

        playerDisplay.innerHTML = currentPlayer
        console.log("currentPlayer", currentPlayer)
        if (currentPlayer === 'playerX') {
            squares[index].innerHTML = 'X'
            currentPlayer = 'playerO'
            targetSquare[index] = 'playerX'
        } else {
            squares[index].innerHTML = 'O'
            currentPlayer = 'playerX'
            targetSquare[index] = 'playerO'
        }
        console.log("currentPlayer modified", currentPlayer)
        playerWon()
            // squares.innerText = '${currentPlayer} has won!';
               //square.addEventListener('click', playerWon())
            return
        
        function playerWon() {
            if (targetSquare[0]== currentPlayer){
                if (targetSquare[1]== currentPlayer && targetSquare[2]==currentPlayer) {
                    alert(currentPlayer + " " + "has won");
                    return true;
                }
                if (targetSquare[3] ==currentPlayer && targetSquare[6]==currentPlayer){
                    alert(currentPlayer + " " + "has won");
                    return true;
                }
            }
            if (targetSquare[8]== currentPlayer){
                if (targetSquare[2]== currentPlayer && targetSquare[5]==currentPlayer) {
                    alert(currentPlayer + " " + "has won");
                    return true;
                }
                if (targetSquare[6] ==currentPlayer && targetSquare[7]==currentPlayer){
                    alert(currentPlayer + " " + "has won");
                    return true;
                }
            }
            if (targetSquare[4]== currentPlayer){
                if (targetSquare[1]== currentPlayer && targetSquare[7]==currentPlayer) {
                    alert(currentPlayer + " " + "has won");
                    return true;
                }
                if (targetSquare[3] ==currentPlayer && targetSquare[5]==currentPlayer){
                    alert(currentPlayer + " " + "has won");
                    return true;
                }
                if (targetSquare[2]== currentPlayer && targetSquare[6]==currentPlayer) {
                    alert(currentPlayer + " " + "has won");
                    return true;
                }
                if (targetSquare[0] ==currentPlayer && targetSquare[8]==currentPlayer){
                    alert(currentPlayer + " " + "has won");
                    return true;
                }
            }
        }
        console.log(targetSquare)

        
        
        // var target = "";
        // switch(index) {
        //     case
        // }


        // if (square1 && square2 && square3 === 'playerX'){
        //     alert("PlayerX Won")
        // }
        // else if (square1 && square2 && square3 === 'playerO'){
        //     alert("PlayerO Won")
        // }
        // else if (square4 && square4 && square6 === 'playerX'){
        //     alert("PlayerX Won")
        // }
        // else if (square4 && square5 && square6 === 'playerO'){
        //     alert("PlayerO Won")
        // }
        // else if (square7 && square8 && square9 === 'playerX'){
        //     alert("PlayerX Won")
        // }
        // else if (square7 && square8 && square9 === 'playerO'){
        //     alert("PlayerO Won")
        // }
        // else if (square1 && square5 && square9 === 'playerX'){
        //     alert("PlayerX Won")
        // }
        // else if (square1 && square5 && square9 === 'playerO'){
        //     alert("PlayerO Won")
        // }
        // else if (square3 && square5 && square7 === 'playerX'){
        //     alert("PlayerX Won")
        // }
        // else if (square3 && square5 && square7 === 'playerO'){
        //     alert("PlayerO Won")
        // }
        // else if (square1 && square4 && square7 === 'playerX'){
        //     alert("PlayerX Won")
        // }
        // else if (square1 && square4 && square7 === 'playerO'){
        //     alert("PlayerO Won")
        // }
        // else if (square2 && square5 && square8 === 'playerX'){
        //     alert("PlayerX Won")
        // }
        // else if (square2 && square5 && square8 === 'playerO'){
        //     alert("PlayerO Won")
        // }
        // else if (square3 && square6 && square9 === 'playerX'){
        //     alert("PlayerX Won")
        // }
        // else if (square3 && square6 && square9 === 'playerO'){
        //     alert("PlayerO Won")
        // }
    }
})

