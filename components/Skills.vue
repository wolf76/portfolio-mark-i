<template>
  <div class="naresh-portfolio-skills mt-14 md:mt-20">
    <div class="naresh-portfolio-skills__title title">Skills</div>
    <CustomBorder />
    <div class="naresh-portfolio-skills__content mt-10">
      <div
        class="naresh-portfolio-skills__content__skill tooltip"
        v-for="skill in skills"
        :key="skill"
      >
        <span class="tooltiptext capitalize"> {{ skill }} </span>
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
        'html 5',
        'css 3',
        'js',
        'vue',
        'nuxt',
        'sass',
        'bootstrap',
        'git',
        'figma',
        'vscode',
        'photoshop',
        'responsive',
        'photography',
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
        height: 60px;
        width: 60px;
        padding: 0.5rem;
        transition: all 0.5s ease;

        @media (min-width: 768px) {
          height: 100px;
          width: 100px;
          padding: 1rem;
        }

        &:hover {
          transform: scale(1.1) rotate(15deg);
        }
      }
    }
  }
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: var(--secondary-color);
  color: var(--secondary-color-light-two);
  text-align: center;
  border-radius: 8px;
  padding: 5px 0;
  font-size: 14px;
  line-height: 18px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 110%;
  left: 50%;
  margin-left: -50px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--secondary-color) transparent transparent transparent;
  }
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
