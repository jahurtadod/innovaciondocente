<template>
  <div>
    <header class="parallax"
            :style="'background-image: url('+banner+');'">
      <div class="header-content">
        <h1>
          {{title}}
        </h1>
        <p class="container auto-break">{{description}}</p>
      </div>
    </header>
    <!--Cursos section-->
    <Cursos :programFormacionDocente="programFormacionDocente"></Cursos>
    <!--Videos section-->
    <Videos :tips="tips"></Videos>
    <!--PDF sections-->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6"
               v-if="validateFormacion">
            <h3>
              Válida tu formación Docente - Pedagógica
            </h3>
            <p>
              Intructivo para validar tus cursos del Programa de Formación Docente - Pedagógica en
              el Sistema de Información
              Académica Científica (SIAC)
            </p>
            <a class="btn btn-outline-primary btn-large"
               target="_blank"
               rel="noopener"
               :href="validateFormacion">
              <i class="fas fa-file-pdf"></i>
              Descargar intructivo</a>
          </div>
          <div class="col-md-6">
            <h3>
              Cursos Específicos
            </h3>
            <p>
              Pasos a seguir para presentar solicitudes en la realización de Cursos Específicos y
              Emisión de certificados.
            </p>
            <nuxt-link :to="{name: 'formacion-docente-programa-formacion-cursos-especificos'}"
                       class="btn btn-outline-primary btn-large">
              Ver Más...
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ProgramaFormacionDocument } from "~/plugins/firebase.js";
import Cursos from "@/components/formacion-docente/Cursos";
import Videos from "@/components/formacion-docente/Videos";
export default {
  async asyncData() {
    let programaFormacionData;
    let programaFormacionSnap = await ProgramaFormacionDocument.get();
    if (programaFormacionSnap.exists)
      programaFormacionData = programaFormacionSnap.data();

    return { ...programaFormacionData };
  },
  components: {
    Cursos,
    Videos
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
header {
  height: 100vh;
  width: 100%;
  display: flex;
}

.header-content {
  text-align: center;
  h1 {
    color: $color-font-primary;
    font-weight: 400;
  }
  margin: auto;
  p {
    text-align: center;
    color: $color-font-primary;
  }
}
@media screen and (min-width: 768px) {
  .header-content {
    text-align: center;
    h1 {
      font-size: 300%;
      letter-spacing: 0.3em;
    }
  }
}
</style>
