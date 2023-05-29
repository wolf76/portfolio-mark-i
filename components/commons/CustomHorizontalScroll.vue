<template>
  <div class="custom-horizontal-scroll mySwiper">
    <div class="custom-horizontal-scroll__wrapper swiper-wrapper">
      <div
        v-for="slide in carouselSlides"
        :key="slide.name"
        class="custom-horizontal-scroll__slide swiper-slide"
      >
        <div class="custom-horizontal-scroll__slide__avatar">
          <img
            :src="getImage(slide.id)"
            class="rounded-full w-20 md:w-32"
            :alt="slide.id"
          />
        </div>
        <div class="custom-horizontal-scroll__slide__quote">
          {{ slide.quote }}
        </div>

        <i class="bx bxs-quote-alt-left quote-icon"></i>

        <div class="custom-horizontal-scroll__slide__details">
          <div class="custom-horizontal-scroll__slide__details__name">
            {{ slide.name }}
          </div>
          <div class="custom-horizontal-scroll__slide__details__designation">
            {{ slide.designation }}
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-button-next nav-btn"></div>
    <div class="swiper-button-prev nav-btn"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import Swiper JS and styles
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    carouselSlides: Array,
  },

  mounted() {
    const swiper = new Swiper('.mySwiper', {
      direction: 'horizontal',
      loop: true,

      modules: [Navigation, Pagination, Autoplay],

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      autoplay: {
        delay: 5000,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      grabCursor: true,
    })
  },

  methods: {
    getImage(imgName) {
      return require(`~/assets/images/${imgName}.jpeg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-horizontal-scroll {
  position: relative;
  overflow: hidden;

  &__wrapper {
    padding-bottom: 4rem;
  }

  &__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 30px;

    .quote-icon {
      font-size: 30px;
      color: var(--accent-color);
    }

    &__quote {
      text-align: center;
      font-size: 1.125rem;
      margin-bottom: 2rem;
      font-weight: 300;
      font-style: italic;
      padding: 0 1rem;

      @media (min-width: 768px) {
        padding: 0 5rem;
      }
    }

    &__details {
      text-align: center;

      &__name {
        font-size: 1rem;
        font-weight: 600;

        @media (min-width: 768px) {
          font-size: 1.125rem;
        }
      }

      &__designation {
        font-size: 0.875rem;

        @media (min-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }

  .nav-btn {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    transform: translateY(-40px);
    display: none;

    &::before,
    &::after {
      font-size: 24px;
      font-weight: 900;
      color: var(--accent-color);
    }

    @media (min-width: 768px) {
      display: flex;
    }
  }
}
</style>
