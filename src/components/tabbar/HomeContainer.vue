<template>
  <div class="cms-content">
    <!-- slider 列表组件 -->
    <mt-swipe :auto="4000" class="sliderPic">
      <mt-swipe-item v-for="item in sliderList" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 cms-nav-link">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      sliderList: []
    };
  },
  created() {
    this.getSliderAll();
  },
  methods: {
    getSliderAll() {
      axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(res => {
        if (res.data.status == 0) {
          this.sliderList = res.data.message;
        } else {
          Toast("图片数据请求失败");
        }
      });
    }
  }
};
</script>

<style scope>
.cms-content {
    background-color: #fff;
}
.sliderPic {
  height: 130px;
}
.sliderPic img {
  width: 100%;
}
.mui-grid-view.cms-nav-link {
    background-color: #fff;
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-media {
    width: 33.3333%;
    border: none;
}

.mui-grid-view.mui-grid-9 .mui-media img {
    width: 50%;
}

</style>