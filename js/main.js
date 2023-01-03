const dropdownHeaders = document.querySelectorAll('.dropdown-label');

// for (i = 0; i < dropdown.length; i++) {
//     dropdown[i].addEventListener('click', () => {
//         this.classList.toggle('active');
//     })
// }

dropdownHeaders.forEach(header => {
    header.addEventListener('click', e => {
        header.classList.toggle('active');
        const dropdownBody = header.nextElementSibling;

        if (header.classList.contains('active')) {
            dropdownBody.style.maxHeight = dropdownBody.scrollHeight + 'px';
        } else {
            dropdownBody.style.maxHeight = 0;
        }
    });
})

// for enlarging images

const modalImages = document.querySelector('.modal-imgs');
const modalVideos = document.querySelector('.modal-vids');
const previewsStatic = document.querySelectorAll('.previews img');
const previewVideo = document.querySelectorAll('.previews video');
const fullImage = document.querySelector('.full-img');
const fullVideo = document.getElementById('fullvideo');
const imgText = document.querySelector('.caption');

previewVideo.forEach(preview => {
    preview.load();
});

previewsStatic.forEach(preview => {
    preview.addEventListener('click', () => {
        modalImages.classList.add('open');
        fullImage.classList.add('open');
        const image = preview.getAttribute('src');


        fullImage.src = `${image}`;
    });
});

previewVideo.forEach(preview => {
    preview.addEventListener('click', () => {
        modalVideos.classList.add('open');
        const video = preview.firstElementChild.getAttribute('src');

        fullVideo.firstElementChild.setAttribute('src', video);
        fullVideo.load();
    });
});

modalImages.addEventListener('click', (e) => {
    if(e.target.classList.contains('modals')) {
        modalImages.classList.remove('open');
        fullImage.classList.remove('open');
        fullImage.src = '';
    };
});

modalVideos.addEventListener('click', (e) => {
    if (e.target.classList.contains('modals')) {
        modalVideos.classList.remove('open');
        fullVideo.firstElementChild.setAttribute('src', '');
    };
});

//Handles navigation bar transition
const navBar = document.querySelector('.navbar');
const mobileHamburger = document.querySelector('.mobile-menu');
const navbarLinks= document.querySelector('.buttons');

mobileHamburger.addEventListener('click', () => {
    navBar.classList.toggle('menu-open');
    mobileHamburger.classList.toggle('is-active');
    navbarLinks.classList.toggle('active');
});

// const menuNav = document.querySelector('.navbar-container');
// const menuLinks = document.querySelectorAll('.nav-links');

// document.onreadystatechange = function() {
//     let lScrollPosition = 0;
//     window.addEventListener('scroll', (e) => {

//         lScrollPosition = window.scrollY;

//         if (lScrollPosition> 1) {
//             menuNav.classList.add('scrolled-navbar');
//             for (const links of menuLinks) {
//                 links.classList.add('scrolled-navbar');
//             }
//         } else {
//             menuNav.classList.remove('scrolled-navbar');
//             for (const links of menuLinks) {
//                 links.classList.remove('scrolled-navbar');
//             }
//         }
//     });
// };

// Below is to hide the navbar when user scrolls down, and let it reappear
// when scrolled upwards
var lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScroll >= window.scrollY || navBar.classList.contains('menu-open') || window.scrollY <= 70) {
        document.getElementById('navbar').style.top = "0";
    } else {
        document.getElementById('navbar').style.top = "-100px";
    }
    lastScroll = window.scrollY;
})


/* For displaying experience slideshow */
var currIndex = 0;

// Called whenever the screen is resized
window.onresize = () => {
    showSlide(currIndex);
};

showSlide(0);

function showSlide(n) {

    console.log(`function called ${n}`);

    currIndex = n;
    let slides = document.getElementsByClassName("slides");
    let images = document.getElementsByClassName("experience-img");
    let yellowBar = document.querySelector(".yellow-bar");
    for (var i = 0; i < slides.length; i++) {
        if (i === n) {
            slides[i].style.display = "block";
            images[i].style.filter = "";
            if (window.matchMedia("(max-width: 533px)").matches) {
                yellowBar.setAttribute('style', "left: " + n * 90 + "px;");
            } else {
                yellowBar.setAttribute('style', "top: " + n * 120 + "px;");
            }
        } else {
            slides[i].style.display = "none";
            images[i].style.filter = "grayscale(100%)";
        }
    }
}


