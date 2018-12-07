<template>
  <div>
    <img id="img"
         :src="img"
         alt="Img"
         class="img"
         v-on:click='openImage'>

    <!-- image Modal -->
    <div class="modal"
         ref="modal"
         @keyup.esc="close">
      <span class="modal-close"
            ref="close"
            @click="close">×</span>
      <img :src="img"
           class="modal-img"
           id="img01"
           ref='modalImg'>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img"],
  methods: {
    openImage() {
      let body = document.querySelector("body");
      this.$refs.modal.style.display = "block";
      document.documentElement.style.overflow = "hidden";
    },
    close() {
      let body = document.querySelector("body");
      this.$refs.modal.style.display = "none";
      document.documentElement.style.overflow = "auto";
    }
  }
};
</script>

<style lang="scss" scoped>
.img:hover {
  opacity: 0.7;
}

.modal {
  display: none;
  position: fixed;
  z-index: 2000;
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.95);
  cursor: auto;
  &-img {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    @media only screen and (max-width: 700px) {
      & {
        padding-top: 80px;
        padding-bottom: 0;
        width: 100%;
      }
    }
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }
  &-close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 45px;
    font-weight: bold;
    transition: 0.3s;
    &:hover,
    &:focus {
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}
</style>
