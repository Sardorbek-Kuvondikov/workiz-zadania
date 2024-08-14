// html elements
const elMenuBnt = document.querySelector(".js-menu-btn");
const elMenuText = document.querySelector(".js-menu-text");
const elCreatBtn = document.querySelector(".js-create-btn");
const elNewCreatBtn = document.querySelector(".js-newcreate-btn");
const elModalNoneBtn = document.querySelector(".js-modal-none-btn");
const elForm = document.querySelector(".js-form");

elMenuBnt.addEventListener("mouseover", (evt) => {
  evt.preventDefault();
  elMenuText.classList.remove("hidden");
  arrowTop.classList.remove("hidden");
  arrowBottom.classList.add("hidden");
});

elMenuBnt.addEventListener("mouseout", (evt) => {
  evt.preventDefault();
  elMenuText.classList.add("hidden");
  arrowTop.classList.add("hidden");
  arrowBottom.classList.remove("hidden");
});

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  window.location.pathname = "../create.html";
  elCreatBtn.textContent = "Request is sent";
  elCreatBtn.style.backgroundColor = "#AA4A4B";
});

elNewCreatBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  modal.classList.remove("hidden");
});

// Modal hidden btn
elModalNoneBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  modal.classList.add("hidden");
});

// =====
