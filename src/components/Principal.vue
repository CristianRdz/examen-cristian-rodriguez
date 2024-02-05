<template>
    <div class="container">
      <h1>Principal</h1>
      <b-breadcrumb :items="items"></b-breadcrumb>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="https://picsum.photos/200/300"
              class="card-img-top"
              alt="Característica 1"
            />
            <div class="card-body">
              <h5 class="card-title">Formulario de registro</h5>
              <p class="card-text">Este formulario permite registrar autos</p>
              <b-link to="/formulario">Ir a...</b-link>
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
              <h5 class="card-title">Listado de autos</h5>
              <p class="card-text">
                Este listado muestra los autos registrados
              </p>
              <b-link to="/paginacion">Ir a...</b-link>
            </div>
          </div>
        </div>
      </div>
  
  
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        items: [
        {
          text: "Landing Page",
          to: "/",
        },
        {
          text: "Principal",
          to: "/principal",
          active: true,
        },
        ],
      }
    },
  }
  </script>
  