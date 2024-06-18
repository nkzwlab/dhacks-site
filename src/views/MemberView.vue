<template>
  <div class="about">

    <div id="top">
      <h1>Members</h1>
      <p></p>
    </div>

    <div class="galleries">
      <div id="Doctor">
        <h2>博士課程</h2>
        <div class="gallery">
          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/hirono.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>D3 hirono</h3>
            </div>
            <div class="research">
              継続学習・俳句生成
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/synth.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>D3 synth</h3>
            </div>
            <div class="research">
              音声合成・音声認識
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/yuui.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>D3 yuui</h3>
            </div>
            <div class="research">
              ヘルスケア
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/hamachu.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>D1 hamachu</h3>
            </div>
            <div class="research">
              感情推定
            </div>
          </div>
        </div>
      </div>

      <div id="Master">
        <h2>修士課程</h2>
        <div class="gallery">
          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/hhiromasa.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>M2 hhiromasa</h3>
            </div>
            <div class="research">
              知識蒸留・フェイク画像生成
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/gozu.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>M1 gozu</h3>
            </div>
            <div class="research">
              タブ譜推定
            </div>
          </div>
        </div>
      </div>

      <div id="Bachelor">
        <h2>学部生</h2>
        <div class="gallery">
          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/hiyon.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>B4 hiyon</h3>
            </div>
            <div class="research">
              メタ学習
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/ojus.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>B4 ojus</h3>
            </div>
            <div class="research">
              動物分類
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/ikechan.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>B4 ikechan</h3>
            </div>
            <div class="research">
              筋負荷推定
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/neo.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>B4 neo</h3>
            </div>
            <div class="research">
              強化学習
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/zackey.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>B3 zackey</h3>
            </div>
            <div class="research">
              コーチングツール
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/oda.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>B3 oda</h3>
            </div>
            <div class="research">
              点群物体認識
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/sueko.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>B3 sueko</h3>
            </div>
            <div class="research">
              骨折判断
            </div>
          </div>

          <div class="gallery-item">
            <div class="profile-picture">
              <img src="@/assets/profile/aokiti.png" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
              <h3>B2 aokiti</h3>
            </div>
            <div class="research">
              画像位置推定
            </div>
          </div>
        </div>

        <div id="top">
          <p>他 +22人</p>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.about {
  min-height: 100vh;
  align-items: center;
  font-family: 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'Hiragino Kaku Gothic Pro',
  'ヒラギノ角ゴ Pro W3', sans-serif;
  padding-bottom: 3rem;
}


.profile-picture {

  width: 50%;
  overflow: hidden;
  // margin-bottom: 1rem;
  & img {
    width: 100%;
    border-radius: 50%;
    // height:100%;
  }
}

#top {
  & h1 {
    // font-size: 3rem;
    padding: 1rem;
    text-align: center;
  }

  & p {
    padding: 1rem;
    text-align: center;
  }
}

.galleries {
  justify-content: center;
  align-items: center;

  & h2 {
    text-align: center;
    padding: 3rem 1rem 1rem 1rem;
  }
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  // set everything to center
  justify-content: center;
  // flex-direction: row;
}

.gallery-item {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20%;
  padding: 2rem;
  border-radius: 2rem;
  background-color: rgb(240, 246, 249);
  // flex: 1;
}


@media (max-width: 1024px) {
  #gallery {
    flex-direction: column;
    justify-content: center;
  }

  .gallery-item {
    justify-content: center;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
}

</style>
<script setup lang="ts">
</script>