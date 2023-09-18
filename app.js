//Obtendo referências
const slides = document.querySelectorAll('[data-js="caroussel_igm"]')
const nextBtn = document.querySelector('[data-js="next_button"]')
const prevBtn = document.querySelector('[data-js="prev_button"]')

//variável universal Counter
let correctSlideIndex = 0

//event listeners
//adicionando Listener de evento
nextBtn.addEventListener('click', () => {
  if(correctSlideIndex === slides.length-1){
    correctSlideIndex = 0
  }else{
    correctSlideIndex++
  }

  slides.forEach((slide) => {
     slide.classList.remove('img_visible')
  })

  slides[correctSlideIndex].classList.add('img_visible')
})

prevBtn.addEventListener('click', () => {
  if(correctSlideIndex === 0){
    correctSlideIndex = slides.length-1
  }else{
    correctSlideIndex--
  }

  slides.forEach((slide) => {
   slide.classList.remove('img_visible')
  })

  slides[correctSlideIndex].classList.add('img_visible')
})

