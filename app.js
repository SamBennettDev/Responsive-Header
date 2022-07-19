const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.navigation li');
    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

const app = () => {
    navSlide();
};

app();