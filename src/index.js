import "./styles.css";

const deg = 6;
const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const sec = document.querySelector(".sec-hand");

const setClock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
};

// when firsst time loads
setClock();

// Update every 1000 ms
setInterval(setClock, 1000);
