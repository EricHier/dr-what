<template>
  <div class="w-screen h-screen font-body">
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
  import Footer from "../components/gui-elements/Footer"

  export default {
    components: {
      Footer
    }
  }
</script>
