<template>
  <div class="naresh-portfolio-skills mt-14 md:mt-20">
    <div class="naresh-portfolio-skills__title title">Skills</div>
    <CustomBorder />
    <div class="naresh-portfolio-skills__content mt-10">
      <div
        class="naresh-portfolio-skills__content__skill"
        v-for="skill in skills"
        :key="skill"
      >
        <img :src="getImage(skill)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomBorder from './commons/CustomBorder.vue'

export default {
  components: {
    CustomBorder,
  },

  data() {
    return {
      skills: [
        'html-5',
        'css-3',
        'js',
        'vue',
        'nuxt',
        'sass',
        'bootstrap',
        'figma',
        'vscode',
        'git',
        'photoshop',
        'responsive',
        'camera',
        'gaming',
      ],
    }
  },

  methods: {
    getImage(imgName) {
      return require(`~/assets/images/icons/${imgName}.png`)
    },
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-skills {
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &__skill {
      background: var(--bg-highlight);
      border-radius: 1rem;
      margin: 0.5rem;

      img {
        height: 100px;
        width: 100px;
        padding: 1rem;
        transition: all 0.5s ease;

        &:hover {
          transform: scale(1.1) rotate(15deg);
        }
      }
    }
  }
}
</style>
