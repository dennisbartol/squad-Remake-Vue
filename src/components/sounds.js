export default { 
  methods: {
    playSound(audioElement) {
      if (audioElement) {
        audioElement.play();
        }
      },
    stopSound(audioElement) { 
      if (audioElement) { 
          audioElement.pause();
          audioElement.currentTime = 0; 
        }
      },
    },
 };
