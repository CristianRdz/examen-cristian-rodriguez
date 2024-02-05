<template>
  <div>
    <h1>Paginacion</h1>
    <div class="m-5">
      <b-breadcrumb :items="items"  class="bg-light p-2 rounded"></b-breadcrumb>
    </div>
    <div class="overflow-auto">
      
      <b-table
        striped
        :items="vehiculos"
        :per-page="perPage"
        :current-page="currentPage"
        small
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :filter="filtro"
        @filtered="onFiltered"
      ></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
      ></b-pagination>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      perPage: 5,
      currentPage: 0,
      vehiculos: [],
      filtro: null,
      sortBy: "",
      sortDesc: false,
      fields: [
        { key: "brand", label: "Marca", sortable: true },
        { key: "model", label: "Modelo", sortable: true },
        { key: "year", label: "Año de fabricación", sortable: true },
        { key: "serie", label: "Numero de serie", sortable: true },
      ],
      items: [
        {
          text: "Landing Page",
          to: "/",
        },
        {
          text: "Principal",
          to: "/principal",
        },
        { 
          text: "Paginacion", active: true 
        },
      ],
    };
  },

  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "http://localhost:8080/api/vehiculos/page",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          console.error("Error al obtener los datos:", response);
          return;
        }

        const data = await response.json();
        this.vehiculos = data.content;
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
    onFiltered(filteredItems) {
      this.currentPage = 1;
      this.totalRows = filteredItems.length;
    },
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    totalRows() {
      return this.vehiculos.length;
    },
  },
};
</script>

<style></style>
