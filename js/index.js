const toggler = document.querySelector(".nav__theme-toggler");
toggler.addEventListener("click", (t) => {
  "light" === document.documentElement.getAttribute("data-theme")
    ? (transition(),
      document.documentElement.setAttribute("data-theme", "dark"))
    : (transition(),
      document.documentElement.setAttribute("data-theme", "light"));
});
let transition = () => {
  document.documentElement.classList.toggle("transition"),
    window.setTimeout(() => {
      document.documentElement.classList.toggle("transition");
    }, 1e3);
};
