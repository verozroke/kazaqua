<template>
  <div class="border shadow-md h-fit lg:h-full lg:max-h-36 flex  gap-4 p-5 rounded-md">
    <div class="flex flex-col gap-2">
      <div class="text-sm lg:text-base font-bold text-water">{{ card.id }}. {{ card.title }}</div>
      <div class="text-sm leading-4 text-slate-600 font-medium">{{ card.subtitle }}</div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
export type AdvantagesCard = {
  id: string
  icon: string
  title: string
  subtitle: string
}


defineProps<{
  card: AdvantagesCard
}>()

</script>

<style scoped></style>