//███████╗░█████╗░░█████╗░██╗░░██╗
//╚════██║██╔══██╗██╔══██╗██║░██╔╝
//░░███╔═╝███████║██║░░╚═╝█████═╝░
//██╔══╝░░██╔══██║██║░░██╗██╔═██╗░
//███████╗██║░░██║╚█████╔╝██║░╚██╗
//╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝ 
// 
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

//menu
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');

});

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');

    });

});

//███████╗░█████╗░░█████╗░██╗░░██╗
//╚════██║██╔══██╗██╔══██╗██║░██╔╝
//░░███╔═╝███████║██║░░╚═╝█████═╝░
//██╔══╝░░██╔══██║██║░░██╗██╔═██╗░
//███████╗██║░░██║╚█████╔╝██║░╚██╗
//╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝ 
// 


