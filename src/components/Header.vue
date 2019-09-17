<template>
  <header>
    <h1>Personal Space</h1>
    <nav>
      <ul>
        <li>
          <router-link class="link" exact to="/">Today's Space</router-link>
        </li>
        <li>
          <router-link class="link" exact to="/month">Month Time</router-link>
        </li>
      </ul>
    </nav>
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
  margin: 24px 0;
  text-align: center;
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-evenly;
}

.link {
  color: black;
}

.link:visited {
  color: black;
}

</style>