<script setup lang="ts">
// import TheWelcomez/ from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home__wrapper">
    <div class="home__background">
      <div class="home__background__text-container">
        <div class="home__background__kg-name">d-hacks</div>
        <div class="home__background__kg-description">Machine Learning</div>
      </div>
    </div>
    <div class="home__about">
      <h3>About us</h3>
      <div class="home__about__description-container">
        <div class="home__about__description">
          私たちは、最新の人工知能技術を実際の問題を解決する際の実用的なアプローチとして使用し，より豊かな社会の実現を目指している中澤研究室に属する研究グループです。複雑なパターンや現象のモデリングを可能にする深層学習をはじめとした機械学習技術を用いた，都市や家庭向けのシステムの研究・開発に取り組んでいます。
        </div>
        <div class="home__about__description">
          We are a research group in the Nakazawa Lab dedicated to converting the latest research in
          machine intelligence into practical applications that can solve real world problems.
          Currently, we are mainly focused on creating systems for cities and the home with deep
          neural networks, which allow modeling of highly complex patterns and phenomena. With the
          amount of data modern systems generate and data already available online, there is a high
          demand to take advantage of this and potential to create more intelligent software. Our
          group is still in its infancy, and we are looking for student researchers who are
          passionate about bringing developing fields to the common people and improving their
          lives.
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home {
  &__background {
    background-image: url('@/assets/home-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    aspect-ratio: 2.47 / 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-family: 'Jura', sans-serif;

    &__kg-name {
      font-size: 36px;
      font-weight: 700;
    }

    &__kg-description {
      margin-top: 22px;
      font-size: 18px;
      font-weight: 400;
    }

    &__text-container {
      width: 100%;
      max-width: 1170px;
      padding: 20px 15px 18px;
      position: relative;

      //
    }
  }

  &__about {
    width: 100%;
    max-width: 1170px;
    padding: 56px 0;
    margin-bottom: 0;
    min-height: 46px;
    margin: auto;
    font-family: 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'Hiragino Kaku Gothic Pro',
      'ヒラギノ角ゴ Pro W3', sans-serif;
    margin: auto;

    h3 {
      font-size: 24px;
      padding-bottom: 8px;
      margin: 1.5em 0 1.2em;
      font-family: 'Jura', sans-serif;
      border-bottom: 1px solid #ccc;
      box-shadow: 0 1px 2px rgba(255, 255, 255, 0.9);
    }

    &__description-container {
      // gridで子供の要素2つを均等なwidthで並べる
      // 間は15px
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      padding-bottom: 56px;
    }
  }
}
</style>
