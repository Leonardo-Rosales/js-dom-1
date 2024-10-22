console.log('Primi passi col DOM');



let accesa = false;

    const myButton = document.getElementById('switch');
    myButton.addEventListener('click', accendiLampadina);

    function accendiLampadina() {
        const myLamp = document.getElementById('lamp');

        if (accesa === false) {
            myLamp.src = './img/yellow_lamp.png';
        }
    }
