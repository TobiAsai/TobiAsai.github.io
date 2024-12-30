<script setup>

import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import {ref} from "vue";

const modules = [Navigation]

const id = ref(1)

setInterval(() => {
  id.value++
  if (id.value > 4) {
    id.value = 1
  }
}, 3000)

</script>

<style scoped lang="scss">

* {
  margin: 0;
  padding: 0;
}


.nav {
  margin-left: 20%;
  margin-top: 1%;
  font-size: 16px;

  ul {
    list-style: none;
    display: flex;

    li {
      margin: 0 5px;
    }
  }

  .superLink {
    text-decoration: none;
    color: rgba(119, 113, 99, 0.64);
    font-weight: bold;

    &:hover {
      transition: 0.2s;
      color: #e4dab8;
    }
  }
}

.main {
  width: 50%;
  margin-left: 20%;
  margin-top: 3%;
  .goodsImg {
    float: left;
    width: 50%;
    .bigImg {
      ul {
        list-style: none;
      }
      img {
        width: 70%;
        height: 70%;
      }
    }
    .smallImg {
      width: 70%;
      img {
        width: 100%;
      }
    }
  }
  .goodsInfo {
    h2 {
      color: rgba(102, 102, 102, 0.8);
      margin-bottom: 2%;
    }
    .price {
      font-size: 26px;
      color: red;
      font-weight: bold;
      margin-bottom: 1%;
    }
    .commit {
      color: rgba(102, 102, 102, 0.8);
      font-size: 18px;
      margin-bottom: 2%;
    }
    hr {
      color: rgba(73, 73, 73, 0.3);
      margin-bottom: 2%;
    }
    .num {
      span {
        font-weight: bold;
        font-size: 20px;
        color: rgba(102, 102, 102, 0.8);
      }
      input {
        padding: 10px;
        outline: none;
        border-color: rgba(73, 73, 73, 0.5);
        border-radius: 5px;
        margin-right: 20px;
      }
      button {
        padding: 10px;
        border: 1px solid rgba(73, 73, 73, 0.3);
        border-radius: 5px;
        background-color: #e4dab8;
        color: #fff;
      }
      margin-bottom: 2%;
    }
    .classification {
      color: rgba(102, 102, 102, 0.8);
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 1%;
    }
    .homeDelivery {
      color: rgba(102, 102, 102, 0.8);
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 1%;
    }
    .payment {
      color: rgba(102, 102, 102, 0.8);
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 1%;
    }
  }
}
</style>

<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/" class="superLink">首頁</router-link>
      </li>
      <li>/</li>
      <li>
        <router-link to="#" class="superLink">商品</router-link>
      </li>
      <li>/</li>
      <li>
        <router-link to="#" class="superLink">🐈PVC預購</router-link>
      </li>
      <li>/</li>
      <li>
        <router-link to="#" class="superLink">香香妹子</router-link>
      </li>
    </ul>
  </div>

  <div class="main">
    <div class="goodsImg">
      <div class="bigImg">
        <ul>
          <li v-if="id === 1">
            <img src="../../assets/images/goodsDetailsImg/airu/1.webp" alt="1">
          </li>
          <li v-else-if="id === 2">
            <img src="../../assets/images/goodsDetailsImg/airu/2.webp" alt="2">
          </li>
          <li v-else-if="id === 3">
            <img src="../../assets/images/goodsDetailsImg/airu/3.webp" alt="3">
          </li>
          <li v-else-if="id === 4">
            <img src="../../assets/images/goodsDetailsImg/airu/4.webp" alt="4">
          </li>
        </ul>
      </div>
      <div class="smallImg">
        <swiper
            :modules="modules"
            :loop="true"
            :navigation="true"
            :slides-per-view="3"
        >
          <swiper-slide @click="id=1">
            <img src="../../assets/images/goodsDetailsImg/airu/1.webp" alt="1">
          </swiper-slide>
          <swiper-slide @click="id=2">
            <img src="../../assets/images/goodsDetailsImg/airu/2.webp" alt="2">
          </swiper-slide>
          <swiper-slide @click="id=3">
            <img src="../../assets/images/goodsDetailsImg/airu/3.webp" alt="3">
          </swiper-slide>
          <swiper-slide @click="id=4">
            <img src="../../assets/images/goodsDetailsImg/airu/4.webp" alt="4">
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="goodsInfo">
      <h2>
        【PVC預購】1/7 天使警察 艾露‧弗拉提亞
      </h2>
      <div class="price">$5000</div>
      <div class="commit">【PVC預購】1/7 天使警察 艾露‧弗拉提亞</div>
      <hr />
      <div class="num">
        <form @submit.prevent>
          <span>數量:&nbsp;</span>
          <input type="number" placeholder="1">
          <button>加入購物車</button>
        </form>
      </div>
      <div class="classification">分類:&nbsp;🐈PVC預購</div>
      <div class="homeDelivery">運送方式:&nbsp;宅配到府/超商取貨</div>
      <div class="payment">付款方式:&nbsp;超商取貨付款/信用卡/ATM轉帳/超商繳費</div>
    </div>
  </div>
</template>