<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                  {{ id }}
                </td>
        <td  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                  {{ name }}
                </td>
                <td  class="px-6 py-4">
                  {{ email }}
                </td>
                <td  class="px-6 py-4">
                  {{ phone }}
                </td>
                <td  class="px-6 py-4">
                  {{ date }}
                </td>
                <td  class="px-6 py-4">
                  {{ starttime }}
                </td>
                <td  class="px-6 py-4">
                  {{ endtime }}
                </td>
                <td class="px-6 py-4 text-right">
                    <button  class="font-medium bg-edit py-2 px-4 text-white rounded-input hover:text-black">Edit</button>
                </td>
                <td class="px-6 py-4 text-right">
                  <button  class="font-medium bg-delete py-2 px-2 text-white rounded-input hover:text-black" @click="deleteItem(item.id)">Delete</button>
                </td>
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    },
    methods: {
      deleteUser(id) {
        this.$emit('deleteUser', id);
      }
    }
  }
  </script>