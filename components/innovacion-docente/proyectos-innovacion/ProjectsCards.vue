<template>
  <section class="container">
    <div class="grid-container">
      <nuxt-link class="card-item"
                 v-for="proyecto in proyectos"
                 :key="proyecto.id"
                 :to="{name: 'innovacion-docente-proyectos-innovacion-id', params: {id: proyecto.id}}"
                 tag="div">
        <div class="card-header">
          <div class="card-banner"></div>
        </div>
        <div class="card-details">
          <span class="card-title">{{proyecto.name | slice(0,75)}}</span>
          <div class="card-spacer"></div>
          <span><b>Coordinador: </b>{{proyecto.coordinator}}</span>
          <div class="card-spacer"></div>
          <span><b>Participantes: </b>{{proyecto.participants.length}}</span>
          <div class="card-spacer"></div>
          <div class="card-chips">
            <span v-if="proyecto.area.administrativa"
                  class="card-chip-detail area-administrativa">Área Administrativa</span>
            <span v-if="proyecto.area.biologica"
                  class="card-chip-detail area-biologica">Área Biológica y Biomédica</span>
            <span v-if="proyecto.area.sociohumanistica"
                  class="card-chip-detail area-sociohumanistica">Área Sociohumanística</span>
            <span v-if="proyecto.area.tecnica"
                  class="card-chip-detail area-tecnica">Área Técnica</span>
          </div>
          <div class="card-spacer"></div>
          <span href=""
                class="card-btn">Ver Proyecto</span>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["proyectos"],
  name: "ProjectsCards"
};
</script>

<style lang="scss" scoped>
@import "assets/areas";
@import "assets/variables";
@import "assets/header";

.grid-container {
  display: grid;
  grid-gap: 50px;
  grid-auto-rows: 400px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
}

.card {
  &-item {
    background-color: #f5f5f5;
    border-radius: 3px;
    box-shadow: 2px 2px 10px #0000003e;
    height: 100%;
    &:hover {
      box-shadow: 2px 2px 10px #00000072;
      cursor: pointer;
      .card-banner {
        transform: scale(1.1);
      }
    }
  }

  &-header {
    width: 100%;
    height: 40%;
    overflow: hidden;
    .card-banner {
      transition: all 0.5s;
      width: 100%;
      height: 100%;
      background-image: url("http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg");
      border-radius: 3px 3px 0px 0px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
      background-color: $color-primary;
    }
  }
  &-details {
    padding: 15px;
    font-size: 14px;
    height: 60%;
    display: flex;
    flex-direction: column;
  }
  &-spacer {
    height: 8px;
  }

  &-title {
    display: block;
    font-size: 20px !important;
    line-height: 32px;
  }
  &-chips {
    display: -webkit-flex; /* Safari */
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    display: flex;
    flex-wrap: wrap;
  }
  &-chip-detail {
    border-radius: 3px;
    padding: 3px 7px;
    margin-bottom: 8px;
    margin-right: 8px;
    border-style: solid;
    border-width: 3px;
    letter-spacing: 0.5px;
  }
  &-btn {
    color: $color-primary;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: auto;
  }
}
</style>

