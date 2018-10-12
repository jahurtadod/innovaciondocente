<template>
  <div>
    <header>
      <h1>Tips de Innovación</h1>
    </header>
    <section class="container">
      <div class="row"
           v-if="cards.length > 0">
        <div v-for="(card, i) in cards"
             :key="i"
             class="col-lg-4 col-md-6">
          <card :nota="card" />
        </div>
      </div>
      <div v-else>
        <h3>No se encontraton tips para mostrar</h3>
      </div>
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large">Regresar</button>
    </section>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import Card from "@/components/Index/Card";

export default {
  async asyncData({ query }) {
    let cards = [];
    try {
      const tipsSnap = await AFirestore.collection(
        "observatorio/edutendencias/tips"
      )
        .where("tag", "==", query.tag)
        .orderBy("edited", "desc")
        .get();
      cards = tipsSnap.docs.map(doc => {
        const tip = doc.data();
        return {
          type: tip.tag,
          title: tip.name,
          description: tip.description,
          key: {
            name: tip.link
          },
          img: tip.img
        };
      });
    } catch (error) {
      console.log(error);
    }
    return { cards };
  },
  components: {
    card: Card
  },
  head() {
    return {
      title: "Tips de Innovación"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";
@import "assets/header";
</style>
