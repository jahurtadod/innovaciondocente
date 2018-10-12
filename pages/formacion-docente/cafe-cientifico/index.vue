<template>
  <div>
    <header class="header"
            v-if="ultimoEncuentro">
      <div class="header-overlay"></div>
      <div class="background-banner">
        <img :src="ultimoEncuentro.img"
             alt="img-background">
      </div>
      <div class="header-content">
        <nuxt-link :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: ultimoEncuentro.id}}"
                   tag="div"
                   class="container"
                   style="cursor:pointer">
          <h1>{{ultimoEncuentro.name}}</h1>
          <div class="row">
            <div class="col-lg-5 no-mobile">
              <figure :style="'background-image: url('+ultimoEncuentro.img+');'"></figure>
              <ul v-if="ultimoEncuentro.guests">
                <h3>
                  <i class="fas fa-users"></i> Invitados
                </h3>
                <li v-for="(guest, index) in ultimoEncuentro.guests"
                    :key="index">{{ guest.name }}</li>
              </ul>
            </div>
            <div class="col-lg-7">
              <small><i class="fas fa-calendar-alt"></i> {{ultimoEncuentro.date | dateTimestamp}}</small>
              <p class="no-mobile auto-break">{{ultimoEncuentro.description | slice(0,700)}}</p>
              <p class="no-desktop auto-break">{{ultimoEncuentro.description | slice(0,300)}}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </header>

    <!-- encuentros portfolio -->
    <section v-if="encuentros"
             id="encuentros"
             ref="encuentros">
      <div class="container-fluid">
        <h2>
          Portafolio de Encuentros
        </h2>
        <div class="encuentros">
          <div class="row"
               ref="scroll">
            <nuxt-link class="col-lg-3 col-md-5 col-sm-7"
                       v-for="encuentro in encuentros"
                       :key="encuentro.id"
                       :to="{name: 'formacion-docente-cafe-cientifico-id', params: {id: encuentro.id}}"
                       tag="div">
              <div class="card card__two link">
                <figure class="card__img"
                        :style="'background-image: url('+encuentro.img+');'">
                </figure>
                <div class="card__desc">
                  <h4>{{encuentro.name | slice(0,45)}}</h4>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <button class="btn btn-large btn-sm btn-outline-primary"
                    @click="scrollLeft">
              <i class="fas fa-arrow-left"></i>
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-large btn-sm btn-outline-primary"
                    @click="scrollRight">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!--Susciption section-->
    <Suscripcion title="Suscríbete a nuestro Café Científico"
                 :description="description"
                 blue="true" />
  </div>
</template>

<script>
import Suscripcion from "@/components/Suscripcion";
import { AFirestore } from "~/plugins/firebase.js";

export default {
  async asyncData() {
    const description =
      "Encuentro Café Científico es un evento en el que expertos y profesionales en diferentes campos, dialogan y problematizan sobre un tema actual de una forma diferente e informal. Su finalidad de escuchar opiniones diversas y realizar algunos postulados que contribuyan al trabajo posterior y que ayuden a fomentar inquietudes que despiertan una entretenida discusión.";

    // load encuentros
    const querySnapshot = await AFirestore.collection(
      "formacion-docente/cafe-cientifico/encuentros"
    )
      .orderBy("date", "desc")
      .get();
    const encuentros = querySnapshot.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
    return { description, encuentros };
  },
  methods: {
    scrollLeft() {
      this.$refs.scroll.scrollLeft -= this.$refs.encuentros.offsetWidth * 0.5;
    },
    scrollRight() {
      this.$refs.scroll.scrollLeft += this.$refs.encuentros.offsetWidth * 0.5;
    }
  },
  computed: {
    ultimoEncuentro() {
      if (!this.encuentros) return null;
      return this.encuentros[0];
    }
  },
  components: {
    Suscripcion
  },
  head() {
    return {
      title: "Café Científico",
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
@import "assets/card";

@media (max-width: 767px) {
  .no-mobile {
    display: none;
  }
}
@media (min-width: 768px) {
  .no-desktop {
    display: none;
  }
}

.header {
  object-fit: cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: $color-secondary;
  text-align: center;
}
.background-banner {
  left: 0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  text-align: center;
  position: absolute;
  background-color: $color-primary;

  z-index: -2;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    opacity: 1;
    position: relative;
    overflow: hidden;
  }
}
.header-overlay {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  background: $color-dark;
  opacity: 0.6;
  z-index: -1;
}
.header-content {
  margin: auto;
  h1 {
    color: $color-font-primary !important;
    font-weight: 400;
  }
  ul {
    list-style: none;
    padding: 0;
  }
}

#encuentros {
  background-color: $color-font-primary;
  .row {
    overflow: auto;
    display: -webkit-box;
    flex-wrap: nowrap;
  }
  ::-webkit-scrollbar {
    display: none;
  }
}

figure {
  overflow: hidden;
  padding-bottom: 50% !important;
  height: 0;
  margin: 0;
  background-color: $color-primary;
  background-size: cover;
}
</style>
