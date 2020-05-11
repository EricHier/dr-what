<template>
  <div class="px-8 py-10 w-full animated fadeIn faster bg-white">
    <div class="container mx-auto text-justify">
      <span class="text-xl mr-4 my-2 block md:inline-block">Datenbank updaten: </span>
      <input v-model="newJson" placeholder="Neue Wörter" class="p-2 border outline-none focus:border-focus text-blue focus:text-accent">
      <button class="p-2 border text-blue focus:border-focus focus:text-accent outline-none" style="outline: none;" @click="upload">Speichern</button>

    </div>
  </div>
</template>
<script>
  import {upload} from "../conversion/db";

  export default {
    data() {
      return {
        newJson: ""
      }
    },
    methods: {
      async upload() {
        if (this.newJson)
          await upload(JSON.parse(this.newJson));
        this.newJson = "";
      },
    }
  }
</script>
