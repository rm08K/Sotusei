<template>
<div class="topContainer">
  <div class="topText">welcome!</div>
  <nuxt-link class="topLink" to="/MusicLadar">MusicLadar</nuxt-link>
  <nuxt-link class="topLink" to="/Maracas">Maracas</nuxt-link>
  <nuxt-link class="topLink" to="/Rhythm">Rhythm</nuxt-link>
  <nuxt-link class="topLink" to="/SmartCoil">SmartCoil</nuxt-link>
</div>
</template>

<style lang="scss">
  body {
    margin: 0;
  }
  a {
    display: block;
  }
  .topContainer {
    margin: auto;
  }
  .topText {
    text-align: center;
  }
  .topLink {
    width: 50%;
    text-align: center;
    margin: auto;
    margin-bottom: 10px;
    border: 1px solid black;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 10px;
    color:white;
    background-color: #333;
  }
</style>