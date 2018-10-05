<template>
  <div>
    <section class="parallax">
      <div class="header-content">
        <h1>{{title}}</h1>
        <div class="container">
          <div class="row">
            <div class="col-md-6 outro-icon">
              <img src="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/icons%2Fsello.png?alt=media&token=59fe75b5-88c2-466d-a323-fdc70daf89f8"
                   alt="logo">
            </div>
            <div class="col-md-6 text">
              <p>
                {{description}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <p>A través de iniciativas como Encuentro Café Científico, Jornadas de Reflexión Académica,
        el Plan
        de Formación Docente, entre otras, busca instaurar un sello de calidad para todos los
        programas
        formativos de la Universidad Técnica Particular de Loja.</p>
      <h3>Objetivos de la innovación docente</h3>
      <ul>
        <li>Mejorar la calidad educativa de las titulaciones de grado y postgrado.</li>
        <li>Generar movilidad docente hacia otras universidades con las cuales se pueda compartir
          las experiencias
          de las buenas prácticas docentes.</li>
        <li>Crear espacios para identificar, valorar, sistematizar, normalizar, aplicar y difundir
          las experiencias
          novedosas que contribuyan a la solución de problemas educativos que estén afectando la
          calidad
          de los aprendizajes.</li>
        <li>Estimular la investigación como un elemento cotidiano determinante de la formación
          profesional
          continua de los docentes a partir de su propia práctica educativa.</li>
        <li>Documentar las experiencias de las buenas prácticas docentes innovadoras.</li>
      </ul>
      <div class="container cont-vic">
        <h2>Saludo del Vicerrector</h2>
        <div class="row">
          <div class="col-md-6 "><img src="https://innovaciondocente.utpl.edu.ec/sites/default/files/images/1(1).jpg"
                 alt="vice"></div>
          <div class="col-md-6">
            <h4>Estimados docentes:</h4>
            <p>Les doy la bienvenida al portal de innovación docente del Vicerrectorado Académico,
              a la
              vez que al inicio del presente ciclo académico. Este sitio busca poner al alcance de
              todos
              las iniciativas que tenemos en marcha para estimular la reflexión, actualización y
              mejora
              de nuestras prácticas docentes. La colaboración de ustedes y las sugerencias que
              nazcan
              de la misma, serán de gran ayuda para hacer de este portal un medio vivo y dinámico
              de
              interacción entre el Vicerrectorado Académico y el cuerpo docente de la Universidad.</p>
            <h6>Santiago Acosta Aide</h6>
            <h6>Vicerrector Académico</h6>
          </div>
          <button @click="$router.go(-1)"
                  class="btn btn-outline-primary btn-large">Regresar</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData() {
    const title = "Quienes Somos";
    const description =
      "Enmarcado en el Plan Estratégico de Desarrollo Institucional 2011 - 2020, el Vicerrectorado Académico, a través de su Dirección de Innovación, Formación y Evaluación Docente, trabaja e impulsa actividades innovadoras en la docencia y en la planificación docente; define un modelo integral para todas las titulaciones en el programa de innovación académica";
    return {
      title,
      description
    };
  },
  head() {
    return {
      title: this.title,
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
.parallax {
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bcd2bf5b6271090e70ea12980ddb02d7&auto=format&fit=crop&w=1067&q=80");
  display: table;
}
.header-content {
  width: 100vw;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  margin: auto;
  h1 {
    font-weight: 400;
    color: $color-font-primary;
    font-size: 400%;
    margin: 0;
    padding: 0;
  }
  .text {
    text-align: justify;
    color: $color-font-primary;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
}
.cont-vic {
  border-top: 2px #e1e4e8 solid;
  margin-top: 25px;
  padding-top: 20px;
  .col-md-6 {
    padding-top: 20px;
  }
}
@media screen and (max-width: 768px) {
  .header-content {
    text-align: center;
    h1 {
      font-size: 300%;
    }
    .outro-icon {
      text-align: center;
      img {
        height: 250px;
        width: 250px;
      }
    }
  }
}
h2 {
  text-align: center;
  margin-bottom: 5px;
}
</style>
