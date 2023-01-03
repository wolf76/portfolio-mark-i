<template>
  <div class="naresh-portfolio-app">
    <div class="naresh-portfolio-app__media">
      <CustomMediaIcons />
    </div>
    <div class="naresh-portfolio-app__main p-2 md:p-8">
      APP
      <Intro />
    </div>

    <div v-if="false" class="naresh-portfolio-app__footer py-8 px-8"></div>
  </div>
</template>

<script>
import CustomMediaIcons from '@/components/commons/CustomMediaIcons.vue'

export default {
  name: 'IndexPage',
  components: {
    CustomMediaIcons,
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-app {
  &__media {
    display: none;

    // @media (min-width: 1120px) {
    //   display: block;
    //   position: fixed;
    //   top: 25%;
    // }

    @media (min-width: 1272px) {
      display: block;
      position: fixed;
      top: 34%;
    }
  }

  &__main {
    background: #fff;
    max-width: 70rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);

    @media (min-width: 1120px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  &__footer {
    max-width: 70rem;
    margin: 0 auto;
  }
}
</style>
