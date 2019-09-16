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


.select-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-size: 3rem;
  font-family: "Rhino Sans";

}

</style>