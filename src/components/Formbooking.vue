<script setup>
import { ref } from 'vue'

const starttime = ref('');
const endtime = ref('');

</script>
<template>
  
  <br><br>
  <center>
    <form class="w-40  bg-form rounded-card shadow-md py-8">
        <div>
          <div>
            <form action="">
              <center>
                <table>
                  <tr class="px-4">
                    <td ><span class="
                      block
                      text-gray-700 
                      font-bold
                      text-normal
                      mb-2
                    " for="grid-form">ชื่อ - นามสกุล :
                      </span>
                      <input class="
                      w-30
                      text-normal
                      rounded-input
                      py-2
                      px-3
                      mb-3
                      focus:outline-booking focus:bg-white
                    " v-model="contact.name" type="text" placeholder="กรอกชื่อ-นามสกุล" />
                    </td>
                    
                    
                  </tr>
                  <tr>
                    <td colspan=""><span class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      font-bold
                      text-normal
                      mb-2
                    " for="grid-form">Email :</span>
                      <input class="
                      w-30
                      text-normal
                      rounded-input
                      py-2
                      px-3
                      mb-3
                      focus:outline-booking focus:bg-white
                    " id="email" v-model="contact.email" type="email" placeholder="example@example.com" /><br />
                    </td>
                  </tr>
                  <tr>
                    <td> <span class="
                      block
                      uppercase
                      tracking-wide
                      text-gray-700 
                      font-bold
                      text-normal
                      mb-2
                    " for="grid-form">หมายเลขโทรศัพท์ :</span>
                      <input class="
                      w-30
                      text-normal
                      rounded-input
                      py-2
                      px-3
                      mb-3
                      focus:outline-booking focus:bg-white
                    " id="phone" v-model="contact.phone" type="text" placeholder="กรอกหมายเลขโทรศัพท์ 10 ตัว" /><br />
                    </td>
                  </tr><br>
                    <center><tr>
                     <td><span class="
                        block
                        uppercase
                        tracking-wide
                        text-gray-700 text-xs
                        font-bold
                        mb-2z
                        text-normal
                      " for="grid-form">ช่วงเวลาที่ต้องการจอง</span>
                      </td>
                      </tr></center><br>
                      <tr>
                        <td colspan="2"><span class="
                      block
                      font-bold
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      text-normal
                      mb-2
                    " for="grid-form">วันที่ที่ต้องการจอง :
                      </span>
                      <input class="
                      w-30
                      text-normal
                      rounded-input                      
                      py-2
                      px-3
                      mb-3
                      focus:outline-booking focus:bg-white
                    " v-model="contact.date" type="date" placeholder="" /><br /><br>
                    </td>
                    
                      </tr>
                      <tr>
                        <td colspan="2"><span class="
                      block
                      font-bold
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      text-normal
                      mb-2
                    " for="grid-form">start time :
                      </span>
                      <div class="bg-white p-4 w-30 rounded-input">
                        &nbsp;&nbsp;<input type="radio" id="starttime1" value="9.00 น." v-model="contact.starttime" />
                      <label for="starttime1"> 9.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="starttime2" value="10.00 น." v-model="contact.starttime" />
                      <label for="starttime2"> 10.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="starttime3" value="11.00 น." v-model="contact.starttime" />
                      <label for="starttime3"> 11.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="starttime4" value="12.00 น." v-model="contact.starttime" />
                      <label for="starttime4"> 12.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="starttime5" value="13.00 น." v-model="contact.starttime" />
                      <label for="starttime5"> 13.00 น. </label><br>
                      &nbsp;&nbsp;<input type="radio" id="starttime6" value="14.00 น." v-model="contact.starttime" />
                      <label for="starttime6"> 14.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="starttime7" value="15.00 น." v-model="contact.starttime" />
                      <label for="starttime7"> 15.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="starttime8" value="16.00 น." v-model="contact.starttime" />
                      <label for="starttime8"> 16.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="starttime9" value="17.00 น." v-model="contact.starttime" />
                      <label for="starttime9"> 17.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="starttime10" value="18.00 น." v-model="contact.starttime" />
                      <label for="starttime10"> 18.00 น. </label>
                    </div>
                    </td>
                    
                      </tr><br>
                      <tr>
                        <td colspan="2"><span class="
                      block
                      font-bold
                      uppercase
                      tracking-wide
                      text-gray-700 text-xs
                      text-normal
                      mb-2
                    " for="grid-form">end time :
                      </span>
                      <div class="bg-white p-4 w-30 rounded-input">
                        &nbsp;&nbsp;<input type="radio" id="endtime1" value="9.00 น." v-model="contact.endtime" />
                      <label for="endtime1"> 9.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="endtime2" value="10.00 น." v-model="contact.endtime" />
                      <label for="endtime2"> 10.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="endtime3" value="11.00 น." v-model="contact.endtime" />
                      <label for="endtime3"> 11.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="endtime4" value="12.00 น." v-model="contact.endtime" />
                      <label for="endtime4"> 12.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="endtime5" value="13.00 น." v-model="contact.endtime" />
                      <label for="endtime5"> 13.00 น. </label><br>
                      &nbsp;&nbsp;<input type="radio" id="endtime6" value="14.00 น." v-model="contact.endtime" />
                      <label for="endtime6"> 14.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="endtime7" value="15.00 น." v-model="contact.endtime" />
                      <label for="endtime7"> 15.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="endtime8" value="16.00 น." v-model="contact.endtime" />
                      <label for="endtime8"> 16.00 น. </label>&nbsp;&nbsp;
                       <input type="radio" id="endtime9" value="17.00 น." v-model="contact.endtime" />
                      <label for="endtime9"> 17.00 น. </label>&nbsp;&nbsp;
                      <input type="radio" id="endtime10" value="18.00 น." v-model="contact.endtime" />
                      <label for="endtime10"> 18.00 น. </label>
                    </div><br />
                    </td>
                    
                      </tr>
                        <br><tr><center>
                        <td><button type="submit" class="bg-white shadow bg-booking hover:bg-blue-700 text-white  py-2 px-4 rounded-lg 
                      mb-2" @click="sendData">Submit</button>&nbsp;&nbsp;
                      <router-link to="/home" class="bg-71717A hover:bg-blue-700   text-white  py-2 px-7 rounded-lg">Back</router-link> &nbsp;
                      </td>
                    </center></tr>
                    
                  
                </table>
                
              </center>

            </form>
            
          </div>
        </div>
    </form>
    
  </center>
  <br><br>
  
<Showdata></Showdata>

</template>

<script>

import axios from 'axios';
import Showdata from "./ShowData.vue"
import '@vuepic/vue-datepicker/dist/main.css'



export default {
  components: { Showdata },
  
  data() {
    return {
      contact: {
      name: '',
      email: '',
      phone: '',
      date:'',
      starttime: '',
      endtime: '',
    }}
  },
  methods: {
    sendData(e) {
      e.preventDefault();
      console.log("success");

      axios.post('http://localhost/api-post.php', {
        name:this.contact.name,
        email:this.contact.email,
        phone:this.contact.phone,
        date:this.contact.date,
        starttime:this.contact.starttime,
        endtime:this.contact.endtime,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      this.clearData();
      // get data from axios
    },
    clearData() {
      this.contact.name = "";
      this.contact.email = "";
      this.contact.phone = "";
      this.contact.date = "";
      this.contact.starttime = "";
      this.contact.endtime = "";
      
    }
  }
}


</script>
