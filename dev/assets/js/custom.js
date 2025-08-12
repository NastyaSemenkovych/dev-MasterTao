  const btnBurger = document.querySelector('.hamburger')
  

  btnBurger.addEventListener('click', ()=> {
    btnBurger.classList.toggle('is-active')
  })

  const swiperBanner = new Swiper('.swiper-banner', {

  direction: 'horizontal',
  loop: true,
  spaceBetween: 24,
  
 navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },

  
 
});

const header = document.querySelector('header');
const banner = document.querySelector('.swiper-banner');
const headerHeight = header.offsetHeight

banner.setAttribute('style' , '--header-height:' + headerHeight + 'px')

// const inputCheckBox = document.querySelector('input["type=checkbox"]')

// inputCheckBox.forEach(item => {
//   item.closest('.input-box').classList.add('input-box_checkbox')
  
//   console.log(  item.closest('.input-box'))

// })