<template>
  <div class="naresh-portfolio-testimonials mt-14">
    <div class="naresh-portfolio-testimonials__title title">Testimonials</div>
    <CustomBorder />
    <div class="naresh-portfolio-testimonials__desc">
      People I've worked with have said some nice things...
    </div>
    <div class="naresh-portfolio-testimonials__carousel">
      <CustomCarousel :carouselSlides="testimonials" />
    </div>
  </div>
</template>

<script>
import CustomBorder from './commons/CustomBorder.vue'
import CustomCarousel from './commons/CustomCarousel.vue'

export default {
  components: {
    CustomBorder,
    CustomCarousel,
  },

  data() {
    return {
      testimonials: [
        {
          id: 'vincent',
          name: 'Vincent Paca',
          designation: 'Ex-Tech Lead, MoneySmart Group',
          quote:
            '“Naresh was a very instrumental part of the team that got one of our key platforms built from the ground up. It was really great to work with Naresh, a well-versed front-end developer, and an excellent communicator. Any team would definitely up their game with Naresh in it!“',
        },
        {
          id: 'jerry',
          name: 'Jerry Dang Dung Ha',
          designation: 'Ex-Product Manager, MoneySmart Group',
          quote:
            '“Naresh knows how to get things done and he does them extremely well. I worked with Naresh with multiple projects at MoneySmart. He was able to take direction and still able to make the right technical calls when working independently. Working with Naresh was a pleasure and I’m sure he always improves and brings that energy to any team he’s working with.“',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-testimonials {
  &__desc {
    text-align: center;
    padding: 2rem 0;
    font-size: 1rem;

    @media (min-width: 768px) {
      padding: 3rem 0;
      font-size: 1.25rem;
    }
  }
}
</style>
