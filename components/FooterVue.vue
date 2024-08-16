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
      <div class="flex flex-col justify-between py-3 gap-5 mt-8">
        <span class="text-gray-600 ">&copy; KAZAQUA 2024. Все права защищены.</span>
        <NuxtImg
          src="/cert.png"
          @click="openCertificate"
          class="w-40 opacity-50  hover:opacity-100 hover:scale-110 transition-all"
        />
      </div>
    </div>
  </footer>
</template>

<script
  setup
  lang="ts"
>
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '~/core/constants/constants'


const openCertificate = () => {
  const link = document.createElement('a')
  link.href = '/cert.pdf'
  link.target = "_blank"
  link.click()
}


</script>

<style scoped></style>