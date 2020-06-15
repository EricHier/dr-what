<template>
  <div class="relative z-10">
    <div class="bg-header-mobile lg:bg-header-desktop h-min-60 md:min-h-80 w-full flex items-start md:items-center p-8">
      <div class="container mx-auto flex justify-start md:justify-between md:flex-row items-center flex-col-reverse">
        <div>
          <h1 class="text-2xl block text-white tracking-wider font-semibold">Arztbrief Übersetzer</h1>
          <div class="h-px w-12 bg-white mb-4 mt-2"/>
          <h2 class="text-md md:text-xl text-white tracking-wide max-w-xl">
            Was habe ich denn jetzt überhaupt? <br>Dr.What? kann dir deinen Arztbrief online in Echtzeit übersetzen - damit du über deine Gesundheit Bescheid weißt.
          </h2>
        </div>
        <nuxt-link to="/">
          <img src="logo.png" class="max-w-xxxs md:max-w-xxs mb-8 md:m-0">
        </nuxt-link>
      </div>
    </div>
    <div class="w-full p-8 py-4 bg-accent shadow-xl animated fadeIn">
      <div class="container mx-auto text-white text-md md:text-lg font-bold tracking-wider text-justify md:text-center">
        Da die Webseite aktuell im Aufbau ist, kann es noch zu Fehlern kommen. <br class="hidden md:static">
        Sollte das der Fall sein, kontaktiere uns bitte.
      </div>
    </div>
  </div>
</template>
