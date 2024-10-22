console.log('Primi passi col DOM');



let accesa = false;

    const myButton = document.getElementById('switch');
    myButton.addEventListener('click', accendiLampadina);

    function accendiLampadina() {
        const myLamp = document.getElementById('lamp');

        if (accesa === false) {
            myLamp.src = './img/yellow_lamp.png';
            myButton.innerText = 'Spegni';
            accesa = true;
        } else {
            myLamp.src = './img/white_lamp.png';
            myButton.innerText = 'Accendi'; 
            accesa = false;
        }
    }
