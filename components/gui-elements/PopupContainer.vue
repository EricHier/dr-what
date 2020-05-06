<template>
  <div class="fixed z-10 top-0 left-0 flex justify-center w-screen h-screen bg-popup p-4 animated fadeIn faster"
       :class="{'md:items-center' : !fullHeight}" @click="click">
    <div class="bg-white p-8 w-full md:w-180"
         :class="{'h-fit' : !fullHeight}" @click="noClick">
      <div class="w-full overflow-auto" :class="{'h-full' : fullHeight}">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      click () {
        this.$emit('close');
      },
      noClick(e) {
        e.stopPropagation();
      }
    },
    created() {
      window.addEventListener('keydown', e => {
        const key = e.key;
        if (key === "Escape")
          this.$emit("close");
      });
    },
    props: {
      fullHeight: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

