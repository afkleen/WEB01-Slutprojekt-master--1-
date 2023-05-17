const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

document.addEventListener("keydown", (e) => {
  const modals = document.querySelectorAll(".modal.active");

  if (e.key === "Escape") {
    modals.forEach((modal) => {
      closeModal(modal);
    });
  }
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// Get the hamburger menu icon and the navigation menu
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
});
