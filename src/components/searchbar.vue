<template>
    <div>
      <form @submit.prevent="searchDatabase">
        <input v-model="searchQuery" type="text" placeholder="Search...">
        <button type="submit">Search</button>
      </form>
  
      <ul>
        <li v-for="result in searchResults" :key="result.id">{{ result.date }}</li>
      </ul>
    </div>
  </template>

<script>
import axios from 'axios';
import VueAxios from 'vue-axios';

export default{
    data() {
        return {
            searchQuery: '',
            searchResults: [],
        };
},
    methods: {
    async searchDatabase() {
        try {
        const response = await axios.get('http://localhost/api-search.php', {
            params: { query: this.searchQuery },
        });
        this.searchResults = response.data;
        } catch (error) {
        console.error(error);
        }
    },
},
    plugins: [VueAxios, axios],}
</script>