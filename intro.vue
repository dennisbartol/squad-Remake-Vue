<template>
  <div class="container">
    <div class="content">
      <!-- Link with JavaScript action -->
      <img
        src="./img/enter.gif"
        alt="Enter"
        class="link-img"
        @click="launchSDA"
      />
    </div>

    <!-- Footer -->
    <div class="footer-text">
      &copy; Design by <a href="http://www.denbar.site">[DonD]Animal</a> &bull;
      Optimized for a resolution of 800 x 600 or greater &bull; {{ resolutionText }}
    </div>
  </div>
</template>

<script>
  import { ref, onMounted } from "vue";

export default {
  name: "DonDClan",
  setup() {
    const resolutionText = ref("");

    const launchSDA = () => {
      window.open(
        "target.htm",
        "tart",
        "height=436,width=760,toolbar=0,directories=0,status=0,resizable=0,location=0,scrollbars=0"
      );
    };

    onMounted(() => {
      resolutionText.value = `Your current resolution is ${screen.width} x ${screen.height}`;
    });

    return {
      resolutionText,
      launchSDA,
    };
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
  background-color: #000;
  color: #b28a52;
  font-family: Verdana, sans-serif;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  width: 100%;
}

.container {
  width: 100%;
  max-width: 1000px;
  min-width: 390px;
  text-align: center;
  padding: 20px;
  border: 1px dotted #977c5a;
}

.content {
  background-color: #000;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #b28a52;
}

.link-img {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.footer-text {
  margin-top: 10px;
  font-size: 0.8em;
}
</style>
