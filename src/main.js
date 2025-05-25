let slideIndex = 1;
let autoSlideInterval
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n)
}

function currentSlide(n){
  showSlides(slideIndex = n)
}

function playAutoSlide(){
autoSlideInterval = setInterval(() => plusSlides(1), 3500)
}

function clearAutoSlide(){
  clearInterval(autoSlideInterval);
}

document.querySelector(".play").addEventListener("click", () => {
clearAutoSlide();
playAutoSlide();
})

document.querySelector(".pause").addEventListener("click", () => {
  clearAutoSlide();
})

document.addEventListener("keydown", (event) => {
  if(event.key === "ArrowLeft"){
    plusSlides(-1)
  }else if(event.key === "ArrowRight"){
    plusSlides(1)
  }
})

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if(n > slides.length){slideIndex = 1};
  if(n < 1){slideIndex = slides.length};
  
  for(i = 0; i < slides.length; i++){
  slides[i].style.display = "none"
  }

  for(i = 0; i < dots.length; i++){
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
