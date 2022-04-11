const clock = document.querySelector(".clock");
const calendar = document.querySelector(".calendar");

function getCalendar() {
    const date = new Date();
    const year = String(date.getFullYear()).padStart(4,"0");
    const month = String(date.getMonth()+1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const week = date.getDay()-1;
    const weekday = ["MON", "TUE", "WED", "THU", "FRY", "SAT", "SUN"];
    calendar.innerText = `${year}. ${month}. ${day}. ${weekday[week]}`;
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");;
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getCalendar();
getClock();
setInterval(getClock, 1000);