<template>
  <div id="app">
    <div id="container">
      <p>
        <!-- Image and introduction text -->
        <img src="./img/tech/knowhow.gif" alt="Knowhow" />
        <br />
        <br />
        You didn't expect to find this link on this site? At first sight, we did
        neither!
        <br />
        &nbsp;<br />
        But what to think of some nice
        <a href="commands2.htm">Server Commands</a> brought to you by Alien, or
        what about a protest and a solution to
        <a href="weapons.htm">Low Pingers</a>?
        <br />
        &nbsp;<br />
        <a href="downloads.htm">Downloads</a>? Yep, on this site too! Skins,
        maps, you name it... all there!
        &nbsp;</br>
        <br />
        <!-- Footer with controls -->
        <a href="target.htm" target="target">
          <img src="./img/back.gif" alt="Back" border="0" />
        </a>
        <img src="./img/music1.gif" alt="Music" />
        <a @click.prevent="playSound">
          <img src="./img/music2.gif" alt="Play Music" border="0" />
        </a>
        <a @click.prevent="stopSound">
          <img src="./img/music4.gif" alt="Stop Music" border="0" />
        </a>
        <!-- Audio element -->
        <audio ref="audioRef" :src="audioSrc" loop autoplay></audio>
      </p>
    </div>
  </div>
</template>



<script>


  
</script> 


<style>

</style>
