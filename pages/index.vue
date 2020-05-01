<template>
  <div class="bg-white">

    <letter-input v-on:newValue="newValue" />

    <Output v-bind:output="output" />

    <div  class="container mx-auto my-10">
      <button class="border rounded text-blue p-4" @click="click">Daten neu herunterladen, zuletzt geupdated: <br> {{new Date(lastUpdated)}}</button>
      <input v-model="newJson" placeholder="Neue Wörter" class="flex-auto p-4 border rounded text-gray-500">
      <button class="flex-grow-0 p-4 border rounded text-gray-500" @click="upload">Speichern</button>
    </div>
  </div>
</template>

<script>
import {translate, lastUpdated, updateTerms} from "../conversion/main";
import {upload} from "../conversion/db";
import LetterInput from "../components/converter/LetterInput";
import Output from "../components/converter/Output";

export default {
  components: {Output, LetterInput},
  metaInfo: {
    title: 'Startseite'
  },
  data() {
    return {
      input: "",
      output: "",
      lastUpdated: lastUpdated,
      newJson: ""
    }
  },
  methods: {
    newValue(newVal) {
      this.output = translate(newVal);
    },
    click() {
      updateTerms(true);
    },
    async upload() {
      await upload(JSON.parse(this.newJson));
      this.newJson = "";
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
