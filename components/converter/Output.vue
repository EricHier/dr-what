<template>
  <div class="w-full p-8 shadow-divider animated fadeInUp faster"
       v-if="seen || shown">
    <Loader class="mx-auto" v-if="output !== actualOutput || output === ''"/>
    <div class="container mx-auto relative animated fadeInUp faster" v-if="output !== '' && output === actualOutput">
      <h2 class="text-xl tracking-wider md:text-xl">
        {{output.replace(" ", "") ? "Hier ist deine Übersetzung" : "Gib einen Text ein damit du die Übersetzung hier sehen kannst."}}
      </h2>
      <div class="text-accent my-2 md:absolute md:top-0 md:right-0" @click="$emit('popup')">
        Alle Übersetzungen anzeigen
      </div>
      <div class="h-px w-12 mt-4 bg-accent"/>
      <p class="mt-5">
        {{output}}
      </p>
    </div>
  </div>
</template>
<script>
  import Loader from "../gui-elements/Loader"
  export default {
    components: {Loader},
    props: {
      output: {
        type: String,
        required: true,
      },
      actualOutput: {
        type: String,
        required: true
      },
      shown: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        seen: false,
      }
    },
    watch: {
      output(output) {
        this.seen = this.seen || output !== '';
      }
    }
  }
</script>
