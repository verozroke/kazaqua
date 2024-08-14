<template>
  <div
    style="height: calc(100vh - 72px)"
    class="z-30 flex flex-col gap-5 items-center justify-center"
  >
    <a
      href="/"
      aria-label="kazaqua logo"
      class="font-black text-white leading-[5rem] tracking-wider text-[9rem]"
    >
      KAZAQUA
    </a>
    <span class="text-white mb-10 font-bold text-5xl leading-8 flex items-center gap-3">Чистота <span
        class="text-water underline underline-offset-[10px] decoration-wavy"
      >воды</span> <span class="text-6xl">-</span>
      чистота
      <span class="text-water underline underline-offset-[10px] decoration-wavy">жизни</span></span>
    <button
      @click="scrollDown('Order')"
      class="bg-water py-3 font-medium  text-lg text-white rounded w-full lg:w-fit group flex items-center  disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100   hover:bg-darkwater active:bg-darkwater/75    px-8 justify-center"
    >
      <span>Заказать воду</span>
    </button>
  </div>
</template>

<script
  setup
  lang="ts"
>

</script>

<style scoped></style>