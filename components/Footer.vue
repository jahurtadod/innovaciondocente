<template>
  <footer class="container">
    <div class="row">
      <div class="col-md-6 footer-icons">
        <ul class="social-networks square spin-icon">
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
      <div class="col-md-6 footer-info">
        <div class="row">
          <div class="col-sm-6">
            <h4>Contáctanos :</h4>
            <p>Campus San Cayetano Alto.</p>
            <p>Loja – Ecuador.</p>
          </div>
          <div class="col-sm-6">
            <p>
              <strong>Teléfono:</strong> 370 1444 – Ext. 2316</p>
            <p>
              <strong>Correo electrónico:</strong>
            </p>
            <a href="mailto:vacademico@utpl.edu.ec">vacademico@utpl.edu.ec</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 footer-outro">
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
  padding: 0;
  font-size: 0;
  text-align: center;
  margin: 0;

  li {
    display: inline-block;
    color: $color-text;
  }
  a {
    display: block;
    position: relative;
    margin: 0 7px;
    width: 50px;
    height: 50px;
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
      margin-top: -50%;
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
}

.footer-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

footer {
  color: $color-text;
}

.footer-info {
  padding: 1rem;
  font-size: 80%;
  p {
    margin: 5px 0;
  }
  h4 {
    margin-top: 5px;
  }
}

.footer-outro {
  border-top: 1px $color-background-inverse solid;
  margin-bottom: 1.5rem;
  ul {
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
    }
    li {
      font-size: 80%;
    }
  }
}

@media (max-width: 768px) {
  .footer-info {
    text-align: center;
    border-top: none;
    padding-top: 0;
    margin-bottom: 10px;
    p {
      text-align: center;
    }
  }
  .footer-icons {
    height: 100px;
  }
}
</style>
