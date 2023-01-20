<template>
  <div class="naresh-portfolio-about mt-12 md:mt-32">
    <div class="naresh-portfolio-about__title title pt-4 md:pt-8">
      About Me!
    </div>
    <CustomBorder />
    <div class="naresh-portfolio-about__content mt-10 flex">
      <div
        class="naresh-portfolio-about__content__illustration hidden lg:block"
      >
        <div class="avatar-illustration">
          <img
            class="avatar-illustration__img avatar-illustration__img--1"
            src="~/assets/images/illustrations/avatar-illustration-1.png"
            alt="avatar-illustration 1"
          />
          <img
            class="avatar-illustration__img avatar-illustration__img--2"
            src="~/assets/images/illustrations/avatar-illustration-2.png"
            alt="avatar-illustration 1"
          />
          <img
            class="avatar-illustration__img avatar-illustration__img--3"
            src="~/assets/images/illustrations/avatar-illustration-3.png"
            alt="avatar-illustration 1"
          />
          <img
            class="avatar-illustration__img avatar-illustration__img--4"
            src="~/assets/images/illustrations/avatar-illustration-4.png"
            alt="avatar-illustration 1"
          />
          <img
            class="avatar-illustration__img avatar-illustration__img--5"
            src="~/assets/images/illustrations/avatar-illustration-5.png"
            alt="avatar-illustration 1"
          />
          <img
            class="avatar-illustration__img avatar-illustration__img--6"
            src="~/assets/images/illustrations/avatar-illustration-6.png"
            alt="avatar-illustration 1"
          />
          <img
            class="avatar-illustration__img avatar-illustration__img--7"
            src="~/assets/images/illustrations/avatar-illustration-7.png"
            alt="avatar-illustration 1"
          />
          <img
            class="avatar-illustration__img avatar-illustration__img--8"
            src="~/assets/images/illustrations/avatar-illustration-8.png"
            alt="avatar-illustration 1"
          />
        </div>
      </div>
      <div
        class="naresh-portfolio-about__content__texts text-center flex flex-col justify-center items-center"
      >
        <div class="text-1 py-4">
          <div class="font-semibold">DESIGN</div>
          <div class="text-sm">
            I value simple content structure, clean design patterns, and
            thoughtful interactions. Love playing with the colors, but also
            personally like things dark.
          </div>
        </div>
        <div class="text-2 py-4">
          <div class="font-semibold">FRONTEND</div>
          <div class="text-sm">
            I build and code things from scratch, and enjoy bringing ideas to
            life in the browser. Deeply into bringing my design thoughts on the
            UI.
          </div>
        </div>
        <div class="text-3 py-4">
          <div class="font-semibold">WEB3</div>
          <div class="text-sm">
            Have 2+ years working with web3 dApps and other applications. Built
            things like NFT market place, crypto wallet and bridges.
          </div>
        </div>

        <div class="resume-button pt-6">
          <a
            href="https://drive.google.com/uc?export=download&id=1VuuQe27rGgG-m8ezkF6JyMmfT1yg8X76"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button
              class="font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>RESUME</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Back, Elastic, Expo } from 'gsap'
import CustomBorder from './commons/CustomBorder.vue'

export default {
  components: {
    CustomBorder,
  },

  mounted() {
    this.animateAboutSectionIllustration()
  },

  methods: {
    animateAboutSectionIllustration() {
      let tl = new TimelineMax({ onUpdate: updatePercentage })

      tl.from('.avatar-illustration__img--1', 0.5, { opacity: 0, scale: 0 }, 0)
        .from(
          '.avatar-illustration__img--2',
          0.5,
          { opacity: 0, scale: 0 },
          0.5
        )
        .from('.text-1', 0.5, { opacity: 0, scale: 0 }, 0.75)
        .from('.avatar-illustration__img--3', 0.5, { opacity: 0, x: -200 }, 1)
        .from('.avatar-illustration__img--4', 0.5, { opacity: 0, x: 200 }, 1.5)
        .from('.avatar-illustration__img--5', 0.5, { opacity: 0, x: -200 }, 2)
        .from('.text-2', 0.5, { opacity: 0, scale: 0 }, 2.25)
        .from('.avatar-illustration__img--6', 0.5, { opacity: 0, x: 200 }, 2.5)
        .from('.avatar-illustration__img--7', 0.5, { opacity: 0, x: -200 }, 3)
        .from('.text-3', 0.5, { opacity: 0, scale: 0 }, 3.25)
        .from('.avatar-illustration__img--8', 0.5, { opacity: 0, x: 200 }, 3.5)
        .from('.resume-button', 0.5, { opacity: 0, scale: 0 }, 4)

      const scene = this.$scrollmagic
        .scene({
          triggerElement: '.naresh-portfolio-about',
          triggerHook: 0,
          duration: '300%',
        })
        .setPin('.naresh-portfolio-about')
        .setTween(tl)

      this.$scrollmagic.addScene(scene)

      function updatePercentage() {
        tl.progress()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-about {
  &__content {
    border-radius: 8px;
    background: var(--secondary-color-light-two);

    @media (min-width: 1024px) {
      height: 600px;
    }

    &__illustration {
      width: 100%;
      .avatar-illustration {
        position: relative;
        height: 600px;

        &__img {
          position: absolute;
          bottom: 0;
          width: 635px;
          height: 600px;

          &--1 {
            z-index: 1;
          }
          &--2 {
            z-index: 5;
          }
          &--3 {
            z-index: 2;
          }
          &--4 {
            z-index: 3;
          }
          &--5 {
            z-index: 3;
          }
          &--6 {
            z-index: 3;
          }
          &--7 {
            z-index: 3;
          }
          &--8 {
            z-index: 3;
          }
        }
      }
    }

    &__texts {
      width: 100%;
      padding: 2rem;

      @media (min-width: 1024px) {
        width: 60%;
        padding: 1rem;
      }

      * {
        max-width: 500px;
      }

      .resume-button {
        button {
          background: var(--accent-color);
          color: var(--white-color);

          &:hover {
            background: var(--accent-color-dark);
          }
        }
      }
    }
  }
}
</style>
