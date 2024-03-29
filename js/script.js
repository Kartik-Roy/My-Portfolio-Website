const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY>0);
});

const menu=document.querySelector('#menu-icon');
const navlist=document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const sr=ScrollReveal ({
    distance:'45px',
    duration: 2700,
    reset:true
});

sr.reveal('.home-text',{delay:350,origin:'left'});
sr.reveal('.home-img',{delay:350,origin:'right'});
sr.reveal('.sub-service,.portfolio,.left-container',{delay:200,origin:'right'});
sr.reveal('.about,.skills,.right-continer,.contact',{delay:200,origin:'left'});