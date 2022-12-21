
isSessionMode = true;
let breakLength = 5 * 60;
let sessionLength = 25 * 60
let timerId;
let breakId;

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
    const session = document.getElementById('session')

    // Butons

    const playbtn = document.getElementById('play-btn')
    const pausebtn = document.getElementById('pause-btn')
    const resetbtn = document.getElementById('reset-btn')


    //Playbtn

    const updateTimerMin = (length) =>{
        if(Math.floor(length / 60).toString().length === 1){
            timerMinute.textContent = "0" + Math.floor(length / 60)

        }else{
            timerMinute.textContent = Math.floor(length / 60)
        }

        if(Math.floor(length % 60).toString().length === 1){
            timerSeconds.textContent = "0" + Math.floor(length % 60) 

        }else{
            timerSeconds.textContent = Math.floor(length % 60)

        }


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

    // SessionFunc

    const sessionBegins = () =>{
        clearInterval(breakId)
        isSessionMode = true
        session.textContent = "Session"

        timerId = setInterval(() =>{
               sessionLength -= 1;
                updateTimerMin(sessionLength)

                if(sessionLength === 0){
                    breakLength = parseInt(breakElement.textContent, 10) * 60
                    updateTimerMin(breakLength)
                    breakBegins()
                   
                }
                
               

            }, 1000)

    }

    // breakFunc
    const breakBegins = () => {

         clearInterval(timerId)
                    isSessionMode = false
                    session.textContent = "Break"
                    breakId = setInterval(() =>{
                        breakLength -= 1
                       updateTimerMin(breakLength)

                       if(breakLength === 0){
                        sessionLength = parseInt(sessionElement.textContent, 10) * 60
                        updateTimerMin(sessionLength)
                        sessionBegins()
                       }

                    }, 1000)
        
    }

    playbtn.addEventListener('click', () =>{
        if(isSessionMode){
            sessionBegins()
          
        } else{
            breakBegins()
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
        if(breakLength - 60 === 0){
            return;
        }

        breakLength -= 60;
        breakElement.textContent = breakLength / 60

    })

    breakPlusElement.addEventListener('click', () =>{
        breakLength += 60;

        breakElement.textContent = breakLength / 60
    })

    // Session

    sessionMinusElement.addEventListener('click', () => {
        if(sessionLength - 60 === 0){
            return;
        }

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


    
