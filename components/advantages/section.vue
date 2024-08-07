<template>
  <div class="">
    <span class="text-water font-bold  text-7xl px-7">Наши преимущества</span>
    <div class="relative flex items-center gap-10 flex-wrap rounded-lg py-8 px-7">
      <AdvantagesCard
        class="w-[30%]"
        v-for="card in cards"
        :key="card.id"
        :card
      />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import type { AdvantagesCard } from './card.vue'

const cards = ref<AdvantagesCard[]>([
  {
    id: '1',
    icon: '/drop.png',
    title: 'Преимущество 1',
    subtitle: 'Это наше преимущество',
  },
  {
    id: '2',
    icon: '/drop.png',
    title: 'Преимущество 2',
    subtitle: 'Это наше преимущество',
  },
  {
    id: '3',
    icon: '/drop.png',
    title: 'Преимущество 3',
    subtitle: 'Это наше преимущество',
  },
  {
    id: '4',
    icon: '/drop.png',
    title: 'Преимущество 4',
    subtitle: 'Это наше преимущество',
  },
  {
    id: '5',
    icon: '/drop.png',
    title: 'Преимущество 5',
    subtitle: 'Это наше преимущество',
  },
  {
    id: '6',
    icon: '/drop.png',
    title: 'Преимущество 6',
    subtitle: 'Это наше преимущество',
  },
])

</script>

<style scoped></style>