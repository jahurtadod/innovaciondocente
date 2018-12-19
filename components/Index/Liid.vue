<template>
  <div class="liid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="liid-info">
            <img alt="Lab img"
                 :src="liid.img">
            <p class="auto-break">{{liid.description}}</p>
          </div>
        </div>
        <div class="col-md-6 background-mustard">
          <div class="liid-info">
            <h2>PROYECTOS ACTUALES</h2>
            <!-- <div class="embed-container">
              <iframe :src="'https://www.youtube.com/embed/' + project.videoId"
                      frameborder="0"
                      title="video"
                      allow="autoplay; encrypted-media"
                      allowfullscreen></iframe>
            </div> -->
            <p class="auto-break on-secondary">{{project.description}}</p>
            <nuxt-link :to="{name: 'innovacion-docente-proyectos-actuales'}"
                       class="btn btn-large btn-primary">Atrevete</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["liid", "project"]
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
.liid-info {
  padding: 1rem;
  height: 100vh;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  h2 {
    color: $color-primary;
    letter-spacing: -1px;
  }
  img {
    height: 250px;
    width: 250px;
  }
  p {
    text-align: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
.on-secondary {
  color: $color-primary;
}
.background-mustard {
  background: $color-secondary;
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin: 15px;
}
.embed-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
