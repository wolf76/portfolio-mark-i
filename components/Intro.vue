<template>
  <div class="naresh-portfolio-intro">
    <div class="naresh-portfolio-intro__media">
      <CustomMediaIcons :isShadowEnabled="false" />
    </div>
    <div class="naresh-portfolio-intro__head">
      <div class="naresh-portfolio-intro__head__callout">Hi! I'm</div>
      <div class="naresh-portfolio-intro__head__name medium-dev">
        NARESHKUMAR J<span :class="[isLightTheme ? 'light' : 'dark']">.</span>S
      </div>
      <div class="naresh-portfolio-intro__head__name small-dev">
        <div class="naresh-portfolio-intro__head__name--small-dev">
          NARESHKUMAR
        </div>
        <div class="naresh-portfolio-intro__head__name--small-dev">
          J<span :class="[isLightTheme ? 'light' : 'dark']">.</span>S
        </div>
      </div>
      <div class="naresh-portfolio-intro__head__title">FRONTEND DEVELOPER</div>
      <div class="naresh-portfolio-intro__head__desc">
        I'm a Frontend Developer, fueled by high energy levels and boundless
        enthusiasm. Passionate, expressive, goal-oriented and results-driven
        spirit with a natural ability to entertain and inspire. Have a highly
        creative nature that’s balanced by a grounded realism.
      </div>
    </div>
    <div class="naresh-portfolio-intro__hero flex justify-center items-center">
      <img src="~/assets/images/hero.png" alt="Naresh" />
    </div>
  </div>
</template>

<script>
import { gsap, Back, Elastic, Expo, Bounce } from 'gsap'
import CustomMediaIcons from '@/components/commons/CustomMediaIcons.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Intro',

  components: {
    CustomMediaIcons,
  },

  mounted() {
    this.animateIntro()
  },

  computed: {
    ...mapGetters(['getTheme']),
    isLightTheme() {
      return this.getTheme === 'light'
    },
  },

  methods: {
    animateIntro() {
      const tl = gsap.timeline()

      tl.to(
        '.naresh-portfolio-intro__head__callout',
        {
          scale: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.3)',
        },
        0.5
      )
        .to(
          '.naresh-portfolio-intro__head__name',
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.5'
        )
        .to(
          '.naresh-portfolio-intro__head__title',
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .to(
          '.naresh-portfolio-intro__head__desc',
          { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.7)' },
          '-=0.5'
        )
        .to(
          '.naresh-portfolio-intro__hero',
          {
            scale: 1,
            duration: 1,
            y: 0,
            x: 0,
            ease: Bounce.easeOut,
          },
          '-=0.75'
        )
    },
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-intro {
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    display: flex;
  }

  &__media {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }

    @media (min-width: 1272px) {
      display: none;
    }
  }

  &__head {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;

    @media (min-width: 768px) {
      display: block;
      flex: 1 1 0%;
      text-align: left;
      padding-top: 3rem;
      padding-left: 2rem;
    }

    &__callout {
      display: inline-block;
      width: 80px;
      position: relative;
      padding: 10px;
      border-radius: 4px;
      min-height: 50px;
      border: 1px solid var(--accent-color);
      text-shadow: 0 0 1px var(--accent-color);
      color: var(--white-color);
      background-color: var(--accent-color);
      line-height: 24px;
      font-weight: 700;
      margin: 1.5rem;
      transform: scale(0);

      &:before {
        content: '';
        width: 0;
        height: 0;
        border: 10px solid transparent;
        position: absolute;
        right: 10px;
        bottom: -20px;
        border-top: 10px solid var(--accent-color);
      }

      @media (min-width: 768px) {
        margin: 1.5rem 1.5rem 1.5rem 3rem;
      }
    }

    &__name {
      line-height: 56px;
      font-weight: 900;
      font-size: 2.25rem;
      opacity: 0;

      @media (min-width: 378px) {
        font-size: 2.5rem;
      }

      @media (min-width: 920px) {
        font-size: 3rem;
      }

      &.medium-dev {
        display: none;

        @media (min-width: 490px) {
          display: block;
        }
      }

      &.small-dev {
        display: block;
        text-align: left;

        @media (min-width: 490px) {
          display: none;
        }
      }

      &--small-dev {
        line-height: 100%;
      }
    }

    &__title {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      opacity: 0;
      margin-top: 1rem;
    }

    &__desc {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      margin-top: 40px;
      padding: 0 20px;
      text-align: center;
      opacity: 0;

      @media (min-width: 768px) {
        text-align: left;
        width: 16rem;
        padding: 0;
        width: 100%;
        width: 90%;
      }
    }
  }

  &__hero {
    margin-top: 4rem;
    transform: scale(0);

    @media (min-width: 768px) {
      flex: 1 1 0%;
      margin-top: 3rem;
    }

    img {
      width: 80%;

      @media (min-width: 768px) {
        width: 100%;
      }
    }
  }
}

.light {
  color: #ffffff;
}

.dark {
  color: #202020;
}
</style>
