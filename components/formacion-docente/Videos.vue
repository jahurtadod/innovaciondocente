<template>
  <section>
    <div class="container">
      <h2>Tips de Expertos</h2>
      <p class="auto-break">{{tips.description}}</p>
      <div class="row">
        <div class="col-xl-7 col-lg-8">
          <h3>#InnovaciónenlaUTPL</h3>
          <div class="embed-container">
            <iframe :src="'https://www.youtube.com/embed/'+tips.youtube"
                    frameborder="0"
                    allow="encrypted-media"
                    :title="tips.youtube"
                    allowfullscreen></iframe>
          </div>
          <a target="_blank"
             rel="noopener"
             class="btn btn-inverse btn-large"
             href="https://www.youtube.com/channel/UCzRd2Y87-NJnVliV8B6e_Xg">
            Innovación Docente en YouTube
          </a>
        </div>
        <div class="col-xl-5 col-lg-4"
             v-if="tip">
          <h3>{{tip.name}}</h3>
          <div class="embed-container">
            <iframe :src="'https://www.youtube.com/embed/'+tip.id"
                    frameborder="0"
                    allow="encrypted-media"
                    title="video"
                    allowfullscreen></iframe>
          </div>
          <p class="auto-break">{{tip.description|slice(0,250)}}</p>
          <router-link class="btn btn-inverse btn-large"
                       :to="{name: 'formacion-docente-programa-formacion-potencia-informacion'}">
            Tips de expertos
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { TipsExpertosCollection } from "~/plugins/firebase.js";
export default {
  props: ["tips"],
  data() {
    return { tip: null };
  },
  async mounted() {
    const tipsSnap = await TipsExpertosCollection.limit(1).get();
    tipsSnap.docs.map(doc => (this.tip = { id: doc.id, ...doc.data() }));
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
section {
  background-color: $color-primary;
  color: $color-font-primary;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
