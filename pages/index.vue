<template>
  <div>
    <header class="header"
            v-if="indexData.banner">
      <div class="header-overlay"></div>
      <div class="fondo">
        <img class="img-move"
             :src="indexData.banner"
             alt="">
      </div>
      <div class="header-content">
        <h1>Proyecto Ascendere</h1>
        <p>Innovación
          <span>|</span> Formación
          <span>|</span> Evaluación</p>
        <div @click="pageScroll()"
             id="arrow">
          <a href="#"
             class="arrow arrow-1">
            <span>arrow</span>
          </a>
          <a href="#"
             class="arrow arrow-2">
            <span>arrow</span>
          </a>
          <a href="#"
             class="arrow arrow-3">
            <span>arrow</span>
          </a>
        </div>
      </div>
    </header>
    <ScrollContainer />
    <CafeCientifico />
    <LiiD :liid='indexData.liid'
          :project='indexData.project' />
    <QuienesSomos :quienesSomos="indexData['quienes-somos']" />
    <Suscripcion title="Suscríbete"
                 description="Obtenga las últimas noticias de Innovación UTPL entregadas en su bandeja de entrada." />
    <FooterIndex />
  </div>
</template>
<script>
import { AFirestore } from "~/plugins/firebase.js";

import Navbar from "@/components/Navbar";
import Cards from "@/components/Index/Cards";
import CafeCientifico from "@/components/Index/CafeCientifico";
import LiiD from "@/components/Index/Liid";
import QuienesSomos from "@/components/Index/QuienesSomos";
import FooterIndex from "@/components/Index/FooterIndex";
import ScrollContainer from "@/components/Index/ScrollContainer";
import Suscripcion from "@/components/Suscripcion";

export default {
  layout: "empty",
  async asyncData() {
    const indexSnap = await AFirestore.collection("meta")
      .doc("index")
      .get();
    return {
      indexData: indexSnap.data()
    };
  },
  methods: {
    pageScroll() {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  },
  components: {
    Navbar,
    Cards,
    LiiD,
    QuienesSomos,
    CafeCientifico,
    Suscripcion,
    ScrollContainer,
    FooterIndex
  },
  head() {
    return {
      title: "PROYECTO ASCENDERE",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.indexData.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";
@import "assets/card";
h1 {
  color: $color-text-primary;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  font-size: 120px;
  letter-spacing: 5px;
}
p {
  text-align: center;
  span {
    color: $color-secondary;
  }
}
.header {
  object-fit: cover;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: $color-text-primary;
  text-align: center;
}
.fondo {
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: absolute;
  z-index: -2;
  .img-move {
    object-fit: cover;
    width: 100%;
    min-height: 300px;
    height: 100vh;
    max-height: 100vh;
    opacity: 1;
    position: relative;
    animation: moving 10s infinite linear alternate;
    @keyframes moving {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.3);
      }
    }
  }
}
.header-overlay {
  height: 100vh;
  width: 100%;
  position: absolute;
  background: $color-primary;
  opacity: 0.3;
  z-index: -1;
}
.header-content {
  margin: auto;
  text-align: center;
  h1 {
    font-size: 50px;
    margin-bottom: 0;
  }
  p {
    font-size: 1.5rem;
    display: block;
    padding-bottom: 2rem;
  }
  a {
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: 2;
    display: inline-block;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: opacity 0.3s;
  }
}
.arrow {
  padding-top: 70px;
}
.arrow-1 {
  padding-top: 60px;
}
.arrow-2 {
  padding-top: 50px;
}
.arrow span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  cursor: pointer;
  border-left: 1px solid $color-secondary;
  border-bottom: 1px solid $color-text-primary;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  color: transparent;
  @-webkit-keyframes sdb05 {
    0% {
      -webkit-transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
  @keyframes sdb05 {
    0% {
      transform: rotate(-45deg) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      opacity: 0;
    }
  }
}
@media (max-width: 768px) {
  #arrow {
    display: none;
  }
  .header-content {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 1.25rem;
    }
  }
}
</style>
