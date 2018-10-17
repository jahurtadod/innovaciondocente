<template>
  <section v-bind:class="[{'blue':blue}]">
    <div class="container">
      <h2>{{title}}</h2>
      <p class="auto-break">{{description}}</p>
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input v-model="forma.email"
               type="email"
               id="email"
               name="email"
               class="form-control"
               placeholder="correo@email.com"
               v-validate="'required|email'">
        <span v-show="errors.has('email')">Tiene que ser un email válido</span>
      </div>
      <button @click="submit"
              v-bind:class="[{'btn-inverse':blue},{'btn-outline-primary':!blue}]"
              class="btn btn-large btn-small"
              type="submit">
        Suscribirse
      </button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  props: ["title", "description", "blue"],
  data() {
    return {
      forma: {
        email: null
      }
    };
  },
  methods: {
    submit(e) {
      this.$validator.validateAll().then(x => {
        if (x) {
          axios
            .post(
              "https://innovaciondocente-utpl.firebaseio.com/meta/suscripciones.json",
              this.forma
            )
            .then(function(response) {
              alert("Te has suscribido");
            })
            .catch(function(error) {
              console.log(error);
              alert("HA OCURRIDO UN ERROR, VUELVE A INTENTARLO");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/form";
.blue {
  color: $color-text-primary;
  background-color: $color-primary;
}
</style>
