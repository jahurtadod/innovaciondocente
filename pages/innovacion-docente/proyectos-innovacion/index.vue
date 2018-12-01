<template>
  <div>
    <header>
      <h1>{{queryType|proyectoInnovacionType}}</h1>
    </header>
    <ProjectsCanvas v-if="view === 'canvas'"
                    :proyectos="proyectos"
                    :queryType="queryType" />
    <ProjectsCards v-else
                   :proyectos="proyectos"
                   :queryType="queryType" />
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import ProjectsCards from "@/components/innovacion-docente/proyectos-innovacion/ProjectsCards";
import ProjectsCanvas from "@/components/innovacion-docente/proyectos-innovacion/ProjectsCanvas";

export default {
  async asyncData({ query }) {
    let proyectos;
    try {
      let proyectosCollection = AFirestore.collection(
        "/innovacion-docente/proyectos-innovacion/proyectos"
      ).orderBy("name");
      // add type filter if exist
      if (query.type) {
        proyectosCollection = proyectosCollection.where(
          "type",
          "==",
          query.type
        );
      } else {
        proyectosCollection = proyectosCollection.where(
          "type",
          "==",
          "proyecto-actual"
        );
      }
      // add area filter if exist
      if (query.area) {
        if (query.area == "administratica")
          proyectosCollection = proyectosCollection.where(
            "area.administratica",
            "==",
            true
          );
        else if (query.area == "biologica")
          proyectosCollection = proyectosCollection.where(
            "area.biologica",
            "==",
            true
          );
        else if (query.area == "sociohumanistica")
          proyectosCollection = proyectosCollection.where(
            "area.sociohumanistica",
            "==",
            true
          );
        else if (query.area == "tecnica")
          proyectosCollection = proyectosCollection.where(
            "area.tecnica",
            "==",
            true
          );
      }

      const querySnapshot = await proyectosCollection.get();
      proyectos = querySnapshot.docs.map(doc =>
        Object.assign({ id: doc.id }, doc.data())
      );
    } catch (error) {
      console.log(error);
    }
    return {
      proyectos,
      queryType: query.type !== null ? query.type : "proyecto-actual",
      view: query.view !== null ? query.view : ""
    };
  },
  components: {
    ProjectsCards,
    ProjectsCanvas
  },
  watchQuery: ["view", "type", "area"]
};
</script>


<style lang="scss" scoped>
@import "assets/header";
</style>

