
function gotoSlide(index) {
  const targets = [
    document.querySelector("#header-page"),
    document.querySelector("#section-page"),
    document.querySelector("#ipdc-page"),
    document.querySelector("#results-page")
  ];

  const dots = document.querySelectorAll(".dot");

  targets[index].scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  dots.forEach(function(dot) {
    dot.classList.remove("active");
  });

  dots[index].classList.add("active");
}