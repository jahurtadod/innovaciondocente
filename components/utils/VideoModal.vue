<template>
  <div>
    <img id="img"
         :src="this.getImage"
         :alt="'Imagen Video '+ videoID"
         class="img"
         v-on:click='openImage'>

    <!-- image Modal -->
    <div class="modal"
         ref="modal"
         @keyup.esc="close">
      <span class="modal-close"
            @click="close">×</span>
      <div class="modal-embed-container"
           v-if="seletedID">
        <iframe :src="'https://www.youtube.com/embed/'+seletedID+'?enablejsapi=1&html5=1'"
                frameborder="0"
                :title="'Video '+ videoID"
                allow="autoplay; encrypted-media"
                allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      seletedID: null
    };
  },
  props: ["videoID", "maxRes"],
  computed: {
    getImage() {
      const res = this.maxRes === null ? "hqdefault" : "maxresdefault";
      return `https://i.ytimg.com/vi/${this.videoID}/${res}.jpg`;
    }
  },
  methods: {
    // TODO: https://codepen.io/AmrSubZero/pen/oLOYrA
    openImage() {
      this.seletedID = this.videoID;
      this.$refs.modal.style.display = "block";
      document.documentElement.style.overflow = "hidden";
    },
    close() {
      this.$refs.modal.style.display = "none";
      this.seletedID = null;
      document.documentElement.style.overflow = "auto";
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  display: block;
  &:hover {
    opacity: 0.7;
  }
}

.modal {
  display: none;
  position: fixed;
  z-index: 2000;
  padding-top: 130px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.95);
  cursor: auto;
  &-embed-container {
    $width: 1200px;
    width: 80%;
    max-width: $width;
    height: $width * 9 /16;
    position: relative;
    overflow: hidden;
    margin: auto;
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
    @media only screen and (max-width: $width) {
      & {
        padding-top: 130px;
        width: 100%;
      }
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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
