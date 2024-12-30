<script setup>
import {ref} from 'vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const modules = [Autoplay, Navigation, Pagination]

const leftMenu = ref({
  menu1: false, menu2:false
})

</script>

<style scoped lang="scss">

* {
  margin: 0;
  padding: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.topImg {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}

.brand {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  ul {
    list-style: none;
    display: flex;

    li:hover {
      transform: scale(1.05);
      filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.2));
    }
  }

  img {
    width: 90%;
    height: 90%;
  }
}

.leftMenu {

  float: left;

  width: 10%;
  height: 100%;

  ul {
    list-style: none;
  }

  h2 {
    margin: 0;
    padding: 15px;
    background-color: #f4f4f4;
    color: black;
    cursor: pointer;
    font-size: 16px;
    border-bottom: 1px solid #e0e0e0;

    &:hover {
      background-color: #e8e8e8;
    }
  }

  .menuLeft {
    position: relative;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 4px 4px;

    li {
      list-style: none;
      display: flex;
      padding: 12px 15px;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      border-bottom: 1px solid #f0f0f0;
      transition: all 0.3s ease;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: #f8f9fa;
        padding-left: 20px;
        color: #1a73e8;
      }
    }
  }
}

.rightImg {
  //border: solid 2px black;
  margin-left: 15%;
  width: 80%;
  height: 100%;

  img {
    width: 90%;
    height: 90%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  .img {
    margin-left: 10%;
  }

  .commit {
    //border: solid 2px black;
    width: 77.4%;
    margin-left: 10%;
    padding: 10px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: #f4f4f4;
  }

  .goodsName {
    font-size: 16px;
    color: #e3da8f;
  }

  .price {
    font-size: 14px;
    color: red;
  }
}

</style>


<template>
  <div class="main">
    <swiper
        :loop="true"
        :modules="modules"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="topImg"
    >
    <swiper-slide><img src="../assets/images/topImg/1.jpeg" alt="1"/></swiper-slide>
    <swiper-slide><img src="../assets/images/topImg/2.jpg" alt="2"/></swiper-slide>
    </swiper>
    <div class="brand">
      <ul>
        <li>
          <router-link to="#"><img src="../assets/images/brands/1.png" alt="1"/></router-link>
        </li>
        <li>
          <router-link to="#"><img src="../assets/images/brands/2.png" alt="2"/></router-link>
        </li>
        <li>
          <router-link to="#"><img src="../assets/images/brands/3.png" alt="3"/></router-link>
        </li>
        <li>
          <router-link to="#"><img src="../assets/images/brands/4.png" alt="4"/></router-link>
        </li>
      </ul>
    </div>
    <div class="leftMenu">
      <ul>
        <li>
          <h2 @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">商品分類</h2>
          <Transition name="slide-fade">
            <ul class="menuLeft" v-show="leftMenu.menu1">
              <li @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">🐈PVC現貨</li>
              <li @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">🐈海外代購現貨</li>
              <li @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">🐈PVC預購</li>
              <li @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">🐈吉伊卡哇</li>
              <li @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">🐈貓車福箱</li>
              <li @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">🐈GK現貨</li>
              <li @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">🐈貓車周年慶</li>
            </ul>
          </Transition>
        </li>
        <li>
          <h2 @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">商品標籤</h2>
          <Transition name="slide-fade">
            <ul class="menuLeft" v-show="leftMenu.menu2">
              <li @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">Hololive</li>
              <li @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">Nijisanji彩虹社</li>
              <li @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">香香妹子</li>
              <li @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">Lycoris 莉可麗絲</li>
              <li @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">OVERLORD</li>
              <li @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">火影忍者</li>
              <li @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">初音未來miku</li>
              <li @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">🐈福箱專區</li>
              <li @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">米哈遊</li>
            </ul>
          </Transition>
        </li>
      </ul>
    </div>
    <div class="rightImg">
      <swiper
          :loop="true"
          :navigation="true"
          :slides-per-view="3"
          :modules="modules"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          >
        <swiper-slide>
          <div class="img">
            <img src="../assets/images/goodsImg/miku.jpg" alt="miku"/>
          </div>
          <div class="commit">
            <p>香香妹子</p>
            <router-link to="/miku">
              <p class="goodsName">【PVC預購】1/8 PVC人形 RISE UP+系列 初音未來 Fantasia Witch Ver.</p>
            </router-link>

            <p class="price">$1400</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img src="../assets/images/goodsImg/hyperBody.webp" alt="hyperBody"/>
          </div>
          <div class="commit">
            <p>香香妹子</p>
            <router-link to="/hyperBody">
              <p class="goodsName">【PVC現貨】Hyper Body 神罰</p>
            </router-link>
            <p class="price">$3090</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img src="../assets/images/goodsImg/dusk.jpg" alt="dusk"/>
          </div>
          <div class="commit">
            <p>香香妹子</p>
            <router-link to="/dusk">
              <p class="goodsName">【PVC預購】1/7 PVC人形 明日方舟 夕 Dusk</p>
            </router-link>
            <p class="price">$8650</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img src="../assets/images/goodsImg/airu.jpg" alt="airu"/>
          </div>
          <div class="commit">
            <p>香香妹子</p>
            <router-link to="/airu">
              <p class="goodsName">【PVC預購】1/7 天使警察 艾露‧弗拉提亞</p>
            </router-link>
            <p class="price">$5000</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img src="../assets/images/goodsImg/noel.jpg" alt="noel"/>
          </div>
          <div class="commit">
            <p>Hololive</p>
            <router-link to="noel">
              <p class="goodsName">【PVC現貨】1/7 hololive 白銀諾艾爾</p>
            </router-link>
            <p class="price">$5980</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="img">
            <img src="../assets/images/goodsImg/rokixi.jpg" alt="rokixi"/>
          </div>
          <div class="commit">
            <p>香香妹子</p>
            <router-link to="rokixi">
              <p class="goodsName">【PVC現貨】1/7洛琪希·米格路迪亞</p>
            </router-link>
            <p class="price">$4380</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>