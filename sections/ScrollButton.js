const scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", () => {
  const viewportHeight = window.innerHeight;

  if (window.scrollY > viewportHeight / 2) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});
