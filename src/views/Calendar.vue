<script setup lang="ts">
import { ref, onMounted } from "vue";

const evts = ref([
  {
    date: "2022-11-24T16:00:50.253Z",
    comment: "Faire une livraison à moto de Mont Sinaï à Calavi",
    id: "cl3eddmjz1435801pqwfa5ihd1",
    keywords: "Anniversaire",
    name: "SAGBO Aimé",
  },
]);

const cfg = ref({
  // actions: {
  //   view: {
  //     // enabled: true,
  //     // text: "",
  //   },
  //   report: {
  //     enabled: true,
  //   },
  // },
  // searchPlaceHolder: "",
  // eventName: "",
  // closeText: "",
});

onMounted(() => {
  ["calendar.request.view", "calendar.request.report"].forEach((e: string) => {
    document.body.addEventListener(e, (event: Event | CustomEvent) => {
      console.log({ event });
    });
  });
});
</script>

<template>
  <pro-calendar
    :events="evts"
    :loading="false"
    :config="cfg"
    @calendarClosed="void 0"
  />
</template>


