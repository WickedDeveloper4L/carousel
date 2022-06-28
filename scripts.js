window.onload = function () {
  const hamburger = document.querySelector('.hamburger');
  const mobilenav = document.querySelector('.mobilemenu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobilenav.classList.toggle('is-mobile');
  })

  const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        autoplay: {
            delay: 4000,
          },
        effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
 });

}