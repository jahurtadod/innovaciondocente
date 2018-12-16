<template>
  <div class="stack">

    <canvas ref="canvas"
            id="projectCanvas"
            class="stack-canvas">
    </canvas>
    <transition name="fade">
      <div class="stack-card"
           v-if="selectedProject &&isSelectedProject">
        <div class="stack-card-content">
          <span class="stack-card-title">{{selectedProject.name | slice(0,45)}}</span>
          <div class="stack-card-spacer"></div>
          <span class="stack-card-span"><b>Coordinador: </b>{{selectedProject.coordinator}}</span>
          <div class="stack-card-spacer"></div>
          <span class="stack-card-span"><b>Participantes: </b>{{selectedProject.participants.length}}</span>
          <div class="stack-card-spacer"></div>
          <div class="stack-card-btn">
            <nuxt-link class="stack-card-btn-link"
                       :to="{name: 'innovacion-docente-proyectos-innovacion-id', params: {id: selectedProject.id}}"
                       tag="a">Ver Proyecto
            </nuxt-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["proyectos", "queryType"],
  data() {
    return {
      canvas: null,
      context: null,
      width: null,
      height: null,
      center: null,
      radius: null,
      circles: [],
      selectedProject: null,
      isSelectedProject: false
    };
  },
  mounted() {
    // init canvas
    this.canvas = this.$refs.canvas;
    this.context = this.canvas.getContext("2d");
    this.size = this.canvas.width = this.canvas.height = 720;
    this.radius = {
      min: 400 / 2,
      max: 600 / 2
    };
    this.center = this.size / 2;
    this.init();
    this.canvas.addEventListener("mousedown", this.selectProject);
    window.requestAnimationFrame(() => this.animate());
  },
  methods: {
    init() {
      // create circles
      for (let i = 0; i < this.proyectos.length; i++) {
        const radius = Math.floor(this.randomIntFromRange(20, 30));
        // distance from center
        const distance = this.randomIntFromRange(
          this.radius.min + radius,
          this.radius.max - radius
        );
        this.circles.push({
          data: { ...this.proyectos[i] },
          distance,
          bounce: {
            min: distance - radius,
            max: distance + radius,
            minToMax: Math.floor(this.randomIntFromRange(1, 2)) % 2 === 0
          },
          radians: this.randomIntFromRange(0, Math.PI * 2),
          velocity: this.randomIntFromRange(1, 5) / 2000,
          radius,
          maxRadius: radius,
          activeRadius: 0,
          active: false
        });
      }

      const selectedIndex = Math.floor(
        this.randomIntFromRange(0, this.circles.length - 1)
      );
      this.selectedProject = this.circles[selectedIndex].data;
      this.circles[selectedIndex].active = true;
    },
    // main loop
    animate() {
      this.context.clearRect(0, 0, this.size, this.size);
      // do stuff
      for (let i = 0; i < this.circles.length; i++) {
        this.update(this.circles[i]);
        this.draw(this.circles[this.circles.length - i - 1]);
      }

      window.requestAnimationFrame(() => this.animate());
    },
    // draw
    draw(circle) {
      if (circle.radius > 1) {
        this.context.beginPath();
        this.context.arc(
          this.center + circle.distance * Math.cos(circle.radians),
          this.center + circle.distance * Math.sin(circle.radians),
          circle.radius,
          0,
          Math.PI * 2,
          false
        );
        this.context.lineWidth = 3;
        this.context.strokeStyle = this.getAreaColor(circle.data.area);
        this.context.fillStyle = "#f5f5f5";
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
      }
      if (circle.active) {
        this.context.beginPath();
        this.context.arc(
          this.center,
          this.center,
          circle.activeRadius,
          0,
          Math.PI * 2,
          false
        );
        this.context.lineWidth = 3;
        this.context.strokeStyle = this.getAreaColor(circle.data.area);
        this.context.fillStyle = "#f5f5f5";
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
      }
    },
    update(circle) {
      if (circle.radius > 1) {
        circle.radians += circle.velocity;
        // update distance from center
        circle.distance += circle.bounce.minToMax
          ? circle.radius / this.randomIntFromRange(100, 300)
          : -circle.radius / this.randomIntFromRange(100, 300);
        if (circle.distance > circle.bounce.max) circle.bounce.minToMax = false;
        if (circle.distance < circle.bounce.min) circle.bounce.minToMax = true;
      }
      // update state of selected circle only selected project
      if (this.selectedProject.id === circle.data.id) {
        this.isSelectedProject = circle.active && circle.activeRadius >= 170;
      }
      // make sure radius is correct
      if (circle.active && circle.radius > 0) circle.radius--;
      else if (circle.radius <= circle.maxRadius) circle.radius++;
      if (circle.active && circle.activeRadius <= 170) {
        circle.activeRadius += 2;
      }
      // small old active radius
      if (!circle.active && circle.activeRadius > 0) {
        circle.activeRadius--;
      }
    },
    selectProject(event) {
      // get mouse position
      // offset from center of canvas
      let rect = this.canvas.getBoundingClientRect();
      const mouse = {
        x: event.clientX - rect.left - this.center,
        y: event.clientY - rect.top - this.center
      };
      // get if mouse touches circe
      for (let i = 0; i < this.circles.length; i++) {
        const circle = this.circles[i];

        const x = circle.distance * Math.cos(circle.radians);
        const y = circle.distance * Math.sin(circle.radians);

        if (
          // TODO: add distance to center of each and select closer
          mouse.x > x - circle.radius &&
          mouse.x < x + circle.radius &&
          mouse.y > y - circle.radius &&
          mouse.y < y + circle.radius
        ) {
          // skip interaction if project already selected
          if (circle.active) continue;

          // work selected project
          circle.active = true;
          this.selectedProject = circle.data;
          // search for actual active project
          for (let i = 0; i < this.circles.length; i++) {
            if (this.circles[i].active) {
              if (this.circles[i].data.id !== this.selectedProject.id)
                this.circles[i].active = false;
            }
          }
          return;
        }
      }
    },
    // utils
    getAreaColor(area) {
      if (area.administrativa) return "#979797";
      if (area.biologica) return "#00981c";
      if (area.sociohumanistica) return "#34d4ea";
      if (area.tecnica) return "#ffd76b";
      return "#ff00ff";
    },
    randomIntFromRange(min, max) {
      return Math.random() * (max - min + 1) + min;
    },
    getDistance(x1, y1, x2, y2) {
      // pythagoras
      let dx = x2 - x1;
      let dy = y2 - y1;
      return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/variables";

.fade-enter-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-active,
.fade-leave-to {
  display: none;
}

.stack {
  position: relative;
  height: 100%;
  width: 100%;
  &-canvas {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  &-card {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    &-content {
      border-radius: 50%;
      width: 340px;
      height: 340px;
      align-self: center;
      display: flex;
      flex-direction: column;
    }
    &-title {
      display: block;
      font-size: 20px !important;
      line-height: 26px;
      text-align: center;
      padding-top: 50px;
      width: 60%;
      margin: 0 auto;
    }
    &-span {
      width: 80%;
      margin: 0 auto;
      font-size: 16px;
      text-align: center;
    }
    &-spacer {
      height: 13px;
    }

    &-btn {
      color: $color-primary;
      margin-top: auto;
      text-align: center;
      padding-bottom: 30px;
      &-link {
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
  }
}
</style>

