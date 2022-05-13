const hourEL = document.getElementById("hours");
const minuteEL = document.getElementById("minutes");
const secondEL = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");
function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h > 12){
        h = h-12;
        ampm= "PM";
    }
    if (h<10){
        h= "0" + h;
    }
    // an other way to write the above lines in a nutshell:
    m= m < 10 ? "0" + m : m;
    s= s < 10 ? "0" + s : s;

    hourEL.innerText=h;
    minuteEL.innerText=m;
    secondEL.innerText=s;
    ampmEL.innerText=ampm;
    //call this function every second:
    setTimeout(()=>{
        clock()
    },1000)


}
clock();