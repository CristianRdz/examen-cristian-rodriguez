<script setup>

</script>

<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">Landing Page</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>Usuario</em>
              </template>
              <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="row mt-1">
      <div class="col-3">
        <b-nav vertical class="pt-5 bg-light border-right" variant="pills">
          <b-nav-item class="px-3 py-2">
            <b-link :to="{ name: 'principal' }" class="text-dark">
              <i class="fas fa-edit me-2"></i> Principal
            </b-link>
          </b-nav-item>
          <b-nav-item class="px-3 py-2">
            <b-link :to="{ name: 'formulario' }" class="text-dark">
              <i class="fas fa-edit me-2"></i> Formulario
            </b-link>
          </b-nav-item>
          <b-nav-item class="px-3 py-2">
            <b-link :to="{ name: 'paginacion' }" class="text-dark">
              <i class="fas fa-list-ol me-2"></i> Paginacion
            </b-link>
          </b-nav-item>
        </b-nav>
      </div>
      <div class="col-9">
        <div class="container">
           <navbread></navbread>
          <router-view class="mt-1"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
