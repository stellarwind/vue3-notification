import { createApp } from 'vue'
import App from './App.vue'
import plugin from 'plugin'
import velocity from 'velocity-animate'

const app = createApp(App)

app.use(plugin({ velocity }))

app.mount('#app')
