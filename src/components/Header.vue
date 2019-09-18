<template>
  <header>
    <router-link class="link header-link" exact to="/">
      <h1>Personal Space</h1>
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link class="link" exact to="/day">space of the day</router-link>
        </li>
        <li>
          <router-link class="link" exact to="/month">this month of space</router-link>
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

@import url('https://fonts.googleapis.com/css?family=Sacramento&display=swap');

header {
  margin-bottom: 48px;

}

h1 {
  color: #3E3934;
  font-size: 80px;
  font-family: "Rhino Sans";
  letter-spacing: 5px;
  margin: 24px 0 0;
  text-align: center;
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-evenly;
}

li {
  color: #d0bc96;
  font-family: 'Sacramento', cursive;
  font-size: 48px;
}

.link {
  color: #35312D;

  text-decoration: none;

}

.link:hover {
  font-weight: 600;
}

.link:visited {
  color: #35312D;

}

</style>