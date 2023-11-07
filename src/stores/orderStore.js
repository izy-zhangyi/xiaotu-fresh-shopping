import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getOrdersInfoAPI } from '@/apis/orders.js'
import { useCartStore } from '@/stores/cartStore.js'
import router from '@/router'
export const useOrderStore = defineStore(
  'orders',
  () => {
    const cartStore = useCartStore()
    const checkInfo = ref({}) // 订单对象
    const curAddress = ref({}) // 地址对象

    const getOrderInfo = async () => {
      const goods = await cartStore.cartList.find((item) => {
        return item.selected === true
      })
      if (!goods) {
        ElMessage({
          type: 'warning',
          message: '请选择需要结算下单的商品'
        })
        router.push('/cartlist')
      }

      const res = await getOrdersInfoAPI()
      checkInfo.value = res.result
      // default address
      curAddress.value = checkInfo.value.userAddresses.find(
        (item) => item.isDefault === 0
      )
    }
    return {
      checkInfo,
      curAddress,
      getOrderInfo
    }
  },
  {}
)
