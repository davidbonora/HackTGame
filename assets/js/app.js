// Modal Login
const openModal = document.querySelector(".loginButton");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const contentView = document.querySelector(".divButton");

openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal-show");
    contentView.classList.add("dissable");
})
closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal-show");
    contentView.classList.remove("dissable");
})

//Modal SignUp
const openModalSU = document.querySelector(".signUpButton");
const modalSU = document.querySelector(".modalSU");
const closeModalSU = document.querySelector(".modalSU-close");
const contentViewSU = document.querySelector(".divButton");

openModalSU.addEventListener("click", (e)=>{
    e.preventDefault();
    modalSU.classList.add("modalSU-show");
    contentViewSU.classList.add("dissable");
})
closeModalSU.addEventListener("click", (e)=>{
    e.preventDefault();
    modalSU.classList.remove("modalSU-show");
    contentViewSU.classList.remove("dissable");
})
