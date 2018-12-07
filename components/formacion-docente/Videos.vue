<template>
  <section>
    <div class="container">
      <h2>Tips de Expertos</h2>
      <p class="auto-break">{{tips.description}}</p>
      <div class="row">
        <div class="col-xl-7 col-lg-8">
          <h3>#InnovaciónenlaUTPL</h3>
          <VideoModal :videoID='tips.youtube' />

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
          <VideoModal :videoID='tip.id' />
          <p class="auto-break">{{tip.description|slice(0,250)}}</p>
          <router-link class="btn btn-inverse btn-large"
                       :to="{name: 'formacion-docente-programa-formacion-potencia-formacion'}">
            Tips de expertos
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { AFirestore } from "~/plugins/firebase.js";
import VideoModal from "@/components/utils/VideoModal";

export default {
  props: ["tips"],
  data() {
    return { tip: null };
  },
  async mounted() {
    const tipsSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/tips"
    )
      .orderBy("added", "desc")
      .limit(1)
      .get();
    tipsSnap.docs.map(doc => (this.tip = { id: doc.id, ...doc.data() }));
  },
  components: { VideoModal }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
section {
  background-color: $color-primary;
  color: $color-text-primary;
}
</style>
