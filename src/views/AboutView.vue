<template>
  <div class="about">

    <div id="top">
      <h1>Research</h1>
      <p>d-hacksでは人工知能に関する多様な個人研究のほか、地域自治体や民間企業との共同プロジェクトにも多数取り組んでいます。</p>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/hirono.png" alt="">
      </div>
      <div class="content">
        <h1>CC-Replay: 深層学習を用いた画像分類の継続学習におけるクラス難易度を考慮した容量制御</h1>
        <ul class="author">
          <li class="pj">PJ-NTT</li>
          <li class="internal">学会誌「コンピュータソフトウェア」</li>
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
        <img src="../assets/page_research_thumbnail/bekku.png" alt="">
      </div>
      <div class="content">
        <h1>物体検出とセマンティックセグメンテーションによる車道上に限定した未知物体検出手法の提案</h1>
        <ul class="author">
          <li class="pj">PJ-Edogawa</li>
          <li class="international">IEEE SMARTCOMP</li>
          <li class="internal">IPSJ UBI</li>
        </ul>
        <div class="separator"></div>
        <p>
          道路の老朽化により、穴あきなどの道路損傷が発生し、交通に影響を与える可能性がある。道路損傷の定期的な点検は、道路調査費用が高額なため困難である。東京都江戸川区において、既存の画像による道路損傷検知手法の実証実験を行った結果、実際の道路におけるポットホール検出では、影やマンホールの検出で誤検出が多発することが判明した。そこで本研究では、実証実験を通じて問題視されたポットホール検出における誤検出を低減する手法を提案する。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/akiho.png" alt="">
      </div>
      <div class="content">
        <h1>フィギュアスケートにおけるステップシークエンスの自動レベル判定</h1>
        <ul class="author">
          <li class="internal">人工知能学会</li>
          <li class="internal">IPSJ UBI</li>
        </ul>
        <div class="separator"></div>
        <p>
          フィギュアスケートのステップシークエンスは12種類の詳細な動き（エレメント）を組み合わせて行う技で、レベル1からレベル4で判定される。公式試合では13人の審判が高速で連続して行われる技をリアルタイムに目視で確認し採点しているため、採点の公平性が問われている。本研究では、基本的技術が反映される重要な技でありながら、正確な採点が行われていない可能性があるステップシークエンスに焦点を当て、点数の算出につながるレベルを自動で判定する手法を提案する。
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
          <li class="international">ACM MobiSys Poster</li>
        </ul>
        <div class="separator"></div>
        <p>
          大規模かつ多様なデータセットの準備は、強力な深層学習モデルの訓練に不可欠である。しかしながら、特定のデータが理論的には可能であるものの、実際に観察することが困難なケースも存在する（例：信号無視）。本研究では、物体検出モデルと画像生成モデルを組み合わせることで、フェイク動画を生成する手法の可能性を示す。具体的には、既存の動画を部分的に編集して、信号無視のドラレコ映像を人工的に作成することで、「希少な現実」を生成する。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/hhiromasa.png" alt="">
      </div>
      <div class="content">
        <h1>知識蒸留における教師モデル選別手法の提案</h1>
        <ul class="author">
          <li class="international">A3 Foresight</li>
          <li class="internal">人工知能学会</li>
        </ul>
        <div class="separator"></div>
        <p>
          深層学習モデルのサイズを削減し、推論時間を高速化するために、知識蒸留と呼ばれる手法がある。この手法では、大きなモデルの出力をより軽量なモデルに模倣させることで、教師モデルの知識表現を生徒モデルに継承する。本研究では、複数の教師モデルの中から、生徒モデルに対して最適な教師モデルの組み合わせを選別しながら知識蒸留を行うフレームワークを提案する。実験により、提案手法によって訓練された生徒モデルの性能がランダムに組み合わせた生徒モデルを上回ることが示された。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="../assets/page_research_thumbnail/synth.png" alt="">
      </div>
      <div class="content">
        <h1>FactorVAE-VC: 発話空間の分布に着目した多者間声質変換手法の提案</h1>
        <ul class="author">
        </ul>
        <div class="separator"></div>
        <p>
          近年、深層学習による声質変換によって変換精度が向上し、付加情報を加えることで発話の一部のみを変換する研究が行われている。特に、変分オートエンコーダ（Variational AutoEncoder: VAE）のような、潜在空間の分布を用いて学習を行う手法を声質変換に適用する試みが盛んに行われている。 本研究では、データセットの分布をもつれなく適切に得る手法であるFactorVAEを声質変換に適用することで、発話の分布に基づいた多者間声質変換手法 FactorVAE-VC を提案する。
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
        <img src="@/assets/page_research_thumbnail/hiyon.png" alt="">
      </div>
      <div class="content">
        <h1>多クラス分類に向けた階層的分類モデル</h1>
        <ul class="author">
          <li class="pj">PJ-NTT</li>
          <li class="international">ACM MobiSys Poster</li>
          <li class="internal">IPSJ UBI</li>
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
        <img src="@/assets/page_research_thumbnail/ojus.png" alt="">
      </div>
      <div class="content">
        <h1>野良猫・飼い猫判別のための猫の顔分類技術の提案</h1>
        <ul class="author">
          <li class="international">ACM MobiSys Demo</li>
          <li class="internal">IPSJ UBI</li>
        </ul>
        <div class="separator"></div>
        <p>
          近年、迷い猫の問題が増加しており、マイクロチップの装着義務化が進められているものの、装着率は依然として低い。また、野良猫と飼い猫の識別が困難であることによる、誤った迷い猫の処理の事例が複数報告されている。本研究では、飼い猫と野良猫には顔つきに差異があるという仮説のもと、猫の顔画像分類による野良猫と飼い猫の判別技術を提案する。
          6つの異なる画像認識アルゴリズム（ResNet-50、AlexNet、VGG-16、GoogleNet、DenseNet201、MobileNetV2）で分類精度を比較した。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/neo.png" alt="">
      </div>
      <div class="content">
        <h1>同時手番ゲームにおいて敵行動を予測し行動するエージェントの検証</h1>
        <ul class="author">
        </ul>
        <div class="separator"></div>
        <p>
          同時手番ゲームにおいて、プレイヤーは相手の行動や情報を予測して行動することがある。これは、予測した行動に対して利得が高い行動をすることで、予測が当たった時に大きなアドバンテージを取れるためである。本研究では、敵の行動を考慮して行動する強化学習AIを開発し、Pokemon
          Showdownにおいて評価を行った。
        </p>
      </div>
    </div>

    <div class="card">
      <div class="thumbnail">
        <img src="@/assets/page_research_thumbnail/ikechan.png" alt="">
      </div>
      <div class="content">
        <h1>オーバートレーニング予防を目的とした筋負荷推定</h1>
        <ul class="author">
        </ul>
        <div class="separator"></div>
        <p>
          過剰なストレスにより慢性疲労に陥り、パフォーマンスが低下し短期間では回復しなくなるオーバートレーニングは深刻な問題とされている。本研究では、骨格情報や生体情報を用いて筋負荷を推定することで、オーバートレーニング症候群の回避やトレーニングの見直しを目指す。本研究ではランニングにおける骨格情報や生体情報を用いて、筋電位測定器を使用せずに筋負荷予測を行う。
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
          <li class="internal">IPSJ UBI</li>
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
          <li class="international">ACM MobiSys Demo</li>
          <li class="internal">IPSJ UBI</li>
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
  margin: 40px auto 96px;
  gap: 56px;
}

.card:nth-child(odd) {
  flex-direction: row-reverse;
}

.thumbnail {
  margin: auto 0;

  & img {
    width: 100%;
    -webkit-box-shadow: 10px 10px 60px 0 rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 10px 10px 60px 0 rgba(0, 0, 0, 0.4);
    box-shadow: 10px 10px 60px 0 rgba(0, 0, 0, 0.4);
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
    background-color: #AFB42B;
  }

  .international {
    background-color: #455A64;
  }

  .pj {
    background-color: #0097A7;
  }
}

@media screen and (max-width: 800px) {
  .card {
    width: 80%;
    flex-direction: column;
    margin: 16px auto 96px;
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