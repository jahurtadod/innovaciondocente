<template>
  <div>
    <canvas ref="canvas"
            id="projectCanvas"
            width="600"
            height="600">
    </canvas>
    <pre>
            {{proyectos}}
        </pre>
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
      px: 45,
      py: 45,
      vx: 5,
      vy: 8
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    window.requestAnimationFrame(() => this.draw());
  },
  methods: {
    draw() {
      this.context.clearRect(0, 0, this.width, this.height);
      // do stuff
      this.context.beginPath();
      this.context.arc(this.px, this.py, 30, 0, Math.PI * 2, false);
      this.context.stroke();

      this.px += this.vx;
      if (this.px > this.width) this.vx *= -1;
      if (this.px < 0) this.vx *= -1;
      this.py += this.vy;
      if (this.py > this.height) this.vy *= -1;
      if (this.py < 0) this.vy *= -1;

      window.requestAnimationFrame(() => this.draw());
    }
  }
};
</script>
