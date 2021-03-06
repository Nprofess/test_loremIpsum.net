(function ($) {
  $(document).ready(() => {
    const toggleMenuBtn = $('.main-nav__toggle');
    const nav = $('.main-nav');
    const toggleMenuBtnActiveClass = 'main-nav-toggle--is-toggled';
    const navActiveClass = 'main-nav--is-open';

    toggleMenuBtn.click(function (e) {
      $(this).toggleClass(toggleMenuBtnActiveClass);
      nav.toggleClass(navActiveClass);
    });

    $('.main-nav__link, .page-header__logo').click(() => {
      nav.removeClass(navActiveClass);
      toggleMenuBtn.removeClass(toggleMenuBtnActiveClass);
    });
  });
}(jQuery));

$(function() {
  $('.select-type-program').selectric();
});

$(document).ready(function () {
  $(".attach-file__input").change(function () {
    if (this.files[0]) // если выбрали файл
      $(".attach-file__button span").text(this.files[0].name);
  });
});


const slider = document.getElementById("range");
const output = document.getElementById("range-value");
output.innerHTML = slider.value;

// Обновление текущего значения слайдера
slider.oninput = function () {
  output.innerHTML = this.value;
};

function rangeValue() {
  const rng = document.getElementById("range");
  const span = document.getElementById("range-value");
  span.innerHTML = rng.value;
}
