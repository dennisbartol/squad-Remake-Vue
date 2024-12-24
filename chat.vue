<template>
  <div id="app">
    <div id="main-content">
      <div class="container">
         Our chatroom will be activated as soon as you fill out a nickname, and enter it with the button below. 
        <br>&nbsp;<br>
        We will redirect you to our <a target="_blank" href="http://www.mirc.com">Mirc</a> channel (#dond) which is located at <a target="_blank" href="http://www.quakenet.org">www.quakenet.org</a>.

        <form @submit.prevent="send">
          <h4>
            &nbsp;&nbsp; Your Nick:</br>
          </h4>
          <input v-model="nickname" type="text" size="14" placeholder="Enter your nickname">
          <input type="submit" value="Enter Our Chat">
        </form>

        <div id="back">
          <a href="target.htm"><img border="0" src="./img/back.gif" alt="Back"></a>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
    name: "ChatApp", 
      data() {
        return {
          nickname: "", 
        };
      },
    methods: {
      send() {
        if (this.nickname) {
          alert('');
        
      }
    }

}

  
</script>


<style scoped>
body {
  margin: 0; 
  padding: 0; 
  background-color: #82653D;
  color: #000000;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.8em;
  font-weight: bold;
  width: 100%; 
  min-height: 100vh; 
  display: flex; 
  align-items: center; 
  justify-content: center;
}

a {
  font-family: Verdana;
  text-decoration: none;
  color: #AB7B07;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

a:hover {
  color: #000000;
}

#main-content {
  width: 745px; 
  height: 430px; 
  background-image: url("./img/chat/omaha.jpg");
  background-repeat: no-repeat;
  border-radius: 15px;
  box-shadow: 5px 5px 8px #313030;
}

.container {
  margin-left: 23px; 
  margin-top: 15px; 
  width: 340px; 
  height: 300px; 
}

#back {
  display: flex; 
  justify-content: center;
  align-content: center;
  padding-top: 66px;
  width: 100%;
  height: 50px;
  margin-top: 10px;
}

input {
  width: 130px; 
  background-color: #f1f1f1; 
  border: 1px solid #000000;
  font-size: 8pt; 
  display: flex; 
  margin-top: 5px;
  margin-bottom: 5px;
}

h4 {
  padding: 2px;
}
</style>
