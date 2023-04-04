<template>
  <Header />
  
  <div class="container mx-auto my-auto">
    <router-view /> 
  </div>
</template>
<script lang="ts">
import type { Calendar } from 'v-calendar';
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Calendar from './views/Calendar.vue'

export default defineComponent({
  components: { Header, Calendar }
})
</script>