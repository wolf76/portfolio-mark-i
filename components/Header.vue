<template>
  <div class="naresh-portfolio-header flex justify-between items-center">
    <div class="naresh-portfolio-header__logo">
      <img v-if="isLight" src="~/assets/images/nk-logo-dark.png" alt="NK" />
      <img v-else src="~/assets/images/nk-logo-light.png" alt="NK" />
    </div>
    <div class="naresh-portfolio-header__menu flex items-center">
      <div class="naresh-portfolio-header__menu__item mr-8">
        <a
          href="/pdf/NareshResume.pdf"
          download
          rel="noopener noreferrer"
          class="desktop"
        >
          <div class="naresh-portfolio-header__menu__resume flex items-center">
            <div class="naresh-portfolio-header__menu__resume__icon mr-1">
              <img
                v-if="isLight"
                src="~/assets/images/icons/resume-icon-dark.png"
                alt=""
              />
              <img
                v-else
                src="~/assets/images/icons/resume-icon-light.png"
                alt=""
              />
            </div>
            <div class="naresh-portfolio-header__menu__resume__text">
              Resume
            </div>
          </div>
        </a>
      </div>
      <div class="naresh-portfolio-header__menu__item mr-16">
        <a class="desktop" href="mailto:iamnarey@gmail.com">
          <div class="naresh-portfolio-header__menu__mail flex items-center">
            <div class="naresh-portfolio-header__menu__mail__icon mr-1">
              <img
                v-if="isLight"
                src="~/assets/images/icons/envelope-dark.png"
                alt="Mail"
              />
              <img
                v-else
                src="~/assets/images/icons/envelope-light.png"
                alt="Mail"
              />
            </div>
            <div class="naresh-portfolio-header__menu__mail__text">
              iamnarey@gmail.com
            </div>
          </div>
        </a>
      </div>
      <div
        class="naresh-portfolio-header__menu__theme cursor-pointer"
        @click="toggleTheme"
      >
        <img
          v-if="isLight"
          src="~/assets/images/icons/moon.png"
          alt="Toggle theme"
        />
        <img v-else src="~/assets/images/icons/sun.png" alt="Toggle theme" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      isLightTheme: true,
    }
  },

  mounted() {
    this.isLightTheme =
      localStorage.getItem('appTheme') === 'light' ||
      localStorage.getItem('appTheme') === null
    this.setAppTheme()
  },

  computed: {
    ...mapGetters(['getTheme']),
    isLight() {
      return this.getTheme === 'light'
    },
  },

  methods: {
    ...mapActions(['setTheme']),

    setAppTheme() {
      if (this.isLightTheme) {
        document.documentElement.setAttribute('data-theme', 'light')
        this.setTheme('light')
      } else {
        document.documentElement.setAttribute('data-theme', 'dark')
        this.setTheme('dark')
      }
    },

    toggleTheme() {
      if (this.isLightTheme) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('appTheme', 'dark')
        this.setTheme('dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('appTheme', 'light')
        this.setTheme('light')
      }

      this.isLightTheme = !this.isLightTheme
    },
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-header {
  &__logo {
    height: 60px;
    width: 72px;
  }

  &__menu {
    &__item {
      border-radius: 8px;
      padding: 0.5rem;
      transition: 0.5s ease;

      &:hover {
        background: #fab951;
        color: var(--white-color);
      }
    }

    &__resume {
      &__icon {
        width: 24px;
      }

      &__text {
        font-size: 0.875rem;
        font-weight: 700;
      }
    }

    &__mail {
      &__icon {
        width: 24px;
      }

      &__text {
        font-size: 0.875rem;
        font-weight: 700;
      }
    }

    &__theme {
      width: 24px;
      transition: 1s;

      margin: 1rem 1rem 0 0;

      @media (min-width: 768px) {
        margin: 0;
      }

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
