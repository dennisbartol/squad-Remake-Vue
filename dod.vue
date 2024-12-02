<template>
  <div id="container">
    <div id="top">
        <img src="./img/dod/dayofnodefeat.gif" alt="Day of Defeat" />
        <br />
      <a href="target.htm">
        <img src="./img/back.gif" alt="Back" />
      </a>
      <br />
      <img src=/img/music1.gif" alt="Music Note" />
      <a @click="playSound">
        <img src="./img/music2.gif" alt="Play Music" />
      </a>
      <a click="stopSound">
          <img src="./img/music4.gif" alt="Stop Music" />
      </a>
      <audio ref="firstSound" src="./mp3/thunder.mp3" autoplay loop></audio>
      
    </div>

    <div id="content">
      <p>
        <b>You</b> hear and see bullets whizzing towards you, and you quickly duck
        away in a torn house. You look to the right just to see a buddy get shot
        by what sounds like a tommy gun. You ready your mp40, jump up, and fire
        your blazing gun at the enemy!!
      </p>
      <p>
        You see a sergeant fall, looking closer you see it is the one who just
        killed your buddy (hah, revenge!). But the next thing you see is another
        GI coming from behind a tank. You swing your gun around, with your finger
        still on the trigger, and as you move, you see him fall, and then...
        click... Damn! Out of ammo! Quick, reload before, uh oh!!
      </p>
      <p>
        Too late...! There's another GI comi... Bang! ...Everything turns black...
        I got shot! Ah well, just wait about 5 seconds, and we go on again, for
        another run in the latest mod of
        <a href="https://half-life.com/" target="_blank">Half Life!</a>
      </p>
      <p>
        This Mod is abbreviated as DoD, which stands for
        <a href="https://www.dayofdefeat.com/" target="_blank">Day Of Defeat</a>.
        At the moment, this mod is very popular. It's still in its Beta phase,
        which means that it still needs some testing. But from what we can tell,
        it already is a kick-ass shoot'em up!
      </p>
      <p>
        Why? Day of Defeat is based on World War II, and the game allows you to
        play as either Allies or Axis. You can play in various locations, for
        example, on the beach of Omaha, where you have to blow up some cannons.
        Or go play in Caen and capture all victory locations.
      </p>
      <p>
        This site is dedicated to DoD, so if you want to know more about it, then
        <a href="target.htm">take a look around!</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default { 
    methods: { 
      playSound() {
        const audio = this.$refs.firstSound; 
        if (audio) {
          audio.play();
        }
      },
      stopSound() {
        const audio = this.$refs.firstSound; 
        if (audio) {
          audio.pause();
          audio.currentTime = 0; 
        }
      },        
    },
  };
</script>


<style scoped>

</style
