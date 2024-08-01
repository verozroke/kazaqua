<template>
  <footer>
    <div class="mx-auto px-6 py-16 text-gray-600 2xl:px-0">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
        <a
          href="/"
          aria-label="kazaqua logo"
          class="font-black text-water leading-5 text-2xl"
        >
          <span class="tracking-tighter">KAZ</span> <br> <span class="tracking-wide">AQUA</span>
        </a>
        <div class="flex gap-3">
          <a
            :href="WHATSAPP_LINK"
            target="_blank"
            aria-label="whatsapp"
            class="bg-water p-2 rounded flex *:m-auto  text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
          >
            <NuxtImg
              class="w-5 h-5 object-cover object-center"
              src="/logo/whatsapp.png"
            />
          </a>
          <a
            :href="INSTAGRAM_LINK"
            target="_blank"
            aria-label="instagram"
            class="bg-water p-2 rounded flex *:m-auto  text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
          >
            <NuxtImg
              class="w-5 h-5 object-cover object-center"
              src="/logo/instagram.webp"
            />

          </a>
        </div>
      </div>
      <div class="flex items-center justify-between py-3 mt-8">
        <span class="text-gray-600 ">&copy; KAZAQUA 2024</span>
      </div>
    </div>
  </footer>
</template>

<script
  setup
  lang="ts"
>
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '~/core/constants/constants'

</script>

<style scoped></style>