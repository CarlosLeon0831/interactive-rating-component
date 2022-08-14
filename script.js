const mainContainer = document.querySelector(".card__container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  thanksContainer.classList.add("not-hidden")
  mainContainer.classList.remove("not-hidden");
  mainContainer.classList.add("hidden");
});
