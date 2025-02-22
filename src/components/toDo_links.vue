<template>
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

<style>
</style>
