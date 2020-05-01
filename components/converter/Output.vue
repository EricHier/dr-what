<template>
  <div class="w-full p-8 shadow-divider animated fadeInUp faster"
       v-if="seen" :class="{'fadeOutDown' : fadeOut}">
    <div class="container mx-auto">
      <h2 class="text-md md:text-xl font-bold tracking-wide">
        Hier ist deine Übersetzung
      </h2>
      <div class="h-px w-10 mt-2 bg-accent"/>
      <p class="mt-5">
        {{output}}
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      output: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        seen: false,
        fadeOut: false
      }
    },
    watch: {
      output(output) {
        this.seen = this.seen || output !== '';
        this.fadeOut = output === '';
      }
    }
  }
</script>
