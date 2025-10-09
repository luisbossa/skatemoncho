const teamData = [
  {
    image: "/images/skater-1.jpg",
    name: 'Dario "El Darius"',
    birth: "18/10/1999",
    stance: "Regular",
    status: "Pro",
    wIdWrapper: "00fa7643-f9a5-5c97-b32e-f663821dac65",
    wIdImage: "e9949fa6-454c-a3b4-2ce9-89e3148e4136",
  },
  {
    image: "/images/skater-2.jpg",
    name: 'Carlos "Charlie" Ocampo',
    birth: "24/04/1993",
    stance: "Ambos",
    status: "Pro",
    wIdWrapper: "80776fcb-99dc-43dc-2a33-0e65f37576de",
    wIdImage: "80776fcb-99dc-43dc-2a33-0e65f37576df",
  },
  {
    image: "/images/skater-3.jpg",
    name: 'Alex "Niño Rata"',
    birth: "11/08/1999",
    stance: "Goofy",
    status: "Pro",
    wIdWrapper: "69754419-f086-5b5b-3d96-84d142471f9f",
    wIdImage: "69754419-f086-5b5b-3d96-84d142471fa0",
    extraClass: "mobile-hide",
  },
  {
    image: "/images/skater-4.jpg",
    name: 'Ignacio "El Alce"',
    birth: "05/07/1993",
    stance: "Goofy",
    status: "Medio-avanzado",
    wIdWrapper: "00fa7643-f9a5-5c97-b32e-f663821dac65",
    wIdImage: "e9949fa6-454c-a3b4-2ce9-89e3148e4136",
  },
  {
    image: "/images/skater-5.jpg",
    name: "Carlos Montolla",
    birth: "12/06/1993",
    stance: "Goofy",
    status: "Medio",
    wIdWrapper: "80776fcb-99dc-43dc-2a33-0e65f37576de",
    wIdImage: "80776fcb-99dc-43dc-2a33-0e65f37576df",
  },
  {
    image: "/images/skater-6.png",
    name: "Gerald Sánchez",
    birth: "09/18/1996",
    stance: "Goofy",
    status: "Medio-avanzado",
    wIdWrapper: "69754419-f086-5b5b-3d96-84d142471f9f",
    wIdImage: "69754419-f086-5b5b-3d96-84d142471fa0",
    extraClass: "mobile-hide",
  },
  {
    image: "/images/skater-7.png",
    name: '"Nacho" Alpizar',
    birth: "18/10/1999",
    stance: "Regular",
    status: "Sexy",
    wIdWrapper: "00fa7643-f9a5-5c97-b32e-f663821dac65",
    wIdImage: "e9949fa6-454c-a3b4-2ce9-89e3148e4136",
  },
  {
    image: "/images/skater-8.png",
    name: "Marko",
    birth: "19/04/1992",
    stance: "Ambos",
    status: "Pro-Max",
    wIdWrapper: "80776fcb-99dc-43dc-2a33-0e65f37576de",
    wIdImage: "80776fcb-99dc-43dc-2a33-0e65f37576df",
  },
  {
    image: "/images/skater-9.png",
    name: '"Niñopo"',
    birth: "06/07/1986",
    stance: "Goofy",
    status: "Desconocido",
    wIdWrapper: "69754419-f086-5b5b-3d96-84d142471f9f",
    wIdImage: "69754419-f086-5b5b-3d96-84d142471fa0",
    extraClass: "mobile-hide",
  },
];

const homeTeam = document.getElementById(
  "w-node-d4ee54ed-d11a-3788-76ad-3b0bf5aec7d3-cf3ba1e2"
);

homeTeam.innerHTML = teamData
  .map(
    (s) => `
  <div data-w-id="${s.wIdWrapper}" class="w-layout-vflex team-wrapper-hero ${
      s.extraClass || ""
    }">
    <div data-w-id="${s.wIdImage}" class="image-team">
      <div class="image-in-holder">
        <img src="${
          s.image
        }" loading="lazy" style="opacity:1" sizes="(max-width: 640px) 100vw, 640px" alt="Skater" class="cover-image" />
        <div class="image-in-overlay"></div>
      </div>
    </div>
    <div class="w-layout-vflex team-wrapper-bottom">
      <h4 class="text-primary-color">${s.name}</h4>
      <p class="text-white">Fecha de nacimiento: ${s.birth}</p>
      <p class="text-white">Postura: ${s.stance}</p>
      <p class="text-white">Estatus: ${s.status}</p>
    </div>
  </div>
`
  )
  .join("");

if (window.Webflow && Webflow.require) {
  Webflow.require("ix2").init();
}
