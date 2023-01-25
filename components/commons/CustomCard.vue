<template>
  <div class="custom-card">
    <a :href="url" rel="noopener noreferrer" target="_blank">
      <div class="custom-card__container">
        <div class="custom-card__title text-lg font-bold">{{ title }}</div>
        <div class="custom-card__desc py-4">
          {{ description }}
        </div>
        <div class="custom-card__tags flex items-center flex-wrap">
          <div class="tag-bubble" v-for="tag in tags" :key="tag">
            {{ tag }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    tags: {
      type: Array,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-card {
  max-width: 100%;
  background: var(--card-color);
  border-radius: 8px;
  height: 100%;
  color: var(--white-color);
  transition: all 0.5s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    max-width: 450px;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__container {
    padding: 2rem;
  }

  &__tags {
    .tag-bubble {
      padding: 5px 15px;
      border-radius: 20px;
      background: var(--accent-color);
      margin: 2px;
      color: var(--white-color);
      font-size: 12px;
      font-weight: 600;
    }
  }
}
</style>
