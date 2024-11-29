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

export default { 
    name: "techSite"; 
    data() { 
        return{
          audioSrc: ".mp3/koordinaten.mp3",
        };
    },
  methods: { 
      playSound() {
          const audio = this.$refs.audioRef; 
          if (audio) { 
            audio.play(); 
          }
      },
      stopSound() {
          const audio = this.$refs.audioRef; 
          if (audio) { 
            audio.pause();
            audio.currentTime = 0; 
          }  
      },
    },
  };
  
</script> 



<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #030303;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#container {
  width: 740px;
  height: 410px;
  border-radius: 15px;
  background-color: aliceblue;
  background-image: url("./img/tech/tech.jpg");
  display: flex;
  align-items: center;
  align-content: center;
}

p {
  background-color: #ffffff;
  border-radius: 5px;
  width: 400px;
  height: 250px;
  margin-left: 8px;
  margin-top: 50px;
  padding: 5px;
  box-shadow: 5px 5px 11px #030303;
}

a:link,
a:visited {
  font-family: Arial, Helvetica, sans-serif;
  color: #ab7b07;
  font-size: 10pt;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: #e8ac2a;
  transition: 0.5s ease-in-out;
}

a:active {
  color: #e8ac2a;
}

img {
  padding-top: 24px;
}

</style>
