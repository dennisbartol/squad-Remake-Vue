<template>

</template>

<script>
  export default { 
    name: "ContactPage", 
    data() {
       return {
          contactLinks: {
            matches: "mailto:xxx@aaa.com", 
            webmaster: "mailto:denbar@denbar.site",
       },
    }
  }
</script>

<style scoped>
body {
margin: 0;
padding: 0;
font-family: verdana, sans-serif;
background-color: #82653d;
color: #000000;
display: grid;
place-items: center;
height: 100vh;
font-size: 0.9em;
}

a {
  font-size: 1em;
  text-decoration: none;
  font-weight: bold;
}

a:link,
a:visited {
  color: #f1f1f1;
}

a:hover {
  color: #000000;
}

a:active {
  color: #94805a;
}

.container {
  background: url("./img/thankback.gif") no-repeat center/cover;
  width: 500px;
  height: 380px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.content {
  margin: 0 auto;
  max-width: 364px;
  text-align: left;
}

.content img {
  display: block;
  margin: 20px auto;
}

.back-link {
  text-align: center;
  margin-top: 20px;
}

.back-link img {
  border: none;
}
</style>
