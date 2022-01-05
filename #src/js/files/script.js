$(document).ready(function () {
    $('.team__slider').slick({
        slidesToShow: 4,
        // slidesToScroll: 2,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
});

// $(document).ready(function () {
//     $('.about__slider').slick({
//         rows: 2,
//         slidesPerRow: 2,
//         dots: true,
//         arrows: false,
//         speed: 1500,
//         responsive: [{
//             breakpoint: 992,
//             settings: {
//                 rows: 2,
//                 slidesPerRow: 1,
//             }
//         }]
//     });
// });


// var scrolled;
// window.onscroll = function () {
//     scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrolled > 100) {
//         $(".header").css({
//             "background": "#87509c"
//         })
//     }
//     if (scrolled > 50) {
//         $(".header").css({
//             "height": "100px",

//         })
//         $(".header-menu").css({
//             "padding-top": "25px",
//             "color": "#000",

//         })

//     }

//     if (scrolled < 50) {
//         $(".header").css({
//             "height": "144px",

//         })
//     }
//     if (scrolled > 460) {
//         $(".header").css({ "background": "#17c2a4" })
//         $(".navbar-nav").css({
//             "color": "black",

//         })
//     }
//     if (scrolled > 1270) {
//         $(".header").css({
//             "background": "#e7f1f8",
//         })
//     }

//     if (scrolled > 2790) {
//         $(".header").css({ "background": "#ffdd99" })
//     }
//     if (scrolled > 4230) {
//         $(".header").css({ "background": "#d74680" })
//     }
//     if (scrolled > 5100) {
//         $(".header").css({ "background": "#3c5499" })
//     }

// }
// // const mediaQuery = window.matchMedia(' max-width: 992px ')
// // if (mediaQuery.matches && scrolled > 100) {
// //     $(".header").css({
// //         "height": "100px",
// //         "background": "#87509c"
// //     })


// // }
// if (window.matchMedia("(max-width: 992px)").matches) {
//     $(".header").css({ "background": "#ffdd99" })

// } else {
//     /* the viewport is less than 400 pixels wide */
// }