<template>
  <div class="px-8 py-10 w-full animated fadeIn faster">
    <div class="container mx-auto text-lg leading-loose">
      <h3 class="text-xl md:text-2xl text-center tracking-wider">Kontaktiere uns</h3>
      <div class="h-px w-20 bg-accent mx-auto mt-4" />
      <form name="contact" action="/" method="post" class="block md:flex">
        <div class="md:w-1/2 md:p-5 md:pl-0">

          <!-- Netlify form -->
          <input type="hidden" name="form-name" value="contact" />

          <!-- Name -->
          <label for="name" class="font-bold">Name</label>
          <input id="name" name="name" type="text" class="block w-full border focus:border-focus focus:text-accent outline-none px-2" required/>

          <!-- E-Mail -->
          <label for="email" class="mt-2 block font-bold">E-Mail</label>
          <input id="email" name="email" type="email" class="block w-full border focus:border-focus focus:text-accent outline-none px-2" required/>

          <p class="leading-snug text-sm mt-2 lg:mt-4 text-justify-center hidden sm:block">
            Deine personenbezogenen Daten werden an uns übermittelt und zu der Beantwortung deines Anliegens
            verwendet und danach gelöscht. Bei Fragen kontaktiere uns über die Daten im Impressum.
          </p>

        </div>

        <div class="md:w-1/2 md:p-5 md:pl-0">

          <!-- Message -->
          <label for="text" class="block mt-2 md:mt-0 font-bold">Was möchtest du uns sagen? </label>
          <textarea id="text" name="text" class="w-full h-30 border focus:border-focus focus:text-accent outline-none px-2" required/>

          <button type="submit" class="border border-focus text-accent w-full font-bold p-2">Absenden</button>

          <p class="leading-snug text-sm mt-4 text-justify-center block md:hidden">
            Deine personenbezogenen Daten werden an uns übermittelt und zu der Beantwortung deines Anliegens
            verwendet und danach gelöscht. Bei Fragen kontaktiere uns über die Daten im Impressum.
          </p>

        </div>

      </form>
    </div>
  </div>
</template>
<style>
  .text-justify-center {
    text-align: justify;
    text-align-last: center;
  }
</style>
