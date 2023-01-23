<template>
  <div class="naresh-portfolio-projects mt-14">
    <div class="naresh-portfolio-projects__title title">Projects</div>
    <CustomBorder />
    <div class="naresh-portfolio-projects__content mt-10">
      <CustomCard
        v-for="repo in githubRepos"
        :key="repo.name"
        :title="repo.name"
        :description="repo.description"
        :tags="repo.tags"
        :url="repo.url"
      />
    </div>
  </div>
</template>

<script>
import CustomBorder from './commons/CustomBorder.vue'
import CustomCard from './commons/CustomCard.vue'

export default {
  components: {
    CustomBorder,
    CustomCard,
  },

  data() {
    return {
      githubRepos: [
        {
          name: 'My Portfolio',
          description: 'My personal portfolio website',
          tags: ['VueJS', 'Nuxt', 'Tailwind', 'Gsap', 'Sass'],
          url: 'https://github.com/wolf76/portfolio-mark-i',
        },
        {
          name: 'Music App',
          description: 'A simple music player application',
          tags: ['VueJS'],
          url: 'https://github.com/wolf76/Spotif-VueMusicApp',
        },
        {
          name: 'Weather App',
          description:
            'A simple weather application made with VueJS and OpenWeatherMap API',
          tags: ['VueJS', 'REST API'],
          url: 'https://github.com/wolf76/Weather_App_Vue',
        },
        {
          name: 'Biblioteca PWA (FE)',
          description:
            'A simple book sharing online web application with family and friends, created using VueJS and Bootstrap-Vue',
          tags: ['VueJS', 'Bootstrap-Vue'],
          url: 'https://github.com/wolf76/Biblioteca-PWA-FE',
        },
        {
          name: 'Polygon Wallet Widget (PoC)',
          description:
            'PoC for Polygon Wallet Widget package, both in Vue and React frameworks',
          tags: ['VueJS', 'React', 'wallet-widget'],
          url: 'https://github.com/wolf76/wallet-widget-example',
        },
        {
          name: 'matic.js',
          description:
            'Javascript developer library to interact with Matic Network',
          tags: ['Javascript', 'Typescript'],
          url: 'https://github.com/wolf76/matic.js',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-projects {
  &__content {
    grid-gap: 2rem;
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 868px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
</style>
