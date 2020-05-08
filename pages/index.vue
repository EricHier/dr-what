<template>
  <div class="bg-white">

    <letter-input @newValue="newValue" @show="show" />

    <Output :output="output" :actualOutput="actualOutput" @popup="openPopup" :shown="shown"/>

    <translations-preview ref="preview" />

    <info-text v-if="shown" />

    <contact-form />

  </div>
</template>

<script>
import {translate, updateTerms} from "../conversion/main";
import LetterInput from "../components/converter/LetterInput";
import Output from "../components/converter/Output";
import PopupContainer from "../components/gui-elements/PopupContainer";
import TranslationsPreview from "../components/popups/TranslationsPreviewPopup";
import InfoText from "../components/converter/InfoText";
import ContactForm from "../components/converter/ContactForm"

export default {
  components: {TranslationsPreview, Output, LetterInput, PopupContainer, InfoText, ContactForm},
  metaInfo: {
    title: 'Startseite'
  },
  data() {
    return {
      actualOutput: "",
      output: "",
      shown: false,
    }
  },
  created() {
    updateTerms();
  },
  methods: {
    newValue(newVal) {
      this.output = translate(newVal);
    },
    openPopup() {
      this.$refs.preview.show();
    },
    show(newInput) {
      this.shown = true;
      this.actualOutput = translate(newInput);
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
