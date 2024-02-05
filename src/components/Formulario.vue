<template>
  <div>
    <h1>Formulario</h1>
    <div class="m-5">
      <b-breadcrumb :items="items" class="bg-light p-2 rounded"></b-breadcrumb>
    </div>
    <div class="m-5">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row>
          <b-col
            ><b-form-group id="marcaCarro" label="Marca">
              <b-form-input
                id="marcaCarro"
                v-model="form.marcaCarro"
                type="text"
                required
                pattern="^[a-zA-Z0-9_]*$"
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="modeloCarro" label="Modelo">
              <b-form-input
                id="modeloCarro"
                v-model="form.modeloCarro"
                type="text"
                pattern="[A-Za-z0-9]+"
                required
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group id="yearCarro" label="Año">
              <b-form-input
                id="yearCarro"
                v-model="form.yearCarro"
                type="number"
                required
              ></b-form-input> </b-form-group
          ></b-col>
        </b-row>
        <b-row>
          <b-col
            ><b-form-group id="numeroSerie" label=" Numero de serie">
              <b-form-input
                id="numeroSerie"
                v-model="form.numeroSerie"
                type="text"
                required
              ></b-form-input> </b-form-group
          ></b-col>
        </b-row>
        <div class="mt-2">
          <b-button type="submit" variant="primary" class="me-2">
            Enviar
          </b-button>
          <b-button type="reset" variant="danger" class="me-2">
            Limpiar
          </b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      form: {
        marcaCarro: "",
        modeloCarro: "",
        yearCarro: "",
        numeroSerie: "",
      },
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
          text: "Formulario",
          active: true,
        },
      ],
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      const yearCarroActual = new Date().getFullYear();
      const alfanumericoRegex = /^[a-z0-9]+$/i;

      if (!alfanumericoRegex.test(this.form.marcaCarro)) {
        alert("La marcaCarro solo puede contener letras y números");
        return;
      }

      if (!alfanumericoRegex.test(this.form.modeloCarro)) {
        alert("El modeloCarro solo puede contener letras y números");
        return;
      }

      if (this.form.yearCarro > yearCarroActual) {
        alert("El año no puede ser superior que el actual " + yearCarroActual);
        return;
      }

      const serieRegex = /^[A-Za-z]{4}\d{3}-\d{2}[A-ZamodeloCarro-z]{2}$/;
      if (!serieRegex.test(this.form.numeroSerie)) {
        alert("El número de serie no cumple con el formato requerido ejem: ABCD123-45EF");
        return;
      }

      const url = "http://localhost:8080/api/vehiculos";
      const vehiculo = {
        brand: this.form.marcaCarro,
        model: this.form.modeloCarro,
        year: this.form.year,
        serie: this.form.numeroSerie,
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vehiculo),
      })
        .then((response) => {
          if (!response.ok) {
            console.error("Error de respuesta del servidor:", response);
          }
          return response.json();
        })
        .then((data) => {
          alert("Vehículo creado con éxito");
        })
        .catch((err) => {
          console.error("Error al enviar los datos:", err);
        });
    },
    onReset(event) {
      event.preventDefault();
      this.form.marcaCarro = "";
      this.form.modeloCarro = "";
      this.form.yearCarro = "";
      this.form.numeroSerie = "";
    },
  },
};
</script>

<style></style>
