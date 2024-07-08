document.addEventListener("DOMContentLoaded", function () {
  const aboutMovies = document.querySelectorAll("[data-about-movie]");

  for (let i = 0; i < aboutMovies.length; i++) {
    aboutMovies[i].addEventListener("click", openOrCloseAbout);
  }
});

function openOrCloseAbout(element) {
  const classe = "movies__list__item--is-open";
  const parentElement = element.target.parentNode;
  const aboutElement = parentElement.querySelector(
    ".movies__list__item__about"
  );

  parentElement.classList.toggle(classe);

  const contentHeight = aboutElement.scrollHeight + 24 + "px";

  aboutElement.style.height = parentElement.classList.contains(classe)
    ? contentHeight
    : "0";
}
