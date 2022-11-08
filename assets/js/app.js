document.addEventListener("DOMContentLoaded", () => {
  let i = 0;
  let time = 5000;
  let srcArray = [
    "img/slider/1.jpg",
    "img/slider/2.jpg",
    "img/slider/3.jpg",
    "img/slider/4.jpg",
    "img/slider/5.jpg",
    "img/slider/6.jpg",
  ];

  setInterval(() => {
    document.slider1.src = srcArray[i];
    i < srcArray.length - 1 ? i++ : (i = 0);
  }, time);
});
