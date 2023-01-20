<template>
  <div class="custom-accordion">
    <div class="custom-accordion__container">
      <div
        class="custom-accordion__item"
        v-for="(item, index) in customItems"
        :key="item.header"
      >
        <div
          class="custom-accordion__item__header flex justify-between"
          :class="{ active: item.active }"
          @click="activateBody(index)"
        >
          <div
            v-if="itemHeights[index]"
            class="custom-accordion__item__header__left flex items-center"
          >
            {{ item.header }}
          </div>
          <div class="custom-accordion__item__header__right flex items-center">
            <div class="mr-2 desktop">
              {{ item.period }}
            </div>

            <DropdownIcon :openState="item.active" />
          </div>
        </div>
        <div
          class="custom-accordion__item__body"
          :class="{ visible: item.active }"
          :style="[item.active ? { height: itemHeights[index] + 'px' } : '']"
        >
          <div class="custom-accordion__item__body__wrapper">
            <div
              class="custom-accordion__item__body__content md:flex justify-between md:flex-row-reverse"
            >
              <div
                class="custom-accordion__item__body__content__img pb-6 md:pb-0"
              >
                <img :src="getImage(item.body.image)" :alt="item.name" />
              </div>
              <div class="custom-accordion__item__body__content__data pr-4">
                <div
                  class="custom-accordion__item__body__content__data__company md:flex"
                >
                  <div
                    class="custom-accordion__item__body__content__data__company__location flex items-center mt-1 md:mt-0"
                  >
                    <img
                      v-if="isLightTheme"
                      src="~/assets/images/icons/map-pin-icon-dark.png"
                      alt="map-pin"
                    />
                    <img
                      v-else
                      src="~/assets/images/icons/map-pin-icon-light.png"
                      alt="map-pin"
                    />
                    <div class="ml-1">{{ item.body.location }}</div>
                  </div>
                  <div
                    class="custom-accordion__item__body__content__data__company__site mt-1 md:mt-0 md:ml-4"
                  >
                    <a
                      :href="item.body.website"
                      rel="noopener noreferrer"
                      target="_blank"
                      class="flex items-center"
                    >
                      <img
                        v-if="isLightTheme"
                        src="~/assets/images/icons/url-icon-dark.png"
                        alt="url"
                      />
                      <img
                        v-else
                        src="~/assets/images/icons/url-icon-light.png"
                        alt="url"
                      />
                      <div class="ml-1">{{ item.body.website }}</div>
                    </a>
                  </div>
                </div>
                <div
                  class="custom-accordion__item__body__content__data__desc pt-4 md:pt-6 pb-6 md:pb-8 pl-1"
                >
                  {{ item.body.description }}
                </div>
                <div
                  class="custom-accordion__item__body__content__data__tech flex items-center flex-wrap"
                >
                  <div
                    v-for="tag in item.body.tags"
                    :key="tag"
                    class="tag-bubble"
                  >
                    {{ tag }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DropdownIcon from './DropdownIcon.vue'

export default {
  components: {
    DropdownIcon,
  },

  props: {
    items: Array,
  },

  data() {
    return {
      accordionItems: Array,
      itemHeights: [],
    }
  },

  computed: {
    ...mapGetters(['getTheme']),

    customItems() {
      this.accordionItems = [...this.items]
      return this.accordionItems
    },

    isLightTheme() {
      return this.getTheme === 'light'
    },

    setImageTheme() {
      return this.isLightTheme ? 'dark' : 'light'
    },
  },

  mounted() {
    setTimeout(() => {
      let divElement = document.querySelectorAll(
        '.custom-accordion__item__body__wrapper'
      )

      divElement.forEach((element) => {
        this.itemHeights.push(element.clientHeight)
      })
    }, 300)
  },

  methods: {
    activateBody(index) {
      this.accordionItems[index].active = !this.accordionItems[index].active
      this.accordionItems.forEach((element, ind) => {
        if (ind !== index) {
          element.active = false
        }
      })
    },

    getImage(imgName) {
      return require(`~/assets/images/${imgName}-${this.setImageTheme}.png`)
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-accordion {
  max-width: 100%;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media (min-width: 768px) {
    max-width: 80%;
  }

  &__container {
    width: 100%;
  }

  &__item {
    &__header {
      background-color: var(--accent-color);
      cursor: pointer;
      position: relative;
      padding: 15px 20px;
      border-radius: 5px;
      color: var(--white-color);
      font-weight: 700;

      &.active {
        background-color: var(--accent-color);
      }
    }

    &__body {
      height: 10px;
      overflow: hidden;
      color: var(--white-contrast);

      transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;

      &__wrapper {
        padding: 20px 0px;
      }

      &__content {
        background-color: var(--accordion-item-background);
        color: var(--secondary-color);
        border-radius: 5px;
        padding: 15px 20px;
        font-size: 14px;
        line-height: 18px;

        &__data {
          width: 100%;

          @media (min-width: 768px) {
            width: 75%;
          }

          &__company {
            font-weight: 700;

            &__location {
              img {
                width: 20px;
                height: 20px;
              }
            }

            &__site {
              img {
                width: 20px;
                height: 20px;
              }
            }
          }

          &__tech {
            .tag-bubble {
              padding: 5px 15px;
              border-radius: 20px;
              background-color: var(--tag-bubble);
              margin: 2px;
              color: var(--white-color);
              font-size: 12px;
            }
          }
        }

        &__img {
          @media (min-width: 768px) {
            width: 25%;
          }

          img {
            max-width: 200px;

            @media (min-width: 768px) {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }

      &.visible {
        visibility: visible !important;
        opacity: 1 !important;
      }
    }
  }
}
</style>
