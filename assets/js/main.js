document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', function (event) {
            event.preventDefault();
            menu.classList.toggle('is-open');
        });
    }
});
