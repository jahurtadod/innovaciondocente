<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <nuxt-link tag="div"
                   style="cursor:pointer"
                   class="col-lg-3 col-md-6 obTec obTec-1 img-container"
                   :to="{name: 'observatorio-edutendencias-tips-innovacion-tips', query: {tag: 'aula-divertida'}}">
          <div class="title">
            <h2>AULA DIVERTIDA</h2>
          </div>
          <div class="overlay"></div>
          <div class="nav-img">
          </div>
        </nuxt-link>
        <nuxt-link tag="div"
                   style="cursor:pointer"
                   class="col-lg-3 col-md-6 obTec obTec-2 img-container"
                   :to="{name: 'observatorio-edutendencias-tips-innovacion-tips', query: {tag: 'docentes-futuro'}}">
          <div class="title">
            <h2>DOCENTES DEL FUTURO</h2>
          </div>
          <div class="overlay"></div>
          <div class="nav-img">
          </div>
        </nuxt-link>
        <a tag="div"
           style="cursor:pointer"
           class="col-lg-3 col-md-6 obTec obTec-3 img-container"
           target="_blank"
           href="https://www.ivoox.com/podcast-academia-utpl_sq_f1507318_1.html">
          <div class="title">
            <h2>PODCAST</h2>
          </div>
          <div class="overlay"></div>
          <div class="nav-img">
          </div>
        </a>
        <nuxt-link tag="div"
                   style="cursor:pointer"
                   class="col-lg-3 col-md-6 obTec obTec-4 img-container"
                   :to="{name: 'observatorio-edutendencias-tips-innovacion-tips', query: {tag: 'videos'}}">
          <div class="title">
            <h2>VIDEOS</h2>
          </div>
          <div class="overlay"></div>
          <div class="nav-img">
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "EduTendencias  "
    };
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";
@import "assets/style";
h2 {
  color: $color-secondary;
}
.obTec-1 {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/observatorio-edutendencias%2Fobsevatorio%2Ffun.jpg?alt=media&token=36c1f88d-e4fa-4636-a562-a32a85e1c9c9");
}
.obTec-2 {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/observatorio-edutendencias%2Fobsevatorio%2Fdocfut.jpg?alt=media&token=5733d1a3-1249-40f5-a705-970c4d1df82f");
}
.obTec-3 {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/observatorio-edutendencias%2Fobsevatorio%2Fpod.jpg?alt=media&token=d791889c-15cc-403c-9cf2-a5dc74f20505");
}
.obTec-4 {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/observatorio-edutendencias%2Fobsevatorio%2Fvideo.jpg?alt=media&token=00090cf4-7470-4c49-8fb9-99c95cae2ade");
}
.obTec {
  background-position: center center;
  text-align: center;
  height: 100vh;
  -ms-display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  &:hover {
    background: $color-secondary !important;
    h2 {
      color: $color-primary;
    }
  }
  img {
    display: none;
    position: absolute;
  }
}
.img-container {
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
