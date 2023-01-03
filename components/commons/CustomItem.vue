<template>
  <div class="custom-item">
    <div class="custom-item__thumbnail"></div>
    <div class="custom-item__details">
      <div class="custom-item__details__title">My First Project</div>
      <div class="custom-item__details__desc">
        Built with simple VueJS framework. Works just well.
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.custom-item {
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 450px;
  }

  &__thumbnail {
    // TEMP SETTINGS
    height: 200px;
    width: 100%;
    background: #8a8a8a;

    img {
      border-radius: 8px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }

  &__details {
    padding: 2rem;
    background: #f2f0ee;
    border-radius: 8px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;

    &__title {
    }

    &__desc {
    }
  }
}
</style>
