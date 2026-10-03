(function () {
  var sections = document.querySelectorAll(".section");
  var i;

  for (i = 0; i < sections.length; i = i + 1) {
    sections[i].classList.add("reveal");
  }

  function updateReveals() {
    var viewportBottom = window.innerHeight * 0.9;
    var section;
    var rect;

    for (i = 0; i < sections.length; i = i + 1) {
      section = sections[i];
      rect = section.getBoundingClientRect();

      if (rect.top < viewportBottom) {
        section.classList.add("is-visible");
      }
    }
  }

  window.addEventListener("scroll", updateReveals, { passive: true });
  window.addEventListener("resize", updateReveals);
  updateReveals();
})();
