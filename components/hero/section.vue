<template>
  <div
    style="height: calc(100vh - 72px)"
    class="z-30 flex flex-col gap-5 items-center justify-center select-none"
  >
    <a
      href="/"
      aria-label="kazaqua logo"
      class="font-black text-white text-5xl tracking-wide leading-[4rem]  lg:leading-[5rem] lg:tracking-wider lg:text-[9rem]"
    >
      KAZAQUA
    </a>
    <span
      class="text-white mb-6 text-lg lg:mb-10 font-bold lg:text-5xl lg:leading-8 flex-col md:flex-row flex flex-nowrap items-center gap-3"
    ><span>Чистота <span class="text-water underline underline-offset-[10px] decoration-wavy">воды</span></span> <span
        class="text-xl hidden md:block lg:text-6xl"
      >-></span>
      <span>
        чистота
        <span class="text-water underline underline-offset-[10px] decoration-wavy">жизни</span></span>
    </span>
    <button
      @click="scrollDown('Order')"
      class="bg-water py-3 font-medium  text-lg text-white rounded w-fit group flex items-center  disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100   hover:bg-darkwater active:bg-darkwater/75    px-8 justify-center"
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