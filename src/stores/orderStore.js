import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  getOrdersInfoAPI,
  createOrderAPI,
  getOrderDetailAPI,
  getUserOrderAPI
} from '@/apis/orders.js'
import { useCartStore } from '@/stores/cartStore.js'
import router from '@/router'
import { useCountDown } from '@/composables/useCountDown.js'
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

    // 创建订单
    const createOrder = async (data) => {
      return await createOrderAPI(data)
    }

    // 获取-订单详情(以及支付结果)
    const payInfo = ref({})
    const { formatTime, start } = useCountDown()
    // 封装格式化好的倒计时时间
    const formatDate = formatTime
    const getOrderDetail = async (id) => {
      const res = await getOrderDetailAPI(id)
      payInfo.value = res.result
      // 初始化倒计时秒数
      start(res.result.countdown)
    }

    // 获取订单列表
    const orderList = ref([])
    const getOrderList = async (params) => {
      const res = await getUserOrderAPI(params)
      console.log(res)
      orderList.value = res.result.items
    }
    return {
      checkInfo,
      curAddress,
      getOrderInfo,
      createOrder,
      payInfo,
      getOrderDetail,
      formatDate,
      orderList,
      getOrderList
    }
  },
  { persist: true }
)
