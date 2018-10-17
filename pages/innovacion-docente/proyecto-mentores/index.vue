<template>
  <div>
    <header class="parallax"></header>
    <section class="container">
      <h1>Proyecto Mentores</h1>
      <hr>
      <p>El ingreso a la vida universitaria trae consigo nuevos retos, pues supone la adaptación a
        nuevos
        entornos, conocer nuevas personas y adecuarse a nuevos ritmos de trabajo. El Vicerrectorado
        Académico
        de la UTPL propone el Proyecto Mentores como un aporte para la inserción saludable de los
        nuevos
        estudiantes a nuestra casa de estudios.</p>
      <h3>¿Cuál es el objetivo fundamental del Proyecto Mentores en la UTPL?</h3>
      <p>El proyecto Mentores para estudiantes procura facilitar el proceso de integración
        de los estudiantes de nuevo ingreso de la Modalidad Presencial de la UTPL, a través de
        actividades
        de acompañamiento permanente, como guiar, orientar, asesorar y realizar seguimiento a los
        alumnos.</p>
      <h3>¿Cuál es el perfil del Docente Mentor UTPL?</h3>
      <ul>
        <li>Ser alumno matriculado en el período académico en curso.</li>
        <li>El postulante debe ser docente en el próximo ciclo académico de un componente de la
          Titulación
          a la que pertenecen los estudiantes que van a recibir el apoyo.</li>
        <li>Debe mostrar un perfil investigador, de liderazgo, vocación de servicio, iniciativa,
          compromiso
          y buenas relaciones interpersonales.</li>
        <li>Es importante el carisma y el interés de brindar acompañamiento.</li>
        <li>Los docentes no deben registrar ninguna sanción disciplinaria.</li>
      </ul>
      <h3>¿Cómo postular para ser un Docente Mentor?</h3>
      <p>La convocatoria para esta Buena Práctica de Innovación Docente periodo Octubre 2017 -
        Febrero 2018,
        estará abierta hasta el 26 de Julio de 2017. Para aplicar, debes descargar el formato de
        postulación
        y entregarlo impreso en el Vicerrectorado Académico de la UTPL hasta la fecha establecida.</p>
      <h3>¿Cuáles son los reconocimientos por ser un Docente Mentor?</h3>
      <p>Las acciones desarrolladas por el Docente Mentor serán consideradas para la evaluación de
        actividades
        de docencia en la Evaluación Integral de Desempeño del personal académico de la UTPL.
        Además,
        recibirá una certificación por su participación, y sus actividades le servirán como apoyo
        para
        asistir a congresos internacionales.</p>
      <hr>
      <h4>¿Te atreves?</h4>
      <div class="row">
        <a class="enlace"
           target="_blank"
           href="https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/innovacion-docente%2Fproyecto%20mentores%2Fformulario_docentes_mentores.pdf?alt=media&token=1f872d63-b10c-45cb-a99c-b58022202a84">
          <i class="fas fa-address-card"> </i> Formato de postulación
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const description =
      "El proyecto Mentores para estudiantes procura facilitar el proceso de integración de los estudiantes de nuevo ingreso de la Modalidad Presencial de la UTPL, a través de actividades de acompañamiento permanente, como guiar, orientar, asesorar y realizar seguimiento a los alumnos.";
    return { description };
  },
  head() {
    return {
      title: "Proyecto Mentores",
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
h4 {
  text-align: center !important;
}

.parallax {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/innovacion-docente%2Fproyecto%20mentores%2Fmentores.jpg?alt=media&token=f0e6d69b-de13-4dcd-bb07-04beee5a5331");
}
a {
  margin: 0 auto !important;
}
i {
  color: $color-secondary;
}
</style>
