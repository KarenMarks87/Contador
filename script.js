let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if (count >= 0){
        document.getElementById('currentNumber').style.color = 'black'
    }

    if (count >= 10) {
        document.getElementById('adicionar').disabled = true;
    } return;
}

     function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if (count <= -1){
        document.getElementById('currentNumber').style.color = 'red'
    }
}

    



