<template>
  <div class="bg-white">

    <letter-input/>

    <letter-output @popup="openPopup" v-if="$store.state.shown"/>

    <translations-preview ref="preview"/>

    <info-text v-if="$store.state.shown"/>

    <contact-form/>

  </div>
</template>

<script>
import LetterInput from "../components/converter/LetterInput";
import LetterOutput from "../components/converter/LetterOutput";
import PopupContainer from "../components/gui-elements/PopupContainer";
import TranslationsPreview from "../components/popups/TranslationsPreviewPopup";
import InfoText from "../components/converter/InfoText";
import ContactForm from "../components/converter/ContactForm"
import { getTerms } from "../conversion/db";

export default {
  components: { TranslationsPreview, LetterOutput, LetterInput, PopupContainer, InfoText, ContactForm },
  async mounted() {
    const terms = await getTerms();
    this.$store.commit("setTerms", terms);
  },
  methods: {
    openPopup() {
      this.$refs.preview.show();
    },
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
