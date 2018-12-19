<template>
  <div class="scroll-container">
    <div class="features">
      <header>
        <div class="container">
          <h2 class="tittle">ASCENDERE IN</h2>
          <nav>
            <ul><a href="#noticias"
                 :class="{'active': activeNoticia}">NOTICIAS <i class="fas fa-angle-right"></i></a></ul>
            <ul><a href="#cursos"
                 :class="{'active': activeCurso}">CURSOS <i class="fas fa-angle-right"></i></a></ul>
            <ul><a href="#tips"
                 :class="{'active': activeTips}">TIPS <i class="fas fa-angle-right"></i></a></ul>
          </nav>
        </div>
      </header>
      <div class="content">
        <div id="noticias">
          <div class="row">
            <div class="col-md-6 content-card">
              <figure class="">
                <img :src="noticia.img"
                     alt="Imagen Cafe">
              </figure>
              <div class="description">
                <h3 v-if="noticia.title">{{noticia.title | slice(0,80)}}</h3>
                <p>{{noticia.description}}</p>
              </div>
            </div>
            <div class="col-md-6 content-card">
              <figure class="">
                <img :src="noticia.img"
                     alt="Imagen Cafe">
              </figure>
              <div class="description">
                <h3 v-if="noticia.title">{{noticia.title | slice(0,80)}}</h3>
                <p>{{noticia.description}}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="cursos">
          <div class="row">
            <div class="col-md-6 content-card">
              <figure class="">
                <img :src="curso.img"
                     alt="Imagen Cafe">
              </figure>
              <div class="description">
                <h3 v-if="curso.title">{{curso.title | slice(0,80)}}</h3>
                <p>{{curso.description}}</p>
              </div>
            </div>
            <div class="col-md-6 content-card">
              <figure class="">
                <img :src="curso.img"
                     alt="Imagen Cafe">
              </figure>
              <div class="description">
                <h3 v-if="curso.title">{{curso.title | slice(0,80)}}</h3>
                <p>{{curso.description}}</p>
              </div>
            </div>
          </div>

        </div>
        <div id="tips">
          <div class="row">
            <div class="col-md-6 content-card">
              <figure class="">
                <img :src="tips.img"
                     alt="Imagen Cafe">
              </figure>
              <div class="description">
                <h3 v-if="tips.title">{{tips.title | slice(0,80)}}</h3>
                <p>{{tips.description}}</p>
              </div>
            </div>
            <div class="col-md-6 content-card">
              <figure class="">
                <img :src="tips.img"
                     alt="Imagen Cafe">
              </figure>
              <div class="description">
                <h3 v-if="tips.title">{{tips.title | slice(0,80)}}</h3>
                <p>{{tips.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";

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
      tips,
      activeNoticia: false,
      activeCurso: false,
      activeTips: false
    };
  },
  async mounted() {
    let noticiasSnap = await AFirestore.collection(
      "observatorio/edutendencias/noticias"
    )
      .orderBy("created", "desc")
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
  methods: {
    handleScroll(event) {
      const spyNot = document.querySelectorAll("#noticias");
      const spyCur = document.querySelectorAll("#cursos");
      const spyTip = document.querySelectorAll("#tips");
      spyNot.forEach(el => {
        const elTop = el.getBoundingClientRect().top - 100;
        const elBottom = el.getBoundingClientRect().bottom - 100;
        if (elTop >= 0 || elBottom <= 0) {
          this.activeNoticia = false;
        }
        if (elTop <= 0 && elBottom >= 0) {
          this.activeNoticia = true;
        }
      });
      spyCur.forEach(el => {
        const elTop = el.getBoundingClientRect().top - 100;
        const elBottom = el.getBoundingClientRect().bottom - 100;
        if (elTop >= 0 || elBottom <= 0) {
          this.activeCurso = false;
        }
        if (elTop <= 0 && elBottom >= 0) {
          this.activeCurso = true;
        }
      });
      spyTip.forEach(el => {
        const elTop = el.getBoundingClientRect().top - 100;
        const elBottom = el.getBoundingClientRect().bottom - 100;
        if (elTop >= 0 || elBottom <= 0) {
          this.activeTips = false;
        }
        if (elTop <= 0 && elBottom >= 0) {
          this.activeTips = true;
        }
      });
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
.scroll-container {
  background: #f9f9fa;
  padding: 0;
  position: relative;
}
.scroll-container::before {
  // background-image: linear-gradient(
  //   143deg,
  //   #ff1ad9 0,
  //   #ff24c7 8%,
  //   #ff30b2 18%,
  //   #ff9400 100%
  // );
  background-image: linear-gradient(
    143deg,
    #2980B9 0,
    #2471a3 8%,
    #1f618d 18%,
    #34495E 100%
  );
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  top: 0;
  width: 30%;
}
.container {
  padding: 80px 40px 60px 20%;
  position: sticky;
  top: 0;
  left: 0;
}
header {
  background: 0 0;
  bottom: 0;
  left: 0;
  position: absolute;
  text-align: left;
  top: 0;
  width: 35%;
  color: $color-text-primary;
  z-index: 100;
}
.content {
  padding-left: 35%;
  padding-right: 5%;
}
figure {
  overflow: hidden;
  padding-top: 1rem;
  padding-bottom: 50% !important;
  height: 0;
  margin: 10px;
  bor img {
    display: block;
    width: 100%;
  }
}
.content-card {
  padding: 50px 10px 40px 10px;
}
ul {
  padding-left: 0;
}
h2 {
  padding-bottom: 20px;
}
.tittle {
  font-size: 1.7em;
}
a {
  font-size: 1.5em;
  color: $color-text-primary;
}
.active {
  color: $color-secondary;
  font-weight: 700;
  text-decoration: none;
  cursor: default;
}
</style>
