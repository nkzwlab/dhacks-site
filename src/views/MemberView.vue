<template>
    <div class="about">
  
      <div id="top">
        <h1>Research</h1>
        <p>d-hacksでは人工知能に関する多様な個人研究のほか、地域自治体や民間企業との共同プロジェクトにも多数取り組んでいます。</p>
      </div>
      
      <div class="galleries">
        <div id="Doctor">
            <h2>博士課程</h2>
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

        <div id="Bachelor">
            <h2>学部生</h2>
        </div>

        
      </div>
      </div>
      
  
    </div>
  
  
  </template>
  
  <style lang="scss">
  .about {
      min-height: 100vh;
      align-items: center;
      font-family: 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'Hiragino Kaku Gothic Pro',
        'ヒラギノ角ゴ Pro W3', sans-serif;
      padding-bottom: 3rem;
    }
  
.profile-picture{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
    & img {
      width: 100%;
    }
  }

  #top{
      & h1 {
        // font-size: 3rem;
        padding: 1rem;
      }
  
      & p {
        padding: 1rem
      }
    }
      
  
  #gallery{
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
  
  .gallery-item-header{
    margin-bottom: 1rem;
  }
  
  .gallery-item-content{
    & p {
      margin-bottom: 1rem;
    }
  
    & img {
      width: 100%;
    }
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