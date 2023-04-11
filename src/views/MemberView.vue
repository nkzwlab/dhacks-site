<template>
    <div class="about">
  
      <div id="top">
        <h1>Research</h1>
        <p>d-hacksでは人工知能に関する多様な個人研究のほか、地域自治体や民間企業との共同プロジェクトにも多数取り組んでいます。</p>
      </div>
      
      <div class="galleries">
        <div id="Doctor">
            <h2>博士課程</h2>
            <div class="gallery">  
            <div class="gallery-item">
                    <div class="profile-picture">
                        <img src="@/assets/profile/hhiromasa.jpg" alt="profile-picture">
                    </div>
                    <div class="gallery-item-name">
                        <h3>hirono</h3>
                    </div>
                    <div class="research">
                        継続学習・俳句生成
                    </div>
                </div>

                <div class="gallery-item">
                    <div class="profile-picture">
                        <img src="@/assets/profile/hhiromasa.jpg" alt="profile-picture">
                    </div>
                    <div class="gallery-item-name">
                        <h3>synth</h3>
                    </div>
                    <div class="research">
                        音声合成・音声認識
                    </div>
                </div>

                <div class="gallery-item">
                    <div class="profile-picture">
                        <img src="@/assets/profile/hhiromasa.jpg" alt="profile-picture">
                    </div>
                    <div class="gallery-item-name">
                        <h3>yuui</h3>
                    </div>
                    <div class="research">
                        ヘルスケア
                    </div>
                </div>
              </div>
        </div>

        <div id="Master">
            <h2>修士課程</h2>
            <div class="gallery">  
        
                <div class="gallery-item">
                    <div class="profile-picture">
                        <img src="@/assets/profile/hhiromasa.jpg" alt="profile-picture">
                    </div>
                    <div class="gallery-item-name">
                        <h3>hhiromasa</h3>
                    </div>
                    <div class="research">
                        KGL・知識蒸留・フェイク画像生成
                    </div>
                </div>

            </div>
        </div>

        <div id="Bachelor">
            <h2>学部生</h2>
            <div class="gallery">  
        
        <div class="gallery-item">
            <div class="profile-picture">
                <img src="@/assets/profile/hhiromasa.jpg" alt="profile-picture">
            </div>
            <div class="gallery-item-name">
                <h3>gozu</h3>
            </div>
            <div class="research">
                タブ譜推定
            </div>
        

    </div>
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


.profile-picture{
    width: 100%;
    overflow: hidden;
    // margin-bottom: 1rem;
    & img {
      width: 100%;
      border-radius: 50%;
      // height:100%;
    }
  }

  #top{
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
      
  .galleries{
    justify-content: center;
    text-align: center;

    & h2 {
      padding: 3rem 1rem 1rem 1rem;
    }
  }
  
  .gallery{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    // set everything to center
    justify-content: center;
    // flex-direction: row;
  }
  
  .gallery-item{
    width: 20%;
    padding: 2rem;
    border-radius: 2rem;
    background-color: rgb(240, 246, 249);
    // flex: 1;
  }
  

  @media (max-width: 1024px) {
    #gallery{
      flex-direction: column;
      justify-content: center;
    }
  
    .gallery-item{
      justify-content: center;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }
  }
  
  </style>