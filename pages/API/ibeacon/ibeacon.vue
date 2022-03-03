<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-btn-v">
        <button type="primary" :disabled="isOpen" @click="openBluetoothAdapter">
          Turn on the Bluetooth module
        </button>
        <button
          type="primary"
          :disabled="!isOpen"
          @click="closeBluetoothAdapter"
        >
          Turn off the Bluetooth module
        </button>
        <button
          type="primary"
          :disabled="!isOpen || isStarted"
          :loading="isStarted"
          @click="startBeaconDiscovery"
        >
          Start searching for nearby iBeacon devices
        </button>
        <button
          type="primary"
          :disabled="!isStarted"
          @click="stopBeaconDiscovery"
        >
          停止搜索附近的iBeacon设备
        </button>
      </view>
    </view>
    <scroll-view class="uni-scroll_box">
      <view class="uni-title" v-if="isStarted || deviceList.length > 0"
        >Already found {{ deviceList.length }} equipments:</view
      >
      <view
        class="uni-list-box"
        v-for="(item, index) in deviceList"
        :key="item.uuid"
      >
        <view>
          <view class="uni-list_name">UUID: {{ item.uuid }}</view>
          <view class="uni-list_item">major: {{ item.major }}</view>
          <view class="uni-list_item">minor: {{ item.minor }}</view>
          <view class="uni-list_item">rssi: {{ item.rssi }} dBm</view>
          <view class="uni-list_item">accuracy: {{ item.accuracy }}</view>
          <view class="uni-list_item">heading: {{ item.heading }}</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
const DEVICE_UUID_WEICHAT = "FDA50693-A4E2-4FB1-AFCF-C6EB07647825";
export default {
  data() {
    return {
      title: "iBeacon",
      isOpen: false,
      isStarted: false,
      deviceList: [],
      isPageOpened: false,
    };
  },
  onLoad() {
    this.onBeaconUpdate();
  },
  onShow() {
    this.isPageOpened = true;
  },
  methods: {
    maskclose() {
      this.maskShow = false;
    },
    openBluetoothAdapter() {
      uni.openBluetoothAdapter({
        success: (res) => {
          console.log("Initialize Bluetooth successfully:" + res.errMsg);
          console.log(res);
          this.isOpen = true;
          this.deviceList = [];
        },
        fail: (err) => {
          console.log(
            "Initialization of Bluetooth failed, error code:" +
              (err.errCode || err.errMsg)
          );
          if (err.errCode !== 0) {
            initTypes(err.errCode, err.errMsg);
          }
        },
      });
    },
    closeBluetoothAdapter(OBJECT) {
      this.stopBeaconDiscovery();
      wx.closeBluetoothAdapter({
        success: (res) => {
          this.isOpen = false;
          console.log("Disconnect Bluetooth module successfully");
        },
      });
    },
    onBeaconUpdate() {
      uni.onBeaconUpdate((res) => {
        if (!this.isPageOpened || !this.isOpen || !this.isStarted) {
          return;
        }
        console.log(res);
        // if (res.code !== 0) {
        // 	return;
        // }
        if (res.beacons && res.beacons.length > 0) {
          this.getBeacons();
        } else if (!res.connected) {
          this.deviceList = [];
        }
      });
    },
    startBeaconDiscovery() {
      uni.startBeaconDiscovery({
        uuids: this.getUUIDList(),
        success: (res) => {
          this.isStarted = true;
          console.log(res);
        },
        fail: (err) => {
          console.error(err);
        },
      });
    },
    stopBeaconDiscovery(types) {
      if (this.isStarted) {
        uni.stopBeaconDiscovery({
          success: (res) => {
            this.isStarted = false;
          },
          fail: (err) => {
            console.error(err);
          },
        });
      }
    },
    getBeacons() {
      uni.getBeacons({
        success: (res) => {
          if (res.beacons && res.beacons.length > 0) {
            console.log(res.beacons);
            this.deviceList = res.beacons;
          }
        },
        fail: (err) => {
          console.log(
            "Failed to get device service, error code：" + err.errCode
          );
          if (errCode.errCode !== 0) {
            initTypes(errCode.errCode);
          }
        },
      });
    },
    getUUIDList() {
      // #ifdef APP-PLUS
      const sysInfo = uni.getSystemInfoSync();
      if (!sysInfo) {
        return [];
      }
      let isIOS = sysInfo.platform
        ? sysInfo.platform.toLowerCase() === "ios"
        : false;
      if (isIOS) {
        return [DEVICE_UUID_WEICHAT];
      }
      return [];
      // #endif

      // #ifndef APP-PLUS
      return [DEVICE_UUID_WEICHAT];
      // #endif
    },
  },
  onUnload() {
    this.isPageOpened = false;
  },
};

/**
 * 判断初始化蓝牙状态
 */
function initTypes(code, errMsg) {
  switch (code) {
    case 10000:
      toast("Bluetooth adapter not initialized");
      break;
    case 10001:
      toast("Bluetooth is not detected, please open Bluetooth and try again！");
      break;
    case 10002:
      toast("No specified device found");
      break;
    case 10003:
      toast("Connection failure");
      break;
    case 10004:
      toast("No specified service found");
      break;
    case 10005:
      toast("The specified feature value was not found");
      break;
    case 10006:
      toast("Current connection is disconnected");
      break;
    case 10007:
      toast("The current feature value does not support this operation");
      break;
    case 10008:
      toast("All remaining exceptions reported by the system");
      break;
    case 10009:
      toast("Android-specific, no BLE support for system versions below 4.3");
      break;
    default:
      toast(errMsg);
  }
}

/**
 * 弹出框封装
 */
function toast(content, showCancel = false) {
  uni.showModal({
    title: "提示",
    content,
    showCancel,
  });
}
</script>

<style>
.uni-title {
  /* width: 100%; */
  /* height: 80rpx; */
  text-align: center;
}

.uni-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 30rpx;
  box-sizing: border-box;
}

.uni-scroll_box {
  height: 70%;
  background: #fff;
  border-radius: 20rpx;
}

.uni-list-box {
  margin: 0 20rpx;
  padding: 15rpx 0;
  border-bottom: 1px #f5f5f5 solid;
  box-sizing: border-box;
}

.uni-list:last-child {
  border: none;
}

.uni-list_name {
  font-size: 30rpx;
  color: #333;
}

.uni-list_item {
  font-size: 24rpx;
  color: #555;
  line-height: 1.5;
}

.uni-success_box {
  position: absolute;
  left: 0;
  bottom: 0;
  min-height: 100rpx;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  border-top: 1px #eee solid;
}

.uni-success_sub {
  /* width: 100%%; */
  height: 100rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30rpx;
}

.uni-close_button {
  padding: 0 20rpx;
  height: 60rpx;
  line-height: 60rpx;
  background: #ce3c39;
  color: #ffffff;
  border-radius: 10rpx;
}

.uni-success_content {
  height: 600rpx;
  margin: 30rpx;
  margin-top: 0;
  border: 1px #eee solid;
  padding: 30rpx;
}

.uni-content_list {
  padding-bottom: 10rpx;
  border-bottom: 1px #f5f5f5 solid;
}

.uni-tips {
  text-align: center;
  font-size: 24rpx;
  color: #666;
}
</style>
