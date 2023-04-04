<template>
  
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full bg-time text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    ชื่อ - นามสกุล
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    เบอร์โทรศัพท์
                </th>
                <th scope="col" class="px-6 py-3">
                    วันที่
                </th>
                <th scope="col" class="px-6 py-3">
                    Starttime
                </th>
                <th scope="col" class="px-6 py-3">
                    Endtime
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only"></span>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in contact" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                  {{ item.id }}
                </td>
                <td  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                  {{ item.name }}
                </td>
                <td  class="px-6 py-4">
                  {{ item.email }}
                </td>
                <td  class="px-6 py-4">
                  {{ item.phone }}
                </td>
                <td  class="px-6 py-4">
                  {{ item.date }}
                </td>
                <td  class="px-6 py-4">
                  {{ item.starttime }}
                </td>
                <td  class="px-6 py-4">
                  {{ item.endtime }}
                </td>
                <td class="px-6 py-4 text-right">
                    <button  class="font-medium bg-edit py-2 px-4 text-white rounded-input hover:text-black" @click="updateItems(item)">Edit</button>
                </td>
                <td class="px-6 py-4 text-right">
                  <button  class="font-medium bg-delete py-2 px-2 text-white rounded-input hover:text-black" @click="deleteItems(item.id)">Delete</button>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

</template>

<script>
import axios from 'axios';
import VueAxios from 'vue-axios';

export default {
  name: 'MyComponent',
  data() {
    return {
      contact: []
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios
        .get('http://localhost/api-get.php')
        .then((response) => {
          this.contact = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    
  }
};
</script>
