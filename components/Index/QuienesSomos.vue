<template>
  <section class="quienes-somos">
    <div class="quienes-somos__img">
    </div>
    <div class="quienes-content">
      <h2>QUIENES SOMOS</h2>
      <p class="section-text-center">A través de iniciativas como
        <strong>Encuentro Café Científico</strong>,
        <strong>Jornadas de Reflexión Académica</strong>, el
        <strong>Plan de Formación Docente</strong> , entre otras, busca instaurar un sello de calidad para todos
        los programas formativos de la Universidad Técnica Particular de Loja.</p>
      <div class="container">
        <div class="row">
          <div class="col-md-12 avatar">
            <img class="img-avatar"
                 :src="'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2FViceC.png?alt=media&token=328eb73d-ab6c-49e9-8bbf-372d56f74d01'"
                 alt="Avatar">
            <h3>Dr. Santiago Acosta Aide</h3>
            <h4>Vicerrector Académico</h4>
          </div>
          <div class="col-lg-3 col-md-6 avatar">
            <img class="img-avatar"
                 :src="'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2FMariaC.png?alt=media&token=cf6cffff-dbc4-4953-98ca-fc8eef1034c9'"
                 alt="Avatar">
            <h3>PhD. María Isabel Loaiza</h3>
            <h4>Dirección de Innovación, Formación y Evaluación Docente</h4>
          </div>
          <div class="col-lg-3 col-md-6 avatar">
            <img class="img-avatar"
                 :src="'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2FNuveC.png?alt=media&token=868fd4de-89ca-4de2-ae5f-17801736a096'"
                 alt="Avatar">
            <h3>Ing. Nuve Briceño</h3>
            <h4>Formación Docente</h4>
          </div>
          <div class="col-lg-3 col-md-6 avatar">
            <img class="img-avatar"
                 :src="'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2FAngelaC.png?alt=media&token=e6473e30-428a-4905-ae51-a4439d271579'"
                 alt="Avatar">
            <h3>Mgtr. Angela Salazar</h3>
            <h4>Innovación Docente</h4>
          </div>
          <div class="col-lg-3 col-md-6 avatar">
            <img class="img-avatar"
                 :src="'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2FLourdesC.png?alt=media&token=be30d4e1-c736-45f2-81c2-103741b20c2b'"
                 alt="Avatar">
            <h3>Mgtr. Lourdes Cueva</h3>
            <h4>Evaluación Docente</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/parallax";
.quienes-content {
  padding: 50px;
  text-align: center;
  align-items: center;
}
.img-avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 10px;
}
.avatar {
  text-align: center;
  padding: 10px;
  z-index: 1;
  h3 {
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  h4 {
    font-weight: normal;
    font-style: italic;
    letter-spacing: 1px;
    color: #e7e7e7;
  }
  &:hover {
    .img-avatar {
      transition: transform ease-in-out 0.25s;
      transform: scale(1.1);
    }
  }
}
.section-text-center {
  font-size: 22px;
  width: 80%;
  line-height: 1.4em !important;
  margin: 0 auto;
  padding-bottom: 40px;
  padding-top: 10px;
  letter-spacing: 0.02em;
  font-weight: 200;
  text-align: center;
}
.quienes-somos {
  background: #000;
  background: -moz-linear-gradient(
    -45deg,
    #000000 0%,
    #000000 25%,
    #1e539e 50%,
    $color-primary 75%,
    #898c90 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #000000 0%,
    #000000 25%,
    #1e539e 50%,
    $color-primary 75%,
    #898c90 100%
  );
  background: linear-gradient(
    135deg,
    #000000 0%,
    #000000 25%,
    #1e539e 50%,
    $color-primary 75%,
    #898c90 100%
  );
  background-size: 400% 400%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  transition: 0.5s all;
  &__img {
    position: absolute;
    background: #000 url("https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/index%2FIMG_8388.jpg?alt=media&token=814dfcf4-13ae-47da-8e2b-f1c1fc0cd228") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    mix-blend-mode: screen;
  }
  background-position: 100% 100%;
}
</style>
