// $(document).ready(function(){
//     $('.decisions__carusel').slick();
// });

const slider = tns({
    container: '.decisions__carusel',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

document.querySelector('.Production').addEventListener('click', function () {
    slider.goTo('0');
});

document.querySelector('.FMC').addEventListener('click', function () {
    slider.goTo('1');
});

document.querySelector('.Mallz').addEventListener('click', function () {
    slider.goTo('2');
});

document.querySelector('.Logistic').addEventListener('click', function () {
    slider.goTo('3');
});

document.querySelector('.IT').addEventListener('click', function () {
    slider.goTo('4');
});

document.querySelector('.HR').addEventListener('click', function () {
    slider.goTo('5');
});



