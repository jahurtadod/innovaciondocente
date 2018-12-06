<template>
  <div class="chips">
    <nuxt-link tag="span"
               v-if="area.administrativa"
               :to="{name: 'innovacion-docente-proyectos-innovacion', query:{view:'normal',type:queryType,area:'administrativa'}}"
               class="chips-detail area-administrativa">Área Administrativa</nuxt-link>
    <nuxt-link tag="span"
               v-if="area.biologica"
               :to="{name: 'innovacion-docente-proyectos-innovacion', query:{view:'normal',type:queryType,area:'biologica'}}"
               class="chips-detail area-biologica">Área Biológica y Biomédica</nuxt-link>
    <nuxt-link tag="span"
               v-if="area.sociohumanistica"
               :to="{name: 'innovacion-docente-proyectos-innovacion', query:{view:'normal',type:queryType,area:'sociohumanistica'}}"
               class="chips-detail area-sociohumanistica">Área Sociohumanística</nuxt-link>
    <nuxt-link tag="span"
               v-if="area.tecnica"
               :to="{name: 'innovacion-docente-proyectos-innovacion', query:{view:'normal',type:queryType,area:'tecnica'}}"
               class="chips-detail area-tecnica">Área Técnica</nuxt-link>
  </div>
</template>


<script>
export default {
  props: ["area", "queryType"]
};
</script>

<style lang="scss" scoped>
.chips {
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
  &-detail {
    border-radius: 3px;
    padding: 3px 7px;
    margin-bottom: 8px;
    margin-right: 8px;
    border-style: solid;
    border-width: 3px;
    letter-spacing: 0.5px;
    cursor: pointer;
  }
}

.area-tecnica {
  border-color: #ffd76b;
  background-color: #ffd76b;
  color: #000;
}
.area-sociohumanistica {
  border-color: #34d4ea;
  background-color: #34d4ea;
  color: #fff;
}
.area-administrativa {
  border-color: #979797;
  background-color: #979797;
  color: #fff;
}
.area-biologica {
  border-color: #00981c;
  background-color: #00981c;
  color: #fff;
}
</style>

