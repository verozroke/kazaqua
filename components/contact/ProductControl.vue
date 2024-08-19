<template>

  <div class="flex flex-col gap-2 py-5 -mt-5">
    <div
      v-for="product in products"
      class="flex justify-between text-water items-center px-4 py-3 rounded shadow-md border bg-water/10"
    >
      <span class="text-sm truncate w-40 font-medium">{{ product.title }}</span>
      <div class="flex items-center gap-1">
        <span
          @click="() => {
        product.number -= 1

        if (product.number == 0) {
          products = products?.filter(item => item.title !== product.title)
          return
        }
      }"
          class="p-1 w-5 h-5 font-bold text-lg flex items-center justify-center select-none"
        >-</span>
        <span class="p-1 w-5 h-5 font-bold flex items-center justify-center select-none">{{ product.number
          }}</span>
        <span
          @click="product.number += 1"
          class="p-1 w-5 h-5 font-bold text-lg flex items-center justify-center select-none"
        >+</span>
      </div>

    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import type { ProductSelectItem } from './us.vue'

const products = defineModel<ProductSelectItem[]>()


</script>

<style scoped></style>