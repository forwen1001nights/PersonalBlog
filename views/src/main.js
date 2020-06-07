import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon, Button, Row, Col, Input, Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'
import './global.css';
// Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use( Icon );
Vue.use( Button );
Vue.use( Row );
Vue.use( Col );
Vue.use( Input );
Vue.use( Dropdown );
Vue.use( DropdownItem );
Vue.use( DropdownMenu );
Vue.use( Table );
Vue.use( TableColumn );

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
