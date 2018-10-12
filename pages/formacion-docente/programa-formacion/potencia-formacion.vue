<template>
  <div>
    <header>
      <h1>
        {{title}}
      </h1>
    </header>
    <section class="container-fluid">
      <div class="row">
        <div v-for="tip in tips"
             :key="tip.id"
             class="col-xl-4 col-md-6">
          <div class="embed-container">
            <iframe :src="'https://www.youtube.com/embed/'+tip.id"
                    frameborder="0"
                    title="tip"
                    allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
          </div>
          <h3>{{tip.name}}</h3>
          <p class="auto-break">{{tip.description}}</p>
        </div>
      </div>
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large btn-sm">Regresar</button>
    </section>
  </div>
</template>

<script>
import { TipsExpertosCollection } from "~/plugins/firebase.js";

export default {
  async asyncData({ params }) {
    let title = "Tips de Expertos";
    return { title };
  },
  data() {
    return { tips: null };
  },
  async mounted() {
    const tipsSnap = await TipsExpertosCollection.get();
    this.tips = tipsSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/header";
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
