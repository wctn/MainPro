<template><center>
    <div  class="card justify-content: center;">
   
      <form class="w-full max-w-lg 	">
        <br>
        <span class="font-bold text-login">Login</span>
        <br>
        <div class="card py-10">
          
            <div>
              
                <label
                
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="username"
                  >Username :
            </label>
                <input
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-50
                    text-gray-500
                    border border-gray-200
                    rounded-input
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none focus:bg-white
                  "
                  v-model="username"
                  type="text"
                  placeholder="Username"
                /><br />
                <label
                
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="password"
                  >Password :</label
                >
                <input
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-50
                    text-gray-500
                    border border-gray-200
                    rounded-input
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none focus:bg-white
                  "
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  
                /><br />
                <center>
                    <button @click.prevent="login()" class="bg-booking hover:bg-blue-700 text-white  py-2 px-4 rounded-lg">Login</button>
                    <div v-show="showErrorMessage">{{ errorMessage }}</div>
                </center>
              </div>
        </div>
      </form>
    </div>
   </center>
  </template>

  <script>
  import axios from 'axios';
  import router from '@/router'; // import router มาจากไฟล์ /src/router/index.js

  export default {
    data() {
    return {
      username: '',
      password: '',
      
    };
  },
  methods: {
    login() {
        axios.post('http://localhost/api-login.php', {
          username: this.username,
          password: this.password
        })
        .then(response => {
        // ถ้าการเข้าสู่ระบบสำเร็จ
        if (response.data.success) {
          // เปลี่ยนเส้นทางไปยังหน้าต่อไป
          alert('เข้าสู่ระบบสำเร็จ');
        } else {
          // แสดงข้อความแจ้งเตือนว่าเข้าสู่ระบบไม่สำเร็จ
          alert('เข้าสู่ระบบไม่สำเร็จ');
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }};

  </script>