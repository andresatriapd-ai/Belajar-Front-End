window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(function () {
    loader.classList.add("hide");
    content.classList.add("show");
  }, 1200);
});