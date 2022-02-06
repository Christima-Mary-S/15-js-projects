const modalButton = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-btn");

modalButton.addEventListener("click", () =>
  modalOverlay.classList.add("open-modal")
);
closeButton.addEventListener("click", () =>
  modalOverlay.classList.remove("open-modal")
);
