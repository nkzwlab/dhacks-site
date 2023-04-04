<script setup>
// import TheWelcomez/ from '../components/TheWelcome.vue'

import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('networkCanvas')
  const ctx = canvas.getContext('2d')

  canvas.width = window.innerWidth
  canvas.height = window.innerWidth / 2.5

  class Node {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.radius = 2
      this.vx = Math.random() * 2 - 1
      this.vy = Math.random() * 2 - 1
    }

    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = '#1caadd'
      ctx.fill()
    }

    update() {
      this.x += this.vx
      this.y += this.vy

      if (this.x < 0 || this.x > canvas.width) {
        this.vx = -this.vx
      }
      if (this.y < 0 || this.y > canvas.height) {
        this.vy = -this.vy
      }

      this.draw()
    }
  }

  function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  }

  let nodes = []
  const nodeCount = Math.ceil(canvas.width / 15)

  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height))
  }

  function connectNodes() {
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = distance(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)

        if (dist < 100) {
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          ctx.strokeStyle = `rgba(28, 170, 221, ${(100 - dist) / 100})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    nodes.forEach((node) => {
      node.update()
    })

    connectNodes()

    requestAnimationFrame(animate)
  }

  animate()
})
</script>

<template>
  <div class="home__wrapper">
    <div class="home__background">
      <canvas id="networkCanvas"></canvas>
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
#networkCanvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  // height: 100%;
  // aspect-ratio: 2.5 / 1;
}

.home {
  &__background {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-family: 'Jura', sans-serif;
    width: 100%;
    height: 100%;
    position: relative;
    width: 100%;
    aspect-ratio: 2.5 / 1;

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
    padding: 56px 15px;
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

      @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
