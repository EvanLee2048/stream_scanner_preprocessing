import App from './main.vue'

import vuetify from './plugins/vuetify';
import Vue from 'vue'

Vue.config.productionTip = false;
new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
