const sw = document.getElementById('StopWatch');
var stopTime = true;
var sec = 0;
var  min = 0;
var  hour = 0;

function startSw(){

 if(stopTime === true){
   stopTime = false;
   counting()
   }
}

function stopSw(){

 if(stopTime === false){
     stopTime = true

    }
}

function resetSw(){
  
  sec = 0;
  min = 0;
  hour = 0;
  stopTime = true 
//   sw.innerHTML = '00:00:00'
}

function counting(){
 if(stopTime != true){
        sec++
    

 if(sec == 60){
     sec = 0
     min++
    }

 if(min == 60){
     min = 0;
     sec = 0;
     hour++
    }

    if(sec < 10){sec = '0' + sec}
    if(min < 10){min = '0' + min}
    if(hour < 10){hour = '0' + hour}

 sw.innerHTML = hour + ":" +  min + ":" +  sec;
                setTimeout(counting(), 1000);
  }
}
 
// function setSmallNumbers(number){
    // if(number < 10){
        // return '0' + number;
    // }
// }


document.addEventListener('click', (e) => {
    var el = e.target;
    if(el.id = 'Start'){startSw()}
    if(el.id = 'Stop'){stopSw()}
    if(el.id = 'Reset'){resetSw()}
})
