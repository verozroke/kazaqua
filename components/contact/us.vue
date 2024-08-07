<template>
  <div class="flex gap-5 rounded-lg min-h-96 ContactUs py-5 px-7 bg-water">
    <div class="w-[50%] flex flex-col gap-6">
      <div class="text-7xl text-white font-bold">Заказать воду</div>
      <div class="text-base text-slate-200 max-w-96">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
        aspernatur! Atque temporibus iure id magni eaque, sequi quaerat a illum!</div>
    </div>
    <div class="w-[50%]">
      <FormKit
        type="form"
        @submit="sendOrder"
      >
        <FormKit
          type="text"
          name="name"
          id="name"
          validation="required"
          label="Имя"
          placeholder="“Scarlet Sword”"
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
          type="text"
          name="address"
          id="address"
          validation="required"
          label="Адрес доставки"
          placeholder="Укажите адрес доставки"
        />
        <FormKit
          type="select"
          label="Ваш заказ"
          name="product"
          id="product"
          placeholder="Выберите наш продукт"
          :options="['Вода 1', 'Вода 2', 'Вода 3']"
        />

        <FormKit
          type="number"
          label="Количество товара"
          name="productNumber"
          value="1"
          step="1"
        />


        <!-- name, phone, address, product, -->
      </FormKit>
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