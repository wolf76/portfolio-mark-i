<template>
  <div class="naresh-portfolio-contact mt-14">
    <div
      class="naresh-portfolio-contact__container max-w-xs m-auto mt-32 text-center"
    >
      <div class="flex justify-center items-center">
        <div
          class="naresh-portfolio-contact__text capitalize font-bold text-lg mr-2"
        >
          Stay Connected
        </div>
        <div class="naresh-portfolio-contact__hand">
          <img src="~/assets/images/icons/waving-hand.png" alt="Hi!" />
        </div>
      </div>
      <div class="naresh-portfolio-contact__place text-sm mt-12">
        Chennai, India
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
  &__hand {
    width: 40px;

    animation-duration: 1.8s;
    animation-delay: 2.5s;
    animation-iteration-count: infinite;
    animation-name: wobble;
    display: inline-block;
  }

  &__place {
    color: var(--accent-color);
  }
}

@keyframes wobble {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
