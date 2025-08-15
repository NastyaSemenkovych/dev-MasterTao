 const selects = document.querySelectorAll('select')
selects.forEach(item => NiceSelect.bind(item))  
  
//  , {placeholder: 'text'}
  
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

const inputCheckBox = document.querySelectorAll('input[type="checkbox"]');

inputCheckBox.forEach(item => {
  item.closest('.input-box').classList.add('input-box_checkbox')

})


const fileInput = document.querySelector('#calculation-file');
const fileName = document.querySelector('#file-name')

fileInput.addEventListener('change', () => {
   fileName.innerHTML = fileInput.files[0].name;
});


const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length;

const swiperAdvantages = new Swiper('#advantages', {
  spaceBetween: 12,
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enabled: true,
  },
  breakpoints: {
    1025: {
      spaceBetween: 0,
      loop: false,
      slidesPerView: advantagesSlideLength,
      slidesPerGroup: advantagesSlideLength,
      simulateTouch: false,
      pagination: {
        enabled: false,
        el: '.swiper-pagination',
      },
    },
  },
});


const swiper = new Swiper('.swiper', {
  spaceBetween: 12,
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
