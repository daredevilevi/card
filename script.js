"use strict";

const card = document.querySelector("[data-card]");
const submitBtn = document.querySelector("[data-submit-btn]");
const ratingBtn = document.querySelectorAll("[data-rating-btn]");
const ratedValue = document.querySelector("[data-rated-value]");

let lastRatedValue = NaN;

for (let i = 0, len = ratingBtn.length; i < len; i++) {
  ratingBtn[i].addEventListener("click", function () {
    if (lastRatedValue)
      ratingBtn[lastRatedValue - 1].classList.remove("selected");

    lastRatedValue = Number(this.textContent);
    this.classList.add("selected");
  });
}
submitBtn.addEventListener("click", function () {
  if (lastRatedValue) card.classList.add("rated");
  ratedValue.textContent = lastRatedValue;
});
