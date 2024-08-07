<template>
  <div class="flex gap-5 min-h-96 ContactUs py-8 px-7 shadow-md border rounded-lg">
    <div class="w-[50%] flex flex-col gap-6">
      <div class="text-7xl text-water font-bold">Стать партнером</div>
      <div class="text-base text-slate-600 max-w-96">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
        aspernatur! Atque temporibus iure id magni eaque, sequi quaerat a illum!</div>
    </div>
    <div class="w-[50%] flex justify-end">
      <div class="bg-white  w-[70%] rounded-md flex flex-col items-center py-10">
        <FormKit
          type="form"
          style="width: 70%; display: flex; flex-direction: column;"
          @submit="sendOrder"
          submit-label="Стать партнером"
        >
          <FormKit
            type="text"
            name="company-name"
            id="company-name"
            validation="required"
            label="Название компании"
            placeholder="ТОО `Транстелеком`"
          />
          <FormKit
            type="text"
            name="contact-person"
            id="contact-person"
            validation="required"
            label="Контактное лицо"
            placeholder="Огуречкин Иван"
          />
          <FormKit
            type="tel"
            label="Номер телефона"
            placeholder="xxx-xxx-xxxx"
            validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
            matches: 'Phone number must be in the format xxx-xxx-xxxx',
          }"
            validation-visibility="dirty"
          />
          <FormKit
            type="email"
            label="Email"
            name="email"
            validation="required|email"
            validation-visibility="live"
            placeholder="vikas@school.edu"
          />
          <FormKit
            type="textarea"
            name="description"
            label="Ваше предложение"
            placeholder="Опишите ваше предложение"
          />

          <!-- companyName, contactPerson, phoneNumber, email, description -->
        </FormKit>
      </div>

    </div>

  </div>
</template>

<script
  setup
  lang="ts"
>

const sendOrder = () => {

}

</script>

<style scoped></style>