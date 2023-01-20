<template>
  <div class="naresh-portfolio-contact mt-14">
    <div
      class="naresh-portfolio-contact__container max-w-xs m-auto mt-12 md:mt-32 text-center"
    >
      <div class="naresh-portfolio-contact__text capitalize font-bold text-lg">
        Stay Connected
      </div>
      <div class="naresh-portfolio-contact__place text-sm mt-8">
        Chennai, TN
      </div>
      <div class="naresh-portfolio-contact__mail mt-4 font-medium text-xl">
        <a href="mailto:iamnarey@gmail.com"> iamnarey@gmail.com </a>
      </div>
      <div class="naresh-portfolio-contact__media flex justify-center mt-4">
        <CustomMediaIcons :isShadowEnabled="false" :isHorizontal="true" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomMediaIcons from '@/components/commons/CustomMediaIcons.vue'

export default {
  components: {
    CustomMediaIcons,
  },
}
</script>

<style lang="scss" scoped>
.naresh-portfolio-contact {
  &__place {
    color: var(--accent-color);
  }
}
</style>
