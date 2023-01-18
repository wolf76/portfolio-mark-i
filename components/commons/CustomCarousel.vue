<template>
  <div class="custom-carousel">
    <div class="custom-carousel__container">
      <ul class="custom-carousel__track">
        <li
          v-for="(slide, index) in carouselSlides"
          :key="slide.name"
          class="custom-carousel__track__slide active-slide"
          :class="{ 'active-slide': index === 0 }"
        >
          <div class="custom-carousel__track__slide__avatar">
            <img
              :src="getImage(slide.id)"
              class="rounded-full w-20 md:w-32"
              :alt="slide.id"
            />
          </div>
          <div class="custom-carousel__track__slide__quote">
            {{ slide.quote }}
          </div>
          <div class="custom-carousel__track__slide__name">
            {{ slide.name }}
          </div>
          <div class="custom-carousel__track__slide__designation">
            {{ slide.designation }}
          </div>
        </li>
      </ul>
    </div>

    <div class="custom-carousel__nav">
      <div
        v-for="item in carouselSlides.length"
        :key="item"
        class="custom-carousel__nav__indicator"
        :class="{ 'active-slide': item - 1 === 0 }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: {
    carouselSlides: Array,
  },

  mounted() {
    const track = document.querySelector('.custom-carousel__track')
    const slides = Array.from(track.children)

    const dotsNav = document.querySelector('.custom-carousel__nav')
    const dots = Array.from(dotsNav.children)

    // Arrange the slides next to each other
    const slideWidth = slides[0].getBoundingClientRect().width
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px'
    }
    slides.forEach(setSlidePosition)

    const moveToSlide = (track, activeSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
      activeSlide.classList.remove('active-slide')
      targetSlide.classList.add('active-slide')
    }

    const updateDots = (activeDot, targetDot) => {
      activeDot.classList.remove('active-slide')
      targetDot.classList.add('active-slide')
    }

    dotsNav.addEventListener('click', (e) => {
      const targetDot = e.target.closest('.custom-carousel__nav__indicator')

      if (!targetDot) return
      const activeSlide = track.querySelector('.active-slide')
      const activeDot = dotsNav.querySelector('.active-slide')
      const targetIndex = dots.findIndex((dot) => dot === targetDot)
      const targetSlide = slides[targetIndex]

      moveToSlide(track, activeSlide, targetSlide)
      updateDots(activeDot, targetDot)
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
.custom-carousel {
  position: relative;
  width: 90%;
  margin: 0 auto;
  height: 500px;

  @media (min-width: 864px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    height: 25rem;
  }

  @media (max-width: 600px) {
    height: 500px;
  }

  &__container {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  &__track {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    height: 100%;
    transition: transform 250ms ease-in;

    &__slide {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;

      &__avatar {
        margin: 2rem 0;

        @media (min-width: 768px) {
          margin: 2rem 0;
        }
      }

      &__quote {
        text-align: center;
        font-size: 1.125rem;
        margin-bottom: 2rem;
        font-weight: 300;
        font-style: italic;

        @media (min-width: 768px) {
          font-size: 1.375rem;
          margin-bottom: 2.5rem;
        }
      }

      &__name {
        font-size: 1rem;
        font-weight: 600;

        @media (min-width: 768px) {
          font-size: 1.25rem;
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

  &__nav {
    display: flex;
    justify-content: center;
    padding: 1rem 0;

    &__indicator {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: #f2f0ee;
      margin: 0 0.5rem;
      cursor: pointer;

      &.active-slide {
        background: #f9a826;
      }
    }
  }
}
</style>
