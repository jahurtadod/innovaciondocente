<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <section class="sticky">
            <nuxt-link class="btn btn-outline-primary btn-large"
                       :to="{name: 'innovacion-docente-buenas-practicas-index'}">Inicio</nuxt-link>
            <nuxt-link class="btn btn-outline-primary btn-large"
                       :to="{name: 'innovacion-docente-buenas-practicas-index-id',params:{id:'0'}}">A.
              Biológica</nuxt-link>
            <nuxt-link class="btn btn-outline-primary btn-large"
                       :to="{name: 'innovacion-docente-buenas-practicas-index-id',params:{id:'1'}}">A.
              Técnica</nuxt-link>
            <nuxt-link class="btn btn-outline-primary btn-large"
                       :to="{name: 'innovacion-docente-buenas-practicas-index-id',params:{id:'2'}}">A.
              Socio...</nuxt-link>
            <nuxt-link class="btn btn-outline-primary btn-large"
                       :to="{name: 'innovacion-docente-buenas-practicas-index-id',params:{id:'3'}}">A.
              Admin...</nuxt-link>
          </section>
        </div>
        <section class="col-lg-9">
          <nuxt-child />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const description =
      "Semestralmente los profesores de Modalidad Presencial, Abierta y de Postgrados, presentan propuestas de Buenas Prácticas Docentes que potencian el uso creativo de diferentes herramientas dentro y fuera del aula.";
    return { description };
  },
  head() {
    return {
      title: "Buenas Prácticas",
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

<style lang="scss">
@import "assets/variables";
@import "assets/card";
@import "assets/variables";
.nuxt-link-exact-active {
  color: $color-text-primary !important;
  background-color: $color-primary !important;
  &:hover {
    opacity: 0.8;
    transition: 0.2s all ease;
  }
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 3;
  }
}
</style>

