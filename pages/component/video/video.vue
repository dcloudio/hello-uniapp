<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap uni-common-mt" v-if="showVideo">
      <view>
        <video
          id="myVideo"
          src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
          @error="videoErrorCallback"
          :danmu-list="danmuList"
          enable-danmu
          danmu-btn
          controls
          poster="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b1476d40-4e5f-11eb-b997-9918a5dda011.png"
        ></video>
      </view>
      <!-- #ifndef MP-ALIPAY || MP-TOUTIAO || MP-KUAISHOU || MP-LARK || MP-JD -->
      <view class="uni-list uni-common-mt">
        <view class="uni-list-cell">
          <view>
            <view class="uni-label" style="width: unset">Pop-up content</view>
          </view>
          <view class="uni-list-cell-db">
            <input
              v-model="danmuValue"
              class="uni-input"
              type="text"
              placeholder="Enter the content of the pop-up here"
            />
          </view>
        </view>
      </view>
      <view class="uni-btn-v">
        <button @click="sendDanmu" class="page-body-button">
          Sending pop-ups
        </button>
      </view>
      <!-- #endif -->
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      title: "video",
      src: "",
      danmuList: [
        {
          text: "The pop-ups that appear in the first 1s",
          color: "#ff0000",
          time: 1,
        },
        {
          text: "The pop-ups that appear in the 3rds",
          color: "#ff00ff",
          time: 3,
        },
      ],
      danmuValue: "",
      showVideo: false,
    };
  },
  onReady: function (res) {
    // #ifndef MP-ALIPAY || MP-TOUTIAO
    this.videoContext = uni.createVideoContext("myVideo");
    // #endif
    // #ifdef APP-PLUS || MP-BAIDU
    setTimeout(() => {
      this.showVideo = true;
    }, 350);
    // #endif
    // #ifndef APP-PLUS || MP-BAIDU
    this.showVideo = true;
    // #endif
  },
  methods: {
    sendDanmu: function () {
      this.videoContext.sendDanmu({
        text: this.danmuValue,
        color: this.getRandomColor(),
      });
      this.danmuValue = "";
    },
    videoErrorCallback: function (e) {
      uni.showModal({
        content: e.target.errMsg,
        showCancel: false,
      });
    },
    getRandomColor: function () {
      const rgb = [];
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length == 1 ? "0" + color : color;
        rgb.push(color);
      }
      return "#" + rgb.join("");
    },
  },
};
</script>

<style>
video {
  width: 690rpx;
  width: 100%;
  height: 400px;
}
.uni-label {
  word-wrap: break-word;
  word-break: break-all;
  text-indent: 20rpx;
}
</style>
