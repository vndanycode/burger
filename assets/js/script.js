// Swiper Projects
let swiperProjects = new Swiper(".swiper-initialized", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
});

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navMenuRight = document.getElementById('nav-menu-right'),
      MenuTitle = document.getElementById('menu-button'),
      AllBlock = document.getElementById('all-block')
      // MenuTitle = document.getElementById('menu-button')

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu'),
        navToggle.classList.add('nav-toggle-opacity'),
        navMenuRight.classList.add('show-menu-right'),
        AllBlock.classList.add('color-opacity')
    })
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navToggle.classList.remove('nav-toggle-opacity'),
        navMenu.classList.remove('show-menu'),
        navMenuRight.classList.remove('show-menu-right'),
        AllBlock.classList.remove('color-opacity')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('.menu a[href*="#"]');

const scrollToSection = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  const targetOffset = targetSection.offsetTop - 50;

  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth'
  });
};

const handleScroll = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute('id');

    const menuLink = document.querySelector(`.menu a[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      menuLink.classList.add('active__button');
    } else {
      menuLink.classList.remove('active__button');
    }
  });
};

menuLinks.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});

window.addEventListener('scroll', handleScroll);



// Show Scroll Up
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Dark Light Theme 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-cloudy-line' : 'ri-sun-line'


if (selectedTheme) {
  
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-cloudy-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Change Background Header
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// const showMore = document.getElementById('show-more'),
//       collapsedText = document.getElementById('CollapsedText'),
//       stylesModal = document.getElementById('styles-modal'),
//       closeMenu = document.getElementById('closeMenu'),
//       item1 = document.getElementById('item-1'),
//       closeModal = document.getElementById('closeModal')



// if (showMore) {
//     showMore.addEventListener('click', () =>{
//         stylesModal.classList.add('modal_opacity')
        
//     })
// }

// if (item1) {
//     item1.addEventListener('click', () =>{
//         stylesModal.classList.add('modal_opacity')
//     })
// }

// if (closeModal) {
//     closeModal.addEventListener('click', () => {
//         stylesModal.classList.remove('modal_opacity')
//     })
// }

const showMore = document.getElementById('show-more');
const collapsedText = document.getElementById('CollapsedText');
const stylesModal = document.getElementById('styles-modal');
const closeMenu = document.getElementById('closeMenu');
const item1 = document.getElementById('item-1');
const closeModal = document.getElementById('closeModal');

if (showMore) {
  showMore.addEventListener('click', () => {
    stylesModal.classList.add('modal_opacity');
  });
}

if (item1) {
  item1.addEventListener('click', () => {
    stylesModal.classList.add('modal_opacity');
  });
}

if (closeModal) {
  closeModal.addEventListener('click', () => {
    stylesModal.classList.remove('modal_opacity');
  });
}

window.addEventListener('click', (event) => {
  if (event.target === stylesModal) {
    stylesModal.classList.remove('modal_opacity');
  }
});
