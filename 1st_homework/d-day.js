// d-day 프로그램 설계

// d-day 프로그램 작동원리
// 기준이 되는 날(d-day)을 정하고 d-day의 시간부터 현재 날짜와, 시간(시,분,초)을 빼고,
// 현재 날짜와 시간은 계속 변동되고 변동되는 값을 출력


const countDownDate1 = new Date("Oct 19, 2020 00:00:00").getTime();
const countDownDate2 = new Date("Jan 15, 2021 00:00:00").getTime();
const countDownDate3 = new Date("Mar 30, 2021 00:00:00").getTime();

const start =  document.getElementById("start");
const end =  document.getElementById("end");
const restart =  document.getElementById("restart");

// console.log(start);

const countDownfunction = setInterval(()=>{ 
    calculateDate(countDownDate1,start)
    calculateDate(countDownDate2,end)
    calculateDate(countDownDate3,restart)  
} , 1000);

function calculateDate (countDownDate,timeDisplay) {
    
    const now = new Date().getTime();
    const distance = countDownDate - now
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    timeDisplay.innerHTML = days + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초";
    
    if (distance < 0) {
        clearInterval(countDownfunction);
        timeDisplay.innerHTML = "EXPIRED"
    }
}