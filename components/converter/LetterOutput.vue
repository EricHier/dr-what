<template>
  <div class="w-full p-8 shadow-divider animated fadeInUp faster">

    <!-- spinner when translation is not ready -->
    <Loader class="mx-auto" v-if="$store.state.loading"/>

    <!-- output -->
    <div class="container mx-auto relative animated fadeInUp faster" v-else>

      <!-- header -->
      <div class="flex flex-row justify-between">

        <!-- header -->
        <h2 class="text-xl md:text-xl tracking-wider mr-4">
          {{
            $store.state.output ? "Hier ist deine Analyse:" : "Gib einen Text ein damit du die Übersetzung hier sehen kannst."
          }}
          <span class="block h-px w-12 mt-4 bg-accent"/>
        </h2>

        <!-- wörterbuch -->
        <p class="text-accent text-right" @click="$emit('popup')">
          Wörterbuch anzeigen
        </p>

      </div>

      <!-- output -->
      <div class="grid md:grid-cols-2 gap-8 mt-8">

        <p class="leading-loose text-lg">
          <span v-for="char in $store.state.input.split(' ')">
            <span :class="{'font-extrabold	text-accent' : $store.state.input.indexOf(char) === $store.state.index}">
              {{ char }}
            </span>
          </span>

        <div>

          <div v-for="output in $store.state.output"
               class="p-4 transition-all hover:shadow-md border rounded text-lg mb-4"
               style="border-color: rgba(209, 213, 219, 1);"
               @mouseenter="$store.commit('setSelectedIndex', output.index)"
               @mouseleave="$store.commit('setSelectedIndex', -1)">
            <p class="text-sm text-gray-800 mb-2">{{ output.term }} bedeutet</p>
            <p>{{ output.explanation }}</p>
          </div>

        </div>

      </div>


    </div>
  </div>
</template>
<script>
import Loader from "../gui-elements/Loader"

export default {
  components: { Loader },
  computed: {
    outputText() {
      return this.$store.state.input;
    }
  }
}
</script>
