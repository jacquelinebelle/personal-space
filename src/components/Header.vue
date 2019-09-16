<template>
  <header class="header">
    <h1>Personal Space</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@font-face {
  font-family: "Rhino Sans";
  src: url("../assets/rhinosans.ttf") format("truetype");
} 

h1 {
  font-size: 80px;
  font-family: "Rhino Sans";
  letter-spacing: 5px;
}
</style>