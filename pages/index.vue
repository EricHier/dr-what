<template>
  <Layout>
    <div class="container mx-auto p-10">
      <h1 class="text-primary text-2xl text-center mb-10 block">MedicalLetterTranslator</h1>

      <textarea v-model="input" class="w-full border border-gray-500 h-64 rounded mb-6 p-4" placeholder="Eingabe"/>
      <textarea v-model="output" class="w-full border border-gray-500 h-64 rounded p-4" placeholder="Ausgabe" readonly/>

      <button class="border border-gray-500 rounded text-gray-500 px-4 py-1 my-6 w-full" @click="click">Daten neu herunterladen, zuletzt geupdated: <br> {{new Date(lastUpdated)}}</button>

      <div class="flex">
        <input v-model="newJson" placeholder="Neue Wörter" class="flex-auto p-4 border border-gray-500 rounded text-gray-500 mr-6">
        <button class="flex-grow-0 p-4 border border-gray-500 rounded text-gray-500" @click="upload">Speichern</button>
      </div>
    </div>
  </Layout>
</template>

<script>
import {translate, lastUpdated, updateTerms} from "../conversion/main";
import {upload} from "../conversion/db";

export default {
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
  watch: {
    input(newVal) {
      this.output = translate(newVal);
    }
  },
  methods: {
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
