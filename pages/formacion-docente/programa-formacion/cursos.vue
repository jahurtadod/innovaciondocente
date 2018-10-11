<template>
  <div>
    <header>
      <h1>Portafolio de Cursos</h1>
    </header>
    <!--
    <div class="container">
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label for="busqueda">Buscar Curso</label>
          <input v-model="query"
                 type="text"
                 id="busqueda"
                 class="form-control"
                 placeholder="Nombre Curso">
        </div>
      </form>
    </div>
    -->
    <div class="container-fluid">
      <div class="alert alert-danger"
           v-if="cursos && cursos.length == 0">
        No se encontraton cursos
      </div>
      <div v-if="cursos">
        <div class="row">
          <nuxt-link class="col-xl-2 col-lg-3 col-md-4 col-sm-6 curso"
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
                  <i class="fas fa-calendar-alt"></i> {{curso.date | dateTimestamp}}</small>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <button @click="$router.go(-1)"
              class="btn btn-primary btn-large">
        Regresar
      </button>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";

export default {
  data() {
    return { cursos: null };
  },
  async mounted() {
    let cursosSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/cursos"
    )
      .orderBy("date", "desc")
      .get();
    this.cursos = cursosSnap.docs.map(doc =>
      Object.assign({ id: doc.id }, doc.data())
    );
  },
  head() {
    return {
      title: "Portafolio de Cursos"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/header";
@import "assets/form";
@import "assets/card";
@import "assets/alert";
</style>
