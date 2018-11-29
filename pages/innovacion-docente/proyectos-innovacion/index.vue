<template>
  <div>
    <header>
      <h1>Proyectos Innovacion</h1>
    </header>

    <section class="container">
      <div class="grid-container">
        <div class="card-item"
             v-for="(proyecto, i) in proyectos"
             :key="i">
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
              <span class="card-chip-detail area-tecnica">Área Técnica</span>
              <span class="card-chip-detail area-biologica">Área Biológica y Biomédica</span>
              <span class="card-chip-detail area-administrativa">Área Administrativa</span>
              <span class="card-chip-detail area-sociohumanistica">Área Sociohumanística</span>
            </div>
            <div class="card-spacer"></div>
            <a href=""
               class="card-btn">Ver Proyecto</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
export default {
  async asyncData() {
    let proyectos;
    try {
      const querySnapshot = await AFirestore.collection(
        "/innovacion-docente/proyectos-innovacion/proyectos"
      )
        .orderBy("name")
        .get();
      proyectos = querySnapshot.docs.map(doc =>
        Object.assign({ id: doc.id }, doc.data())
      );
    } catch (error) {
      console.log(error);
    }
    return { proyectos };
  }
};
</script>


<style lang="scss" scoped>
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
        transition: all 0.5s;
      }
    }
  }

  &-header {
    width: 100%;
    height: 33.33333336%;
    overflow: hidden;
    .card-banner {
      width: 100%;
      height: 100%;
      background-image: url("http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg");
      border-radius: 3px 3px 0px 0px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;
    }
  }
  &-details {
    padding: 20px;
    font-size: 14px;
    height: 66.666666663%;
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

    font-size: 11px;
  }
  &-chip-detail {
    border-radius: 3px;
    padding: 3px 7px;
    margin-bottom: 8px;
    margin-right: 8px;
    border-style: solid;
    border-width: 2px;
    font-weight: 300;
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
.area-tecnica {
  border-color: #ffd76b;
}
.area-sociohumanistica {
  border-color: #34d4ea;
}
.area-administrativa {
  border-color: #979797;
}
.area-biologica {
  border-color: #00981c;
}
</style>

