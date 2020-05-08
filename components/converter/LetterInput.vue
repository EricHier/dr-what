<template>
  <div class="px-8 py-10 w-full">
    <div class="container mx-auto">
      <div class="md:flex justify-center items-center w-full subpixel-antialiased">
        <div class="md:w-1/2 md:p-5 md:pl-0 mb-8">
          <p class="text-lg font-700">
            Hier rechts kannst du deinen <strong>Arztbrief eingeben</strong>. Dieser wird dann
            <strong>automatisch von unserem Algorithmus gescannt</strong> und
            übersetzt. Dafür greifen wir auf die Datenbank mit <strong>mehreren hundert Begriffen</strong> zu.
          </p>
          <div class="h-px w-12 mt-4 bg-accent"/>
        </div>
        <div class="md:p-5 md:pr-0 md:w-1/2">
          <textarea v-model="input" @keyup="keyup" class="w-full border shadow-xl text-blue focus:text-accent focus:border-focus h-64 rounded-sm  p-4 outline-none" placeholder="Eingabe"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from "lodash";

  export default {
    data() {
      return {
        input: ""
      }
    },
    methods: {
      keyup(e) {
        this.$emit("show", e.target.value);
        _.debounce((input) => {
          this.$emit("newValue", input);
        }, 2500)(e.target.value);
      }
    }
  }
</script>
