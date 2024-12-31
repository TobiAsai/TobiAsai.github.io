<script setup>

import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import {ref} from "vue";

const modules = [Navigation]

let imgID = 0
const id = ref(0)
const iterm = ref(true)
const images = ref([
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsDetailsImg/miku/1.jpg", title: "1", imgID: imgID++},
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsDetailsImg/miku/2.jpg", title: "2", imgID: imgID++},
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsDetailsImg/miku/3.jpg", title: "3", imgID: imgID++},
  {url: "https://cdn.jsdelivr.net/gh/TobiAsai/imagesBed/VueHomework/images/goodsDetailsImg/miku/4.png", title: "4", imgID: imgID++},
])

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
  display: flex;
  .goodsImg {
    width: 45%;
    .bigImg {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .smallImg {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .goodsInfo {
    margin-left: 3%;
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

.tab {
  position: relative;
  background-color: #f6f6f6;
  margin-top: 2%;
  padding: 2%;

  .tab-item {
    background-color: white;
    margin-left: 20%;
    width: 50%;
    padding: 2%;

    ul {
      list-style: none;
      display: flex;
      width: 30%;
      margin: auto auto 2%;

      li {
        margin: auto;
        color: #acacac;
        font-size: 28px;
        font-weight: bold;
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: all 0.3s ease;

        &:hover {
          text-decoration-color: #e7dec0;
          color: black;
        }
      }
    }

    .onClickAfter {
      text-decoration: underline;
      text-decoration-color: #e7dec0;
      color: black;
    }

    hr {
      margin-bottom: 2%;
      height: 1px;
      border: none;
      background-color: rgba(102, 102, 102, 0.3);
    }

    .specification {
      font-size: 16px;
      font-weight: 400;
      color: #333;
      p {
        margin-bottom: 3%;
      }
    }

    .protocol {
      h3 {
        text-decoration: underline;
        margin-bottom: 2%;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        color: #333;
        margin-bottom: 1%;
      }
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
        <img :src="images[id].url" alt="miku">
      </div>
      <div class="smallImg">
        <swiper
            :modules="modules"
            :loop="true"
            :navigation="true"
            :slides-per-view="3"
        >
        <swiper-slide v-for="image in images" :key="image.imgID" @click="id=image.imgID">
            <img :alt="image.title" :src="image.url">
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="goodsInfo">
      <h2>
        【PVC預購】1/8 PVC人形 RISE UP+系列 初音未來 Fantasia Witch Ver.
      </h2>
      <div class="price">$1400</div>
      <div class="commit">【PVC預購】1/8 PVC人形 RISE UP+系列 初音未來 Fantasia Witch Ver.</div>
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
  <div class="tab">
    <div class="tab-item">
      <ul>
        <li @click="iterm=true" :class="{onClickAfter: iterm}">
          商品規格
        </li>
        <li @click="iterm=false" :class="{onClickAfter: !iterm}">
          用戶協議
        </li>
      </ul>
      <hr/>
      <div v-if="iterm" class="specification">
        <p>🐈商品名稱：【PVC預購】1/8 PVC人形 RISE UP+系列 初音未來 Fantasia Witch Ver.</p>
        <p>🐈上市日期：2025年6月</p>
        <p>🐈品牌公司：RIBOSE</p>
        <p>🐈價錢：NT.1400</p>
        <p>請事先規劃您的購物歷程，感謝您的配合。</p>
      </div>
      <div v-if="!iterm" class="protocol">
        <div>
          <h3>🐈預購商品到貨須知</h3>
          <p>1、現貨商品、不同發售月份之預購商品請勿一起結帳。</p>
          <p>2、商品出貨時間將依照廠商、工作室的實際狀態為準，出貨時間僅供參考，，本店無法保證到貨日期，預購商品皆有延期之可能，若官方延期發售，恕不另行通知，敬請見諒。</p>
          <p>3、預購商品若有數量不足、延遲到貨等不可預知情形發生，貓車有訂單保留或取消之權利，官網會依照「付款」與「訂單成立時間」順序安排出貨。</p>
          <p>4、【預購商品圖】皆是廠商、工作室釋出之參考，請自行評估購買，恕不接受到貨後實物與圖片不符之退換貨服務。</p>
          <p>5.、客製化預購商品，下訂後不得取消，若因個人因素取消訂單，則沒收該筆訂單之訂金，不予退款。</p>
          <p>*如有未盡事宜，貓車保有調整及最終解釋權之權利。</p>
        </div>
        <div>
          <h3>🐈商品狀況須知</h3>
          <p>１、為了避免糾紛，本賣場的注意事項請先詳讀。</p>
          <p>２、賣場商品皆為正版，請安心服用。</p>
          <p>３、長途運輸有碰撞擠壓之狀況，造成盒壓盒損之風險，盒況不一定完美，請下單朋友們互相體諒能接受再下單。</p>
          <p>４、全新商品我們無法進行拆盒查看狀況，塗裝瑕疵、溢色、掉漆、卡榫較鬆等情形均屬原廠檢驗合格之標準，本賣場不接受此原因之退換貨，完美主義者請慎重考慮再下單。</p>
          <p>５、本賣場出貨會妥善包裝好出貨，做足保護商品措施，但因暴力物流所造成的盒損並非我方可控制，希望各位朋友體諒。</p>
          <p>６、網路購物建議全程錄影開箱，以保障您的權利。</p>
          <p>－－－下單一律視為同意以上聲明－－－</p>
        </div>
      </div>
    </div>
  </div>
</template>