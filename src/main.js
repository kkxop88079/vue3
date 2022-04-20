import { ViteSSG } from 'vite-ssg/single-page'
// import routes from "~pages";
import App from './App.vue'
import './styles/index.css'

export const createApp = ViteSSG(App)