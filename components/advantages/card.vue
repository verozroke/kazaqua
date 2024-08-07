<template>
  <div class="border shadow-md flex  gap-4 p-5 rounded-md">
    <div class="icon w-6 h-6 mt-2">
      <NuxtImg
        class="object-cover object-center w-full h-full"
        :src="card.icon"
      />
    </div>
    <div class="flex flex-col gap-2">
      <div class="text-xl font-bold text-water">{{ card.title }}</div>
      <div class="text-base text-slate-600 font-medium">{{ card.subtitle }}</div>
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