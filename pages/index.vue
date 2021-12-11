<template>
<div class="topContainer">
  <h1 class="topTitle">奏でる空想楽器</h1>
  <div class="topText">welcome!</div>
  <h2 class="topCategory">PC</h2>
  <nuxt-link class="topLink" to="/MusicLadar">MusicLadar</nuxt-link>
  <nuxt-link class="topLink" to="/Rhythm">Rhythm</nuxt-link>
  <h2 class="topCategory">SmartPhone</h2>
  <nuxt-link class="topLink" to="/Maracas">Maracas</nuxt-link>
  <nuxt-link class="topLink" to="/SmartCoil">SmartCoil</nuxt-link>
  <h3 class="topText">奏でる空想楽器とは？</h3>
  <p class="topText">Web上で音楽を奏でられます。</p>
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
  .topTitle {
    text-align: center;
  }
  .topCategory {
    text-align: center;
  }
  .topText {
    text-align: center;
  }
  .topLink {
    width: 50%;
    max-width: 300px;
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