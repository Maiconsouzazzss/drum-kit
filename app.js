

let buttons = document.querySelectorAll('.drum')

for(let i = 0; i < buttons.length; i++){

buttons[i].addEventListener('click', function() {
    
    let buttonInnerHTML = this.innerHTML
  
    makeSounds(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)

})

}
document.addEventListener('keydown', function(event){
        makeSounds(event.key)
        buttonAnimation(event.key)
})

function makeSounds(key) {
            switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
    tom1.play();
            break;
            case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
    tom2.play();
            break;
                    case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
    tom3.play();
            break;
                    case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
    tom4.play();
            break;
                    case 'j':
            let snare = new Audio('./sounds/snare.mp3');
    snare.play();
            break;
                    case 'k':
            let crash = new Audio('./sounds/crash.mp3');
    crash.play();
            break;
                    case 'l':
            let kick = new Audio('./sounds/kick-bass.mp3');
    kick.play();
            break;
            
            default: console.log(key)
    }

}

 let message = document.querySelector('#message')

 function buttonAnimation(currentKey) {

  let activeButton = document.querySelector('.' + currentKey)
 

  if (activeButton) {

    // mensagem
    message.textContent = `Você pressionou: ${currentKey.toUpperCase()}`
    message.style.color = "#f1c40f"

    // animação
    activeButton.classList.add('pressed')

    setTimeout(function() {
      activeButton.classList.remove('pressed')
    }, 100)

        setTimeout(() => {
  message.textContent = ""
}, 1000)

  } else {

    // erro
    message.textContent = "Tecla inválida!"
    message.style.color = "red"

        setTimeout(() => {
  message.textContent = ""
}, 1000)

  }
}