<template>
  <swiper
    :effect="'coverflow'"
    :centeredSlides="true"
    :mousewheel="true"
    :slidesPerView="'auto'"
    :scrollbar="{
      draggable: true
    }"
    :coverflowEffect="{
      rotate: 0,
      stretch: 0,
      depth: 100,
      slideShadows: false
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      v-for="product in products"
      :key="product.id"
    >
      <ProductCard :product />
    </swiper-slide>
  </swiper>
</template>

<script
  setup
  lang="ts"
>
import type { Product } from './card.vue'
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';



const modules = ref([EffectCoverflow, Mousewheel, Scrollbar])

const products = ref<Product[]>([
  {
    id: '1',
    title: 'Вода 1',
    image: '/products/bottle.webp',
    price: '100 ₸'
  },
  {
    id: '2',
    title: 'Вода 2',
    image: '/products/bottle.webp',
    price: '100 ₸'
  },
  {
    id: '3',
    title: 'Вода 3',
    image: '/products/bottle.webp',
    price: '100 ₸'
  },
  {
    id: '4',
    title: 'Вода 4',
    image: '/products/bottle.webp',
    price: '100 ₸'
  },
  {
    id: '5',
    title: 'Вода 5',
    image: '/products/bottle.webp',
    price: '100 ₸'
  },
  {
    id: '6',
    title: 'Вода 6',
    image: '/products/bottle.webp',
    price: '100 ₸'
  },
])
</script>

<style scoped>
.swiper {
  width: 100%;
  padding: 2rem 0;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  border-radius: 6px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>