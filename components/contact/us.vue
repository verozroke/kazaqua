<template>
  <div
    id="Order"
    class="flex gap-5 rounded-lg min-h-96 ContactUs py-8 px-7 bg-water shadow-md"
  >
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
            name="phone"
            validation="required"
            id="phone"
            placeholder="+77123456789"
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
            @input="(v) => addProduct(v!)"
            id="product"
            placeholder="Выберите наш продукт"
            :options="[
            `Подставка под бутыль 19л передвижная`, `Подставка под бутыль 19л (диспенсер)`, `Помпа AquaWork российское производство`, `Помпа китайская`, `Электрическая помпа`, `Вода 19л первая бутылка 2000, следующие (замены)`
          ]"
          />
          <!-- name, phone, address, product, -->
          <ContactProductControl v-model="productItems" />
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


export type ProductSelectItem = {
  title: string
  number: number
}




const name = ref('')
const phone = ref('')
const address = ref('')
const product = ref('')
const productItems = ref<ProductSelectItem[]>([])
const products = computed(() => productItems.value.length > 0 ? productItems.value.map(item => `${item.title} ${item.number} шт.`) : [])


const clear = () => {
  name.value = ''
  phone.value = ''
  address.value = ''
  productItems.value = []
}

const addProduct = (productName: string) => {
  productItems.value.push({
    number: 1,
    title: productName
  })
}



const sendOrder = async (e: any) => {

  if (!name.value || !address.value || !phone.value || !products.value) {
    alert('Поля не должны быть пустыми.')
    return
  }

  if (!isPhone(phone.value)) {
    alert('Введите номер телефона по примеру. Пример: +77123456789')
    return
  }



  try {

    console.log(products.value.join(', '))

    const { data } = await axios.postForm('https://script.google.com/macros/s/AKfycbxTT3nVk8IXfM2HcKKFQZ-3PPUZUHGrBFwPjmAssnVcM2bw0zVEqeotbCRJn40trk9D/exec', {
      name: name.value,
      phone: phone.value,
      address: address.value,
      products: products.value.join(', '),
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