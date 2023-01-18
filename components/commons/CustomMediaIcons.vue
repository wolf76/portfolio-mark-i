<template>
  <div
    class="custom-media-icons"
    :class="{ shadow: isShadowEnabled, horizontal: isHorizontal }"
  >
    <div v-for="(item, id) in media" :key="id" class="custom-media-icons__item">
      <a :href="item.url" rel="noopener noreferrer" target="_blank">
        <img :src="getImage(item.img)" :alt="id" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      media: {
        linkedin: {
          img: 'linkedin-icon',
          url: 'https://www.linkedin.com/in/nareshkumar-js/',
        },
        github: {
          img: 'github-icon',
          url: 'https://github.com/wolf76',
        },
        twitter: {
          img: 'twitter-icon',
          url: 'https://twitter.com/woshi_narey',
        },
      },
    }
  },

  props: {
    isShadowEnabled: {
      type: Boolean,
      default: true,
      require: false,
    },
    isHorizontal: {
      type: Boolean,
      default: false,
      require: false,
    },
  },

  methods: {
    getImage(imgName) {
      return require(`~/assets/images/icons/${imgName}.svg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-media-icons {
  background: #fff;
  width: fit-content;
  z-index: 10;

  padding: 0.5rem 0;

  &.shadow {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);

    padding: 0.5rem;
  }

  &.horizontal {
    display: flex;
    padding: 1rem;
  }

  &__item {
    padding: 0.5rem;

    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>
