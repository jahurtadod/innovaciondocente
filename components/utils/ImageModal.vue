<template>
  <div>
    <img id="img"
         :src="img"
         alt="Northern Lights, Norway"
         class="img"
         v-on:click='openImage'>

    <!-- image Modal -->
    <div class="modal"
         ref="modal"
         @keyup.esc="close"
         @click="close">
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
  data() {
    return {
      img:
        "https://about.canva.com/wp-content/uploads/sites/3/2015/01/timeline_infographic.png"
    };
  },
  methods: {
    openImage() {
      this.$refs.modal.style.display = "block";
    },
    close() {
      this.$refs.modal.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  width: auto;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  max-height: 80vh;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.img:hover {
  opacity: 0.7;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 2000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  cursor: url('~/static/close.svg'), pointer;
  &-img {
    cursor: auto;
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    @media only screen and (max-width: 700px) {
      & {
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
    font-size: 40px;
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
