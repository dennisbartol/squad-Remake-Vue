<template>
</template>

<script>
 expot default {
   methods: { 
     playSound() {
     this.$refs.audio.play();
     },
    stopSound() {
      const audio = this.$refs.audio; 
      audio.pause();
    }
   }
 }
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
