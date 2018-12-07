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
          <VideoModal :videoID='tip.id' />
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
import { AFirestore } from "~/plugins/firebase.js";
import VideoModal from "@/components/utils/VideoModal";

export default {
  async asyncData({ params }) {
    let title = "Tips de Expertos";
    return { title };
  },
  data() {
    return { tips: null };
  },
  async mounted() {
    const tipsSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/tips"
    )
      .orderBy("added", "desc")
      .get();
    this.tips = tipsSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  },
  head() {
    return {
      title: this.title
    };
  },
  components: { VideoModal }
};
</script>

<style lang="scss" scoped>
@import "assets/header";
</style>
