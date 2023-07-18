<template>
  <div class="naresh-portfolio-skills mt-14 md:mt-20">
    <div class="naresh-portfolio-skills__title title">Skills</div>
    <CustomBorder />
    <div class="naresh-portfolio-skills__content mt-4">
      <div
        class="naresh-portfolio-skills__content__skill"
        v-for="(skill, key) in skillSets"
        :key="skill"
      >
        <i :class="`devicon-${skill}`"></i>
        <div class="naresh-portfolio-skills__content__skill__text">
          {{ key }}
        </div>
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
      skillSets: {
        'HTML 5': 'html5-plain',
        'CSS 3': 'css3-plain',
        JAVASCRIPT: 'javascript-plain',
        'VUE JS': 'vuejs-plain',
        'NUXT JS': 'nuxtjs-plain',
        SASS: 'sass-original',
        BOOTSTRAP: 'bootstrap-plain',
        GITHUB: 'github-original',
        GIT: 'git-plain',
        FIGMA: 'figma-plain',
        'VS CODE': 'vscode-plain',
        PHOTOSHOP: 'photoshop-plain',
        TAILWIND: 'tailwindcss-plain',
        FIREBASE: 'firebase-plain',
      },
    }
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
      text-align: center;
      width: 105px;
      height: 105px;
      margin-top: 2rem;
      color: var(--secondary-color-dark);

      &:hover {
        color: var(--accent-color);
      }

      i {
        font-size: 5rem;
      }

      &__text {
        font-size: 0.875rem;
        font-weight: 600;
      }
    }
  }
}
</style>
