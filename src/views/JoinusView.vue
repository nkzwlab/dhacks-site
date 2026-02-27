<template>
  <div class="joinus">
    <h1>履修希望の方へ</h1>
    <p>
      履修希望の方は、以下の内容を確認の上、RG初回・第2回講義に来てください。質問のある方は
      <a href="mailto:d-hacks-group@keio.jp">d-hacks-group@keio.jp</a> までご連絡ください。
      <br />
      RG初回・第2回講義の案内については、学期始まり頃に以下を参照してください。
      <br />
      <a href="https://rg.sfc.keio.ac.jp/ja/">https://rg.sfc.keio.ac.jp/ja/</a>
    </p>
    <p>以下は2025年度秋のd-hacksの運営方針になります。履修を検討されている方はぜひご覧ください。</p>

    <iframe
      class="speakerdeck-iframe"
      src="https://speakerdeck.com/player/4101120cfd684791a7dc14aa77e9aefc"
      title="d-hacks 今期運営 2025f"
      allowfullscreen
      style="
        border: 0;
        background: padding-box padding-box rgba(0, 0, 0, 0.1);
        margin: 0;
        padding: 0;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.2) 0 5px 40px;
        width: 100%;
        max-width: 600px;
        height: auto;
        --darkreader-inline-border-top: 0px;
        --darkreader-inline-border-right: 0px;
        --darkreader-inline-border-bottom: 0px;
        --darkreader-inline-border-left: 0px;
        --darkreader-inline-bgimage: initial;
        aspect-ratio: 560 / 315;
      "
      data-darkreader-inline-border-top=""
      data-darkreader-inline-border-right=""
      data-darkreader-inline-border-bottom=""
      data-darkreader-inline-border-left=""
      data-darkreader-inline-bgimage=""
      data-darkreader-inline-bgcolor=""
      data-darkreader-inline-boxshadow=""
      data-ratio="1.7777777777777777"
    ></iframe>

    <h2>履修までの流れ</h2>

    <ol class="rounded-list">
      <li>『履修要件』、『時間割』を確認する</li>
      <li>学期始めのRG全体講義に参加する</li>
      <li>d-hacksのミーティングを見学する</li>
      <li>履修を確定させる</li>
    </ol>

    <h2>履修要件</h2>
    <p>
      履修要件は原則として以下の通りとなります。「要件」とは言ってもあくまでも基準なので、迷っている方はぜひご相談ください。
    </p>
    <ul>
      <li>学年が1年生〜3年1学期目（3年2学期目の方は要相談）</li>
      <li>情報基礎1・2の成績がS・A以上であること（または十分にpythonが書けること）</li>
      <li>高校で数学II・Bまでは取っていること（または同等の知識を有していること）</li>
      <li>
        中澤・大越研究室の全体講義と、d-hacksのミーティングに出席できること（既に授業を入れてしまっている場合はご相談ください。）
      </li>
    </ul>

    <h2>時間割</h2>
    <p>
      原則として以下の講義・ミーティングには出席していただく必要があります。出席が難しい場合は、ご相談ください。
    </p>
    <ul>
      <li>中澤・大越 全体講義： 木曜日2,3時限</li>
      <li>d-hacks進捗報告会： 木曜日4時限</li>
      <li>d-hacks論文輪読会： 木曜日5時限</li>
    </ul>
  </div>
</template>

<style scoped>
.joinus {
  min-height: 100vh;
  align-items: center;
  font-family: 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3',
  sans-serif;
  padding: 3rem;
}

h1 {
  padding: 1rem;
}

h2 {
  padding: 2rem 1rem 0.2rem;
}

p {
  padding: 1rem;
}

ol,
ul {
  width: 100%;
  padding-left: 3rem;
}

ol li,
ul li {
  padding: 0.5rem 0;
}
</style>
<script setup lang="ts"></script>