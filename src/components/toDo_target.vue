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


<style scoped>

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: verdana, sans-serif;
      font-size: 0.9em;
      background-color: #82653D;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
	    width: 100%;
      color: #000;
      text-align: center;
    }
    /* Main layout container */
    .container {
      display: grid; 
      grid: 50% / auto 300px; 	
      max-width: 700px;
/*    width: 100%; */
      height: 460px;	
	    border: 1px solid #000000;	
      /* background-color: #000;*/
      padding: 0px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
    .content {
      background-color: #B28A52;
      padding: 0px;
      border-radius: 5px;
      margin: 10px 0;
      color: #000;
    }
    .header {
      background-color: #000;
      color: #f1f1f1;
      font-weight: bold;
      padding: 4px 4px;
  
    }

    .footer {
      background-color: #000; 
      color: #f1f1f1;
      font-weight: bold;
      padding: 6px;

    }

    .qualifications {
      text-align: left;
      margin-top: 10px;

    }
    .qualifications p {
      margin-bottom: 8px;
    }
    .join-button {
      margin-top: 20px;
      display: inline-block;
    }
    .background-image {
      background-image: url('./img/joinopen.jpg');
      background-size: cover;
      width: 100%;
      height: 460px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    
    .background-image a {
      /*      margin: 0 5px; */
      /* vertical-align: middle; */
      display: block; 
      line-height: 0; /* dit lostte de ongelijke hoogte op */
      padding-bottom: 15px; 
      
    }

    #block {
      display: block;
      padding-bottom: 12px;
    }
</style>
