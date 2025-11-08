<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ultra Code | Diseño Web Profesional</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Montserrat:wght@700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <a href="../proyecto3/index.html"><img src="img/LOGO.png" alt="Logo" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#benefits">Beneficios</a>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#services">Basicos</a></li>
            <li><a class="dropdown-item" href="servicios.html">Promociones</a></li>
          </ul>
        </li>  
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header
      class="hero d-flex align-items-center justify-content-center text-center"
    >
      <div class="hero-content">
        <h1 class="display-4 fw-bold">
          Tu negocio <span>necesita</span> una web que impacte
        </h1>
        <p class="lead">
          Transformá tu marca en una experiencia digital que venda, conecte e
          inspire.
        </p>
        <a href="#contact" class="btn btn-cta mt-3">Quiero mi web</a>
      </div>
    </header>
    <!-- CARROUSEL -->
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img/2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img/3.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img/4.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <!-- FIN CARROUSEL -->
    <section id="benefits" class="py-5 text-center">
      <div class="container">
        <h2 class="section-title">¿Por qué tener una web profesional?</h2>
        <div class="row mt-4">
          <div class="col-md-4 mb-4">
            <i class="fa-solid fa-globe fa-3x mb-3"></i>
            <h5>Visibilidad 24/7</h5>
            <p>
              Tu negocio siempre disponible para tus clientes, desde cualquier
              lugar y dispositivo.
            </p>
          </div>
          <div class="col-md-4 mb-4">
            <i class="fa-solid fa-bolt fa-3x mb-3"></i>
            <h5>Credibilidad Instantánea</h5>
            <p>
              Transmití confianza y profesionalismo desde el primer segundo.
            </p>
          </div>
          <div class="col-md-4 mb-4">
            <i class="fa-solid fa-chart-line fa-3x mb-3"></i>
            <h5>Más ventas</h5>
            <p>
              Convertí visitantes en clientes reales con un diseño optimizado
              para vender.
            </p>
          </div>
        </div>
      </div>
    </section>
     
    <section id="services" class="py-5">
      <div class="container text-center">
        <h2 class="section-title">Lo que hacemos</h2>
        <div class="row mt-4">
          <div class="col-md-3 mb-4">
            <i class="fa-solid fa-laptop-code fa-2x mb-3"></i>
            <h5>Diseño Web</h5>
            <p>Diseños personalizados y responsivos, hechos para destacar.</p>
          </div>
          <div class="col-md-3 mb-4">
            <i class="fa-solid fa-store fa-2x mb-3"></i>
            <h5>Tiendas Online</h5>
            <p>Desarrollamos e-commerce funcionales que venden 24/7.</p>
          </div>
          <div class="col-md-3 mb-4">
            <i class="fa-solid fa-rocket fa-2x mb-3"></i>
            <h5>Landing Pages</h5>
            <p>
              Paginas diseñadas para campañas publicitarias y captación de
              leads.
            </p>
          </div>
          <div class="col-md-3 mb-4">
            <i class="fa-solid fa-magnifying-glass-chart fa-2x mb-3"></i>
            <h5>SEO Básico</h5>
            <p>Tu web visible en Google desde el primer día.</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="cta-section d-flex align-items-center justify-content-center text-center"
    >
      <div class="overlay"></div>
      <div class="cta-content">
        <h2>Tu negocio merece una web que lo represente</h2>
        <p>
          Es hora de dar el salto digital. Nosotros te ayudamos a hacerlo bien.
        </p>
        <a href="#contact" class="btn btn-cta">Solicitá tu presupuesto</a>
      </div>
    </section>
    <section id="contact" class="py-5 text-center">
      <div class="container">
        <h2 class="section-title">Contactanos</h2>
        <p>Contanos tu idea y te ayudamos a llevarla al siguiente nivel.</p>
        <form
          action="https://formspree.io/f/xblzeqyo"
          method="POST"
          class="contact-form mx-auto text-start"
        >
          <div class="mb-3">
            <label class="form-label text-light">Nombre</label>
            <input
              type="text"
              name="name"
              class="form-control form-dark"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label text-light">Email</label>
            <input
              type="email"
              name="email"
              class="form-control form-dark"
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label text-light">Mensaje</label>
            <textarea
              name="message"
              class="form-control form-dark"
              rows="4"
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
          </div>
          <button class="btn btn-accent w-100" type="submit">Enviar</button>
        </form>
      </div>
    </section>
    <footer class="text-center py-4">
      <p>© 2025 — ULTRA<span>CODE</span> — </p>
    </footer>
    <a href="https://wa.me/5493516618422" class="whatsapp" target="_blank">
      <i class="fab fa-whatsapp"></i>
    </a>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
