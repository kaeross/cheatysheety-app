<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'cheatysheety',
  };
</script>

<style>
  /* CSS */
    #app {
    font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    width: 100%;
  }
  .sidebar {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(100, 173, 180, .8) 40%,
        rgba(85, 141, 151, .9) 100%
        
      );
      background-color: #A9A8A9;
      height: 100vh;
      color: #fff;
  }


  h1 {
    color: #64ADB4;
  }
</style>
