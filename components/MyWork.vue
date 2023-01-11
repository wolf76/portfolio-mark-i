<template>
  <div class="naresh-portfolio-my-work mt-14">
    <div class="naresh-portfolio-my-work__title title">My Work</div>
    <CustomBorder />
    <div class="naresh-portfolio-my-work__content mt-10">
      <CustomItem
        v-for="repo in githubRepos"
        :key="repo.name"
        :title="repo.name"
        :description="repo.description"
        :tags="repo.tags"
      />
    </div>
  </div>
</template>

<script>
import CustomBorder from './commons/CustomBorder.vue'
import CustomItem from './commons/CustomItem.vue'

export default {
  components: {
    CustomBorder,
    CustomItem,
  },

  data() {
    return {
      githubRepos: Array,
    }
  },

  created() {
    fetch('https://api.github.com/users/wolf76/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          const tempArray = []
          result.forEach((element) => {
            tempArray.push({
              name: element.name,
              desc:
                element.description ||
                'Temporary description for this repository here, please remove this and add some description on Github repos',
              tags: element.topics,
            })
          })

          this.githubRepos = tempArray
        },
        (error) => {
          console.log('Error: ', error)
        }
      )
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-my-work {
  &__title {
  }

  &__content {
    grid-gap: 2rem;
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
</style>
