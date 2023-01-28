<template>
  <div class="custom-cursor">
    <div v-for="i in 12" :key="i" class="circle"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const coords = { x: 0, y: 0 }
    const circles = document.querySelectorAll('.circle')

    // const colors = [
    //   '#ffb56b',
    //   '#f89d63',
    //   '#ef865e',
    //   '#e36e5c',
    //   '#d5585c',
    //   '#c5415d',
    //   '#b22c5e',
    //   '#9c155f',
    //   '#830060',
    //   '#680060',
    //   '#48005f',
    //   '#1f005c',
    // ]

    // const colors = [
    //   '#f9a826',
    //   '#fcb03f',
    //   '#ffb755',
    //   '#ffbf68',
    //   '#ffc77b',
    //   '#ffcf8e',
    //   '#ffd7a1',
    //   '#ffdfb3',
    //   '#ffe7c6',
    //   '#ffefd9',
    //   '#fff7ec',
    //   '#ffffff',
    // ]

    circles.forEach((circle, index) => {
      circle.x = 0
      circle.y = 0
      // circle.style.backgroundColor = colors[index % colors.length]
    })

    window.addEventListener('mousemove', (e) => {
      coords.x = e.clientX
      coords.y = e.clientY
    })

    function animateCircles() {
      let x = coords.x
      let y = coords.y

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px'
        circle.style.top = y - 12 + 'px'

        circle.style.scale = (circles.length - index) / circles.length

        circle.x = x
        circle.y = y

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x - x) * 0.25
        y += (nextCircle.y - y) * 0.25
      })

      requestAnimationFrame(animateCircles)
    }

    animateCircles()
  },
}
</script>

<style lang="scss" scoped>
.custom-cursor {
  .circle {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 1.5rem;
    background: var(--cursor-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    pointer-events: none;
  }
}
</style>
