import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import Player from '@vimeo/player';
import $storage from './plugins/storage';
import store from './store';
import getBrowserInfo from './plugins/getnav'
import {
    Auth0Plugin
} from "./plugins/auth";
import {
    domain,
    clientId
} from "../auth_config.json";
Vue.config.productionTip = false

if (process.env.NODE_ENV == 'development') {
    // axios.defaults.baseURL = 'https://localhost:44337';
    axios.defaults.baseURL = 'https://localhost:7065';
    //axios.defaults.baseURL = '//apibeinfinitus.niufleex.com';
} else {
    axios.defaults.baseURL = 'https://apibeinfinitus.niufleex.com';
}
axios.defaults.headers.common['Access-Control-Allow-Origin'] = window.location.origin;
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = '*';

Vue.prototype.$setIntervalCurrentTime = null;
Vue.prototype.$clearIntervalCurrentTime = (clearIntervalMain) => {
    console.log(clearIntervalMain.clearIntervalMain);
    clearInterval(clearIntervalMain.$setIntervalCurrentTime);
};
//this.$clearIntervalCurrentTime(this)

Vue.prototype.$intervalActiveEndPlayVideo = null;
Vue.prototype.$clearIntervalActiveEndPlayVideo = (clearIntervalMain) => {
    console.log(clearIntervalMain.$intervalActiveEndPlayVideo);
    clearInterval(clearIntervalMain.$intervalActiveEndPlayVideo);
};
//this.$clearIntervalCurrentTime(this)
Vue.prototype.$http = axios;
Vue.prototype.$httpAnonimo = axios;
Vue.prototype.$Player = Player;
Vue.prototype.$storage = $storage;
Vue.prototype.$getBrowserInfo = getBrowserInfo
    /*
    |---------------------------------------------------------------------
    | Main Vue Instance
    |---------------------------------------------------------------------
    |
    | Render the vue application on the <div id="app"></div> in index.html
    |
    | https://vuejs.org/v2/guide/instance.html
    |
    */

export default new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')