const closeBtn = document.querySelector('#xmark'),
openBtn = document.querySelector('#bars'),
navBar = document.querySelector(".nav");

closeBtn.addEventListener("click", closeNav);
openBtn.addEventListener("click", openNav);

function closeNav() {
    navBar.classList.remove("active");
}

function openNav() {
    navBar.classList.add("active");
}

function autoClose() {
    let navItem = document.querySelectorAll(".nav-item");
    navItem.forEach(item => {
        item.addEventListener("click", autoCloseNav)
    })
}

autoClose();

function autoCloseNav(e) {
    let v = e.target;
    navBar.classList.remove("active")
}