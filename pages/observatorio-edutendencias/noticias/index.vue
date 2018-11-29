<template>
  <div>
    <header>
      <h1>Noticias</h1>
    </header>
    <section>
      <div class="container">
        <div class="content"
             v-for="(noticia, i) in noticias"
             :key="i"
             :style="'background-image: url('+noticia.img+');'">
          <div class="overlay">
            <div class="data">
              <nuxt-link :to="{name: 'observatorio-edutendencias-noticias-id', params: {id:noticia.id}}"
                         tag="h4">
                {{noticia.name | capitalize}}
              </nuxt-link>
              <p>{{noticia.description}}
                <br>
                <nuxt-link :to="{name: 'observatorio-edutendencias-noticias-id', params: {id:noticia.id}}">
                  Leer más...
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
export default {
  async asyncData() {
    let noticias;
    try {
      const querySnapshot = await AFirestore.collection(
        "observatorio/edutendencias/noticias"
      )
        .orderBy("created", "desc")
        .get();
      noticias = querySnapshot.docs.map(doc =>
        Object.assign({ id: doc.id }, doc.data())
      );
    } catch (error) {
      console.log(error);
    }
    return { noticias };
  },
  head() {
    return {
      title: "Noticias"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/header";
$size: 250px;

.container {
  display: grid;
  grid-auto-rows: $size;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fit, minmax($size, 1fr));
  grid-gap: 5px;
}
.content {
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media (min-width: 576px) {
    &:nth-child(1) {
      grid-column-end: span 2;
    }
    &:nth-child(5n + 0) {
      grid-row-end: span 2;
    }
  }
  @media (min-width: 768px) {
    &:nth-child(1) {
      grid-row-end: span 2;
    }
    &:nth-child(8n + 0) {
      grid-column-end: span 2;
    }
  }
  @media (min-width: 992px) {
    &:nth-child(1) {
      grid-column-end: span 3;
    }
    &:nth-child(10n + 0) {
      grid-column-end: span 3;
    }
  }
  .overlay {
    transition: margin-left 4s ease-in-out 1s;
    position: relative;
    height: 100%;
    width: 100%;
    color: $color-text-primary;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.664),
      $color-background-inverse
    );
    .data {
      padding: 20px;
      position: absolute;
      bottom: 0px;
      max-width: 100%;
      max-height: 100%;
      overflow: auto;
      text-align: justify;
      text-align: left;
      h4 {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      p,
      a {
        display: none;
        color: $color-text-primary;
      }
      a {
        float: right;
      }
    }
  }
}
.overlay:hover {
  background: rgba($color-background-inverse, 0.8);
  .data {
    p,
    a {
      display: inline;
    }
  }
}
</style>
