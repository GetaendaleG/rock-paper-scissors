let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
};
function updateMove(playerMove,computerMove){
    document.querySelector('.js-moves').innerHTML=`
     you
    <img class="move-icon" src="${playerMove}-emoji.png" alt="">
    <img class="move-icon" src="${computerMove}-emoji.png" alt="">
    computer
    `
}
function updateResult(result){
    document.querySelector('.js-result').innerHTML=result
}    
updateScore();
function updateScore(){
    document.querySelector('.js-score')
.innerHTML = `win: ${score.win} lose: ${score.lose} tie: ${score.tie}`
}
function reset(){
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    updateScore();
}        
function playGame(playerMove){
    let result='';
    const computerMove = pickComputerMove();
    if(playerMove==='rock'){
        if(computerMove === 'rock'){
            result = 'tie';
            score.tie++;
        } else if(computerMove==='paper'){
            result = 'You lose.';
            score.lose++;
        } else if (computerMove==='scissor'){
            result = 'You win.';
            score.win++;
        }
        localStorage.setItem('score',JSON.stringify(score));
        } 
    if(playerMove==='paper'){
        if(computerMove === 'rock'){
        result = 'You win';
        score.win++;
        } else if(computerMove==='paper'){
            result = 'Tie';
            score.tie++;
        } else if (computerMove==='scissor'){
            result = 'You lose';
            score.lose++;
        }

        localStorage.setItem('score',JSON.stringify(score));               
    }
    if(playerMove==='scissor'){
        if(computerMove === 'rock'){
        result = 'You lose';
        score.lose++;
    } else if(computerMove==='paper'){
        result = 'You win.';
        score.win++;
    } else if (computerMove==='scissor'){
        result = 'tie.';
        score.tie++;
    }
    localStorage.setItem('score',JSON.stringify(score));
        }
    updateScore();
    updateResult(result);
    updateMove(playerMove,computerMove);
    }
    
function pickComputerMove(){
    let computerMove = '';
    const randomNumber = Math.random();
    let result = '';
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove = 'rock';
    } else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove= 'paper';
    } else{
        computerMove = 'scissor';
    }
    return computerMove;
    }
    