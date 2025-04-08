(function () {
    var script = document.createElement("script");
    script.src = "https://unpkg.com/scrollreveal";
    script.async = true;
    script.onload = function () {
        iniciarScrollReveal();
    };
    document.head.appendChild(script);
})();

function iniciarScrollReveal() {
    if (typeof ScrollReveal !== "undefined") {
        ScrollReveal().reveal("#img1, #text1, #tittle1, #dobra1, .conteudo", {
            duration: 1600,
            origin: "bottom",
            distance: "30px",
            delay: 0.5,
            reset: true
        });
    }
}
ScrollReveal().reveal('.logo1', {
    duration:2000,
    reset:true,
})
ScrollReveal().reveal('.box-1', { 
    duration: 1500,
    reset:true,
    origin:"bottom",
    distance:"30px"
});

ScrollReveal().reveal('.box-2', { 
    duration: 1500,
    reset:true,
    origin:"bottom",
    distance:"30px"
    
});
ScrollReveal().reveal('.box-3', { 
    duration: 1500,
    reset:true,
    origin:"bottom",
    distance:"30px"
    
});

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};
[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

 new Swiper('.card-wrapper', {

    loop: true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });