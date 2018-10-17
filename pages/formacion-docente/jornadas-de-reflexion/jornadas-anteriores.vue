<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <section class="sticky">
          <nuxt-link class="btn btn-outline-primary btn-large"
                     :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores'}">
            JORNADAS <br> DE REFLEXIÓN
          </nuxt-link>
          <nuxt-link class="btn btn-outline-primary btn-large"
                     v-for="(jornada, key) in data"
                     :key="key"
                     :to="{name: 'formacion-docente-jornadas-de-reflexion-jornadas-anteriores-id', params: {id:key}}">
            {{jornada.periodo}}
          </nuxt-link>
          <nuxt-link class="btn btn-primary btn-large"
                     :to="{name: 'formacion-docente-jornadas-de-reflexion'}">
            Jornada Actual
          </nuxt-link>
        </section>
      </div>
      <section class="col-lg-9">
        <nuxt-child />
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    let { data } = await axios.get(
      "https://innovaciondocente-utpl.firebaseio.com/formacion-docente/jornadas-de-reflexion.json"
    );
    return { data };
  }
};
</script>



<style lang="scss" scoped>
@import "assets/variables";

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 3;
  }
}

section {
  padding-bottom: 0;
}
</style>
