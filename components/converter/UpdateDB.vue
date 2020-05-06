<template>
  <PopupContainer @close="$emit('close')">
    <span class="text-xl mr-4 my-2 block md:inline-block">Datenbank updaten: </span>
    <input v-model="newJson" placeholder="Neue Wörter" class="p-2 border outline-none focus:border-focus text-blue focus:text-accent">
    <button class="p-2 border text-blue focus:border-focus focus:text-accent outline-none" style="outline: none;" @click="upload">Speichern</button>
  </PopupContainer>
</template>
<script>
  import PopupContainer from "../gui-elements/PopupContainer";
  import {upload} from "../../conversion/db";

  export default {
    components: {PopupContainer},
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
