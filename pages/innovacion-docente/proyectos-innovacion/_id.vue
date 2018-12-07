<template>
  <div>
    <!-- Img - banner -->

    <div class="banner">
      <div v-if="proyecto.img"
           class="banner-img"
           :style="getBannerPath(proyecto.img)"></div>
      <div v-else
           class="banner-img"></div>
    </div>
    <section class="container">
      <!-- Title -->
      <h1>
        {{proyecto.name}}
      </h1>
      <ImageModal />
      <div class="row">
        <div class="col-md-4">
          <!-- proyect type -->
          <h2>{{proyecto.type | proyectoInnovacionType}}</h2>
          <!-- modality -->
          <h3>Modalidad {{proyecto.modality}}</h3>
          <!-- areas -->
          <span v-if="proyecto.area.administrativa ||proyecto.area.biologica ||proyecto.area.sociohumanistica || proyecto.area.tecnica"
                class="areas">
            <h3>Areas</h3>
            <AreasChips :area='proyecto.area'
                        :queryType='proyecto.type' />
            <div class="spacer"></div>
          </span>
          <!-- carreers -->
          <span v-if="proyecto.participants.length > 0">
            <h3>Carreras Participantes</h3>
            <ul>
              <li v-for="(carreer, i) in getProjectCarreers(proyecto.participants)"
                  :key="i">{{carreer}}</li>
            </ul>
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
          <br>
          <!-- Infografia -->
          <div v-if="proyecto.infografic">
            <img v-if="proyecto.infografic"
                 :src="proyecto.infografic"
                 alt="infografia">
            <div class="spacer"></div>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <!-- left side -->
        <!--  -->
        <!--  -->
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
import AreasChips from "@/components/innovacion-docente/proyectos-innovacion/AreasChips";
import ImageModal from "@/components/utils/ImageModal";
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
    getBannerPath(img) {
      return "background-image: url(" + img + ");";
    },
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
  components: { AreasChips, ImageModal },
  head() {
    return {
      title: this.proyecto ? this.proyecto.name : "No se encontro el proyecto"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
$space-elements: 8px;
.banner {
  height: 40vh;
  width: 100%;
  overflow: hidden;
  &-img {
    background-image: url("~/static/default.png");
    height: 100%;
    width: 100%;
    background-color: $color-primary;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
}

h1 {
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 15px;
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
</style>

