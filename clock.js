
isSessionMode = true;
let breakLength = 5 * 60;
let sessionLength = 25 * 60



    const breakMinusElement = document.getElementById('break-minus-element')
    const breakElement = document.getElementById('break-element')
    const breakPlusElement = document.getElementById('break-plus-element')
    const sessionMinusElement = document.getElementById('session-minus-element')
    const sessionElement = document.getElementById('session-element')
    const sessionPlusElement = document.getElementById('session-plus-element')
    const timerMinute = document.getElementById('timer-minute')
    const timerSeconds = document.getElementById('timer-seconds')


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