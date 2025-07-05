import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './style.css'
import { Router } from './src/utils/router.js'
import { Header } from './src/components/Header.js'
import { Footer } from './src/components/Footer.js'

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

// Initialize Router
const router = new Router()

// Render Header and Footer
document.querySelector('#app').innerHTML = `
  ${Header()}
  <main id="main-content"></main>
  ${Footer()}
`

// Initialize navigation
router.init()