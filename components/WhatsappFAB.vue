<template>
  <button
    @click="goToWhatsapp"
    class="p-0  bg-whatsapp flex items-center justify-center w-12 h-12 z-10 fixed bottom-5 right-5 bg-opacity-100 rounded-full hover:bg-opacity-75 hover:cursor active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
  >
    <NuxtImg
      class="w-6 h-6 inline-block"
      src="/logo/whatsapp.png"
    />
  </button>
</template>

<script
  setup
  lang="ts"
>
import { WHATSAPP_LINK } from '~/core/constants/constants'

const goToWhatsapp = () => {
  const link = document.createElement("a")
  link.href = WHATSAPP_LINK
  link.target = '_blank'
  link.click()
}

</script>

<style scoped></style>