const clock = document.querySelector("h2#clock");
const year_month = document.querySelector("h2#year_month");

function getClock() {
     const time = new Date();
     const hour = String(time.getHours()).padStart(2,"0");
     const minutes = String(time.getMinutes()).padStart(2,"0");
     const seconds = String(time.getSeconds()).padStart(2,"0");

     let nowTime = `${hour}:${minutes}:${seconds}`;
     clock.innerHTML = nowTime;

     let nowYearMonth = `${time.getFullYear()}/${time.getMonth()+1}/${time.getDate()}`

     year_month.innerHTML = nowYearMonth;
}

getClock();
setInterval(getClock,1000);