<template>
  <header class="z-30">
    <nav class="z-30 w-full">
      <div class="px-0 select-none">
        <div class="flex items-center justify-between py-6">
          <div class="w-full items-center flex justify-between ">
            <a
              href="/"
              aria-label="kazaqua logo"
              class="font-black text-water leading-5 text-2xl"
            >
              <span class="tracking-tighter">KAZ</span> <br> <span class="tracking-wide">AQUA</span>
            </a>

          </div>
          <div class="w-full hidden lg:flex  justify-end items-center space-y-0 h-fit flex-nowrap">
            <div class="text-white md:-ml-4 pr-4 mt-0">
              <ul class="tracking-wide text-sm flex space-y-0">
                <li>
                  <span
                    @click="scrollDown('About')"
                    class="block md:px-4 transition hover:text-water font-medium"
                  >
                    <span>О нас</span>
                  </span>
                </li>
                <li>
                  <span
                    @click="scrollDown('Advantages')"
                    class="block md:px-4 transition hover:text-water font-medium"
                  >
                    <span>Наши плюсы</span>
                  </span>
                </li>
                <li>
                  <span
                    @click="scrollDown('Product')"
                    class="block md:px-4 transition hover:text-water font-medium"
                  >
                    <span>Товар</span>
                  </span>
                </li>
                <li>
                  <span
                    @click="scrollDown('Social')"
                    class="block md:px-4 transition hover:text-water font-medium"
                  >
                    <span>Связь</span>
                  </span>
                </li>
              </ul>
            </div>

            <div
              class="gap-2 pb-0  border-[--ui-light-border-color] border-white dark:border-[--ui-dark-border-color] items-center flex flex-row space-y-0 w-fit border-l border-t-0 pt-0 pl-2"
            >
              <button
                @click="scrollDown('Order')"
                class="bg-water pb-[2px] font-medium ml-6 text-white rounded w-fit group flex items-center  disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100   hover:bg-darkwater active:bg-darkwater/75  text-sm h-8 px-3.5 justify-center"
              >
                <span>Заказать воду</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script
  setup
  lang="ts"
>
import { scrollDown } from '~/utils/utils'

</script>

<style scoped></style>