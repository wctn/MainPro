import { createRouter, createWebHistory } from 'vue-router'
import Calendar from '../components/calendar/core-index.vue'
import Login from '../views/Login.vue'
import Booking from '../views/Booking.vue'



const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  },
  {
    path: '/home',
    name: 'Home',
    component: Calendar
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;