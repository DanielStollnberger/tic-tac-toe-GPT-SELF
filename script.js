let currentPlayer = 0;

function addXOrO(field) {
    currentPlayer++;
    if (currentPlayer % 2 === 0) {
        currentChooser = field + 'x';
    } else {
        currentChooser = field + 'o';
    }
    document.getElementById(currentChooser).classList.remove('hidden');
    checkWinner();
}


function checkWinner() {
    // Überprüfen der horizontalen Reihen
    const winConditions = [
        ['top-left-x', 'top-middle-x', 'top-right-x'],
        ['middle-left-x', 'middle-middle-x', 'middle-right-x'],
        ['bottom-left-x', 'bottom-middle-x', 'bottom-right-x'],
        ['top-left-o', 'top-middle-o', 'top-right-o'],
        ['middle-left-o', 'middle-middle-o', 'middle-right-o'],
        ['bottom-left-o', 'bottom-middle-o', 'bottom-right-o'],

        // Überprüfen der vertikalen Reihen
        ['top-left-x', 'middle-left-x', 'bottom-left-x'],
        ['top-middle-x', 'middle-middle-x', 'bottom-middle-x'],
        ['top-right-x', 'middle-right-x', 'bottom-right-x'],
        ['top-left-o', 'middle-left-o', 'bottom-left-o'],
        ['top-middle-o', 'middle-middle-o', 'bottom-middle-o'],
        ['top-right-o', 'middle-right-o', 'bottom-right-o'],

        // Überprüfen der diagonalen Reihen
        ['top-left-x', 'middle-middle-x', 'bottom-right-x'],
        ['top-right-x', 'middle-middle-x', 'bottom-left-x'],
        ['top-left-o', 'middle-middle-o', 'bottom-right-o'],
        ['top-right-o', 'middle-middle-o', 'bottom-left-o']
    ];

    // Überprüfen ob eine der Win-Bedingungen erfüllt ist
    for (let condition of winConditions) {
        if (document.getElementById(condition[0]).classList.contains('hidden') === false &&
            document.getElementById(condition[1]).classList.contains('hidden') === false &&
            document.getElementById(condition[2]).classList.contains('hidden') === false) {
            if (document.getElementById(condition[0]).children[0].innerText === document.getElementById(condition[1]).children[0].innerText &&
                document.getElementById(condition[1]).children[0].innerText === document.getElementById(condition[2]).children[0].innerText) {
                setTimeout(winnerTemplate, 1000);
                
            }
        }
    }
}

function winnerTemplate() {
    document.getElementById('winner-div').classList.remove('hidden');
    document.getElementById('winner-div').innerHTML = ` <h3>The winner is X</h3>
                                                        <p>X setzt sich super durch und gewinnt dieses Spiel suverän!</p>
                                                        <button onclick="restartGame()">Neues Spiel</button>`;
}

function restartGame() {
    location.reload();
}