<template>
  <div class="naresh-portfolio-app">
    <CustomBlobCursor class="desktop" />
    <div class="naresh-portfolio-app__media">
      <CustomMediaIcons />
    </div>
    <div class="naresh-portfolio-app__main p-2 md:p-8">
      <Header />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>

    <Footer />
  </div>
</template>

<script>
import CustomMediaIcons from '@/components/commons/CustomMediaIcons.vue'
import CustomBlobCursor from '~/components/commons/CustomBlobCursor.vue'

export default {
  name: 'IndexPage',
  components: {
    CustomMediaIcons,
    CustomBlobCursor,
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-app {
  &__media {
    display: none;

    @media (min-width: 1272px) {
      display: block;
      position: fixed;
      top: 34%;
    }
  }

  &__main {
    background: var(--white-contrast);
    max-width: 70rem;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
    margin-bottom: 2rem;

    @media (min-width: 1120px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
}
</style>
