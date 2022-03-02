<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="text-box" scroll-y="true">
        <text>{{ text }}</text>
      </view>
      <view class="uni-btn-v">
        <button type="primary" :disabled="!canAdd" @click="add">
          add line
        </button>
        <button type="warn" :disabled="!canRemove" @click="remove">
          remove line
        </button>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      title: "text",
      texts: [
        "HBuilder, the IDE chosen by 4 million developers",
        "MUI, the lightweight, beautiful front-end open source framework",
        "wap2app, M-site fast conversion native experience app",
        "5+Runtime, native wings for HTML5",
        "HBuilderX, lightweight, extremely fast, geeky editor",
        "uni-app, the ultimate cross-platform solution",
        "HBuilder, the IDE chosen by 4 million developers",
        "MUI, lightweight, beautiful front-end open source framework",
        "wap2app, M-site fast conversion native experience app",
        "5+Runtime, native wings for HTML5",
        "HBuilderX, lightweight, extremely fast, geeky editor",
        "uni-app, the ultimate cross-platform solution",
        "......",
      ],
      text: "",
      canAdd: true,
      canRemove: false,
      extraLine: [],
    };
  },
  methods: {
    add: function (e) {
      this.extraLine.push(this.texts[this.extraLine.length % 12]);
      this.text = this.extraLine.join("\n");
      this.canAdd = this.extraLine.length < 12;
      this.canRemove = this.extraLine.length > 0;
    },
    remove: function (e) {
      if (this.extraLine.length > 0) {
        this.extraLine.pop();
        this.text = this.extraLine.join("\n");
        this.canAdd = this.extraLine.length < 12;
        this.canRemove = this.extraLine.length > 0;
      }
    },
  },
};
</script>

<style>
.text-box {
  margin-bottom: 40rpx;
  padding: 40rpx 0;
  display: flex;
  min-height: 300rpx;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30rpx;
  color: #353535;
  line-height: 1.8;
}
</style>
