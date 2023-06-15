/* SHOW MENU @ DECLARATION */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* MENU SHOW */
// CREATING A NEW CLASS TO APPEAR IN HTML
// VALIDATE IF CONSTANT EXIST
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* CLOSE or REMOVE SHOW MENU */
// VALIDATE IF CONSTANT EXIST
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
// REMOVE THE MENU BAR WHEN NAV LINK IS CLICKED
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When clicked on each nav__link, remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BG SCROLL HEADER */
function scrollHeader() {
    const header = document.getElementById('header')
    // WILL ADD NEW CLASS TO HEADER SCROLL > 100 VIEWPORT HEIGHT.
    if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* DISCOVER SWIPER */
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  })

/* VIDEO */
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause() {
    if (videoFile.paused) {
        // PLAY VIDEO
        videoFile.play()
        // ICON CHANGE
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // PAUSE VIDEO
        videoFile.pause();
        //CHANGE ICON
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}
videoButton.addEventListener('click', playPause)

function finalVideo() {
    // VIDEO ENDS, ICON CHANGE
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ENDED, WHEN THE VID ENDED
videoFile.addEventListener('ended', finalVideo)

/* SHOW SCROLL UP */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // WHEN SCROLL > 200 VIEWPORT HEIGHT, ADD SHOW SCROLL
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* DARK LIGHT THEME */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// PREVLY SELECTED (IF SELECTED)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// CHANGING INTERFACE BETWEEN DARK @ LIGHT MODE
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// VALIDATE IF THE USER PVELY CHOSE A TOPIC
if (selectedTheme) {
    // IF THE VALIDATION IS FULFILLED -
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// ACTIVATE/DEACTIVATE MANUALLY WITH BUTTON
themeButton.addEventListener('click', () => {
    
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // FOR SAVING THE THEME & THE CURRENT ICON THAT USER CHOSE
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* SCROLl REVEAL */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    //reset: true,
})

sr.reveal(`.home__data, .home__social-link, .home__info,
            .discover__container,
            experience__data, experience__overlay,
            .place__card,
            .sponsor__content,
            .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data,
            .video__description,
            .subscribe__description`, {
    origin: 'left',
})

sr.reveal(`.about__img-overlay,
            .video__content,
            .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

