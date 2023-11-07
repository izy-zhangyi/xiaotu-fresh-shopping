// 封装倒计时逻辑函数
import { ref, computed, onUnmounted } from 'vue'
import { dayjs } from 'element-plus'

export const useCountDown = () => {
  // 响应数据
  var timer = null
  const time = ref(0)
  // 格式化时间 - xx分xx秒
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

  //开启倒计时函数
  const start = (currentTime) => {
    // 开始倒计时逻辑
    // 核心业务编写- 每一秒 -1
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  // 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}
