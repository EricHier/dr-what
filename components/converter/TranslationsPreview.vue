<template>
  <PopupContainer :class="{'hidden' : !visible}" @close="visible = false" :full-height="true">
    <h3 class="text-lg font-bold text-center mb-4">Alle Übersetzungen</h3>
    <div class="h-px w-full bg-accent mb-4" />
    <table>
      <tr v-for="(translation, id) in translations" v-bind:key="id" class="my-2">

        <!-- Desktop -->
        <td class="font-bold p-2 hidden md:block">{{translation.term}}</td>
        <td class="p-2 hidden md:block">
          <span class="whitespace-no-wrap">
            ... wird zu ...
          </span>
        </td>
        <td class="font-bold p-2 hidden md:block">{{translation.replaceString}}</td>

        <!-- Mobile -->
        <td class="py-2 md:hidden">
          {{translation.term}} <br>
          → {{translation.replaceString}}
        </td>

      </tr>
    </table>

  </PopupContainer>
</template>
<script>
  import PopupContainer from "../gui-elements/PopupContainer";
  import {lowDb} from "../../conversion/main";

  export default {
    components: {PopupContainer},
    data() {
      return {
        visible: false
      }
    },
    methods: {
      show() {
        this.visible = true;
      }
    },
    computed: {
      translations: () => {
        return lowDb.get("terms").value();
      }
    }
  }
</script>
