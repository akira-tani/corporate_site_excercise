const target = document.getElementById("nav__menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});
console.log(target);
const nav = document.getElementById("nav");
console.log(nav);