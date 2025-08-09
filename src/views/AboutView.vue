<template>
  <div class="about">

    <div id="top">
      <h1>Research</h1>
      <p>
        d-hacksでは人工知能に関する多様な個人研究のほか、地域自治体や民間企業との共同プロジェクトにも多数取り組んでいます。
      </p>
    </div>

    <div v-if="loading" class="loading">
      <p>研究データを読み込み中...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <div v-else>
      <div v-for="(item, index) in researchItems" :key="item._id" class="card" :class="{ 'reverse': index % 2 === 1 }">
        <div class="thumbnail">
          <img :src="`/api${item.imageUrl}`" :alt="item.title">
        </div>
        <div class="content">
          <h1>{{ item.title }}</h1>
          <ul class="author">
            <li v-for="tag in item.tags" :key="tag.label" :class="getTagClass(tag.color)">
              {{ tag.label }}
            </li>
          </ul>
          <div class="separator"></div>
          <p>
            {{ item.description }}
          </p>
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

.card.reverse {
  flex-direction: row-reverse;
}

.loading,
.error {
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
}

.error {
  color: #d32f2f;
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

  .card.reverse {
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
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Tag {
  label: string
  color: string
}

interface ResearchItem {
  _id: string
  imageUrl: string
  title: string
  tags: Tag[]
  description: string
}

interface ApiResponse {
  success: boolean
  data: ResearchItem[]
}

const researchItems = ref<ResearchItem[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const fetchResearchItems = async () => {
  try {
    loading.value = true
    error.value = null

    // const response = await axios.get<ApiResponse>('/api/research-items')

    if (true) {
      researchItems.value = ({ "success": true, "data": [{ "_id": "689741180e8940cf7a6f1ad0", "imageUrl": "/uploads/d4264ed7-b16d-49d0-964d-c49788ee84bc.png", "title": "CC-Replay: 深層学習を用いた画像分類の継続学習におけるクラス難易度を考慮した容量制御", "tags": [{ "label": "PJ-NTT", "color": "#2ab0bf" }, { "label": "学会誌「コンピュータソフトウェア」[D2]", "color": "#616161" }], "description": "実社会における出力クラスの増加に対応可能な画像分類を実現するため、上限の定められたデータ保持容量を効率的に用いた継続学習手法を提案する。継続学習の先行研究として、一部のデータをコアデータとして保持し、新たに追加された訓練データと併せて再学習を繰り返すリプレイ手法では、保持するデータ数がクラスごとに一定であった。 本研究では、各クラスの難易度に応じたコアデータの容量制御およびそれを用いた継続学習手法「CC-replay」を提案し、限られた容量下でより効率的にリプレイすることを目指す。" }] }).data
    } else {
      error.value = '研究データの取得に失敗しました'
    }
  } catch (err) {
    console.error('API Error:', err)
    error.value = 'サーバーとの通信でエラーが発生しました'
  } finally {
    loading.value = false
  }
}

const getTagClass = (color: string) => {
  if (color === '#2ab0bf') {
    return 'pj'
  } else if (color === '#616161') {
    return 'internal'
  } else {
    return 'international'
  }
}

onMounted(() => {
  fetchResearchItems()
})
</script>