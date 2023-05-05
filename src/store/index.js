import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cuit: '',
        cuitformateado: '',
        nombreformateado: '',
        avatar: '',
        cuitrepresentado: '',
        ambiente: 1,
        alert: {
            message: '',
            type: '',
            snackbar: false,
            timeout: 5000,
            equis: true,
            top: true,
            moreinfo: false,
            adicional: false,
            msmAdicional: '',
        },
        modalbottom: false,
        configModal: {
            type: null,
            h1: null,
            h2: null,
            active: false
        }
    },
    mutations: {
        SET_SELECCIONA(state, ambiente) {
            state.ambiente = ambiente
        },
        SET_ALERT(state, alert) {
            console.log(alert)
            let equis = !!alert.equis;
            let top = alert.top == undefined ? true : alert.top;
            state.alert = {
                ...alert,
                equis,
                top
            };
        },
        SET_AVATAR(state, avatar) {
            console.log(avatar)
            state.avatar = avatar
        },
        SET_MODALBOTTOM(state, modalbottom) {
            state.modalbottom = modalbottom
        },
        SET_CONFIGMODAL(state, configModal) {
            state.configModal = {
                ...state.configModal,
                ...configModal
            }
        }
    },
    actions: {},
    modules: {}
})