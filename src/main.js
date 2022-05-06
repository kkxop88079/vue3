// import { ViteSSG } from 'vite-ssg/single-page'
import { createApp } from 'vue'
// import routes from "~pages";
import App from './views/App.vue'
import './styles/index.css'
import router from './router'

// export const createApp = ViteSSG(App)
// export const createApp = ViteSSG(
//     App,
//     { router },
//     ({ app, router, routes, isClient, initialState }) => {
//         // install plugins etc.
//     },

// )
const app = createApp(App)
app.use(router)
app.mount('#app')

