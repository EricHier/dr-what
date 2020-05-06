<template>
  <div>
    <footer class="pt-12 pb-24 px-6 bg-footer">
      <div class="container mx-auto text-center">
        <p class="mb-4"><b>MedicalLetterTranslator</b> by EricHier & Anna</p>
        <nuxt-link to="/impressum" title="Impressum" class="font-bold text-accent">Impressum</nuxt-link> |
        <a class="font-bold text-accent" @click="popupShown = true">Upload</a>
      </div>
    </footer>

    <update-d-b v-if="popupShown" @close="popupShown = false"/>
  </div>
</template>
<script>
  import UpdateDB from "../converter/UpdateDB";
  export default {
    components: {UpdateDB},
    data() {
      return {
        popupShown: false
      }
    }
  }
</script>
<style scoped>
    a {
        cursor: pointer;
        text-decoration: none;
    }
</style>
