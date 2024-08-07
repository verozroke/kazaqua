<template>
  <div class="max-w-7xl px-7">
    <div class="grid gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div class="max-w-xl lg:max-w-lg text-gray-300">
        <h2 class=" text-water font-bold leading-10 text-7xl mb-7">Связь с нами
        </h2>
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-2"><a
              target="_blank"
              :href="INSTAGRAM_LINK"
            >
              <NuxtImg
                src="/logo/instagram-blue.png"
                class="h-8 w-8 object-cover"
                alt=""
              />
            </a></div>
          <div class="flex items-center gap-2"><a
              target="_blank"
              :href="WHATSAPP_LINK"
            >
              <NuxtImg
                src="/logo/whatsapp-blue.png"
                class="h-8 w-auto"
                alt=""
              />
            </a></div>
        </div>
      </div>
      <dl class="grid gap-x-8 gap-y-10 grid-cols-2 pt-2">
        <div class="flex flex-col items-start">
          <div class="rounded-md bg-water/5 p-2 ring-1 ring-white/10">
            <PhoneIcon class="h-6 w-6 text-water" />
          </div>
          <dd class="mt-2 leading-7 text-water">
            <b>+7 (7102) 77‒58‒75</b> <br>
            <b>+7‒777‒520‒06‒42</b>
          </dd>
        </div>
        <div class="flex flex-col items-start">
          <div class=" rounded-md bg-water/5 p-2 ring-1 ring-white/10">
            <MapPinIcon class="h-6 w-6 text-water" />
          </div>
          <dd class="mt-2 leading-7 text-water"><b>город Жезказган, <br> Улица Гагарина, 8</b></dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { PhoneIcon, MapPinIcon } from '@heroicons/vue/20/solid'
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '~/core/constants/constants'

</script>

<style scoped></style>