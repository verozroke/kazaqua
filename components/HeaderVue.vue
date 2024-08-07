<template>
  <header>
    <nav class="z-20 w-full">
      <div class="px-6 2xl:px-0">
        <div class="flex flex-wrap items-center justify-between py-2 sm:py-4">
          <div class="w-full items-center flex justify-between lg:w-auto">
            <a
              href="/"
              aria-label="kazaqua logo"
              class="font-black text-water leading-5 text-2xl"
            >
              <span class="tracking-tighter">KAZ</span> <br> <span class="tracking-wide">AQUA</span>
            </a>
            <div class="flex lg:hidden">
              <button
                aria-label="humburger"
                id="menu"
                class="relative border border-gray-950/30  size-9 rounded-full transition duration-300 active:scale-95"
              >
                <div
                  aria-hidden="true"
                  id="line1"
                  class="m-auto h-[1.5px] w-4 rounded bg-gray-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="m-auto mt-1.5 h-[1.5px] w-4 rounded bg-gray-900 transition duration-300"
                ></div>
              </button>
            </div>
          </div>
          <div
            class="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap"
          >
            <div class="mt-6 text-gray-600 md:-ml-4 lg:pr-4 lg:mt-0">
              <ul class="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
                <li>
                  <a
                    href="#"
                    class="block md:px-4 transition hover:text-water font-medium"
                  >
                    <span>О нас</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block md:px-4 transition hover:text-water font-medium"
                  >
                    <span>Наши плюсы</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block md:px-4 transition hover:text-water font-medium"
                  >
                    <span>Товар</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block md:px-4 transition hover:text-water font-medium"
                  >
                    <span>Связь</span>
                  </a>
                </li>
              </ul>
            </div>

            <div
              class="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2"
            >
              <button
                class="bg-water pb-[2px] font-medium ml-6 text-white rounded w-full h-9 lg:w-fit group flex items-center  disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100   hover:bg-darkwater active:bg-darkwater/75  lg:text-sm lg:h-8 px-3.5 justify-center"
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

</script>

<style scoped></style>