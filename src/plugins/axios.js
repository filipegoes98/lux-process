import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://api.github.com/users',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
})