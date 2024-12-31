<script setup>
import {ref} from 'vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const modules = [Autoplay, Navigation, Pagination]

let topImagesID = 0
let brandsID = 0
let goodsImagesID = 0

const leftMenu = ref({
  menu1: false, menu2: false
})

const firstLeftMenu = ref([
  {
    name: "🐈PVC現貨",
    routerPath: "#",
  },
  {
    name: "🐈海外代購現貨",
    routerPath: "#",
  },
  {
    name: "🐈PVC預購",
    routerPath: "#",
  },
  {
    name: "🐈吉伊卡哇",
    routerPath: "#",
  },
  {
    name: "🐈貓車福箱",
    routerPath: "#",
  },
  {
    name: "🐈GK現貨",
    routerPath: "#",
  },
  {
    name: "🐈貓車周年慶",
    routerPath: "#",
  },
])

const secondLeftMenu = ref([
  {
    name: "Hololive",
    routerPath: "#",
  },
  {
    name: "Nijisanji彩虹社",
    routerPath: "#",
  },
  {
    name: "香香妹子",
    routerPath: "#",
  },
  {
    name: "Lycoris 莉可麗絲",
    routerPath: "#",
  },
  {
    name: "OVERLORD",
    routerPath: "#",
  },
  {
    name: "火影忍者",
    routerPath: "#",
  },
  {
    name: "初音未來miku",
    routerPath: "#",
  },
  {
    name: "🐈福箱專區",
    routerPath: "#",
  },
  {
    name: "米哈遊",
    routerPath: "#",
  },
])

const topImages = ref([
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/topImg/1.jpeg", title: "top1", topImagesID: topImagesID++},
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/topImg/2.jpg", title: "top2", topImagesID: topImagesID++},
])

const brands = ref([
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/brands/1.png", title: "brand1", brandsID: brandsID++},
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/brands/2.png", title: "brand2", brandsID: brandsID++},
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/brands/3.png", title: "brand3", brandsID: brandsID++},
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/brands/4.png", title: "brand4", brandsID: brandsID++},
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/brands/5.png", title: "brand5", brandsID: brandsID++},
])

const goodsImages = ref([
  {
    url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsImg/airu.jpg",
    title: "airu", 
    goodsImagesID: goodsImagesID++,
    classification: "香香妹子",
    routerPath: "/airu",
    goodsName: "【PVC預購】1/7 天使警察 艾露‧弗拉提亞",
    price: "$5000",
    },
  {
    url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsImg/dusk.jpg",
    title: "dusk",
    goodsImagesID: goodsImagesID++,
    classification: "香香妹子",
    routerPath: "/dusk",
    goodsName: "【PVC預購】1/7 PVC人形 明日方舟 夕 Dusk",
    price: "$8650",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsImg/hyperBody.webp",
    title: "HyperBody",
    goodsImagesID: goodsImagesID++,
    classification: "香香妹子",
    routerPath: "/hyperBody",
    goodsName: "【PVC現貨】Hyper Body 神罰",
    price: "$3090",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsImg/miku.jpg",
    title: "miku",
    goodsImagesID: goodsImagesID++,
    classification: "香香妹子",
    routerPath: "/miku",
    goodsName: "【PVC預購】1/8 PVC人形 RISE UP+系列 初音未來 Fantasia Witch Ver.",
    price: "$1400",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsImg/noel.jpg",
    title: "noel",
    goodsImagesID: goodsImagesID++,
    classification: "Hololive",
    routerPath: "/noel",
    goodsName: "【PVC現貨】1/7 hololive 白銀諾艾爾",
    price: "$5980",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsImg/rokixi.jpg",
    title: "rokixi",
    goodsImagesID: goodsImagesID++,
    classification: "香香妹子",
    routerPath: "/rokixi",
    goodsName: "【PVC現貨】1/7洛琪希·米格路迪亞",
    price: "$4380",
  },
])



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
    a {
    text-decoration: none;
    color: inherit;
    }
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
    <swiper-slide v-for="topImg in topImages" :key="topImg.topImagesID"><img :src="topImg.url" :alt="topImg.title"/></swiper-slide>
    </swiper>
    <div class="brand">
      <ul>
        <li v-for="brand in brands" :key="brand.brandsID">
          <router-link to="#"><img :src="brand.url" :alt="brand.title"/></router-link>
        </li>
      </ul>
    </div>
    <div class="leftMenu">
      <ul>
        <li>
          <h2 @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">商品分類</h2>
          <Transition name="slide-fade">
            <ul class="menuLeft" v-show="leftMenu.menu1">
              <li v-for="(fm, index) in firstLeftMenu" :key="index" @mouseenter="leftMenu.menu1=true" @mouseleave="leftMenu.menu1=false">
                <router-link :to="fm.routerPath">{{fm.name}}</router-link>
              </li>
            </ul>
          </Transition>
        </li>
        <li>
          <h2 @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">商品標籤</h2>
          <Transition name="slide-fade">
            <ul class="menuLeft" v-show="leftMenu.menu2">
              <li v-for="(sm, index) in secondLeftMenu" :key="index" @mouseenter="leftMenu.menu2=true" @mouseleave="leftMenu.menu2=false">
                <router-link :to="sm.routerPath">{{sm.name}}</router-link>
              </li>
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
          <swiper-slide v-for="goods in goodsImages" :key="goods.goodsImagesID">
          <div class="img">
            <img :src="goods.url" :alt="goods.title"/>
          </div>
          <div class="commit">
            <p>{{ goods.classification }}</p>
            <router-link :to="goods.routerPath">
              <p class="goodsName">{{goods.goodsName}}</p>
            </router-link>

            <p class="price">{{goods.price}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>