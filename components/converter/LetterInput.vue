<template>
  <div class="px-8 py-10">
    <div class="container mx-auto">
      <div class="md:flex justify-center items-center w-full subpixel-antialiased">
        <div class="md:w-1/2 md:p-5 md:pl-0 mb-8">
          <p class="text-lg font-700">
            Hier rechts kannst du deinen <strong>Arztbrief eingeben</strong>. Dieser wird dann
            <strong>automatisch von unserem Algorithmus gescannt</strong> und
            übersetzt. Dafür greifen wir auf die Datenbank mit <strong>mehreren hundert Begriffen</strong> zu.
          </p>
          <div class="h-px w-10 mt-2 bg-accent"/>
        </div>
        <div class="md:p-5 md:pr-0 md:w-1/2">
          <textarea @keyup="keyup" class="w-full border shadow-xl text-blue focus:text-accent focus:border-focus h-64 rounded-sm  p-4 outline-none" placeholder="Eingabe"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      keyup(e) {
        this.$emit("newValue", e.target.value)
      }
    }
  }
</script>
