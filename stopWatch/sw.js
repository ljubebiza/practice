const sw = document.getElementById('StopWatch');
var stopTime = true;
var sec = 0;
var  min = 0;
var  hour = 0;
var time;

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
   
    sw.innerHTML = hour.slice(-2) + ":" +  min.slice(-2) + ":" +  sec;
    time = setTimeout("counting()", 1000);
                   
     }
   }

function startSw(){
   stopTime = false;
   counting();
   
}

function stopSw(){

 if(stopTime === false){
     stopTime = true
     clearTimeout(time)

    }
}

function resetSw(){
  
  sec = 0;
  min = 0;
  hour = 0;
  stopTime = true 

  sw.innerHTML = '00:00:00'
}

 
// function setSmallNumbers(number){
    // if(number < 10){
        // return '0' + number;
    // }
// }
const list = document.getElementById('list')

list.addEventListener('click', (e) => {
    const el = e.target;
    console.log(el)
    if(el.id = 'Stop')stopSw()
    if(el.id = 'Start')startSw()
    // if(el.id = 'Reset')resetSw()
},false)


