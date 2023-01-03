<template>
  <div class="naresh-portfolio-my-work mt-14">
    <div class="naresh-portfolio-my-work__title title">My Work</div>
    <CustomBorder />
    <div class="naresh-portfolio-my-work__content mt-10">
      <CustomItem v-for="i in 5" :key="i" />
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
