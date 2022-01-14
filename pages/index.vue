<template>
  <div class="topContainer">
    <Logo class="test"/>
    <!-- <h1 class="topTitle">奏でる空想楽器</h1> -->
    <h2 class="topCategory-h2 pc">PC</h2>
    <div class="topCategory pc">
      <div class="topCategory-flexBox pc">
        <nuxt-link class="topLink" to="/MusicLadar"><MusicLaderLogo /></nuxt-link>
        <div class="topCategory-flexBox_contents">
          <h3>MusicLader</h3>
          <p class="topCategory-flexBox_context">音を探す地図</p>
          <p class="topCategory-flexBox_context">マウスでぐりぐりできるオシレーターです。音楽を奏でよう。</p>
        </div>
      </div>
      <div class="topCategory-flexBox pc reverse">
        <div class="topCategory-flexBox_contents">
          <h3>Rhythm</h3>
          <p class="topCategory-flexBox_context">叩くビート ランチパッド</p>
          <p class="topCategory-flexBox_context">ナウでヤングなリズムが流れます。クリックすると音がなるよ！</p>
        </div>
        <nuxt-link class="topLink" to="/Rhythm"><RhythmLogo /></nuxt-link>
      </div>
    </div>
    <h2 class="topCategory-h2">SmartPhone</h2>
    <div class="topCategory">
      <div class="topCategory-flexBox">
        <nuxt-link class="topLink" to="/Maracas"><MaracasLogo /></nuxt-link>
        <div class="topCategory-flexBox_contents">
          <h3>Maracas</h3>
          <p class="topCategory-flexBox_context">振って。</p>
          <p class="topCategory-flexBox_context">なんとスマホがマラカスになっちゃうんです。さぁ振ってみよう！</p>
        </div>
      </div>
      <div class="topCategory-flexBox reverse">
        <div class="topCategory-flexBox_contents">
          <h3>SmartCoil</h3>
          <p class="topCategory-flexBox_context">不思議なコイル</p>
          <p class="topCategory-flexBox_context">スマートフォンから不思議なサウンド。あなたも音の魔術師になれるかも！</p>
        </div>
        <nuxt-link class="topLink" to="/SmartCoil"><SmartCoilLogo /></nuxt-link>
      </div>
    </div>
    <!-- <div class="topCategory">
      <div class="topCategory-flexBox">
        <nuxt-link class="atopLink smartphone" to="/Maracas">Maracas</nuxt-link>
        <MaracasQR />
      </div>
      <div class="topCategory-flexBox">
        <nuxt-link class="atopLink smartphone" to="/SmartCoil">SmartCoil</nuxt-link>
        <SmartCoilQR />
      </div>
    </div> -->
    <h3 class="topText">奏でる空想楽器とは？</h3>
    <p class="topText">Web上で音楽を奏でられます。</p>
  </div>
</template>

<style lang="scss">
@keyframes appear {
    0% {
        opacity: 0;
    }
}

body {
  margin: 0;
  background-color: rgb(209, 240, 252);
}
a {
  display: block;
}
svg {
  animation: 1.5s appear;
}
.topContainer {
  margin: auto;
}
.topTitle {
  text-align: center;
}
.topCategory {
  &-h2 {
    text-align: center;
  }
  &-flexBox {
    margin-bottom: 80px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    &_contents {
      width: 500px;
    }
    &_context {
      margin: 5px 0;
    }
  }
}
.reverse {
  flex-wrap: wrap-reverse;
}
.topText {
  text-align: center;
}
.topLink {
  transition: all .5s;
  &:hover {
    opacity: 0.7;
  }
}
.atopLink {
  width: 50%;
  max-width: 300px;
  text-align: center;
  // margin: auto;
  margin-bottom: 10px;
  border: 1px solid black;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  color: white;
  background-color: #333;
}

@media screen and (max-width: 600px) {
  .pc {
    display: none;
  }
}
</style>
