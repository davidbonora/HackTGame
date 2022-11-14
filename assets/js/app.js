let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Modal Login
const openModal = document.querySelectorAll(".loginButton");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const contentView = document.querySelector(".divButton");

for (const element of openModal) {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal-show");
        contentView.classList.add("dissable");
    });
    closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("modal-show");
        contentView.classList.remove("dissable");
    });
}

//Modal SignUp
const openModalSU = document.querySelectorAll(".signUpButton");
const modalSU = document.querySelector(".modalSU");
const closeModalSU = document.querySelector(".modalSU-close");
const contentViewSU = document.querySelector(".divButton");

for (const element of openModalSU) {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        modalSU.classList.add("modalSU-show");
        contentViewSU.classList.add("dissable");
    });
    closeModalSU.addEventListener("click", (e) => {
        e.preventDefault();
        modalSU.classList.remove("modalSU-show");
        contentViewSU.classList.remove("dissable");
    });
}

//Modal Hamburguer
const openModalH = document.querySelector(".hButton");
const modalH = document.querySelector(".hMenuContainer");
const closeModalH = document.querySelector(".buttonClose");
const contentViewH = document.querySelector(".hButton");

openModalH.addEventListener("click", (e) => {
    e.preventDefault();
    modalH.classList.add("hamburguerMenu-show");
    contentViewH.classList.add("dissable");
});
closeModalH.addEventListener("click", (e) => {
    e.preventDefault();
    modalH.classList.remove("hamburguerMenu-show");
    contentViewH.classList.remove("dissable");
});

// Header onScroll webview
let lastScroll = window.scrollY;
const header = document.querySelector(".header-div");
const scrollChange = 10;
const add_class_on_scroll = () => header.classList.add("sticky");

window.addEventListener("scroll", function () {
    lastScroll = window.scrollY;
    if (lastScroll >= scrollChange) {
        add_class_on_scroll();
    }
});