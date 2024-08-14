<template>
  <div
    id="Advantages"
    class=""
  >
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
    title: 'Символ чистоты и качества',
    subtitle: 'Вода KAZAQUA ассоциируется с чистотой и качеством, обеспечивая соответствие самым высоким стандартам безопасности.',
  },
  {
    id: '2',
    icon: '/drop.png',
    title: 'Индивидуальный подход к клиентам',
    subtitle: 'Мы обеспечиваем персонализированное обслуживание и оперативно решаем все вопросы клиентов.',
  },
  {
    id: '3',
    icon: '/drop.png',
    title: 'Миссия по обеспечению здоровья и благополучия',
    subtitle: 'Мы верим, что чистая вода - это залог здоровья, и наша миссия - предоставить лучший продукт для благополучия клиентов.',
  },
  {
    id: '4',
    icon: '/drop.png',
    title: 'Доверие крупных компаний',
    subtitle: 'Нашими клиентами являются ведущие компании, такие как "Казахмыс", "Самрук-Казына", Казмунайгаз, Казахтелеком и Казпочта.',
  },
  {
    id: '5',
    icon: '/drop.png',
    title: 'Крупнейший поставщик воды в регионе',
    subtitle: 'Мы обеспечиваем надежное обслуживание городов и промышленных объектов в Жезказгане и Сатпаеве, будучи крупнейшим поставщиком воды в области.',
  },
  {
    id: '6',
    icon: '/drop.png',
    title: 'Долговечность на рынке',
    subtitle: 'Наша компания работает более 20 лет, что свидетельствует о стабильности и опыте в отрасли.',
  },
])

</script>

<style scoped></style>