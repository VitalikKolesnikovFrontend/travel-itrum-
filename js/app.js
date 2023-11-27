document.addEventListener('DOMContentLoaded', function(event) {
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelector('.business__icon')
  const closeBtn = document.querySelector('.modal__button')
  const registrationTitle = document.querySelector('.registration__title')
  const registrationModal = document.querySelector('.registration__modal')
  let header = document.querySelector('.header')
  let headerH = document.querySelector('.header').clientHeight;
  let navItemOne = document.querySelectorAll('.nav__item')[1];
  let navItemTwo = document.querySelectorAll('.nav__item')[2];
  let navItemThree = document.querySelectorAll('.nav__item')[3];
  let logo = document.querySelector('.logo-light')
  let menuBurger = document.querySelector('.menu__burger');
  let modalMenu = document.querySelector('.modal__menu');
  let heroCards = document.querySelector('.hero__cards');
  let logoMenuBurger = document.querySelector('.menu-burger-icon')
  let logoMobile = document.querySelector('.logo__mobile');
  let businessText = document.querySelector('.business__text');
  let body = document.querySelector('body');
  let reg = document.querySelector('.registration__content')
  let modalItemService = document.querySelector('.modal__menu-item')
  let modalItemCountries = document.querySelector('#modCountries')
  let modalItemTravellers = document.querySelector('#modTravellers')

  
  console.log(businessText);
  
  modalItemTravellers.addEventListener('click', () => {
    body.style.position = '';
    modalMenu.style.display = '';
    header.classList.remove('fixed')
  })

  modalItemCountries.addEventListener('click', () => {
    body.style.position = '';
    modalMenu.style.display = '';
    
  })

  modalItemService.addEventListener('click', () => {
    body.style.position = '';
    modalMenu.style.display = '';
    
  })
  
  menuBurger.addEventListener('click', () => {
    if(modalMenu.style.display === '') {
      modalMenu.style.display = 'flex'
      body.style.position = 'fixed'
      header.classList.add('fixed')
      logo.src = '/img/logo-dark.png' 
      logoMenuBurger.src = '/img/icon_close.png'
      menuBurger.style.background = '#fff'
      logoMenuBurger.style.backgroundColor = 'white'
      logoMobile.src = '/img/logo_mobile 1.png'
    } else {
      modalMenu.style.display = ''
      body.style.position = 'static'
      header.classList.remove('fixed')
      logo.src = '/img/logo-light.png' 
      logoMenuBurger.src = '/img/Menu-icon_tablet.png'
      logoMenuBurger.style.background = '#182044'
      logoMobile.src = '/img/lobo_mobile.svg'
    }
   
  })
  document.onscroll = function () {
    let scroll = window.scrollY;
    if (scroll > headerH) {
      header.classList.add('fixed')
      navItemOne.classList.add('light')
      navItemTwo.classList.add('light')
      navItemThree.classList.add('light')
      logo.src = '/img/logo-dark.png' 
      logoMenuBurger.src = '/img/icon_menu_mobile-light.png'
      logoMenuBurger.style.background = '#fff'
      logoMobile.src = '/img/logo_mobile 1.png'
   
    } else {
      header.classList.remove('fixed')
      navItemOne.classList.remove('light')
      navItemTwo.classList.remove('light')
      navItemThree.classList.remove('light')
      logo.src = '/img/logo-light.png' 
      logoMenuBurger.src = '/img/Menu-icon_tablet.png'
      logoMenuBurger.style.background = '#182044'
      logoMobile.src = '/img/lobo_mobile.svg'
    }
  
  }


  registrationTitle.addEventListener('click', () => {
    registrationModal.classList.toggle('registration__close')
  })

  modalBtn.addEventListener('click', () => {
    modal.classList.remove('modal');
    modal.classList.add('modal__active');
  })

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal__active');
    modal.classList.add('modal');
  })
  businessText.addEventListener('click', () => {
    modal.classList.remove('modal');
    modal.classList.add('modal__active')
  })
  reg.addEventListener('click', () => {
    modal.classList.remove('modal__active');
    modal.classList.add('modal');
  })

})