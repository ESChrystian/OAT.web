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
        ScrollReveal().reveal("#img1, #text1, #tittle1, #dobra1", {
            duration: 1600,
            origin: "bottom",
            distance: "30px",
            delay: 0.5,
            reset: true
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal();

    // Inicializa o ScrollReveal com as configurações desejadas
    sr.reveal('main', {
      duration: 7000, // Duração da animação em milissegundos
      reset: false, // Para que a animação não seja resetada ao sair do viewport
       // Factor para iniciar a animação no viewport
    });
  });

ScrollReveal().reveal('.icon-box', {
    delay:7500
})
ScrollReveal().reveal(".box", {
    duration: 1300,
    origin: "bottom",
    distance: "10px",
    reset: true
})
ScrollReveal().reveal('.logo1', {
    duration: 2000,
    reset: true,
})
ScrollReveal().reveal('.box-1', {
    duration: 1500,
    reset: true,
    origin: "bottom",
    distance: "30px"
});

ScrollReveal().reveal('.box-2', {
    duration: 1500,
    reset: true,
    origin: "bottom",
    distance: "30px"

});
ScrollReveal().reveal('.box-3', {
    duration: 1500,
    reset: true,
    origin: "bottom",
    distance: "30px"

});

new Swiper('.card-wrapper', {

    loop: true,
    spaceBetween: 30,

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


let iconbox = document.querySelector(".icon-box");
let iconboxfade = document.getElementById("icon");
let navbar = document.querySelector(".navbar");

iconbox.addEventListener("click", ()=> {
    navbar.classList.toggle('abrir');
    iconboxfade.style.display = "none";
});


let closebox = document.querySelector(".close");
closebox.addEventListener("click", (e)=>{
    e.preventDefault();
    navbar.classList.toggle("abrir");
    iconboxfade.style.display = "block";
})
