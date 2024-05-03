let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2400,
    reset: true
});


sr.reveal('.hero-img',{delay:500, origin: 'top'});
sr.reveal('.hero h6',{delay:600, origin: 'bottom'});
sr.reveal('.hero h1',{delay:700, origin: 'bottom'});
sr.reveal('.hero p',{delay:800, origin: 'top'});
sr.reveal('.hero h3',{delay:900, origin: 'top'});

sr.reveal('.social a',{delay:1100, origin: 'bottom'});
