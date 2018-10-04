<template>
  <footer class="container footer-index">
    <div class="footer-commo container">
      <div class="row">
        <div class="col-md-2 footer-outro-icon">
          <img :src="'https://firebasestorage.googleapis.com/v0/b/innovaciondocente-utpl.appspot.com/o/icons%2Ficon.png?alt=media&token=fdc778de-c683-4f2c-86d1-42f1eeedbe5c'"
        
               alt="icon-innova">
        </div>
        <div class="col-md-5 col-lg-4 col-xl-auto ">
          <div class="list-vertical-index">
            <h3>Acerca de Nosotros</h3>
            <ul>
              <li>
                <nuxt-link class="nav"
                           :to="{name: 'acerca-nosotros'}">Quienes Somos</nuxt-link>
              </li>
              <li>
                <nuxt-link class="nav"
                           :to="{name: 'acerca-nosotros-nuestro-equipo'}">Nuestro Equipo</nuxt-link>
              </li>
              <li>
                <nuxt-link class="nav"
                           :to="{name: 'acerca-nosotros-nuestros-servicios'}">Servicios</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-md-12 footer-icons networks">
            <div class="social-networks-index square spin-icon">
              <ul class="social-networks">
                <li>
                  <a href="https://www.facebook.com/LiiDUTPL"
                     target="_blank"
                     rel="noopener"
                     title="facebook"
                     class="fab fa-facebook-f">facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/utpl"
                     target="_blank"
                     rel="noopener"
                     title="twitter"
                     class="fab fa-twitter">twitter</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCzRd2Y87-NJnVliV8B6e_Xg"
                     target="_blank"
                     rel="noopener"
                     title="youtube"
                     class="fab fa-youtube">youtube</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/liidutpl"
                     target="_blank"
                     rel="noopener"
                     title="instagram"
                     class="fab fa-instagram">instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-lg-6 col-xl-auto">
          <div class="list-vertical-index footer-list">
            <h3>Contactos</h3>
            <ul>
              <li>Teléfono: 370 1444 – Ext. 2316</li>
              <li>Correo electrónico:
                <a href="mailto:vacademico@utpl.edu.ec">vacademico@utpl.edu.ec</a>
              </li>
              <li>Campus San Cayetano Alto.</li>
              <li>Loja – Ecuador.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 footer-outro container">
      <ul class="mb">
        <li class="mr">© 2018
          <a href="https://www.utpl.edu.ec/">UTPL</a>
        </li>
        <li>With
          <a class="footer-heart"
             href=""
             title="With love by InDevelopmentCompany">
            <i class="fas fa-heart" />
          </a>by InDevelopmentCompany
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "assets/variables";
.social-networks {
  padding-left: 0 !important;
}
.footer-index {
  padding: 2rem;
  .footer-outro {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    ul {
      border-top: 1px #e1e4e8 solid;
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      padding-left: 0;
      margin-top: 0.2rem;
      margin-bottom: 0;
      justify-content: space-between !important;
      a {
        margin-left: 0.2rem;
        margin-right: 0.3rem;
        color: $color-primary;
      }
      li {
        margin-top: 0.5rem;
        font-size: 80%;
      }
    }
  }
  .footer-outro-icon {
    margin-left: 0;
  }
  .list-vertical-index {
    li {
      list-style: none;
      padding: 0;
      border: 0;
      font-size: 92%;
      margin: 0;
    }
    h3 {
      font-weight: bold;
    }
    .nav {
      color: #7a7a7a;
    }
  }
}
.footer-icons {
  padding: 0;
}
.social-networks-index {
  li {
    display: inline-block;
    padding: 1px;
  }
  a {
    display: block;
    position: relative;
    width: 35px;
    height: 35px;
    font-size: 0;
    line-height: 0;
    text-align: center;
    text-decoration: none;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      margin-top: -30%;
      margin-left: -50%;
      border-radius: 100px;
      background-color: #1f2027;
      transition: all 400ms;
    }

    &:after {
      position: relative;
      display: block;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      color: #fff;
      font-size: 15px;
      line-height: 50px;
    }

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  &.spin-icon a:hover:after,
  &.spin-icon a:focus:after {
    transition: transform 0.4s ease-out;
    transform: rotateZ(360deg);
  }

  &.square a:hover:before,
  &.square a:focus:before {
    border-radius: 0;
  }

  $networks: facebook-f "\f39e" #3b5998, twitter "\f099" #00b0ed,
    github "\eab1" #4183c4, instagram "\f16d" #3f729b, youtube "\f167" #cc2127;

  @each $network in $networks {
    .fa-#{nth($network, 1)} {
      &:after {
        content: "#{nth($network, 2)}";
      }

      &:hover:before,
      &:focus:before {
        background: nth($network, 3);
      }
    }
  }
  img {
    margin-top: 10%;
  }
}
.footer-index ul {
  padding-left: 10px;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  color: $color-font-light;
}
.footer-index li {
  margin-left: 1rem;
}
.row {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}
@media (max-width: 768px) {
  .list-vertical-index {
    text-align: center;
    margin-top: 1rem;
    ul {
      padding-left: 0;
      text-align: center;
    }
    h3 {
      text-align: center !important;
    }
  }
  .footer-outro-icon {
    text-align: center;
    img {
      height: 100px;
      width: 100px;
    }
  }
  .social-networks-index {
    text-align: center !important;
    margin-right: 1rem;
  }
}
</style>