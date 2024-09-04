import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

loadFonts()

createApp(App)
    .use(vuetify)
    .use(ElementPlus)
    .mount('#app')
