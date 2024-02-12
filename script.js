const slides = document.querySelectorAll('.slide')

function clearClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

function slidesPlugin(activeSlide = 2) {
    slides[activeSlide].classList.add('active')
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearClass()
            slide.classList.add('active')
        })
    }
}

slidesPlugin()