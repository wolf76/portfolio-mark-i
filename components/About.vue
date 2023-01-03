<template>
  <div class="naresh-portfolio-about mt-12 md:mt-32">
    <div class="naresh-portfolio-about__title title pt-8">About Me!</div>
    <CustomBorder />
    <div class="naresh-portfolio-about__content mt-10">TEMP STUFF</div>
  </div>
</template>

<script>
// import ScrollMagic from "scrollmagic";
import CustomBorder from './commons/CustomBorder.vue'

export default {
  components: {
    CustomBorder,
  },

  mounted() {
    this.animateServices()
  },

  methods: {
    animateServices() {
      const { about } = this.$refs
      // let tl = new TimelineMax({ onUpdate: updatePercentage });

      const scene = this.$scrollmagic
        .scene({
          triggerElement: '.naresh-portfolio-about',
          triggerHook: 0,
          duration: '300%',
        })
        .setPin('.naresh-portfolio-about')
      // .setTween(tl);

      this.$scrollmagic.addScene(scene)
    },
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-about {
  &__title {
  }

  &__content {
    // TEMP STUFF, REMOVE IT
    height: 600px;
    border-radius: 8px;
    background: #f2f0ee;
  }
}
</style>
