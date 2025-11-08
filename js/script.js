// Parallax
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  let scroll = window.scrollY;
  hero.style.backgroundPositionY = `${scroll * 0.5}px`;
});

/* PRUEBA */

// Script básico para futuras animaciones o interacciones
document.addEventListener("DOMContentLoaded", () => {
  console.log("Ultra Code - Sección de Planes cargada correctamente");
});
