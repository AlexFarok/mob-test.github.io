function menu() {
  $(".main-header__top-row--main-menu").toggleClass("active-main-menu");
}

$("button.main-header__top-row--toggler , .main-menu__header--close-button, .main-menu__item--to-catalog , .main-menu__item--to-account").on("click", menu);


function catalog() {
  $(".catalog-menu").toggleClass("active-catalog-menu");
}

$(".main-menu__item--to-catalog, .catalog-box__catalog-button, .catalog-menu__list--link").on("click", catalog);

function footerCatalog() {
  $(".catalog-list").toggleClass("catalog-list-open");
}

$(".catalog-list-title, .catalog-list__close").on("click", footerCatalog);

function footerAbout() {
  $(".about-list").toggleClass("about-list-open");
}

$(".about-list-title, .about-list__close").on("click", footerAbout);
function footerContacts() {
  $(".contacts-row").toggleClass("contacts-list-open");
}

$(".contacts-list-title, .contacts-list__close").on("click", footerContacts);


$('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true
});