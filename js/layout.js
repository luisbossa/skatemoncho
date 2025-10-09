const header = document.getElementById("header");
const footer = document.getElementById("footer");

document.addEventListener("DOMContentLoaded", () => {
  const filler = document.querySelector(".navbar-filler");

  if (!filler) return;

  window.addEventListener("scroll", () => {
    const triggerPoint = 40;

    if (window.scrollY > triggerPoint) {
      filler.classList.add("visible");
    } else {
      filler.classList.remove("visible");
    }
  });
});

header.innerHTML = `
    <div class="nav-container w-container">
        <div class="nav-menu-wrapper">
            <a href="/" aria-current="page" class="w--current">
                <img src="/images/logo.png" loading="lazy" alt="Logo" width="130" height="60" />
            </a>
            <nav role="navigation" class="nav-menu w-nav-menu">
                <div class="tablet-menu">

                    <a href="/home-1" aria-current="page" class="brand-tablet w-nav-brand w--current">
                        <img src="/images/logo.png" loading="lazy" alt="Resposive logo" width="130" height="60" />
                    </a>

                    <div class="close-menu-button w-nav-button">
                        <img src="/images/close-btn.svg" loading="lazy" alt="icon" class="nav-close-icon" />
                    </div>
                </div>
                <div class="menu-wrap">
                    <a href="/#top" class="nav-link w-nav-link">Inicio</a>
                    <a href="/#videos" class="nav-link w-nav-link">Videos</a>
                    <a href="/#about-us" class="nav-link w-nav-link">Acerca de</a>
                    <a href="/#events" class="nav-link w-nav-link">Eventos</a>
                    <a href="/pages/team.html" class="nav-link w-nav-link">Equipo</a>

                    <div class="tablet-button">
                        <a href="/contact-us" class="primary-button w-button">Ir a tienda</a>
                    </div>
                </div>
            </nav>

            <a href="/contact-us" class="primary-button-navbar">Ir a Tienda</a>

            <div class="menu-button w-nav-button">
                <img src="/images/menu-btn.svg" loading="lazy" alt="icon" height="16" class="image-burger" />
            </div>
        </div>
    </div>

    <div class="navbar-filler" style="opacity:0"></div>
`;

footer.innerHTML = `
    <div class="noise"></div>
        <div class="filler-up"></div>

        <div class="base-container w-container">
            <div class="footer-brand-wrapper">
                <div data-w-id="531ff33f-e072-60f6-f0d4-f1866dca3507" class="footer-logo-wrapper">
                    <h2 class="text-primary-color">skatemoncho magazine</h2>
                </div>

                <div data-w-id="351ce754-cb43-8a7f-e02b-3864b0a1d49d" class="w-layout-vflex right-links-footer">
                    <a href="#top" class="top">Subir</a>
                </div>
            </div>

            <div class="w-layout-grid footer-wrapper">
                <div data-w-id="daf981fd-9b17-a0fb-7466-2c35634f2c86" class="footer-links-wrapper">
                    <a href="/#videos" aria-current="page" class="footer-link w--current">Videos</a>
                    <a href="#" class="footer-link">Privacidad</a>
                </div>
                <div data-w-id="f1c9dfe6-693c-03bc-9527-82b16fd73b45" class="footer-links-wrapper">
                    <a href="/#about-us" class="footer-link">Acerca de</a>
                    <a href="#" class="footer-link">Tienda</a>
                </div>
                <div data-w-id="bef4c04b-e192-7c53-73ac-0c613869c632" class="footer-links-wrapper">
                    <a href="/#events" class="footer-link">Eventos</a>
                    <a href="/pages/team.html" class="footer-link">Equipo</a>
                </div>
                <div data-w-id="daf981fd-9b17-a0fb-7466-2c35634f2c7b" class="footer-social-icons-wrapper">
                    <a href="#" target="_blank" class="footer-link">Instagram</a>
                    <a href="#" target="_blank" class="footer-link">Facebook</a>
                </div>
            </div>

            <div data-w-id="daf981fd-9b17-a0fb-7466-2c35634f2ca5" class="footer-bottom-wrapper">
                <div class="footer-copyright">© 2025, Skatemoncho Magazine</div>
            </div>
        </div>
`;
