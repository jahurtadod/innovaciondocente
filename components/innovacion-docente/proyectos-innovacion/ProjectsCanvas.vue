<template>
  <div class="stack">

    <canvas ref="canvas"
            id="projectCanvas"
            class="stack-canvas">
    </canvas>
    <div class="stack-card">
      <div class="stack-card-content">
        <p>Hola</p>
      </div>
    </div>
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
      circles: []
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
    this.canvas.addEventListener("mousedown", this.selectProyect);
    window.requestAnimationFrame(() => this.animate());
  },
  methods: {
    init() {
      // create circles
      for (let i = 0; i < this.proyectos.length; i++) {
        const radius = this.randomIntFromRange(20, 30);
        // distance from center
        const distance = this.randomIntFromRange(
          this.radius.min + radius,
          this.radius.max - radius
        );
        this.circles.push({
          active: i === 0,
          data: { ...this.proyectos[i] },
          distance,
          bounce: {
            min: distance - radius,
            max: distance + radius,
            minToMax: Math.floor(this.randomIntFromRange(1, 2)) % 2 === 0
          },
          radians: this.randomIntFromRange(0, Math.PI * 2),
          velocity: this.randomIntFromRange(1, 5) / 2000,
          radius
        });
      }
    },
    // main loop
    animate() {
      this.context.clearRect(0, 0, this.size, this.size);
      // do stuff
      this.circles.forEach(p => {
        this.update(p);
        this.draw(p);
      });

      window.requestAnimationFrame(() => this.animate());
    },
    // draw
    draw(circle) {
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
      this.context.fillStyle = circle.active ? "#f500f5" : "#f5f5f5";
      this.context.fill();
      this.context.stroke();
      this.context.closePath();
    },
    update(circle) {
      circle.radians += circle.velocity;
      // update distance from center
      circle.distance += circle.bounce.minToMax
        ? circle.radius / this.randomIntFromRange(100, 300)
        : -circle.radius / this.randomIntFromRange(100, 300);
      if (circle.distance > circle.bounce.max) circle.bounce.minToMax = false;
      if (circle.distance < circle.bounce.min) circle.bounce.minToMax = true;
    },
    selectProyect(event) {
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
          console.log(circle.data.id);
          circle.active = true;
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
    &-content {
      border-radius: 50%;
      width: 340px;
      height: 340px;
      border: solid;
    }
  }
}
</style>

