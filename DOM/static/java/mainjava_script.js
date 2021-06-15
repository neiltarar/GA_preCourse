const number = Math.floor(Math.random()*21)+1;
console.log(number);

let score = 2;

document.querySelector('.check').addEventListener('click', function() {
    
    let usr_guess = Number(document.querySelector('.guess').value);
    console.log(usr_guess);

    if (!usr_guess) {
        document.querySelector('.message').textContent = '🚫 No Number!!!' 
    }
    else if (usr_guess === number) {
        document.querySelector('.message').innerHTML = '🎉 Correct number! 🎉';
    }
    else if (usr_guess < number) {
        if (score > 1) {
        document.querySelector('.message').textContent = '📈 Go Higher';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You Lost You SUCKER!!!';
        }
    }
    else if (usr_guess > number) {
        if (score > 1) {
        document.querySelector('.message').textContent = '📈 Go Lower'; 
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You Lost You SUCKER!!!';
        }
    }
    
});