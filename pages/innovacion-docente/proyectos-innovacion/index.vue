<template>
  <div>
    <header>
      <h1>Proyectos Innovacion</h1>
    </header>
    <ProjectsCards :proyectos="proyectos" />
  </div>
</template>

<script>
import { AFirestore } from "~/plugins/firebase.js";
import ProjectsCards from "@/components/innovacion-docente/proyectos-innovacion/ProjectsCards";

export default {
  async asyncData({ query }) {
    console.log(query);
    let proyectos;
    try {
      const querySnapshot = await AFirestore.collection(
        "/innovacion-docente/proyectos-innovacion/proyectos"
      )
        .orderBy("name")
        .where("type", "==", query.area)
        .get();
      proyectos = querySnapshot.docs.map(doc =>
        Object.assign({ id: doc.id }, doc.data())
      );
    } catch (error) {
      console.log(error);
    }
    return { proyectos };
  },
  components: {
    ProjectsCards
  },
  watchQuery: ["view", "type", "area"]
};
</script>


<style lang="scss" scoped>
@import "assets/header";
</style>

