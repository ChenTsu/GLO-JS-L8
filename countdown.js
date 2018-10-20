'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let timerBox  = document.body.getElementsByClassName('timerBox')[0];
  let deaLine   = new Date(2018,9,20),
      timer = deaLine - Date.now();
  
  // console.log(timer.valueOf());
  if (timer > 0) {
    let timerId = setInterval(() => {
      let tmp = [(timer/1000/60/60).toFixed(0), (timer/1000/60%60).toFixed(0), (timer/1000%60).toFixed(0)];

      for (let i=0; i<3; i++){
        if (tmp[i].length === 1){
          tmp[i] = '0' + tmp[i];
        }
      }
      timerBox.textContent = tmp.join(':');
      
      if (timer - 1000 < 0){
        timerBox.textContent = '00:00:00';
        clearInterval(timerId);
      }
      timer -= 1000;
    }, 1000);
  } else {
    timerBox.textContent = '00:00:00';
  }
  
});