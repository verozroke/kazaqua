<template>
  <div>
    {{ product.title }}
  </div>
</template>

<script
  setup
  lang="ts"
>
import type { ProductSelectItem } from './us.vue'
defineProps<{
  product: ProductSelectItem
}>()

</script>

<style scoped></style>