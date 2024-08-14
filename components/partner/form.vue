<template>
  <div class="flex gap-5 min-h-96 ContactUs py-8 px-7 shadow-md border rounded-lg">
    <div class="w-[50%] flex flex-col gap-6">
      <div class="text-7xl text-water font-bold">Стать партнером</div>
      <div class="text-base flex-1 text-slate-600 max-w-96">Заполните форму ниже, чтобы присоединиться к числу наших
        уважаемых партнеров и начать сотрудничество с крупнейшим поставщиком воды в регионе.</div>
      <NuxtImg src="/partner.svg" />

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
            v-model="companyName"
            id="company-name"
            validation="required"
            label="Название компании"
            placeholder="ТОО `Транстелеком`"
          />
          <FormKit
            type="text"
            name="contact-person"
            v-model="contactPerson"
            id="contact-person"
            validation="required"
            label="Контактное лицо"
            placeholder="Огуречкин Иван"
          />
          <FormKit
            type="tel"
            label="Номер телефона"
            v-model="phone"
            name="phone"
            ]
            validation="required"
            id="phone"
            placeholder="+77123456789"
          />
          <FormKit
            type="email"
            label="Email"
            v-model="email"
            name="email"
            validation="required|email"
            validation-visibility="live"
            placeholder="vikas@gmail.com"
          />
          <FormKit
            type="textarea"
            name="description"
            v-model="description"
            validation="required"
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
import axios from 'axios';


const companyName = ref('')
const contactPerson = ref('')
const phone = ref('')
const email = ref('')
const description = ref('')


const clear = () => {
  companyName.value = ''
  phone.value = ''
  email.value = ''
  contactPerson.value = ''
  description.value = ''
}


const sendOrder = async (e: any) => {
  if (!companyName.value || !contactPerson.value || !phone.value || !email.value || !description.value) {
    alert('Поля не должны быть пустыми.')
    return
  }

  if (!isPhone(phone.value)) {
    alert('Введите номер телефона по примеру. Пример: +77123456789')
    return
  }

  if (!isEmail(email.value)) {
    alert('Введите почту корректно!')
    return
  }

  try {
    const { data } = await axios.postForm('https://script.google.com/macros/s/AKfycbxXEj8bkKd4ZuwQXZ5qh32luVyebz8zq8SNA2k-leDy2cevdYF5P2vqRcIEoM9146AylQ/exec', {
      companyName: companyName.value,
      phone: phone.value,
      email: email.value,
      contactPerson: contactPerson.value,
      description: description.value,
    })

    // on success
    alert(data)
    clear()
  } catch (error: any) {
    alert(error || error.message || 'Произошла ошибка')
  }

}

</script>

<style scoped></style>