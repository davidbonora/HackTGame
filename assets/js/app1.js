document.addEventListener("DOMContentLoaded", () => {
  let i = 0;
  let time = 5000;
  // let btn0 = document.querySelector("#btn0");
  // let btn1 = document.querySelector("#btn1");
  // let btn2 = document.querySelector("#btn2");
  // let btn3 = document.querySelector("#btn3");
  // let btn4 = document.querySelector("#btn4");
  // let btn5 = document.querySelector("#btn5");
  let btn = document.getElementsByClassName("btn");
  let srcArray = [
    "img/slider/1.jpg",
    "img/slider/2.jpg",
    "img/slider/3.jpg",
    "img/slider/4.jpg",
    "img/slider/5.jpg",
    "img/slider/6.jpg",
  ];

  setInterval(() => {
    document.querySelector("#slider1").src = srcArray[i];
    i < srcArray.length - 1 ? i++ : (i = 0);
    
  }, time);

  document.querySelector("#btn0").addEventListener("click", (e) => {
    document.querySelector("#slider1").src = srcArray[0];
    i = 0;
    e.target.classList.toggle("solidBtn");
  });
  document.querySelector("#btn1").addEventListener("click", (e) => {
    document.querySelector("#slider1").src = srcArray[1];
    i = 1;
  });
  document.querySelector("#btn2").addEventListener("click", (e) => {
    document.querySelector("#slider1").src = srcArray[2];
    i = 2;
  });
  document.querySelector("#btn3").addEventListener("click", (e) => {
    document.querySelector("#slider1").src = srcArray[3];
    i = 3;
  });
  document.querySelector("#btn4").addEventListener("click", (e) => {
    document.querySelector("#slider1").src = srcArray[4];
    i = 4;
  });
  document.querySelector("#btn5").addEventListener("click", (e) => {
    document.querySelector("#slider1").src = srcArray[5];
    i = 5;
  });
});
