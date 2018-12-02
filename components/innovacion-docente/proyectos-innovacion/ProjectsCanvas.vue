<template>
  <div>
    <canvas ref="canvas"
            id="projectCanvas"
            width="600"
            height="600">
    </canvas>
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
      circles: []
    };
  },
  mounted() {
    // init canvas
    this.canvas = this.$refs.canvas;
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.init();
    window.requestAnimationFrame(() => this.animate());
  },
  methods: {
    init() {
      // create circles
      for (let i = 0; i < this.proyectos.length; i++) {
        const radius = this.randomIntFromRange(20, 30);
        let x = this.randomIntFromRange(radius, this.width - radius);
        let y = this.randomIntFromRange(radius, this.height - radius);

        // making sure circles dont overlap
        for (let j = 0; j < this.circles.length; j++) {
          if (
            this.getDistance(
              x,
              y,
              this.circles[j].position.x,
              this.circles[j].position.y
            ) <
            2 * radius
          ) {
            // generate new values
            x = this.randomIntFromRange(radius, this.width - radius);
            y = this.randomIntFromRange(radius, this.height - radius);

            // restart the loop
            j = -1;
          }
        }
        // push new circle
        this.circles.push({
          data: {
            ...this.proyectos[i]
          },
          position: {
            x,
            y
          },
          velocity: {
            x: this.randomIntFromRange(-2, 2),
            y: this.randomIntFromRange(-2, 2)
          },
          radius: radius,
          mass: 1
        });
      }
    },
    // main loop
    animate() {
      this.context.clearRect(0, 0, this.width, this.height);
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
        circle.position.x,
        circle.position.y,
        circle.radius,
        0,
        Math.PI * 2,
        false
      );
      this.context.lineWidth = 3;
      this.context.strokeStyle = this.getAreaColor(circle.data.area);
      this.context.stroke();
    },
    // update
    update(circle) {
      // movement of each particle
      if (
        circle.position.x - circle.radius < 0 ||
        circle.position.x + circle.radius > this.width
      )
        circle.velocity.x *= -1;
      if (
        circle.position.y - circle.radius < 0 ||
        circle.position.y + circle.radius > this.height
      )
        circle.velocity.y *= -1;
      circle.position.x += circle.velocity.x;
      circle.position.y += circle.velocity.y;

      // validate each circle with the others to detect collision
      for (let i = 0; i < this.circles.length; i++) {
        const tempCircle = this.circles[i];
        if (circle.data.id == tempCircle.data.id) continue;

        // if 2 circles are collisioning then resolve it.
        if (
          this.getDistance(
            circle.position.x,
            circle.position.y,
            tempCircle.position.x,
            tempCircle.position.y
          ) <=
          circle.radius + tempCircle.radius
        )
          this.resolveCollision(circle, tempCircle);
      }
    },
    resolveCollision(circle1, circle2) {
      const xVelocityDiff = circle1.velocity.x - circle2.velocity.x;
      const yVelocityDiff = circle1.velocity.y - circle2.velocity.y;

      const xDist = circle2.position.x - circle1.position.x;
      const yDist = circle2.position.y - circle1.position.y;

      // Prevent accidental overlap of particles
      if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        // Grab angle between the two colliding particles
        const angle = -Math.atan2(
          circle2.position.y - circle1.position.y,
          circle2.position.x - circle1.position.x
        );

        // Store mass in var for better readability in collision equation
        const m1 = circle1.mass;
        const m2 = circle2.mass;

        // Velocity before equation
        const u1 = this.rotate(circle1.velocity, angle);
        const u2 = this.rotate(circle2.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = {
          x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
          y: u1.y
        };
        const v2 = {
          x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
          y: u2.y
        };

        // Final velocity after rotating axis back to original location
        const vFinal1 = this.rotate(v1, -angle);
        const vFinal2 = this.rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        circle1.velocity.x = vFinal1.x;
        circle1.velocity.y = vFinal1.y;

        circle2.velocity.x = vFinal2.x;
        circle2.velocity.y = vFinal2.y;
      }
    },
    rotate(velocity, angle) {
      // Takes velocities and alters them as if the coordinate system they're on was rotated
      return {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
      };
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
      return Math.floor(Math.random() * (max - min + 1) + min);
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
