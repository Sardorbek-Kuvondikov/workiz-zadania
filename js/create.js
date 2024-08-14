const elModaNoneBtn = document.querySelector(".js-modal-none-btn");
elModaNoneBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  window.location.pathname = "../index.html";
});
