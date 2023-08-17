
// Overlay js-i start
const navbarIconu = document.querySelector(".fa-bars")
const baglamaqIconu = document.querySelector(".fa-xmark")

navbarIconu.onclick = function() {
  document.querySelector(".overlay").style.width = "100%"
}

baglamaqIconu.onclick = function() {
  document.querySelector(".overlay").style.width = "0"
}
// Overlay js-i finished

// Modal qutu start

const signButonu = document.querySelector(".signin")
const signinBaglamaButonu = document.querySelector(".fa-x")

signButonu.onclick = function() {
  document.querySelector(".modal-qutu").style.width = "100%"
}

signinBaglamaButonu.onclick = function() {
  document.querySelector(".modal-qutu").style.width = "0"
}









// Swiper kod


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }
  });


  const backToTopButton = document.getElementById("backToTopBtn");
const content = document.getElementById("content");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    content.scrollIntoView({ behavior: "smooth" });
});
