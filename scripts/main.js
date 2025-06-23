const buttons = document.querySelectorAll(".question-header");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button
      .closest(".question")
      .querySelector(".question-content");
    const icon = button.querySelector(".expand-icon");
    const isOpen = content.classList.toggle("question-content--open");

    icon.src = isOpen
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";

    icon.alt = isOpen ? "Fold icon" : "Unfold icon";

    button.setAttribute("aria-expanded", isOpen);
  });
});
