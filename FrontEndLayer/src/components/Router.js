import Home from './Home.vue'
import Start from './Start.vue'

const Home = { template: '<div><Home/></div>' }
const Start = { template: '<div><Start/></div>' }

const routes = [
  { path: '/', component: Home },
    { path: '/start', component: Start },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = Vue.createApp({})
app.use(router)

app.mount('#app')