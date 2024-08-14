<template>
  <div class="flex gap-5 rounded-lg min-h-96 ContactUs py-8 px-7 bg-water shadow-md">
    <div class="w-[50%] flex flex-col gap-6">
      <div class="text-7xl text-white font-bold">Заказать воду</div>
      <div class="text-base flex-1 text-slate-200 max-w-96">Заполните форму ниже, чтобы быстро и удобно заказать чистую
        и качественную воду KAZAQUA с доставкой на ваш адрес.</div>
      <NuxtImg src="/contact.png" />
    </div>
    <div class="w-[50%] flex justify-end">
      <div class="bg-white shadow-md border w-[70%] rounded-md flex flex-col items-center py-10">
        <FormKit
          type="form"
          style="width: 70%; display: flex; flex-direction: column;"
          @submit="sendOrder"
          submit-label="Заказать воду"
        >
          <FormKit
            type="text"
            class="max-w-full"
            name="name"
            id="name"
            v-model="name"
            validation="required"
            label="Имя"
            placeholder="Иван Огуречкин"
          />
          <FormKit
            type="tel"
            label="Номер телефона"
            v-model="phone"
            placeholder="xxx-xxx-xxxx"
            validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
            matches: 'Phone number must be in the format xxx-xxx-xxxx',
          }"
            validation-visibility="dirty"
          />
          <FormKit
            type="text"
            name="address"
            id="address"
            v-model="address"
            validation="required"
            label="Адрес доставки"
            placeholder="Укажите адрес доставки"
          />
          <FormKit
            type="select"
            label="Ваш заказ"
            name="product"
            v-model="product"
            id="product"
            placeholder="Выберите наш продукт"
            :options="[
            `Подставка под бутыль 19л передвижная`, `Подставка под бутыль 19л (диспенсер)`, `Помпа AquaWork российское производство`, `Помпа китайская`, `Электрическая помпа`, `Вода 19л первая бутылка 2000, следующие (замены)`
          ]"
          />
          <!-- name, phone, address, product, -->
        </FormKit>
      </div>

    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>

const name = ref('')
const phone = ref('')
const address = ref('')
const product = ref('')

const sendOrder = () => {

}

</script>

<style scoped></style>