const nav = document.querySelector(".nav-links");
const navToggal = document.querySelector(".mobile-nav-toggle");

navToggal.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggal.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggal.setAttribute("aria-expanded", false);
  }
});
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible");
    console.log(visiblity);
    if (visiblity === "true") {
      nav.setAttribute("data-visible", false);
      navToggal.setAttribute("aria-expanded", false);
    }
  });
});
