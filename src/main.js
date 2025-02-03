window.onload = () => {
  setTimeout(() => {
    document.querySelector(".overlay").style.opacity = "1";
    const content = document.querySelector(".content");
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 1000);
};