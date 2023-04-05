<template>
  <div class="about">

    <h1>Research</h1>
    <p>d-hacksでは人工知能に関する多様な個人研究のほか、地域自治体や民間企業との共同プロジェクトにも多数取り組んでいます。</p>

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

    </div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
