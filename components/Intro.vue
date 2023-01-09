<template>
  <div class="naresh-portfolio-intro">
    <div class="naresh-portfolio-intro__media">
      <CustomMediaIcons :isShadowEnabled="false" />
    </div>
    <div class="naresh-portfolio-intro__head">
      <div class="naresh-portfolio-intro__head__callout">Hi! I'm</div>
      <div class="naresh-portfolio-intro__head__name medium-dev">
        NARESHKUMAR J<span class="text-white">.</span>S
      </div>
      <div class="naresh-portfolio-intro__head__name small-dev">
        <div class="naresh-portfolio-intro__head__name--small-dev">
          NARESHKUMAR
        </div>
        <div class="naresh-portfolio-intro__head__name--small-dev">
          J<span class="text-white">.</span>S
        </div>
      </div>
      <div class="naresh-portfolio-intro__head__title">FRONTEND DEVELOPER</div>
      <div class="naresh-portfolio-intro__head__desc">
        I'm a Frontend Developer. I create web3 webapps and cool websites.
        Photography is one of my hobbies.
      </div>
    </div>
    <div class="naresh-portfolio-intro__hero flex justify-center items-center">
      <img src="~/assets/images/naresh-hero.jpeg" alt="Naresh" />
    </div>
  </div>
</template>

<script>
import { gsap, Back, Elastic, Expo, Bounce } from 'gsap'
import CustomMediaIcons from '@/components/commons/CustomMediaIcons.vue'

export default {
  name: 'Intro',

  components: {
    CustomMediaIcons,
  },

  mounted() {
    this.animateIntro()
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
    // position: fixed;
    // top: 25%;

    // @media (min-width: 1120px) {
    //   display: none;
    // }

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
      // padding-left: 6rem;

      padding-left: 2rem;
    }

    &__callout {
      display: inline-block;
      width: 80px;
      position: relative;
      padding: 10px;
      border-radius: 4px;
      min-height: 50px;
      border: 1px solid #2b2929;
      text-shadow: 0 0 1px #000;
      color: rgba(242, 240, 238, 1);
      background-color: rgba(43, 41, 41, 1);
      line-height: 24px;
      font-weight: 500;
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
        border-top: 10px solid #2b2929;
      }

      @media (min-width: 768px) {
        margin: 1.5rem 1.5rem 1.5rem 3rem;
      }
    }

    &__name {
      line-height: 56px;
      font-weight: 900;
      font-size: clamp(0rem, 10vw, 3rem);
      opacity: 0;

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
      width: 70%;

      @media (min-width: 768px) {
        text-align: left;
        width: 16rem;
        padding: 0;
        width: 100%;
      }
    }
  }

  &__hero {
    margin-top: 4rem;
    transform: scale(0);

    // animation-duration: 1.8s;
    // animation-delay: 2.5s;
    // animation-iteration-count: infinite;
    // animation-name: wobble;
    // display: inline-block;

    @media (min-width: 768px) {
      flex: 1 1 0%;
      margin-top: 3rem;
    }

    img {
      width: 80%;
      // filter: drop-shadow(5px 5px 10px #b6b6b6);

      @media (min-width: 768px) {
        width: 100%;
      }
    }

    // img {
    //   width: 10rem;
    //   margin: 0 auto;

    //   @media (min-width: 768px) {
    //     width: 20rem;
    //   }
    // }
  }
}

// @keyframes wobble {
//   0% {
//     transform: rotate(0deg);
//   }
//   10% {
//     transform: rotate(-10deg);
//   }
//   20% {
//     transform: rotate(12deg);
//   }
//   30% {
//     transform: rotate(-10deg);
//   }
//   40% {
//     transform: rotate(9deg);
//   }
//   50% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(0deg);
//   }
// }
</style>
