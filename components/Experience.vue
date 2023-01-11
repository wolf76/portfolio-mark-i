<template>
  <div class="naresh-portfolio-experience mt-14">
    <div class="naresh-portfolio-experience__title title">Experience</div>
    <CustomBorder />
    <div class="mt-8">
      <CustomAccordion :items="accordionItems" />
    </div>
  </div>
</template>

<script>
import CustomBorder from './commons/CustomBorder.vue'
import CustomAccordion from './commons/CustomAccordion.vue'

export default {
  components: {
    CustomBorder,
    CustomAccordion,
  },

  data() {
    return {
      accordionItems: [
        {
          name: 'Polygon Technology',
          header: 'Frontend Engineer @ Polygon Technology',
          body: {
            location: 'Remote (Bengaluru, India)',
            website: 'https://polygon.technology/',
            description:
              'Worked at Polygon Technology (previously known as Matic) for more than 2 year creating their web application/products. Majorly worked with the Wallet Suite, Bridge Widget, Polygon Faucet, Bridge Explorer, etc.',
            tags: [
              'VueJS',
              'Matic.js',
              'CSS',
              'Bootstramp',
              'NuxtJS',
              'Vuex',
              'Figma',
              'Matic Design System',
            ],
            image: 'polygon-logo-black.svg',
          },
          period: '2020 - Present',
          active: true,
        },
        {
          name: 'Francium Tech',
          header: 'Solution Consultant @ Francium Tech',
          body: {
            location: 'Chennai, India',
            website: 'https://francium.tech/',
            description:
              'Worked at Francium Tech for almost 2 years and worked on multiple projects there for a Singapore Client (MoneySmart), building their credit card forms and multi lingual blog sites.',
            tags: ['VueJS', 'Vuex', 'CSS', 'Bootstramp', 'NuxtJS', 'Zeplin'],
            image: 'francium-logo.png',
          },
          period: '2018 - 2020',
          active: false,
        },
      ],
    }
  },
}
</script>
