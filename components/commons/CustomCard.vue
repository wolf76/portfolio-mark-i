<template>
  <div class="custom-card">
    <div
      class="custom-card__wrapper"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card"
    >
      <div class="custom-card__card" :style="cardStyle">
        <div class="custom-card__card__image" :style="[cardBgTransform]">
          <img :src="getImage" alt="Image" />
        </div>
        <div class="custom-card__card__info">
          <div class="custom-card__card__info__title">{{ title }}</div>
          <div class="custom-card__card__info__content">
            {{ content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.width = this.$refs.card.offsetWidth
    this.height = this.$refs.card.offsetHeight
  },

  props: {
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      require: true,
    },
  },

  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  }),

  computed: {
    mousePX() {
      return this.mouseX / this.width
    },
    mousePY() {
      return this.mouseY / this.height
    },
    cardStyle() {
      const rX = this.mousePX * 30
      const rY = this.mousePY * -30
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      }
    },
    cardBgTransform() {
      const tX = this.mousePX * -40
      const tY = this.mousePY * -40
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      }
    },

    getImage() {
      let imgIndex = Math.floor(Math.random() * 10 + 1)
      return require(`~/assets/images/backgrounds/background-image-${imgIndex}.jpeg`)
    },
  },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay)
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 200)
    },
  },
}
</script>

<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.custom-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__wrapper {
    transform: perspective(800px);
    transform-style: preserve-3d;
    cursor: pointer;

    &:hover {
      .custom-card {
        &__card {
          transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;

          &__info {
            transform: translateY(0);
            transition: 0.6s $hoverEasing;

            &__content {
              opacity: 1;
              transition: 0.6s $hoverEasing;
            }

            &:after {
              transition: 5s $hoverEasing;
              opacity: 1;
              transform: translateY(0);
            }
          }

          &__image {
            transition: 0.6s $hoverEasing, opacity 1s $hoverEasing;
            opacity: 0.8;
          }
        }
      }
    }
  }

  &__card {
    position: relative;
    flex: 0 0 240px;
    width: 240px;
    height: 320px;
    background-color: #8a8a8a;
    overflow: hidden;
    border-radius: 10px;
    transition: 1s $returnEasing;

    &__image {
      opacity: 0.5;
      position: absolute;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      transition: 1s $returnEasing, opacity 1s $returnEasing;
      pointer-events: none;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info {
      padding: 20px;
      position: absolute;
      bottom: 0;
      color: #fff;
      transform: translateY(40%);
      transition: 0.3s 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

      &__title {
        font-size: clamp(1rem, 10vw, 1.5rem);
        font-weight: 700;

        word-wrap: break-word;
        width: 210px;
      }

      &__content {
        opacity: 0;
        transition: 0.3s 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          to bottom,
          transparent 0%,
          rgba(#000, 0.6) 100%
        );
        background-blend-mode: overlay;
        opacity: 0;
        transform: translateY(100%);
        transition: 5s 1s $returnEasing;
      }
    }
  }
}
</style>
