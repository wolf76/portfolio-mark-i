<template>
  <div class="dropdown-icon" :class="{ open: openState }">
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    openState: Boolean,
    default: false,
  },
}
</script>

<style lang="scss" scoped>
.dropdown-icon {
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    position: absolute;
    width: 10px;
    height: 2px;
    background: var(--white-color);
    border-radius: 40px;
    transition: 0.5s;

    &:nth-child(1) {
      transform: rotate(45deg);
      left: 7px;
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
      right: 7px;
    }
  }

  &.open {
    span {
      &:nth-child(1) {
        transform: rotate(135deg);
      }

      &:nth-child(2) {
        transform: rotate(-135deg);
      }
    }
  }
}
</style>
