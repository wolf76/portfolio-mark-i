<template>
  <div class="naresh-portfolio-footer">
    <img v-if="isLightTheme" src="~/assets/images/waves-light.svg" alt="" />
    <img v-else src="~/assets/images/waves-dark.svg" alt="" />
    <div class="naresh-portfolio-footer__body">
      <div class="desktop">
        © Nareshkumar J S | All rights reserved | {{ getYear }}
      </div>
      <div class="mobile text-center">
        <div>© Nareshkumar J S</div>
        <div>All rights reserved | 2023</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getTheme']),

    isLightTheme() {
      return this.getTheme === 'light'
    },

    getYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-footer {
  width: 100%;
  margin: 0;

  img {
    transform: rotate(180deg);
  }

  &__body {
    height: 100px;
    background: var(--footer-color);
    margin-top: -1px;

    padding: 2rem;
    color: var(--white-color);
  }
}
</style>
