window.addEventListener('DOMContentLoaded', function () {

    let showNav = document.querySelector('.open_nav'),
        hideNav = document.querySelector('.close_nav'),
        navUl = document.querySelector('.nav_ul'),
        backgroundNav = document.querySelector('.background_nav');

    showNav.onclick = () => {
        navUl.classList.remove('hide_nav');
        backgroundNav.classList.remove('hide_nav');
        document.body.style.overflow = 'hidden';
    }

    hideNav.onclick = () => {
        navUl.classList.add('hide_nav');
        backgroundNav.classList.add('hide_nav');
        document.body.style.overflow = 'visible';
    }
    
});