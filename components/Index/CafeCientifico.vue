<template>
  <section class="cafe-cientifico">
    <div class="container">
      <!-- head -->
      <div>
        <h2>Café Científico</h2>
        <p>
          Encuentro Café Científico es un evento en el que expertos y
          profesionales en diferentes campos, dialogan y problematizan sobre un tema actual de una
          forma diferente e informal. Su finalidad de escuchar opiniones diversas y realizar
          algunos postulados que contribuyan al trabajo posterior y que ayuden a fomentar
          inquietudes que despiertan una entretenida discusión.
        </p>
      </div>
      <hr>

      <!-- last encuentro -->
      <div class="row"
           v-if="encuentro">
        <div class="col-md-6 section-text">
          <h3>{{encuentro.name}}</h3>
          <small>
            <i class="fas fa-calendar-alt"></i>
            {{encuentro.date | dateTimestamp}}
          </small>
          <p class="auto-break">{{encuentro.description | slice(0,500) }}</p>
        </div>
        <div class="col-md-6">
          <figure>
            <img :src="encuentro.img"
                 alt="Imagen Cafe">
          </figure>
          <nuxt-link class="btn btn-large btn-inverse"
                     :to="{name: 'formacion-docente-cafe-cientifico-id',  params: {id: encuentro.id}}"
                     tag="div">
            Leer más
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";

export default {
  data() {
    return {
      encuentro: null
    };
  },
  async mounted() {
    const querySnapshot = await AFirestore.collection(
      "formacion-docente/cafe-cientifico/encuentros"
    )
      .orderBy("date", "desc")
      .limit(1)
      .get();
    querySnapshot.docs.map(
      doc => (this.encuentro = { id: doc.id, ...doc.data() })
    );
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

.cafe-cientifico {
  color: #fff;
  background: $color-primary;
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
  p {
    text-align: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    span {
      color: $color-secondary;
    }
  }
}
.section-text {
  p,
  small {
    text-align: justify;
    padding: 10px;
  }
  h3 {
    text-align: center;
    padding: 10px;
  }
}
figure {
  overflow: hidden;
  padding-top: 1rem;
  padding-bottom: 50% !important;
  height: 0;
  margin: 0;
  img {
    display: block;
    width: 100%;
  }
}
</style>
