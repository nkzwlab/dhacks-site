<template>
  <div class="about">

    <div id="top">
      <h1>Research</h1>
      <p>
        d-hacksでは人工知能に関する多様な個人研究のほか、地域自治体や民間企業との共同プロジェクトにも多数取り組んでいます。
      </p>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/hirono.png" alt="">
      </div>
      <div class="content">
        <h1>CC-Replay: 深層学習を用いた画像分類の継続学習におけるクラス難易度を考慮した容量制御</h1>
        <ul class="author">
          <li class="pj">PJ-NTT</li>
          <li class="internal">学会誌「コンピュータソフトウェア」[D2]</li>
        </ul>
        <div class="separator"></div>
        <p>
          実社会における出力クラスの増加に対応可能な画像分類を実現するため、上限の定められたデータ保持容量を効率的に用いた継続学習手法を提案する。継続学習の先行研究として、一部のデータをコアデータとして保持し、新たに追加された訓練データと併せて再学習を繰り返すリプレイ手法では、保持するデータ数がクラスごとに一定であった。
          本研究では、各クラスの難易度に応じたコアデータの容量制御およびそれを用いた継続学習手法「CC-replay」を提案し、限られた容量下でより効率的にリプレイすることを目指す。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="../assets/page_research_thumbnail/quantan2.png" alt="">
      </div>
      <div class="content">
        <h1>JumpQ: 物体スパースな動画データにおける確率的スケジューリング</h1>
        <ul class="author">
          <li class="pj">PJ-530</li>
          <li class="internal">ACM MobiSys Poster [D2]</li>
        </ul>
        <div class="separator"></div>
        <p>
          モバイルセンシングシステムの主要な課題は、深層学習に基づく物体検出が原因の処理速度のボトルネックを解消することである。本研究では、対象物がまばらに含まれるフレーム列を持つモバイルセンシングシナリオに焦点を当て、確率的スケジューリングアルゴリズム「JumpQ」を提案する。連続して検出がない場合、JumpQは検出頻度を下げ、検出があった場合はフレームごとの検出に即座に戻り、バッファされたフレームも検出する。
          実験の結果、処理速度が100%以上向上し、精度への影響はごくわずかであることが確認された。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="../assets/page_research_thumbnail/quantan.png" alt="">
      </div>
      <div class="content">
        <h1>DeepCounter: 深層学習を用いた細粒度なゴミ排出量データ収集手法</h1>
        <ul class="author">
          <li class="pj">PJ-530</li>
          <li class="internal">情報学会論文誌 [D1]</li>
          <li class="international">IEEE RTCSA [B4]</li>
        </ul>
        <div class="separator"></div>
        <p>
          ゴミ収集車の後部に搭載されたカメラで撮影された映像から、収集されたゴミ袋の数を自動的にカウントする車載センシングシステムDeepCounterを提案する。リアルタイム物体検出アルゴリズムとしてよく知られているシングルショットマルチボックス検出器(SSD)に基づいて、検出-追跡-計数(DTC)アルゴリズムを開発し実装する。
          藤沢市における現実的なゴミ収集の映像を用いた実験評価により、提案アプローチの実現可能性を検証した。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="../assets/page_research_thumbnail/bekku.png" alt="">
      </div>
      <div class="content">
        <h1>DynamicECM: ポットホール検出のための安定かつ効率的な動的アンサンブル手法</h1>
        <ul class="author">
          <li class="pj">PJ-Edogawa</li>
          <li class="international">Elsevier Pervasive and Mobile Computing [M2]</li>
          <li class="international">IEEE SMARTCOMP [M2]</li>
        </ul>
        <div class="separator"></div>
        <p>
          道路の損傷は交通の危険要因となるが、調査費用が高いため定期点検は困難である。そこで、本研究では、ゴミ収集車のダッシュカム映像を活用し、低コストで道路調査を行う手法を提案する。従来の研究では、物体検出モデルと画像分類モデルを組み合わせたECMにより誤検出を抑制したが、速度と精度の両立が課題だった。そこで、必要時のみECMを適用するDynamicECMを開発し、安定した推論を実現した。評価実験の結果、DynamicECMは従来手法よりも精度が高く、速度と検出性能のバランスに優れることが確認された。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/hhiromasa.png" alt="">
      </div>
      <div class="content">
        <h1>連続的マルチタスク学習における正の知識転移のための動的モデルマージング</h1>
        <ul class="author">
          <li class="pj">PJ-NTT</li>
        </ul>
        <div class="separator"></div>
        <p>
          近年、AIモデルは動的な運用環境に適応するため、知識表現の継続的な更新が求められている。モデルマージは、その更新を低コストで実現する手法として注目されているが、既存手法は正の知識転移の非対称性を考慮しておらず、最適な性能を発揮できない。本研究では、この課題を解決するため、新たな学習目標を導入した動的モデルマージ手法を提案する。本手法は、タスク間の非対称性を考慮し、マージ係数を動的に調整することで、より効果的な知識統合を実現する。実験結果により、提案手法が既存手法を大きく上回る性能を示し、コストシミュレーションでも継続的かつ低コストな知識更新が可能であることが確認された。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/hhiromasa2.png" alt="">
      </div>
      <div class="content">
        <h1>信号無視検知のための希少な現実生成</h1>
        <ul class="author">
          <li class="pj">PJ-Faked-City</li>
          <li class="international">ACM MobiSys Poster [M2]</li>
        </ul>
        <div class="separator"></div>
        <p>
          大規模かつ多様なデータセットの準備は、強力な深層学習モデルの訓練に不可欠である。しかしながら、特定のデータが理論的には可能であるものの、実際に観察することが困難なケースも存在する（例：信号無視）。本研究では、物体検出モデルと画像生成モデルを組み合わせることで、フェイク動画を生成する手法の可能性を示す。具体的には、既存の動画を部分的に編集して、信号無視のドラレコ映像を人工的に作成することで、「希少な現実」を生成する。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/gozu.png" alt="">
      </div>
      <div class="content">
        <h1>エンド・ツー・エンドの自動ギタータブ譜転写のためのデータ表現とデータセットの提案</h1>
        <ul class="author">
        </ul>
        <div class="separator"></div>
        <p>
          自動タブ譜転写をエンド・ツー・エンドの音声認識タスクとして行うことを目的として、適したデータセットを作成する。まず、タブ譜自動転写におけるデータを選定、収集を行う。その後、タブ譜作成に最適なデータフォーマットを作成しデータセットを作成する。本研究では、作成したデータセットの一部の情報を用いて、エンド・ツー・エンドの音声認識タスクとして新たなデータ表現を提案し、ピッチとデュレーションの推定モデルを構築し実験を行った。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/hiyon2.png" alt="">
      </div>
      <div class="content">
        <h1>"FARe-MAML: Feature-Adaptive Re-MAML" 入力データの特徴量を考慮したメタ学習手法の提案</h1>
        <ul class="author">
          <li class="pj">PJ-NTT</li>
          <li class="international">ACM MobiSys Poster [B4]</li>
          <li class="internal">RG Award</li>
        </ul>
        <div class="separator"></div>
        <p>
          近年、ディープラーニングの発展により多くのモデルが提案されているが、高性能なモデルの学習には大量のラベル付きデータが必要であり、データ収集に高コストと長時間を要することが課題である。この問題に対処する手法としてメタ学習が注目されており、類似タスクの学習結果から共通のメタ知識を獲得し、新たなタスクを効率的に学習できる。本研究では、メタ知識の汎化能力向上を目的とし、適用データセットに応じたメタ学習を再度行う手法を提案する。これにより、新たなタスクへの適応力を高め、高精度なモデルの構築を目指す。クロスドメイン設定を含む多角的な検証の結果、本手法FARe-MAMLは既存のメタ学習手法よりも高い汎用性と実用性を示した。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="../assets/page_research_thumbnail/ojus.png" alt="">
      </div>
      <div class="content">
        <h1>LostCatID: 迷い猫判別のための野良猫・飼い猫分類</h1>
        <ul class="author">
          <li class="international">ACM MobiSys Demo [B4]</li>
          <li class="internal">IPSJ UBI [B3]</li>
          <li class="internal">RG Award</li>
        </ul>
        <div class="separator"></div>
        <p>
          猫の飼育数の増加に伴い、迷い猫の問題が深刻化している。保護されても収容スペースの制約により約10日後には殺処分される現状がある。マイクロチップや迷子札の装着率は低く、効果的な対策が求められている。本研究では、猫に負担をかけず、高精度に迷い猫を識別するための画像ベースの識別技術を提案する。迷い猫識別のための4種類の独自データセットを構築し、公開した。実験では、人間の識別精度（87.88%）より深層学習モデル（95.07%）が優れていることを示した。また、保護施設のデータで検証し、高精度を維持できることを確認した。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/hiyon.png" alt="">
      </div>
      <div class="content">
        <h1>多クラス分類に向けた階層的分類モデル</h1>
        <ul class="author">
          <li class="pj">PJ-NTT</li>
          <li class="internal">IPSJ UBI [B3]</li>
        </ul>
        <div class="separator"></div>
        <p>
          近年、数多くのディープラーニングモデルが提案され、それらを活用した多種多様なデータセットを基にした画像分類の研究が進められている。しかしながら、分類クラスの総数が増加するにつれて分類の精度は低下するという問題があり、特に画像分類タスクにおける課題として顕在化している。さらに、データセット内で類似度が高いクラスにおける分類の精度が低いことも課題として挙げられる。
          本研究では、複数のモデルを使用し、階層的にクラス分類を実現する新しい手法を提案する。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/zackey.png" alt="">
      </div>
      <div class="content">
        <h1>弓道動画における結果予測とフォームフィックスツールの開発</h1>
        <ul class="author">
          <li class="internal">IPSJ UBI [B3]</li>
        </ul>
        <div class="separator"></div>
        <p>
          Detectron2による骨格推定と深層学習モデルを組み合わせた、弓道の的中結果予測システムの開発に加えて、フォームの改善方法を提案するフォームフィックスツールの開発を目指す。
          的中結果予測システムは、LSTMやResNet50を用いて、時系列全体に注目した予測を目指す。フォームの改善方法の提案は、結果に対する各関節情報の寄与度を元に決定する。寄与度は、動画の各関節の座標の動きを別動画の同じ関節の座標に変化させた際の的中確率の変化を元に算出する。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/oda.png" alt="">
      </div>
      <div class="content">
        <h1>3DLiDAR点群データを活用した物体認識システム</h1>
        <ul class="author">
        </ul>
        <div class="separator"></div>
        <p>
          近年、様々な自動運転車や自律型ロボットが開発されている。LiDARセンサーは光を使って物体までの距離を測り、点群にすることができる。しかし、物体までの距離が遠くなると点群の密度が低くなり、物体認識精度が低下するという問題がある。本研究では、物体検出部分でハードネガティブマイニングを行い、3D
          LiDARセンサーから得られた点群からより正確に物体認識を行うシステムを提案する
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/aokiti.png" alt="">
      </div>
      <div class="content">
        <h1>一般物体検出とLSTMを用いた画像に基づく屋内位置推定</h1>
        <ul class="author">
          <li class="international">ACM MobiSys Demo [B2]</li>
          <li class="internal">IPSJ UBI [B2]</li>
        </ul>
        <div class="separator"></div>
        <p>
          近年、GPSに依存しない画像ベースの自己位置推定において、深層学習ベースの様々な手法が数多く研究されている。しかし、従来の手法は物体単位での特徴が適切に考慮されておらず、同様の物体が多く写る室内環境には適していないという課題があった。
          そこで本手法では、一般物体検出のYOLOv8でクロップした検出物体に対し、CNNで特徴抽出を行い、さらにLSTMによって1つの特徴量に統合することで、複数個の物体特徴を考慮した位置推定を実現する。
        </p>
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

#top {
  & h1 {
    padding: 3rem 4rem 0;
  }

  & p {
    padding: 2rem 4rem;
  }
}

.card {
  display: flex;
  width: 90%;
  margin: 40px auto 140px;
  gap: 56px;
}

.card:nth-child(odd) {
  flex-direction: row-reverse;
}

.thumbnail {
  margin: auto 0;

  & img {
    width: 100%;
    -webkit-box-shadow: 10px 10px 60px 0 rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 10px 10px 60px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 10px 10px 60px 0 rgba(0, 0, 0, 0.3);
  }
}

.content {
  width: 150%;
  margin: auto 0;

  h1 {
    font-size: 1.3rem;
    color: #4B4B4B;
  }

  .separator {
    margin-top: 12px;
    border: 1px solid #C3C3C3;
  }

  & p {
    padding-top: 12px;
    color: #4B4B4B;
  }
}

ul.author {
  display: flex;
  margin-top: 4px;
  gap: 4px;
  flex-wrap: wrap;

  & li {
    display: inline-block;
    padding: 6px 16px 0;
    height: 28px;
    border-radius: 24px;
    text-align: center;
    font-size: 0.8rem;
    color: white;
  }

  .internal {
    background-color: #616161;
  }

  .international {
    background-color: #616161;
  }

  .pj {
    background-color: #2AB0BF;
  }
}

@media screen and (max-width: 800px) {
  .card {
    width: 80%;
    flex-direction: column;
    margin: 32px auto 112px;
    gap: 24px;
  }

  .card:nth-child(odd) {
    flex-direction: column;
  }

  .content {
    width: 100%;
  }

  .thumbnail {
    & img {
      width: auto;
      max-width: 100%;
      max-height: 320px;
    }
  }
}
</style>
<script setup lang="ts">
</script>