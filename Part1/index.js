// console.log('hello world');

const gameTracking = [];

let topLeft;
let topCenter;
let topRight;
let midLeft;
let midCenter;
let midRight;
let bottomLeft;
let bottomCenter;
let bottomRight;

function play(boxNum){
    const playerSpan = document.getElementById('player');
    const selectedBox = document.getElementById(boxNum);
    
    selectedBox.innerText = playerSpan.innerText;
    gameTracking.splice(boxNum, 0, playerSpan.innerText);

    if(boxNum === 0){topLeft = playerSpan.innerText}
    console.log (topLeft)
    if(boxNum === 1){topCenter = playerSpan.innerText}
    console.log (topCenter)
    if(boxNum === 2){topRight = playerSpan.innerText}
    console.log (topRight)
    if(boxNum === 3){midLeft = playerSpan.innerText}
    console.log (midLeft)
    if(boxNum === 4){midCenter = playerSpan.innerText}
    console.log (midCenter)
    if(boxNum === 5){midRight = playerSpan.innerText}
    console.log (midRight)
    if(boxNum === 6){bottomLeft = playerSpan.innerText}
    console.log (bottomLeft)
    if(boxNum === 7){bottomCenter = playerSpan.innerText}
    console.log (bottomCenter)
    if(boxNum === 8){bottomRight = playerSpan.innerText}
    console.log (bottomRight)

    if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        window.alert('Player ' + topLeft + ' has OBLITERATED the opponent!')
    }
    if(topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft){
        window.alert('Player ' + topLeft + ' has OBLITERATED the opponent!')
    }
    if(topLeft !== undefined && topLeft === midCenter && topLeft === bottomRight){
        window.alert('Player ' + topLeft + ' has OBLITERATED the opponent!')
    }
    if(topCenter !== undefined && topCenter === midCenter && topCenter === bottomCenter){
        window.alert('Player ' + topCenter + ' has OBLITERATED the opponent!')
    }
    if(topRight !== undefined && topRight === midCenter && topRight === bottomLeft){
        window.alert('Player ' + topRight + ' has OBLITERATED the opponent!')
    }
    if(topRight !== undefined && topRight === midRight && topRight === bottomRight){
        window.alert('Player ' + topRight + ' has OBLITERATED the opponent!')
    }
    if(midLeft !== undefined && midLeft === midCenter && midLeft === midRight){
        window.alert('Player ' + midLeft + ' has OBLITERATED the opponent!')
    }
    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        window.alert('Player ' + bottomLeft + ' has OBLITERATED the opponent!')
    }

    let catsGame = true;

    for(i = 0; i < 9; i++){
        if(gameTracking[i] === undefined){
            catsGame = false;
        }
    }
    
    if(catsGame === true){
        window.alert("Cat's game, you all lose!")
    }

    
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
    }else{
        playerSpan.innerText = 'X';
    }
    
    console.log(gameTracking);
}
