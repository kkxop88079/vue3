import { ViteSSG } from 'vite-ssg/single-page'
// import routes from "~pages";
import App from './views/App.vue'
import Info from './views/info.vue'
import './styles/index.css'

export const createApp = ViteSSG(App)
