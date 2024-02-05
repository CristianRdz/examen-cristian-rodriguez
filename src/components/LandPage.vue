<template>
  <div>
    <section class="hero text-center">
      <div class="container">
        <h1 class="display-4 mt-5">Bienvenido a mi landing Page</h1>
        <p class="lead">
          Soy Cristian Rodriguez Rodriguez y esta es mi landing page
        </p>
        <img
          src="https://picsum.photos/1200/400"
          alt="Hero Image"
          class="img-fluid rounded mt-4"
        />
        <a href="#main-content" class="btn btn-primary btn-lg mt-3"
          >Ir a los elementos del examen</a
        >
      </div>
    </section>

    <section id="main-content" class="container my-5">
      <b-breadcrumb :items="items" class="bg-light p-2 rounded"></b-breadcrumb>
      <h2 class="text-center mb-4">Elementos del examen</h2>
      <div class="row">
        <div class="col-md-12 mb-12">
          <div class="card">
            <img
              src="https://picsum.photos/200/300"
              class="card-img-top"
              height="300"
              
              alt="Característica 1"
            />
            <div class="card-body">
              <h5 class="card-title">Pagina principal</h5>
              <p class="card-text">Aqui podra navegar sobre el formulario y la paginacion</p>
              <b-link to="/principal">Ir a...</b-link>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-center mb-4">Caracteristicas</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="https://picsum.photos/200/300"
              class="card-img-top"
              alt="Característica 1"
            />
            <div class="card-body">
              <h5 class="card-title">Característica 1</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="https://picsum.photos/200/300"
              class="card-img-top"
              alt="Característica 2"
            />
            <div class="card-body">
              <h5 class="card-title">Característica 2</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="https://picsum.photos/200/300"
              class="card-img-top"
              alt="Característica 3"
            />
            <div class="card-body">
              <h5 class="card-title">Característica 3</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-dark text-light text-center py-3">
      <p>
        &copy; 2024 Cristian Rodriguez Rodriguez. Todos los derechos reservados.
      </p>
      <p>Teléfono: 527777909013</p>
      <p>
        GitHub:
        <a href="https://github.com/cristianRdz" class="text-light"
          >cristianRdz</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Landing Page",
          active: true,
        },
      ],
    };
  },
};
</script>

<style>
/* Estilos adicionales para la sección Hero */
.hero {
  background-color: #f8f9fa;
  padding: 60px 0;
}

/* Estilos adicionales para la imagen del héroe */
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
