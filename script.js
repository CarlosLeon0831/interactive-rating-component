const mainContainer = document.querySelector(".card__container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rates = document.querySelectorAll(".rate__button");
const rating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  thanksContainer.classList.add("not-hidden");
  mainContainer.classList.remove("not-hidden");
  mainContainer.classList.add("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
