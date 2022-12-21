
isSessionMode = true;
let breakLength = 5 * 60;
let sessionLength = 25 * 60
let timerId;

const TWENTYFIVE_MINUTE = 25 * 60;
const FIVE_MINUTE = 5* 60



    const breakMinusElement = document.getElementById('break-minus-element')
    const breakElement = document.getElementById('break-element')
    const breakPlusElement = document.getElementById('break-plus-element')
    const sessionMinusElement = document.getElementById('session-minus-element')
    const sessionElement = document.getElementById('session-element')
    const sessionPlusElement = document.getElementById('session-plus-element')
    const timerMinute = document.getElementById('timer-minute')
    const timerSeconds = document.getElementById('timer-seconds')

    // Butons

    const playbtn = document.getElementById('play-btn')
    const pausebtn = document.getElementById('pause-btn')
    const resetbtn = document.getElementById('reset-btn')


    //Playbtn

    const updateTimer = (length) =>{
         timerMinute.textContent = Math.floor(length / 60)
                timerSeconds.textContent = Math.floor(length % 60)


    }

    // resetfunction
    function resetTimer(){
        isSessionMode = true
        breakLength = FIVE_MINUTE;
        sessionLength = TWENTYFIVE_MINUTE;

        breakElement.textContent = FIVE_MINUTE / 60;
        sessionElement.textContent =TWENTYFIVE_MINUTE / 60

        clearInterval(timerId)

        timerMinute.textContent = TWENTYFIVE_MINUTE / 60
        timerSeconds.textContent = "00"
    }

    playbtn.addEventListener('click', () =>{
        if(isSessionMode){
          timerId = setInterval(() =>{
               sessionLength -= 1;
                updateTimer(sessionLength)
                
               

            }, 1000)
        }


    })

    // pausebtn

    pausebtn.addEventListener('click', () => {

        if(isSessionMode){
            clearInterval(timerId)
        }

    })

    // resetbtn

    resetbtn.addEventListener('click', ()=> {
        resetTimer()
    })

    breakMinusElement.addEventListener('click', () =>{

        breakLength -= 60;
        breakElement.textContent = breakLength / 60

    })

    breakPlusElement.addEventListener('click', () =>{
        breakLength += 60;

        breakElement.textContent = breakLength / 60
    })

    // Session

    sessionMinusElement.addEventListener('click', () => {
        sessionLength -= 60;

        sessionElement.textContent = sessionLength / 60

         if(isSessionMode){
            timerMinute.textContent = sessionLength / 60
        }
    })

    


    sessionPlusElement.addEventListener('click', () => {
        sessionLength += 60;
        sessionElement.textContent = sessionLength / 60

        if(isSessionMode){
            timerMinute.textContent = sessionLength / 60
        }

       
    })


    
