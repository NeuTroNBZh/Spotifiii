document.addEventListener("DOMContentLoaded", function () {
  const navAlb = document.querySelectorAll(".nav-alb");
  const navbar = document.querySelector(".navbar");

  // Appliquer le script à la partie de navigation du header
  let isMouseDownNavbar = false;
  let startXNavbar;
  let scrollLeftNavbar;

  navbar.addEventListener("mousedown", (e) => {
    isMouseDownNavbar = true;
    startXNavbar = e.pageX - navbar.offsetLeft;
    scrollLeftNavbar = navbar.scrollLeft;
  });

  navbar.addEventListener("mouseup", () => {
    isMouseDownNavbar = false;
  });

  navbar.addEventListener("mouseleave", () => {
    isMouseDownNavbar = false;
  });

  navbar.addEventListener("mousemove", (e) => {
    if (!isMouseDownNavbar) return;
    e.preventDefault();
    const xNavbar = e.pageX - navbar.offsetLeft;
    const walkNavbar = (xNavbar - startXNavbar) * 2; // Ajustez la vitesse du défilement si nécessaire
    navbar.scrollLeft = scrollLeftNavbar - walkNavbar;
  });

  // Appliquer le script à chaque élément avec la classe "nav-alb"
  navAlb.forEach((nav) => {
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    nav.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      startX = e.pageX - nav.offsetLeft;
      scrollLeft = nav.scrollLeft;
    });

    nav.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    nav.addEventListener("mouseleave", () => {
      isMouseDown = false;
    });

    nav.addEventListener("mousemove", (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - nav.offsetLeft;
      const walk = (x - startX) * 2; // Ajustez la vitesse du défilement si nécessaire
      nav.scrollLeft = scrollLeft - walk;
    });
  });
});

function setActive(element) {
  // Supprimer la classe active de tous les boutons de navigation
  var navButtons = document.querySelectorAll(".nav-button");
  navButtons.forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Ajouter la classe active au bouton actuel
  element.classList.add("active");

  // Récupérer l'ID de la section associée au bouton
  var sectionId = element.getAttribute("href").substring(1);

  // Déterminer la hauteur du header
  var headerHeight = document.querySelector("header").offsetHeight;

  // Récupérer la position de la section
  var section = document.getElementById(sectionId);
  var targetPosition = section.getBoundingClientRect().top;

  // Déplacer la page vers la section associée en tenant compte de la hauteur du header
  window.scrollBy({
    top: targetPosition - headerHeight,
    behavior: "smooth",
  });
}
