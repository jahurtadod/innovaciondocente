<template>
  <section class="container">
    <h2>Últimos Cursos</h2>
    <div class="row"
         v-if="cursos">
      <nuxt-link class="col-md-3 col-sm-6"
                 v-for="curso in cursos"
                 :key="curso.id"
                 :to="{name: 'formacion-docente-programa-formacion-id', params: {id: curso.id}}"
                 tag="div">
        <div class="card card__one link">
          <figure class="card__img">
            <img v-lazy="curso.img"
                 alt="imagen curso">
          </figure>
          <div class="card__desc">
            <h4>{{curso.name | slice(0,50)}}</h4>
            <small>
              <i class="fas fa-calendar-alt"></i> {{curso.date|dateTimestamp}}</small>
          </div>
        </div>
      </nuxt-link>
    </div>
    <nuxt-link class="btn btn-sm btn-primary btn-large"
               :to="{name: 'formacion-docente-programa-formacion-cursos'}">
      <i class="fas fa-folder"></i> Portafolio de Cursos
    </nuxt-link>
    <a class="btn btn-outline-primary btn-sm btn-large"
       rel="noopener"
       target="_blank"
       v-if="programFormacionDocente"
       :href="programFormacionDocente">
      <i class="fas fa-calendar-alt"></i> Programa de Formación Docente
    </a>
  </section>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
export default {
  props: ["programFormacionDocente"],
  data() {
    return { cursos: null };
  },
  async mounted() {
    const temp = new Date();
    const startDate = new Date(temp.getFullYear(), temp.getMonth());
    const cursosSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/cursos"
    )
      .where("date", ">=", startDate)
      .orderBy("date", "desc")
      .get();
    this.cursos = cursosSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  }
};
</script>

<style lang="scss" scoped>
@import "assets/card";
</style>


