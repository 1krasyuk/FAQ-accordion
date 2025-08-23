const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector("img");

  function toggleItem() {
    item.classList.toggle("active");
    icon.src = item.classList.contains("active")
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";
  }

  question.addEventListener("click", toggleItem);
  icon.addEventListener("click", toggleItem);
});
