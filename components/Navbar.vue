<template>
  <div class="header"
       id="nav">
    <nav id="responsive">
      <nuxt-link :to="{name: 'index'}"
                 class="logo">
        UTPL
      </nuxt-link>
      <div class="nav">
        <div class="dropdown">
          <button class="dropbtn">
            Innovación Docente
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <nuxt-link :to="{name: 'innovacion-docente-ayudante-catedra'}">Ayudante de Cátedra</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-proyectos-innovacion', query:{
              area:'buena-practica'
            }}">Buenas
              Prácticas</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-convocatorias'}">Convocatorias</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-proyectos-innovacion', query:{
              area:'proyecto-actual'
            }}">Proyectos
              Actuales</nuxt-link>
            <nuxt-link :to="{name: 'innovacion-docente-proyecto-mentores'}">Proyecto Mentores</nuxt-link>
            <a target="_blank"
               rel="noopener"
               href="https://retos.utpl.edu.ec/">Retos</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Formación Docente
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <nuxt-link :to="{name: 'formacion-docente-programa-formacion'}">Programa de Formación</nuxt-link>
            <nuxt-link :to="{name: 'formacion-docente-cafe-cientifico'}">Café Científico</nuxt-link>
            <nuxt-link :to="{name: 'formacion-docente-desarrollo-asignatura'}">Diseño de mi
              Asignatura</nuxt-link>
            <nuxt-link :to="{name: 'formacion-docente-jornadas-de-reflexion'}">Jornadas de
              Reflexión</nuxt-link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Observatorio EduTendencias
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <nuxt-link :to="{name: 'observatorio-edutendencias-tips-innovacion'}">Tips de
              Innovacion</nuxt-link>
            <nuxt-link :to="{name: 'observatorio-edutendencias-noticias'}">Noticias</nuxt-link>
          </div>
        </div>
      </div>
      <a href="javascript:void(0);"
         style="font-size:15px;"
         class="icon"
         @click="toggleMenu">&#9776;</a>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      let el = document.getElementById("responsive");
      el.classList.toggle("responsive");
    }
  },
  watch: {
    $route: function() {
      let body = document.getElementById("responsive");

      if (body.classList.contains("responsive")) {
        body.classList.remove("responsive");
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", () => {
      let nav = document.getElementById("nav");
      if (document.documentElement.scrollTop > 0) {
        nav.classList.add("navShadow");
      } else {
        nav.classList.remove("navShadow");
      }
    });
  }
};
</script>


<style lang="scss" scoped>
@import "assets/variables";
///////options/////////
$padding: 12px;

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

nav {
  overflow: hidden;
  background-color: $color-primary;

  .logo {
    font-weight: 700;
    padding-left: 30px;
  }
  a {
    float: left;
    display: block;
    color: $color-text-primary;
    text-align: center;
    padding: $padding;
    text-decoration: none;
    padding: 10px 20px 10px 0;
  }
  .icon {
    display: none;
  }
}
.navShadow {
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
  transition: ease-in 0.2s;
}

.nuxt-link-exact-active {
  font-weight: 500;
}
.nav {
  float: right;
  padding-right: 10px;
}

.dropdown {
  float: left;
  overflow: hidden;
  .dropbtn {
    border: none;
    outline: none;
    color: $color-text-primary;
    padding: $padding;
    background-color: inherit;
    margin: 0;
    padding: 10px 20px 10px 0;
  }
  &-content {
    cursor: pointer;
    display: none;
    position: absolute;
    // box-shadow: 0px 1px 8px rgba($color-background-inverse, 0.7);
    min-width: 100px;
    z-index: 1020;
    a {
      color: $color-text-primary;
      background-color: $color-primary;
      float: none;
      padding: $padding;
      text-decoration: none;
      display: block;
      text-align: left;
      &:hover {
        background-color: $color-background;
        color: $color-text;
      }
    }
  }
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 768px) {
  nav {
    a:not(:first-child),
    .dropdown .dropbtn {
      display: none;
    }
    a.icon {
      float: right;
      display: block;
    }
  }
  nav.responsive {
    position: relative;
    a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    a {
      float: none;
      display: block;
      text-align: left;
    }
    .dropdown {
      float: none;
      .dropbtn {
        display: block;
        width: 100%;
        text-align: left;
      }
      &-content {
        position: relative;
        background-color: $color-text-primary;
        border-left: 2px solid $color-text-primary;
        box-shadow: none;
        a {
          background-color: $color-primary;
          color: $color-text-primary;
        }
      }
    }
  }
  .nav {
    float: left;
    padding-left: 30px;
  }
}
</style>
