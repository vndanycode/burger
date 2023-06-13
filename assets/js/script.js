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
const stylesModal1Burgers = document.getElementById('styles-modal-1-burgers'),
      stylesModal2Burgers = document.getElementById('styles-modal-2-burgers'),
      stylesModal3Burgers = document.getElementById('styles-modal-3-burgers'),
      stylesModal4Burgers = document.getElementById('styles-modal-4-burgers'),
      stylesModal5Burgers = document.getElementById('styles-modal-5-burgers'),
      stylesModal6Burgers = document.getElementById('styles-modal-6-burgers'),
      stylesModal7Burgers = document.getElementById('styles-modal-7-burgers'),
      stylesModal8Burgers = document.getElementById('styles-modal-8-burgers'),
      stylesModal9Burgers = document.getElementById('styles-modal-9-burgers'),
      stylesModal10Burgers = document.getElementById('styles-modal-10-burgers'),
      stylesModal11Burgers = document.getElementById('styles-modal-11-burgers')
const closeMenu = document.getElementById('closeMenu');
const item1Burgers = document.getElementById('item-1-burgers'),
      item2Burgers = document.getElementById('item-2-burgers'),
      item3Burgers = document.getElementById('item-3-burgers'),
      item4Burgers = document.getElementById('item-4-burgers'),
      item5Burgers = document.getElementById('item-5-burgers'),
      item6Burgers = document.getElementById('item-6-burgers'),
      item7Burgers = document.getElementById('item-7-burgers'),
      item8Burgers = document.getElementById('item-8-burgers'),
      item9Burgers = document.getElementById('item-9-burgers'),
      item10Burgers = document.getElementById('item-10-burgers'),
      item11Burgers = document.getElementById('item-11-burgers')
const closeModal1Burgers = document.getElementById('closeModal-1-burgers'),
      closeModal2Burgers = document.getElementById('closeModal-2-burgers'),
      closeModal3Burgers = document.getElementById('closeModal-3-burgers'),
      closeModal4Burgers = document.getElementById('closeModal-4-burgers'),
      closeModal5Burgers = document.getElementById('closeModal-5-burgers'),
      closeModal6Burgers = document.getElementById('closeModal-6-burgers'),
      closeModal7Burgers = document.getElementById('closeModal-7-burgers'),
      closeModal8Burgers = document.getElementById('closeModal-8-burgers'),
      closeModal9Burgers = document.getElementById('closeModal-9-burgers'),
      closeModal10Burgers = document.getElementById('closeModal-10-burgers'),
      closeModal11Burgers = document.getElementById('closeModal-11-burgers');

// if (showMore) {
//   showMore.addEventListener('click', () => {
//     stylesModal.classList.add('modal_opacity');
//   });
// }

// Item Burgers
if (item1Burgers) {
  item1Burgers.addEventListener('click', () => {
    stylesModal1Burgers.classList.add('modal_opacity');
  });
}

if (item2Burgers) {
  item2Burgers.addEventListener('click', () => {
    stylesModal2Burgers.classList.add('modal_opacity');
  });
}

if (item3Burgers) {
  item3Burgers.addEventListener('click', () => {
    stylesModal3Burgers.classList.add('modal_opacity');
  });
}

if (item4Burgers) {
  item4Burgers.addEventListener('click', () => {
    stylesModal4Burgers.classList.add('modal_opacity');
  });
}

if (item5Burgers) {
  item5Burgers.addEventListener('click', () => {
    stylesModal5Burgers.classList.add('modal_opacity');
  });
}

if (item6Burgers) {
  item6Burgers.addEventListener('click', () => {
    stylesModal6Burgers.classList.add('modal_opacity');
  });
}

if (item7Burgers) {
  item7Burgers.addEventListener('click', () => {
    stylesModal7Burgers.classList.add('modal_opacity');
  });
}

if (item8Burgers) {
  item8Burgers.addEventListener('click', () => {
    stylesModal8Burgers.classList.add('modal_opacity');
  });
}

if (item9Burgers) {
  item9Burgers.addEventListener('click', () => {
    stylesModal9Burgers.classList.add('modal_opacity');
  });
}

if (item10Burgers) {
  item10Burgers.addEventListener('click', () => {
    stylesModal10Burgers.classList.add('modal_opacity');
  });
}

if (item11Burgers) {
  item11Burgers.addEventListener('click', () => {
    stylesModal11Burgers.classList.add('modal_opacity');
  });
}







if (closeModal1Burgers) {
  closeModal1Burgers.addEventListener('click', () => {
    stylesModal1Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal2Burgers) {
  closeModal2Burgers.addEventListener('click', () => {
    stylesModal2Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal3Burgers) {
  closeModal3Burgers.addEventListener('click', () => {
    stylesModal3Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal4Burgers) {
  closeModal4Burgers.addEventListener('click', () => {
    stylesModal4Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal5Burgers) {
  closeModal5Burgers.addEventListener('click', () => {
    stylesModal5Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal6Burgers) {
  closeModal6Burgers.addEventListener('click', () => {
    stylesModal6Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal7Burgers) {
  closeModal7Burgers.addEventListener('click', () => {
    stylesModal7Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal8Burgers) {
  closeModal8Burgers.addEventListener('click', () => {
    stylesModal8Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal9Burgers) {
  closeModal9Burgers.addEventListener('click', () => {
    stylesModal9Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal10Burgers) {
  closeModal10Burgers.addEventListener('click', () => {
    stylesModal10Burgers.classList.remove('modal_opacity');
  });
}

if (closeModal11Burgers) {
  closeModal11Burgers.addEventListener('click', () => {
    stylesModal11Burgers.classList.remove('modal_opacity');
  });
}

window.addEventListener('click', (event) => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile && event.target === stylesModal1Burgers) {
    stylesModal1Burgers.classList.remove('modal_opacity');
  }
});

window.addEventListener('touchstart', (event) => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile && event.target === stylesModal1Burgers) {
    stylesModal1Burgers.classList.remove('modal_opacity');
  }
});

