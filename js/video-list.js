document.addEventListener("DOMContentLoaded", () => {
  const videosData = [
    {
      title: "El Darius vuelto loco",
      description: "Dario detonando el skatepark de San Ramón.",
      link: "#",
      image: "/images/img-video-1.jpg",
      video: "/videos/video-1.mp4",
    },
    {
      title: "BS Smith en baranda de Zaragoza",
      description:
        "Skate Lil Aler encendió las calles de Zaragoza, Palmares, con un brutal BS Smith en la baranda — pura técnica.",
      link: "#",
      image: "/images/img-video-2.jpg",
      video: "/videos/video-2.mp4",
    },
    {
      title: "360 nosegrind en Moncho Park",
      description:
        "Darius se tiró un 360 flip nosegrind sólido en el ledge de Moncho Park, puro estilo.",
      link: "#",
      image: "/images/img-video-3.jpg",
      video: "/videos/video-3.mp4",
    },
    {
      title: "Boneless 360 Punk Style",
      description:
        "Pedro rompió la rutina con un boneless 360 lleno de estilo punk en Moncho Park. (sale mal...)",
      link: "#",
      image: "/images/img-video-4.jpg",
      video: "/videos/video-4.mp4",
    },
    {
      title: "Jeffry desata los prohibidos",
      description:
        "Pura locura en cada truco — Jeffry demuestra control total y estilo callejero en cada rincón del parque.",
      link: "#",
      image: "/images/img-video-5.jpg",
      video: "/videos/video-5.mp4",
    },
  ];

  const videoList = document.getElementById("videoList");
  const mainVideo = document.getElementById("mainVideo");

  videosData.forEach((video) => {
    const item = document.createElement("div");
    item.className = "blog-home-item w-dyn-item";
    item.setAttribute("role", "listitem");

    item.innerHTML = `
            <a href="${video.link}" class="blog-home-link w-inline-block" data-video="${video.video}" data-poster="${video.image}">
                <div class="w-layout-grid blog-intro-grid">

                    <div id="w-node-_5fd453cc-3225-ffc4-84f4-c3def8ccc899-cf3ba1e2" class="blog-description-wrapper">
                        <p>${video.description}</p>
                    </div>

                    <div id="w-node-_86d73039-a1ed-30ac-8b89-7223f3e775f8-cf3ba1e2" class="blog-title-wrapper">
                        <h4 class="blog-title">${video.title}</h4>
                    </div>

                    <div id="w-node-_447c5228-717e-0ecc-4391-5b42c1c03448-cf3ba1e2" class="small-blog-image">
                        <img src="${video.image}" loading="lazy" alt="${video.title}" class="cover-image" />
                    </div>

                </div>
                <div data-w-id="b10ece87-f13e-3793-49b6-b3a46c5ac6f7" style="width:0%" class="bottom-line-blog"></div>
            </a>
        `;

    videoList.appendChild(item);

    // Animación tipo Webflow
    requestAnimationFrame(() => {
      item.style.opacity = "1";
      item.style.transition = "opacity 0.6s ease";
    });

    // Click para cambiar video principal y hacer scroll al inicio
    const link = item.querySelector("a.blog-home-link");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const videoSrc = link.dataset.video;
      const posterSrc = link.dataset.poster;

      // Fade out
      mainVideo.style.opacity = "0";

      setTimeout(() => {
        mainVideo.querySelector("source").src = videoSrc;
        mainVideo.poster = posterSrc;
        mainVideo.load();
        mainVideo.play();

        // Fade in
        mainVideo.style.opacity = "1";
      }, 300); // tiempo del fade

      // Scroll suave al inicio de la página
      const topElement = document.getElementById("top");
      if (topElement) {
        topElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Inicializa con el primer video
  mainVideo.querySelector("source").src = videosData[0].video;
  mainVideo.poster = videosData[0].image;
  mainVideo.load();
  mainVideo.play();
});
