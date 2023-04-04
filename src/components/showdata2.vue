<template>
    <div>
    <table class=" text-show w-full bg-list rounded-card  "><tr  v-for="item in items" :key="item.id">
        <td ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" w-5 h-5 text-delete">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
</svg>
</td>
        <td class="text-bold text-delete py-1">&nbsp;&nbsp;{{ item.date }}&nbsp;&nbsp;&nbsp;</td>
        <td class="text-0369A1 font-bold">{{ item.starttime }}&nbsp;-&nbsp;{{ item.endtime }}</td>
    </tr></table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import VueAxios from 'vue-axios';

  export default {
    name: 'MyComponent',
    
    data() {
      return {
        items: [],
       
      };
    },
    mounted() {
      this.getItems();
    },
    computed: {
    
  },
    methods: {
       
      getItems() {
        axios
          .get('http://localhost/api-get2.php')
          .then((response) => {
            this.items = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    plugins: [VueAxios, axios],
  };
  </script>