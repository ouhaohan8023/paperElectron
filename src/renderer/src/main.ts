import { createApp } from 'vue'
import App from './App.vue'
import '@ant-design-vue/pro-layout/dist/style.css' // pro-layout css or style.less
import Antd from 'ant-design-vue'
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout'
// createApp(App).mount('#app')
const app = createApp(App)
import router from './route/index' // 确保这里正确引入你的路由配置
app.use(router)
app.use(Antd).use(ProLayout).use(PageContainer).mount('#app')
const func = async () => {
// @ts-ignore (define in dts)
  const response = await window.versions.ping()
  console.log(response) // 打印 'pong'
}
func()

