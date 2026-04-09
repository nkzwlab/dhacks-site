<template>
  <div class="about">
    <div id="top">
      <h1>Members</h1>
    </div>

    <div class="galleries">
      <div id="Doctor">
        <h2>博士課程</h2>
        <div class="gallery">
          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>D3 quantan</h3>
            </div>
            <div class="research">物体検出</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>D3 hamachu</h3>
            </div>
            <div class="research">行動変容</div>
          </div>
        </div>

        <div id="Master">
          <h2>修士課程</h2>
          <div class="gallery">
            <div class="gallery-item">
              <div class="gallery-item-name">
                <h3>M2 hiyon</h3>
              </div>
              <div class="research">メタ学習</div>
            </div>

            <div class="gallery-item">
              <div class="gallery-item-name">
                <h3>M2 ojus</h3>
              </div>
              <div class="research">分布外検知</div>
            </div>

            <div class="gallery-item">
              <div class="gallery-item-name">
                <h3>M1 zackey</h3>
              </div>
              <div class="research">動画検索</div>
            </div>
          </div>
        </div>
      </div>

      <div id="Bachelor">
        <h2>学部生</h2>
        <div class="gallery">
          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B4 aokiti</h3>
            </div>
            <div class="research">物体検出改善</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B4 ouga</h3>
            </div>
            <div class="research">反実仮想</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B4 tyler</h3>
            </div>
            <div class="research">音楽モデル</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B4 shuuya</h3>
            </div>
            <div class="research">野球判定</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B4 komiya</h3>
            </div>
            <div class="research">降雨量推定</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B4 mashu</h3>
            </div>
            <div class="research">音楽分類</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B4 mint</h3>
            </div>
            <div class="research">飛距離補正</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B4 itta</h3>
            </div>
            <div class="research">種目分類</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B3 kojo</h3>
            </div>
            <div class="research">LLMメタ学習</div>
          </div>

          <div class="gallery-item">
            <div class="gallery-item-name">
              <h3>B3 FuwaKing</h3>
            </div>
            <div class="research">継続学習</div>
          </div>
        </div>

        <div id="top">
          <p>他 +20人</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  min-height: 100vh;
  align-items: center;
  font-family:
    'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3',
    sans-serif;
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
    padding: 3rem 0 1rem;
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
  width: 12%;
  padding: 2rem;
  border-radius: 2rem;
  background-color: rgb(240, 246, 249);
  // flex: 1;
}

.profile-picture {
  display: none;
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
<script setup lang="ts"></script>