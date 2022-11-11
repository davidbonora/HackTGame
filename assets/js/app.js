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
const openModal = document.querySelector(".loginButton");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const contentView = document.querySelector(".divButton");

openModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal-show");
    contentView.classList.add("dissable");
});
closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal-show");
    contentView.classList.remove("dissable");
});

//Modal SignUp
const openModalSU = document.querySelector(".signUpButton");
const modalSU = document.querySelector(".modalSU");
const closeModalSU = document.querySelector(".modalSU-close");
const contentViewSU = document.querySelector(".divButton");

openModalSU.addEventListener("click", (e) => {
    e.preventDefault();
    modalSU.classList.add("modalSU-show");
    contentViewSU.classList.add("dissable");
});
closeModalSU.addEventListener("click", (e) => {
    e.preventDefault();
    modalSU.classList.remove("modalSU-show");
    contentViewSU.classList.remove("dissable");
});
