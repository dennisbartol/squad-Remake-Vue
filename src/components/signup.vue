<template>
  <div class="container">
    <div class="content">
      <div class="header">Join the [DonD] clan</div>
      
      <p>
        So you heard of the <span class="highlight">[DonD] Clan</span> and want in? Then read the following carefully:
      </p>
      <div class="qualifications">
        <p>&#8226; Skill</p>
        <p>&#8226; Matureness</p>
        <p>&#8226; Active duty</p>
        <p>&#8226; Orders to be followed (when necessary)</p>
        <p>&#8226; You live in The Netherlands</p>
        <p>&#8226; You must be over 18</p>
      </div>
      <p>
        When <span class="highlight">You</span> believe you have what it takes, click on our [DonD] leaflet below.
      </p>

      <div class="join-button">
        <router-link to="/joinform">
        <!-- <a href="joinform.vue"> --> 
          <img src="./img/join/join2.gif" alt="Join the [DonD] Clan">
        </router-link>
      </div>
      <div class="footer">Ready?</div>
      </div>

      <div class="background-image">
     <router-link to="/target">
        <img src="./img/back.gif" alt="Back">
      </router-link>
      <div id="block">
        <img src="./img/music1.gif" alt="Music Icon">
      </div>
      <a href="javascript:void(0)" @click="playSound">
        <img src="./img/music2.gif" alt="Play Sound">
      </a>
      <a href="javascript:void(0)" @click="stopSound">
        <img src="./img/music4.gif" alt="Stop Sound">
      </a>
    
    </div>
  </div>

  <audio ref="audio" src="./mp3/soldierusa.mp3" loop autoplay></audio>
</template>

<script>
 export default {
   name: "JoinDonDClan", 
   methods: { 
     playSound() {
     this.$refs.audio.play();
     },
    stopSound() {
      const audio = this.$refs.audio; 
      audio.pause();
      audio.currentTime = 0;
    }
   }
 };
</script>

<style>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
  font-size: 0.9em;
  background-color: #82653d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: #000;
  text-align: center;
}
.container {
  display: grid;
  grid-template-columns: auto 300px;
  max-width: 700px;
  height: 460px;
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
.content {
  background-color: #b28a52;
  padding: 0;
  border-radius: 5px;
  height: 460px;
  color: #000;
}
.header {
  background-color: #000;
  color: #f1f1f1;
  font-weight: bold;
  padding: 4px;
}
.footer {
  background-color: #000;
  color: #f1f1f1;
  font-weight: bold;
  padding: 6px;
}
.qualifications {
  text-align: left;
  padding-top: 2em;
  height: 190px;
}
.qualifications p {
  padding-left: 5px;
}
.join-button {
  display: inline-block;
}
.background-image {
  background-image: url('./img/join/joinopen.jpg');
  background-size: cover;
  width: 100%;
  height: 460px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.background-image a {
  display: block;
  line-height: 0;
  padding-bottom: 15px;
}
#block {
  display: block;
  padding-bottom: 12px;
}
.highlight {
  color: #f1f1f1;
  font-weight: bold;
}
</style>
