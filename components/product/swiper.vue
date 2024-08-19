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
import { EffectCoverflow, Mousewheel, Scrollbar } from 'swiper/modules';



const modules = ref([EffectCoverflow, Mousewheel, Scrollbar])

const products = ref<Product[]>([
  {
    id: '1',
    title: 'Подставка под бутыль 19л передвижная',
    image: '/products/1.jpg',
    price: '4500₸'
  },
  {
    id: '2',
    title: 'Подставка под бутыль 19л (диспенсер)',
    image: '/products/2.jpg',
    price: '10000₸'
  },
  {
    id: '3',
    title: 'Помпа AquaWork российское производство',
    image: '/products/3.png',
    price: '3500₸'
  },
  {
    id: '4',
    title: 'Помпа китайская',
    image: '/products/4.png',
    price: '2000₸'
  },
  {
    id: '5',
    title: 'Электрическая помпа',
    image: '/products/5.jpg',
    price: '2500₸'
  },
  {
    id: '6',
    title: 'Вода 19л первая бутылка 2000, следующие (замены)',
    image: '/products/6.png',
    price: '700₸'
  },
  {
    id: '7',
    title: "Аппарат для воды EcoCool 16ТА",
    description: "Настольный серебристый с черными вставками, нагрев +95ºС, электронное охлаждение +10С, краники нажим кружкой.",
    image: "/products/15.jpg"
  },
  {
    id: '8',
    title: "Аппарат для воды BONA D22",
    description: "Настольный (белый с черными вставками), нагрев +95ºС, электронное охлаждение +10С, подача воды кнопками.",
    image: "/products/14.jpg"
  },
  {
    id: '9',
    title: "Аппарат для воды EcoCool 16ТA",
    description: "Настольный (белый), нагрев +95ºС, электронное охлаждение +10С, краники нажим кружкой.",
    image: "/products/12.jpg"
  },
  {
    id: '10',
    title: "Аппарат для воды EcoCool 16LE silver",
    description: "Напольный (серебристый с черными вставками), нагрев +95ºС, электронное охлаждение +10С, со встроенным шкафчиком, краники нажим кружкой.",
    image: "/products/9.jpg"
  },
  {
    id: '11',
    title: "Аппарат для воды EcoCool 16LE red",
    description: "Напольный (черный с красными вставками), нагрев +95ºС, электронное охлаждение +10С, со встроенным шкафчиком, краники нажим кружкой.",
    image: "/products/8.jpg"
  },
  {
    id: '12',
    title: "Аппарат для воды EcoCool 16LE white",
    description: "Напольный (белый), нагрев +95ºС, электронное охлаждение +10С, со встроенным шкафчиком, краники нажим кружкой.",
    image: "/products/10.jpg"
  },
  {
    id: '13',
    title: "Аппарат для воды EcoCool 16LE blue",
    description: "Напольный (голубой с серебристыми вставками), нагрев +95ºС, электронное охлаждение +10С, со встроенным шкафчиком, краники нажим кружкой.",
    image: "/products/13.jpg"
  },
  {
    id: '14',
    title: "Аппарат для воды EcoCool 868LA",
    description: "Напольный (серебристый с черными вставками), нагрев +95ºС, электронное охлаждение +10С, со встроенным шкафчиком, краники нажим кружкой.",
    image: "/products/7.jpg"
  }
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