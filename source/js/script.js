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

const selected = document.querySelector(".select");
const options = document.querySelector(".select__options");
const optionsList = document.querySelectorAll(".select__option");

// document.querySelector(".select").onkeydown = function (e) {
//   if (e.key == " ") {
//     options.classList.toggle("active");
//   }
// };

// document.querySelector(".select__option").onkeydown = function (e) {
//   if (e.key == "Enter") {
//     selected.innerHTML = o.querySelector("label").innerHTML;
//     options.classList.remove("active");
//   }
// };

// optionsList.forEach(o => {
//   o.onkeydown = function (e) {
//     if (e.key == "Enter") {
//     selected.innerHTML = o.querySelector("label").innerHTML;
//     options.classList.remove("active");
//     }
//   }});


selected.addEventListener("click", () => {
  options.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    options.classList.remove("active");

  });
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
};
