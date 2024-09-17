
import "./assets/index.scss"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import {createPinia} from "pinia"
import i18n from "./i18n/index.js"
import ApiService from "@/service/ApiService.js";
import naive from 'naive-ui'
import { createYmaps } from 'vue-yandex-maps';

const app = createApp(App);
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)
const pinia =  createPinia()


app.use(i18n)
app.use(naive)
app.use(router)
app.use(pinia)
window.$ApiService = ApiService

app.use(createYmaps({
    apikey: 'cd743c3b-f0bf-4f2e-b9ec-0240b9d87646',
}));
app.mount('#app')