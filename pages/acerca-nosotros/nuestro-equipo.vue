<template>
  <section>
    <div class="container we-team">
      <div class="row">
        <img src="~/static/sello.png"
             alt="logo">
        <h1>PROYECTO ASCENDERE</h1>
      </div>
    </div>
    <div class="parallax"
         :style="'background-image: url('+data.banner+');'">
    </div>
    <section class="container">
      <section class="row">
        <section class="container">
          <div class="section-text">
            <h2>Innovando Cambios</h2>
            <p>
              {{data.description}}
            </p>
          </div>
          <section class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <figure class="column-img">
                <img :src="data.maria"
                     alt="img-avatar" />
                <figcaption>
                  <h5>Dirección de Innovación, Formación y Evaluación Docente</h5>
                  <h3>PhD. María Isabel Loaiza</h3>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <figure class="column-img">
                <img :src="data.nuve"
                     alt="img-avatar" />
                <figcaption>
                  <h5>Formación Docente</h5>
                  <h3>Ing. Nuve Briceño</h3>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <figure class="column-img">
                <img :src="data.angela"
                     alt="img-avatar" />
                <figcaption>
                  <h5>Innovación Docente</h5>
                  <h3>Mgtr. Angela Salazar</h3>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <figure class="column-img">
                <img :src="data.lourdes"
                     alt="img-avatar" />
                <figcaption>
                  <h5>Evaluación Docente</h5>
                  <h3>Mgtr. Lourdes Cueva</h3>
                </figcaption>
              </figure>
            </div>
          </section>
          <div class="section-text">
            <h2>InDevelomenpt Company</h2>
            <p>
              Compañía de desarrollo de software fundada en 2018, por un grupo de estudiantes de la
              titulación de Ingeniería
              en Sistemas Informáticos y Computación de la UTPL. Tras la intervención en el
              proyecto
              Ascendere, nace el grupo con la visión de generar innovación mediante el uso de
              nuevas
              tecnologías, cuya misión es incentivar a otros jóvenes a participar en los diferentes
              proyectos
              y actividades generados por las universidades.
            </p>
          </div>
          <div>
            <figure class="column-img">
              <img :src="data.indevTeam"
                   alt="Indev Team" />
              <figcaption>
                <h3>With
                  <a class="footer-heart"
                     href=""
                     title="With love by InDevelopmentCompany">
                    <i class="fas fa-heart" />
                  </a> by InDevelopmentCompany</h3>
              </figcaption>
              <a href="#"></a>
            </figure>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>
<script>
import { QuienesSomosDocument } from "~/plugins/firebase.js";
export default {
  async asyncData() {
    const dataSnap = await QuienesSomosDocument.get();
    return {
      data: dataSnap.data()
    };
  },
  head() {
    return {
      title: "Nuestro Equipo",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
p {
  column-count: 2;
  column-gap: 2.25rem;
  line-height: 2.25;
}
section {
  padding-bottom: 20px;
}
.parallax {
  height: 70vh !important;
}
.section-text {
  padding: 1rem 8rem 1rem 8rem;
  h2 {
    text-align: center;
  }
}
.we-team {
  text-align: center;
  height: 25vh;
  img {
    height: 150px;
    width: 150px;
  }
  h1 {
    margin: 0;
    padding: 1rem;
    border-left: 2px $color-warning solid;
  }
}
.row {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  align-content: center;
}
figure.column-img {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
  color: $color-primary;
  text-align: center;
  -webkit-perspective: 50em;
  perspective: 50em;
  img {
    min-width: 100%;
    min-height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
  figcaption {
    top: 50%;
    left: 20px;
    right: 20px;
    padding: 0.8rem;
    position: absolute;
    opacity: 0;
    z-index: 1;
  }
  h3,
  h5 {
    margin: 0;
  }
  h3 {
    font-weight: 600;
  }
  h5 {
    font-weight: 400;
  }
  &:after {
    background-color: #ffffff;
    position: absolute;
    content: "";
    display: block;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    opacity: 0;
  }
  a {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
  &:hover figcaption {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  &:hover:after {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 0.9;
  }
}
@media (max-width: 992px) {
  p {
    column-count: 1;
  }
  .section-text {
    padding: 1rem 1rem 1rem 1rem;
  }
}
</style>
