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

       body {
            background-color: #030303;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            font-size: 0.9em;
            width: 100%; 
            min-height: 100vh; 
            display: flex; 
            justify-content: center; 
            /* align-items: center; */
            background-image: url('./img/dod/dod.jpg');
            background-size: cover;
            background-attachment: fixed;
        }

        a {
            color: #FFFFFF;
            font-family: Arial, sans-serif;
            
            font-size: 1em; 
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            color: #E8AC2A;
            transition: 0.5s ease-in-out;
        }

        #container { 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-direction: column; 
        width: 750px; 
        max-width: 80%;
        height: 480px; 
        /* border-radius: 15px;*/
        color: #f1f1f1; 
        /* background-color: rgba(0, 0, 0, 0.8);*/
        }
        

       
        #top { 
            background-color: #030303;
            height: 100px; 
            width: 100%; 
            display: flex; 
            justify-content: center;
            align-items: center;
            line-height: 0;
            
        }

        #content { 
            font-size: 1em; 
            background-color: #413927;
            padding-left: 1em; 
            padding-right: 1em; 
            border-left: 1px solid #000000; 
            border-right: 1px solid #000000; 
            border-bottom: 10px solid #000000; 
        }
  
</style
