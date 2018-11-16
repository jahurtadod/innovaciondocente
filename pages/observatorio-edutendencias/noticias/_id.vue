<template>
  <div>
    <div v-if="noticia">
      <header>
        <h1>{{noticia.name}}</h1>
      </header>
      <div class="container">
        <small v-if="noticia.creator">
          <i class="fas fa-user"></i> {{noticia.creator}}
        </small>
        <small v-if="noticia.edited">
          <br>
          <i class="fas fa-calendar-alt"></i> {{noticia.edited | dateTimestamp}}
        </small>
        <hr>
        <div v-html="noticia.html"
             class="html"></div>

      </div>
    </div>
    <div v-else>
      <div class="container">
        <p>No se encontro la noticia</p>
      </div>
    </div>
    <div class="container">
      <button @click="$router.go(-1)"
              class="btn btn-outline-primary btn-large">Regresar</button>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
export default {
  async asyncData({ params }) {
    let noticia = null;
    try {
      const docSnap = await AFirestore.collection(
        "observatorio/edutendencias/noticias"
      )
        .doc(params.id)
        .get();
      if (docSnap.exists) {
        noticia = { ...docSnap.data(), id: docSnap.id };
      }
    } catch (error) {
      console.log(error);
    }
    return { noticia };
  },
  head() {
    return {
      title: this.noticia
        ? this.noticia.name
        : "No se encontro la noticia",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.noticia
            ? this.noticia.description
            : "No se encontro la noticia"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/html";
@import "assets/header";
</style>
