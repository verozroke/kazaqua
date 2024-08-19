<template>
  <div
    @click="scrollDown('Order')"
    class="card relative h-[450px] w-[300px] bg-white rounded-md shadow-xl border"
  >
    <NuxtImg
      :src="product.image"
      class="w-full h-full inset-0 absolute object-center bg-white rounded-md object-cover"
    />
    <div class="overlay absolute inset-0"></div>
    <div
      v-if="product.description"
      class="description-overlay select-none absolute inset-0 bg-water text-white font-medium flex items-center justify-center p-5"
    >
      {{ product.description }}
    </div>
    <div class="flex w-full absolute p-5 bottom-0 justify-between items-end gap-5">
      <div class="title text-water text-sm tracking-tight font-bold">{{ product.title }}</div>
      <div
        v-if="product.price"
        class="text-white text-sm w-20 h-fit tracking-wider font-bold text-right"
      >{{ product.price }}</div>
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
  price?: string
  description?: string
}

defineProps<{
  product: Product
}>()

</script>

<style scoped>
.overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.692) 10%, transparent 30%);
}

.description-overlay {
  opacity: 0;
  transition: .4s;
}

.card:hover .description-overlay {
  opacity: 1;
  transition: .4s;
}

.title {
  transition: .4s;
}

.card:hover .title {
  color: #fff;
  transition: .4s;
}
</style>