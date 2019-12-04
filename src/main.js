import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import apolloClient from './graphql';
import apolloClient2 from './graphql/client2';
import vSelect from 'vue-select'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import SweetModal from 'sweet-modal-vue/src/plugin.js'
import VueFormWizard from 'vue-form-wizard'
// import VueRangedatePicker from 'vue-rangedate-picker'
// import DateRangePicker from "@gravitano/vue-date-range-picker";
 

//you need to import the CSS manually (in case you want to override it)
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

Vue.component('v-select', vSelect);
Vue.use(VueApollo);
Vue.use(Buefy);
Vue.use(SweetModal);
Vue.use(VueFormWizard);
// Vue.use(VueRangedatePicker);
// Vue.use(DateRangePicker);
Vue.config.productionTip = false

import 'vue-select/dist/vue-select.css';

const apolloProvider = new VueApollo({
  clients: {
    apolloClient,
    apolloClient2
  },
  defaultClient: apolloClient2,
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
