let number1 = document.querySelector(".no1");
let number2 = document.querySelector(".no2");
let number3 = document.querySelector(".no3");

let counter1 =0;
let counter2 =0;
let counter3 =0;

setInterval(()=>{
    if(counter1==90){
        clearInterval();
    }else{
    counter1 += 1;
    number1.innerHTML = counter1 + "%"

    }

},22)

setInterval(()=>{
    if(counter2==75){
        clearInterval();
    }else{
    counter2 += 1;
    number2.innerHTML = counter2 + "%"
    }

},27)

setInterval(()=>{
    if(counter3==65){
        clearInterval();
    }else{
    counter3 += 1;
    number3.innerHTML = counter3 + "%"
    }

},30)
