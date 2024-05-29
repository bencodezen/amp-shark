<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color: string
    direction: string
  }>(),
  {
    color: 'green',
    direction: 'up'
  }
)

const simplifiedDirection = computed(() => {
  return props.direction.substring(5).toLowerCase()
})
</script>

<template>
  <svg
    :class="`is-${simplifiedDirection}`"
    width="120"
    height="120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M38.5362 33.25V59.5H24.301c-7.829 0-14.2188.0329-14.2023.0657.0329.0984 49.8519 52.4183 49.9013 52.4183.0493 0 49.868-52.3199 49.901-52.4183.017-.0328-6.373-.0657-14.202-.0657H81.4638V7.00004H38.5362V33.25Z"
      :fill="color"
    />
  </svg>
</template>

<style scoped>
.is-up {
  transform: rotate(180deg);
}

.is-down {
  transform: rotate(0deg);
}

.is-left {
  transform: rotate(90deg);
}

.is-right {
  transform: rotate(-90deg);
}
</style>
