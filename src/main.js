import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import store from './store'
import './assets/css/main.scss'
import 'ant-design-vue/dist/antd.css';
import {Button,Card,Input,Table,Dropdown,Menu} from 'ant-design-vue';
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Card);
Vue.use(Table);
Vue.use(Button);
Vue.use(Input)

Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
