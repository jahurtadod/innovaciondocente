<template>
  <section>
    <div class="container"
         v-if="curso">
      <!-- notification -->
      <div class="alert alert-success"
           v-if="canPostulate">
        <i class="fas fa-calendar-alt"></i>
        Postula hasta el
        <b>{{curso.postulation.date | dateTimestamp}}</b>
      </div>
      <div class="alert alert-success"
           v-else-if="curso.postulation.message">
        {{curso.postulation.message}}
      </div>
      <div class="alert alert-danger"
           v-else>
        Las postulaciones para este curso han finalizado
      </div>

      <!-- main content -->
      <h1>{{ curso.name }}</h1>
      <hr>
      <div class="row">
        <div class="col-md-3">
          <img v-lazy="curso.img"
               alt="Imagen Curso">
          <a target="_blank"
             rel="noopener"
             class="btn btn-outline-primary btn-large"
             v-if="canPostulate"
             :href="curso.postulation.link">
            Postular
          </a>
          <a target="_blank"
             rel="noopener"
             class="btn btn-large btn-outline-primary"
             v-for="(content, i) in curso.downloadableContent"
             :key="i"
             :href="content.url">
            <i class="fas fa-file-pdf"></i>
            Contenido
          </a>
          <button @click="$router.go(-1)"
                  class="btn btn-primary btn-large">Regresar</button>
        </div>
        <!--split-->
        <div class="col-md-9">
          <p class="auto-break">{{curso.description}}</p>
          <!---->
          <span v-if="curso.instructors">
            <b>Instructor:</b>
            <ul>
              <li v-for="(instructor, i) in curso.instructors"
                  :key="i">
                {{instructor.name}}
                <small v-if="instructor.small">({{instructor.about}})</small>
              </li>
            </ul>
          </span>
          <!---->
          <p>
            <b>Fecha:</b>
            {{curso.date | dateTimestamp}}
          </p>
          <!---->
          <span v-if="curso.duration">
            <b>Duración:</b>
            <ul>
              <li v-if="curso.duration.hours">{{ curso.duration.hours }} Horas</li>
              <li v-if="curso.duration.days">{{ curso.duration.days }} Días</li>
              <li v-if="curso.duration.weeks">{{ curso.duration.weeks }} Semanas</li>
            </ul>
          </span>
          <!---->
          <p v-if="curso.module">
            <b>Módulo:</b>
            {{curso.module}}
          </p>
          <!---->
          <p v-if="curso.place">
            <b>Lugar:</b>
            {{curso.place}}
          </p>
          <!---->
          <p v-if="curso.schedule">
            <b>Horario:</b>
            {{curso.schedule}}
          </p>
          <!---->
          <p v-if="curso.addressedTo">
            <b>Dirigido:</b> {{curso.addressedTo}}
          </p>
        </div>
      </div>
    </div>
    <div v-else
         class="container">
      <p>
        No se encontro el curso
      </p>
    </div>
  </section>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";

export default {
  async asyncData({ params }) {
    let curso = null;
    let canPostulate = false;
    const doc = await AFirestore.collection(
      "formacion-docente/programa-formacion/cursos"
    )
      .doc(params.id)
      .get();
    if (doc.exists) {
      curso = { ...doc.data(), id: doc.id };
      // validate date, if exist
      if (curso.postulation.date) {
        const temp = new Date();
        const endDate = new Date(curso.postulation.date.seconds * 1000);
        const todayDate = new Date(
          temp.getFullYear(),
          temp.getMonth(),
          temp.getDate()
        );
        canPostulate = endDate >= todayDate;
      }
    }
    return { curso, canPostulate };
  },
  head() {
    return {
      title: this.curso ? this.curso.name : "No se encontro el curso",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.curso
            ? this.curso.description
            : "No se encontro el curso"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "assets/alert";
</style>
