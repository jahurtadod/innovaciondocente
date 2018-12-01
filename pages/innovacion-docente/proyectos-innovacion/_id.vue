<template>
  <div>
    <!-- Img - banner -->
    <div class="banner">
      <div class="parallax"></div>
    </div>
    <section class="container">
      <!-- Title -->
      <h1>
        {{proyecto.name}}
      </h1>
      <!-- infografic -->
      <img v-if="proyecto.infografic"
           :src="proyecto.infografic"
           alt="infografia"
           class="infographic">
      <div class="row">
        <div class="col-md-4">
          <!-- proyect type -->

          <h2>{{proyecto.type | proyectoInnovacionType}}</h2>
          <!-- modality -->
          <h3>Modalidad {{proyecto.modality}}</h3>
          <span v-if="proyecto.area.administrativa ||proyecto.area.biologica ||proyecto.area.sociohumanistica || proyecto.area.tecnica"
                class="areas">
            <h3>Areas</h3>
            <span v-if="proyecto.area.administrativa"
                  class=" data-field areas-chip-detail area-administrativa">Área Administrativa</span>
            <span v-if="proyecto.area.biologica"
                  class=" data-field areas-chip-detail area-biologica">Área Biológica y Biomédica</span>
            <span v-if="proyecto.area.sociohumanistica"
                  class=" data-field areas-chip-detail area-sociohumanistica">Área Sociohumanística</span>
            <span v-if="proyecto.area.tecnica"
                  class=" data-field areas-chip-detail area-tecnica">Área Técnica</span>
            <div class="spacer"></div>
          </span>
          <!-- Downloadable -->
          <span v-if="proyecto.documents.length > 0">
            <h3>Descargables</h3>
            <ul>
              <li v-for="(document, i) in proyecto.documents"
                  :key="i">{{document}}</li>
            </ul>
          </span>
          <div class="spacer"></div>
          <!-- carreers -->
          <span v-if="proyecto.participants.length > 0">
            <h3>Carreras Participantes</h3>
            <ul>
              <li v-for="(carreer, i) in getProjectCarreers(proyecto.participants)"
                  :key="i">{{carreer}}</li>
            </ul>
          </span>
        </div>
        <div class="col-md-8">
          <!-- Coordinator -->
          <h3>Coordinador de la propuesta</h3>
          <span class="data-field">{{proyecto.coordinator}}</span>
          <div class="spacer"></div>

          <!-- Period -->
          <span v-if="proyecto.periods.length > 0">
            <h3>Período académico de ejecución</h3>
            <span class="data-field">
              {{getProjectPeriods(proyecto.periods)}}
            </span>
          </span>
          <div class="spacer"></div>

          <!-- strategicLine -->
          <span>
            <h3>Línea estratégica que se desarrollará en la propuesta</h3>
            <span class="data-field">
              {{proyecto.strategicLine}}
            </span>
          </span>
          <div class="spacer"></div>

          <!-- subject -->
          <span v-if="proyecto.subject">
            <h3>Asignatura </h3>
            <span class="data-field">
              {{proyecto.subject}}
            </span>
          </span>
          <div class="spacer"></div>

          <!-- participants -->
          <span v-if="proyecto.participants.length >0 ">
            <h3>Docentes que participan en la propuesta </h3>
            <ul>
              <li v-for="(participant,i) in proyecto.participants"
                  :key="i">{{participant.name}}</li>
            </ul>
          </span>
          <br>

          <!-- video -->
          <div class="embed-container"
               v-if="proyecto.videoID">
            <iframe :src="'https://www.youtube.com/embed/'+proyecto.videoID"
                    frameborder="0"
                    title="tip"
                    allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
export default {
  async asyncData({ params }) {
    let proyecto = null;
    try {
      const docSnap = await AFirestore.collection(
        "/innovacion-docente/proyectos-innovacion/proyectos"
      )
        .doc(params.id)
        .get();
      if (docSnap.exists) {
        proyecto = { ...docSnap.data(), id: docSnap.id };
      }
    } catch (error) {}
    return { proyecto };
  },
  methods: {
    getProjectPeriods: proyectPeriods => {
      let res = "";
      for (let i = 0; i < proyectPeriods.length; i++) {
        res += proyectPeriods[i].name;
        if (i < proyectPeriods.length - 1) {
          res += " / ";
        }
      }
      return res;
    },
    getProjectCarreers: proyectParticipants => {
      let carreers = [];
      for (let i = 0; i < proyectParticipants.length; i++) {
        carreers.push(proyectParticipants[i].department);
      }

      return carreers.filter(function(item, pos) {
        return carreers.indexOf(item) == pos;
      });
    }
  },

  head() {
    return {
      title: this.proyecto ? this.proyecto.name : "No se encontro el proyecto"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/areas";
@import "assets/variables";
$space-elements: 8px;
.banner {
  height: 40vh;
  width: 100%;
  overflow: hidden;
  .parallax {
    background-image: url("http://www.imagen.com.mx/assets/img/imagen_share.png");
    height: 100%;
    width: 100%;
    background-color: $color-primary;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
}

@media (pointer: fine) {
  .parallax {
    background-attachment: fixed;
  }
}

h1 {
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 15px;
}

.infographic {
  display: block;
  margin-bottom: 25px;
}
@media only screen and (min-width: 992px) {
  .infographic {
    width: auto;
    min-height: 90vh;
    margin-left: auto;
    margin-right: auto;
  }
}

.embed-container {
  margin-top: $space-elements;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-bottom: $space-elements;
}
.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.spacer {
  margin-bottom: $space-elements;
  margin-top: $space-elements;
}
ul {
  margin-bottom: $space-elements;
}
h2 {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: $space-elements;
  color: $color-primary;
}
h3 {
  font-size: 23px;
  font-weight: 400;
}
.data-field {
  margin-left: 15px;
}

.areas {
  &-chip-detail {
    border-radius: 3px;
    padding: 3px 7px;
    margin-bottom: 8px;
    margin-right: 8px;
    border-style: solid;
    border-width: 3px;
    letter-spacing: 0.5px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

