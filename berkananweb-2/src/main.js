import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'// 免費 solid 圖標包
import { far } from '@fortawesome/free-regular-svg-icons' // 免費regular圖標包
import { fab } from '@fortawesome/free-brands-svg-icons' // 免費brand圖標包

library.add(fas, far, fab)

createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
