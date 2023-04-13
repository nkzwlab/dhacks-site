<template>
  <div class="about">

    <div id="top">
      <h1>Research</h1>
      <p>d-hacksでは人工知能に関する多様な個人研究のほか、地域自治体や民間企業との共同プロジェクトにも多数取り組んでいます。</p>
    </div>
    

    <div id="gallery">

      <!-- テンプレ
      <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>プロジェクト名</h3>
        </div>
        <div class="gallery-item-content">
          <p>プロジェクトの概要</p>
          <img src="" alt="">
        </div>
      </div> -->

      <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>絵画内の着目する物体に応じた感想を生成する手法の提案</h3>
        </div>
        <div class="gallery-item-content">
          <p>この研究では、機械学習を使って、1つの絵画に対して多様な感想文を生成する方法を提案しています。従来の手法では、同じような感想文が出力される傾向がありますが、この研究では、絵画内の着目点に応じた感想文を生成する手法を提案し、多様性を増やすことを目指しています。具体的には、着目点情報を踏まえたデータセットを作成し、絵画内の着目点により注意が向きやすくなるような画像加工手法を複数提案しています。実験の結果、提案手法は従来手法よりも多様な文章を生成できることが確認されました。</p>
          <img src="@/assets/page_research_thumbnail/shinya.png" alt="gallery-item-thumbnail">
        </div>
      </div>

      <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>アイトラッキングによる感情推定と視界映像からの物体検出を用いた物体への感情データセット作成システム</h3>
        </div>
        <div class="gallery-item-content">
          <p>この研究では、アイトラッキングデバイスを使って装着者が見ているものやそれに対する感情を自動的に推定することができるシステムを提案しています。特徴量を使って機械学習モデルを作成し、物体検出技術を組み合わせることで、視線からの注視が検出された物体に対する感情を推定することができます。実験では、感情喚起画像データセットとS.A.M法アンケートを使ってアイトラッキングからの感情推定モデルを作成し、システムの有効性を評価しました。また、システムの有効性や課題について、大学構内を歩行させるユーザ評価実験を行い検討しました。</p>
          <img src="@/assets/page_research_thumbnail/tappun.png" alt="gallery-item-thumbnail">
        </div>
      </div>

      <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>Multigame Rivals：AlphaZeroを用いた複数のゲームに対応した棋力調整AI</h3>
        </div>
        <div class="gallery-item-content">
          <p>人間に合わせたゲーム AI の開発は進んでいないため、本研究では棋力調整を行う AI を作成した。AlphaZero を用いて、複数のゲームに使用でき、棋譜を必要としない強いゲーム AI を作成した。相手の選択した手の確率に合わせて手を選択することで、勝率 5 割に近い値を出すことができたが、コネクトフォーや将棋では不自然な手を選択する結果となった。</p>
          <img src="@/assets/page_research_thumbnail/miki.png" alt="gallery-item-thumbnail">
        </div>
      </div>

      <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>知識蒸留における教師モデル選別手法の提案</h3>
        </div>
        <div class="gallery-item-content">
          <p>深層学習モデルのサイズを削減し、推論時間を高速化するために、知識蒸留と呼ばれる手法がある。この手法では、大きなモデルの出力をより軽量なモデルに模倣させることで、教師モデルの知識表現を生徒モデルに継承する。本研究では、複数の教師モデルの中から、生徒モデルに対して最適な教師モデルの組み合わせを選別しながら知識蒸留を行うフレームワークを提案している。検証実験により、提案手法によって訓練された生徒モデルの性能がランダムに組み合わせた生徒モデルを上回ることが示された。</p>
          <img src="@/assets/page_research_thumbnail/hhiromasa.png" alt="gallery-item-thumbnail">
        </div>
      </div>

      <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>HoleDet: 限られたデータセットにおける多様な道路損傷箇所の検出性能向上の検討</h3>
        </div>
        <div class="gallery-item-content">
          <p>道路損傷箇所の検出において、物体検出モデルの精度向上が課題となっている。その理由として、実際の道路損傷箇所のデータセットが足りないことが挙げられる。本研究では、CG・敵対的生成ネットワークを使ったデータセット拡張により、物体検出モデルの性能を向上させる手法を提案する。陥没穴の学習用データセットを拡張することができるとしている。物体検出モデルの評価指標を用いた性能評価を行い、陥没穴検出に適したモデルを生成することを目的とする。</p>
          <img src="@/assets/page_research_thumbnail/minamiku.png" alt="gallery-item-thumbnail">
        </div>
      </div>

      <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>Cyberoception: サイバー空間上の無意識的な基本操作への感覚</h3>
        </div>
        <div class="gallery-item-content">
          <p>近年、メタバースの普及により、現実世界で行われる活動がオンライン空間に移行することが増え、スマートフォンなどのデバイスが人々の感情活動に深く関与するようになっています。本研究では、スマートフォンと人との感情的な関係について、内受容感覚の観点からサイバー受容感覚を提案し、その個人差について検証しました。基本操作に対する感覚の性質を考察し、個人差の原因について探究しました。</p>
          <img src="@/assets/page_research_thumbnail/gao.png" alt="gallery-item-thumbnail">
        </div>
      </div>


      <!-- <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>bekku</h3>
        </div>
        <div class="gallery-item-content">
          <p>プロジェクトの概要</p>
          <img src="@/assets/page_research_thumbnail/gao.png" alt="gallery-item-thumbnail">
        </div>
      </div> -->

      <!-- <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>akiho</h3>
        </div>
        <div class="gallery-item-content">
          <p>プロジェクトの概要</p>
          <img src="@/assets/page_research_thumbnail/gao.png" alt="gallery-item-thumbnail">
        </div>
      </div>

      <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>hirono</h3>
        </div>
        <div class="gallery-item-content">
          <p>プロジェクトの概要</p>
          <img src="@/assets/page_research_thumbnail/gao.png" alt="gallery-item-thumbnail">
        </div>
      </div>

      <div class="gallery-item">
        <div class="gallery-item-header">
          <h3>synth</h3>
        </div>
        <div class="gallery-item-content">
          <p>プロジェクトの概要</p>
          <img src="@/assets/page_research_thumbnail/gao.png" alt="gallery-item-thumbnail">
        </div>
      </div> -->


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
  width: 45%;
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