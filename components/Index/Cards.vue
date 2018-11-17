<template>
  <section>
    <div class="container">
      <div class="row">
        <card :nota="noticia"
              v-if="noticia"
              class="col-lg-4 col-md-6" />
        <card :nota="curso"
              v-if="curso"
              class="col-lg-4 col-md-6" />
        <card :nota="tips"
              v-if="tips"
              class="col-lg-4 col-md-12" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Index/Card";
import axios from "axios";
import {  AFirestore } from "~/plugins/firebase.js";

export default {
  data() {
    let noticia = {
      type: "Noticia",
      title: null,
      description: null,
      img: null,
      key: {
        name: "observatorio-edutendencias-noticias-id",
        id: null
      }
    };
    let curso = {
      type: "Curso",
      title: null,
      description: null,
      img: null,
      key: {
        name: "formacion-docente-programa-formacion-id",
        id: null
      }
    };
    let tips = {
      type: "Tips de Expertos",
      title: null,
      description: null,
      img: null,
      key: {
        name: "https://www.utpl.edu.ec",
        key: null
      }
    };
    return {
      noticia,
      curso,
      tips
    };
  },
  async mounted() {
     let noticiasSnap = await AFirestore.collection(
      "observatorio/edutendencias/noticias"
    )
      .orderBy("edited", "desc")
      .limit(1)
      .get();
    noticiasSnap.docs.map(doc => {
      let noticia = { id: doc.id, ...doc.data() };
      this.noticia.title = noticia.name;
      this.noticia.description = noticia.description;
      this.noticia.img = noticia.img;
      this.noticia.key.id = noticia.id;
      return;
    });
    let cursosSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/cursos"
    )
      .orderBy("date", "desc")
      .limit(1)
      .get();
    cursosSnap.docs.map(doc => {
      let curso = { id: doc.id, ...doc.data() };
      this.curso.title = curso.name;
      this.curso.description = curso.description;
      this.curso.img = curso.img;
      this.curso.key.id = curso.id;
      return;
    });
    const tipsSnap = await AFirestore.collection(
      "formacion-docente/programa-formacion/tips"
    )
      .orderBy("added", "desc")
      .limit(1)
      .get();
    tipsSnap.docs.map(doc => {
      let tip = doc.data();
      this.tips.title = tip.name;
      this.tips.description = tip.description;
      this.tips.key = {
        name: `https://youtu.be/${doc.id}`
      };
      this.tips.img = `https://i.ytimg.com/vi/${doc.id}/mqdefault.jpg`;
    });
  },
  components: {
    card: Card
  }
};
</script>
