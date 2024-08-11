<template>
  <div class="relative h-[450px] w-[300px] bg-white rounded-md shadow-xl border">
    <NuxtImg
      :src="product.image"
      class="image w-full h-full inset-0 absolute object-center bg-white rounded-md object-cover"
    />
    <div class="flex w-full absolute p-5 bottom-0 justify-between">
      <div class="text-water text-2xl tracking-tight font-bold">{{ product.title }}</div>
      <div class="text-white text-2xl tracking-wider font-bold">{{ product.price }}</div>

    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>

export type Product = {
  id: string
  title: string
  image: string
  price: string
}

defineProps<{
  product: Product
}>()

</script>

<style scoped>
.image {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.692) 10%, transparent 30%);
}
</style>