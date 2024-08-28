<template>
  <div class="overflow-x-hidden">
    <div class="flex flex-col max-w-[1400px] px-5 mx-auto min-h-screen">
      <WhatsappFAB />
      <HeaderVue />
      <HeroVideo />
      <main class="flex-1">
        <NuxtPage />
      </main>
      <FooterVue />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
useSeoMeta({
  title: 'KAZAQUA - символ чистоты и качества',
  description: 'Вода KAZAQUA ассоциируется с чистотой и качеством, соответствуя самым высоким стандартам безопасности, и мы всегда стремимся к индивидуальному подходу и оперативному решению любых вопросов наших клиентов.',
  ogType: 'website',
  ogUrl: 'https://www.kazaqua.kz',
  ogTitle: 'KAZAQUA - символ чистоты и качества',
  ogDescription: 'Вода KAZAQUA ассоциируется с чистотой и качеством, соответствуя самым высоким стандартам безопасности, и мы всегда стремимся к индивидуальному подходу и оперативному решению любых вопросов наших клиентов.',
  ogImage: '/seo-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'KAZAQUA - символ чистоты и качества',
  twitterDescription: 'Вода KAZAQUA ассоциируется с чистотой и качеством, соответствуя самым высоким стандартам безопасности, и мы всегда стремимся к индивидуальному подходу и оперативному решению любых вопросов наших клиентов.',
  twitterImage: '/seo-image.jpg',
})

</script>
