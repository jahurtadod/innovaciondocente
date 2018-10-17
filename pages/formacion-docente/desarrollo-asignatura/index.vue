<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
    <section class="timeline">
      <div class="container left">
        <div class="content">
          <nuxt-link class="link"
                     :to="{name: 'formacion-docente-desarrollo-asignatura-elaborar'}">
            <h2>¿Cómo elaborar mi Plan Docente?</h2>
          </nuxt-link>
          <ol>
            <li>¿Qué es el Plan Docente?</li>
            <li>¿Qué elementos tiene el Plan?</li>
            <li>¿Cuáles son las funciones del Plan Docente?</li>
            <li>¿Cómo se evalúa a los estudiantes?</li>
            <li>¿El Plan docente evidencia nuestra calidad y compromiso?</li>
            <li>¿Cuál es el proceso de revisión y aprobación del Plan Docente?</li>
            <li>¿Qué es el repositorio de Planes Docentes?</li>
          </ol>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <nuxt-link class="link"
                     :to="{name: 'formacion-docente-desarrollo-asignatura-repositorio'}">
            <h2>¿Cómo se elabora un Plan por medio del Repositorio de Planes Docentes?</h2>
          </nuxt-link>
          <p>10 pasos sencillos para elaborar un plan</p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <nuxt-link class="link"
                     :to="{name: 'formacion-docente-desarrollo-asignatura-recursos'}">
            <h2>¿Deseas conocer algunos recursos digitales aplicados a la docencia?</h2>
          </nuxt-link>
          <p>Ponemos a tu disposición algunos recursos digitales que pueden ser aplicados a la docencia.</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <a href="https://biblioteca.utpl.edu.ec/"
             target="_blank">
            <h2>¿Conoces las Bases de Datos que te pueden ayudar para el aprendizaje de tus estudiantes?</h2>
          </a>
          <p>Repositorios de recursos digitales de carácter científico que contiene información relevante,
            de instituciones de gran renombre, 100% confiable, verídica y de última generación en todos
            los campos del saber humano; disponible para docentes, administrativos y estudiantes de la
            UTPL.
          </p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <nuxt-link class="link"
                     :to="{name: 'formacion-docente-desarrollo-asignatura-asesoramiento'}">
            <h2>¿Necesitas asesoramiento pedagógico para el desarrollo de tu asignatura?</h2>
          </nuxt-link>
          <p>Desde el Laboratorio de Innovación e Investigación Docente (LiiD) te ofrecemos varios servicios
            personalizados que te servirán para mejorar tu práctica docente:</p>
          <li>Filmación de tu clase</li>
          <li>Observación de tu clase</li>
          <li>Asesoramiento personalizado</li>
          <li>Grabación de Vídeos</li>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData() {
    let title = "Diseño y Desarrollo de mi asignatura";
    let description =
      "El Vicerrectorado Académico por medio de la Dirección de Formación, Evaluación e Innovación Docente y el Laboratorio de Innovación e Investigación Docente (LiiD) pone a tu disposición algunos recursos que te servirán para la planificación y el desarrollo  de tu asignatura";
    return { title, description };
  },
  head() {
    return {
      title: this.title  ,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";
@import "assets/header";
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  width: 100%;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: $color-primary;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  margin: 0;
}

/* The circles on the timeline */
.container::after {
  content: "";
  position: absolute;
  width: 35px;
  height: 35px;
  right: -17px;
  background-color: $color-text-primary;
  border: 4px solid $color-secondary;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid $color-text-primary;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent $color-primary;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid $color-text-primary;
  border-width: 10px 10px 10px 0;
  border-color: transparent $color-primary transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -17px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: #d4d8dd5b;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    margin: 0;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid $color-text-primary;
    border-width: 10px 10px 10px 0;
    border-color: transparent $color-text-primary transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
ol {
  list-style-type: lower-alpha;
}
</style>
