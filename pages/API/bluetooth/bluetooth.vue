<template>
  <view>
    <page-head :title="title"></page-head>
    <view class="uni-padding-wrap uni-common-mt">
      <view>
        This Bluetooth protocol only supports low-power Bluetooth protocol ble.
        if you want to connect non-ble Bluetooth devices, please search for
        Native.js Bluetooth in the community.
      </view>
      <view class="uni-btn-v">
        <button
          type="primary"
          :disabled="disabled[0]"
          @click="openBluetoothAdapter"
        >
          Initialize Bluetooth module
        </button>
        <view v-if="!adapterState.available">
          {{
            "Bluetooth adapter is not available, please initialize the Bluetooth module"
          }}
        </view>
        <button
          type="primary"
          :loading="searchLoad"
          :disabled="disabled[1]"
          @click="startBluetoothDevicesDiscovery"
        >
          Start searching for Bluetooth devices
        </button>
        <button
          type="primary"
          :disabled="disabled[2]"
          @click="stopBluetoothDevicesDiscovery(false)"
        >
          Stop searching for Bluetooth devices
        </button>
        <button
          type="primary"
          :loading="newDeviceLoad"
          :disabled="disabled[3]"
          @click="queryDevices"
        >
          Select Equipment
        </button>
        <view v-if="equipment.length > 0">
          {{
            (connected ? "Connected Devices" : "Selected devices") +
            " : " +
            equipment[0].name +
            " (" +
            equipment[0].deviceId +
            ")"
          }}
        </view>
        <button
          type="primary"
          :disabled="disabled[4]"
          @click="createBLEConnection"
        >
          Connecting Bluetooth devices
        </button>
        <button
          type="primary"
          :disabled="disabled[5]"
          @click="getBLEDeviceServices"
        >
          Select Equipment Service
        </button>
        <view v-if="servicesData.length > 0"
          >已选服务uuid：{{ servicesData[0].uuid }}</view
        >
        <button
          type="primary"
          :disabled="disabled[6]"
          @click="getBLEDeviceCharacteristics"
        >
          Get the characteristic value of the service
        </button>
        <view v-if="characteristicsData.length > 0">
          <view class="uni-list_name"
            >uuid:{{ characteristicsData[0].uuid }}</view
          >
          <view class="uni-list_item">
            Whether read operation is supported:{{
              characteristicsData[0].properties.read
            }}
          </view>
          <view class="uni-list_item">
            Whether write operation is supported:{{
              characteristicsData[0].properties.write
            }}
          </view>
          <view class="uni-list_item">
            Whether to support notify operation:{{
              characteristicsData[0].properties.notify
            }}
          </view>
          <view class="uni-list_item">
            Whether indicate operation is supported:{{
              characteristicsData[0].properties.indicate
            }}
          </view>
        </view>
        <!-- <button type="primary" :disabled="disabled[7]" @click="readBLECharacteristicValue">
					读取特征值数据
				</button>
				<view v-if="valueChangeData.serviceId">
					<view class="list-name">
						特征值最新的值:{{ valueChangeData.value || '还没有最新值' }}
					</view>
				</view> -->
        <!-- <button type="primary" :disabled="disabled[8]" @click="w">写入特征值数据</button> -->
        <button
          type="primary"
          :disabled="disabled[9]"
          @click="closeBLEConnection"
        >
          Disconnecting Bluetooth devices
        </button>
        <button
          type="primary"
          :disabled="disabled[10]"
          @click="closeBluetoothAdapter"
        >
          Turn off the Bluetooth module
        </button>
      </view>
    </view>
    <!-- 遮罩 -->
    <view
      v-if="maskShow"
      class="uni-mask"
      @touchmove.stop.prevent="moveHandle"
      @click="maskclose"
    >
      <scroll-view
        class="uni-scroll_box"
        scroll-y
        @touchmove.stop.prevent="moveHandle"
        @click.stop="moveHandle"
      >
        <view class="uni-title">
          Already found{{ list.length
          }}{{ showMaskType === "device" ? "Equipment" : "Services" }}:
        </view>
        <view
          class="uni-list-box"
          v-for="(item, index) in list"
          :key="index"
          @click="tapQuery(item)"
        >
          <view v-if="showMaskType === 'device'">
            <view class="uni-list_name">{{ item.name || item.localName }}</view>
            <view class="uni-list_item"
              >Signal strength:{{ item.RSSI }}dBm</view
            >
            <view class="uni-list_item">UUID:{{ item.deviceId }}</view>
            <!-- <view class="list-item" v-if="showMaskType === 'device'">
							Service数量:{{ item.advertisServiceUUIDs.length }}
						</view> -->
          </view>
          <view v-if="showMaskType === 'service'">
            <view class="uni-list_item" style="line-height: 2.2">
              UUID: {{ item.uuid }}
              <text v-if="showMaskType === 'service'">
                {{ item.isPrimary ? "(Master Service)" : "" }}
              </text>
            </view>
          </view>
          <view v-if="showMaskType === 'characteristics'">
            <view class="uni-list_name">uuid:{{ item.uuid }}</view>
            <view class="uni-list_item"
              >Whether read operation is supported:{{
                item.properties.read
              }}</view
            >
            <view class="uni-list_item">
              Whether write operation is supported:{{ item.properties.write }}
            </view>
            <view class="uni-list_item">
              Whether to support notify operation:{{ item.properties.notify }}
            </view>
            <view class="uni-list_item">
              Whether indicate operation is supported:{{
                item.properties.indicate
              }}
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      title: "bluetooth",
      disabled: [
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      newDeviceLoad: false,
      searchLoad: false,
      maskShow: false,
      equipment: [],
      adapterState: {
        discovering: false,
        available: false,
      },
      connected: false,
      showMaskType: "device",
      servicesData: [],
      characteristicsData: [],
      valueChangeData: {},
      isStop: true,
      list: [],
    };
  },
  onLoad() {
    this.onBLEConnectionStateChange();
  },
  methods: {
    moveHandle() {},
    /**
     * 关闭遮罩
     */
    maskclose() {
      this.maskShow = false;
    },
    /**
     * 选择设备
     */
    queryDevices() {
      // this.newDeviceLoad = true;
      this.showMaskType = "device";
      this.maskShow = true;
    },
    tapQuery(item) {
      if (this.showMaskType === "device") {
        this.$set(this.disabled, 4, false);
        if (this.equipment.length > 0) {
          this.equipment[0] = item;
        } else {
          this.equipment.push(item);
        }
        this.newDeviceLoad = false;
      }
      if (this.showMaskType === "service") {
        this.$set(this.disabled, 6, false);
        if (this.servicesData.length > 0) {
          this.servicesData[0] = item;
        } else {
          this.servicesData.push(item);
        }
      }
      if (this.showMaskType === "characteristics") {
        this.$set(this.disabled, 7, false);
        if (this.characteristicsData.length > 0) {
          this.characteristicsData[0] = item;
        } else {
          this.characteristicsData.push(item);
        }
      }
      this.maskShow = false;
    },
    /**
     * 初始化蓝牙设备
     */
    openBluetoothAdapter() {
      uni.openBluetoothAdapter({
        success: (e) => {
          console.log("Initialize Bluetooth successfully:" + e.errMsg);
          console.log(JSON.stringify(e));
          this.isStop = false;
          this.$set(this.disabled, 0, true);
          this.$set(this.disabled, 1, false);
          this.$set(this.disabled, 10, false);
          this.getBluetoothAdapterState();
        },
        fail: (e) => {
          console.log(e);
          console.log("Initialization of Bluetooth failed, error code：" + (e.errCode || e.errMsg));
          if (e.errCode !== 0) {
            initTypes(e.errCode, e.errMsg);
          }
        },
      });
    },
    /**
     * 开始搜索蓝牙设备
     */
    startBluetoothDevicesDiscovery() {
      uni.startBluetoothDevicesDiscovery({
        success: (e) => {
          console.log("Start searching for Bluetooth devices:" + e.errMsg);
          this.searchLoad = true;
          this.$set(this.disabled, 1, true);
          this.$set(this.disabled, 2, false);
          this.$set(this.disabled, 3, false);
          this.onBluetoothDeviceFound();
        },
        fail: (e) => {
          console.log("Failed to search for Bluetooth devices, error codeFailed to search for Bluetooth devices, error code：" + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        },
      });
    },
    /**
     * Stop searching for Bluetooth devices
     */
    stopBluetoothDevicesDiscovery(types) {
      uni.stopBluetoothDevicesDiscovery({
        success: (e) => {
          console.log("Stop searching for Bluetooth devices:" + e.errMsg);
          if (types) {
            this.$set(this.disabled, 1, true);
          } else {
            this.$set(this.disabled, 1, false);
          }
          this.$set(this.disabled, 2, true);
          // this.$set(this.disabled, 3, true);
          this.searchLoad = false;
        },
        fail: (e) => {
          console.log("Failed to stop searching for Bluetooth devices, error code" + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        },
      });
    },
    /**
     * 发现外围设备
     */
    onBluetoothDeviceFound() {
      uni.onBluetoothDeviceFound((devices) => {
        console.log("Start listening for events when a new device is found");
        // this.$set(this.disabled, 3, false);
        this.getBluetoothDevices();
      });
    },
    /**
     * Gets all discovered Bluetooth devices while the Bluetooth module is in effect. This includes devices that are already in a connected state with the unit.
     */
    getBluetoothDevices() {
      uni.getBluetoothDevices({
        success: (res) => {
          this.newDeviceLoad = false;
          console.log("Get Bluetooth device successfully:" + res.errMsg);
          // console.log(JSON.stringify(res))
          this.list = res.devices;
        },
        fail: (e) => {
          console.log("Get Bluetooth device error, error code：" + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        },
      });
    },
    /**
     * Get local Bluetooth adapter status
     */
    getBluetoothAdapterState() {
      console.log("--->");
      uni.getBluetoothAdapterState({
        success: (res) => {
          console.log(JSON.stringify(res));
          this.adapterState = res;
        },
        fail: (e) => {
          console.log("Failed to get local Bluetooth adapter status, error code：" + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        },
      });
    },
    /**
     * Connect low-power Bluetooth
     */
    createBLEConnection() {
      let deviceId = this.equipment[0].deviceId;
      uni.showToast({
        title: "Connect Bluetooth...",
        icon: "loading",
        duration: 99999,
      });
      uni.createBLEConnection({
        // The deviceId here needs to have been linked to the corresponding device via createBLEConnection
        deviceId,
        success: (res) => {
          console.log(res);
          console.log("Bluetooth connection successful:" + res.errMsg);
          // Disconnects the search after connecting the device and cannot search the device
          this.stopBluetoothDevicesDiscovery(true);
          uni.hideToast();
          uni.showToast({
            title: "Connection successful",
            icon: "success",
            duration: 2000,
          });
          this.$set(this.disabled, 3, true);
          this.$set(this.disabled, 4, true);
          this.$set(this.disabled, 5, false);
          this.$set(this.disabled, 9, false);
          this.connected = true;
        },
        fail: (e) => {
          console.log("Failed to connect to low-power Bluetooth, error code:" + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        },
      });
    },
    /**
     * Disconnecting from low-power Bluetooth devices
     */
    closeBLEConnection() {
      let deviceId = this.equipment[0].deviceId;
      uni.closeBLEConnection({
        deviceId,
        success: (res) => {
          console.log(res);
          console.log("Disconnect low-power Bluetooth successfully:" + res.errMsg);
          this.$set(this.disabled, 1, false);
          this.$set(this.disabled, 3, true);
          this.$set(this.disabled, 4, true);
          this.$set(this.disabled, 5, true);
          this.$set(this.disabled, 6, true);
          this.$set(this.disabled, 7, true);
          this.$set(this.disabled, 8, true);
          this.$set(this.disabled, 9, true);
          this.equipment = [];
          this.servicesData = [];
          this.characteristicsData = [];
        },
        fail: (e) => {
          console.log("Disconnect low-power Bluetooth successfully，Error Code：" + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        },
      });
    },
    /**
     * 获取所有服务
     */
    getBLEDeviceServices() {
      let deviceId = this.equipment[0].deviceId;
      console.log("Get all services of the uuid:" + deviceId);

      uni.getBLEDeviceServices({
        // The deviceId here needs to have been linked to the corresponding device via createBLEConnection
        deviceId,
        success: (res) => {
          console.log(JSON.stringify(res.services));
          console.log("Get Device Service Success:" + res.errMsg);
          this.$set(this.disabled, 7, true);
          this.$set(this.disabled, 8, true);
          this.showMaskType = "service";
          this.list = res.services;

          this.characteristicsData = [];
          if (this.list.length <= 0) {
            toast("Failed to get service, please try again!");
            return;
          }
          this.maskShow = true;
        },
        fail: (e) => {
          console.log("Failed to get device service，Error Code：" + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        },
      });
    },
    /**
     * Get all feature values under a service
     */
    getBLEDeviceCharacteristics() {
      let deviceId = this.equipment[0].deviceId;
      let serviceId = this.servicesData[0].uuid;
      console.log(deviceId);
      console.log(serviceId);
      uni.getBLEDeviceCharacteristics({
        // The deviceId here needs to have been linked to the corresponding device via createBLEConnection
        deviceId,
        // The serviceId here is obtained in the getBLEDeviceServices interface
        serviceId,
        success: (res) => {
          console.log(JSON.stringify(res));
          console.log("Get feature value successfully:" + res.errMsg);
          this.$set(this.disabled, 7, true);
          this.valueChangeData = {};
          this.showMaskType = "characteristics";
          this.list = res.characteristics;
          if (this.list.length <= 0) {
            toast("Failed to get feature value, please try again!");
            return;
          }
          this.maskShow = true;
        },
        fail: (e) => {
          console.log("Failed to get feature value,Error Code：" + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        },
      });
    },
    /**
     * Listen for events that change the state of the low-power Bluetooth connection. This includes developer initiated connection or disconnection, device loss, abnormal connection disconnection, etc.
     */
    onBLEConnectionStateChange() {
      uni.onBLEConnectionStateChange((res) => {
        // This method callback can be used to handle exceptions such as unexpected connection disconnection
        console.log(`Bluetooth connection status -------------------------->`);
        console.log(JSON.stringify(res));
        if (!res.connected) {
          if (this.isStop) return;
          console.log("Disconnect low-power Bluetooth successfully:");
          this.$set(this.disabled, 1, false);
          this.$set(this.disabled, 3, true);
          this.$set(this.disabled, 4, true);
          this.$set(this.disabled, 5, true);
          this.$set(this.disabled, 6, true);
          this.$set(this.disabled, 7, true);
          this.$set(this.disabled, 8, true);
          this.$set(this.disabled, 9, true);
          this.searchLoad = false;
          this.equipment = [];
          this.servicesData = [];
          this.characteristicsData = [];
          this.valueChangeData = {};
          toast("The current Bluetooth connection has been disconnected");
        }
      });
    },
    /**
     * Reads the binary data value of a low-power Bluetooth device's feature value. Note: The device must support read as a feature value for the call to succeed.
     */
    readBLECharacteristicValue() {
      let deviceId = this.equipment[0].deviceId;
      let serviceId = this.servicesData[0].uuid;
      let characteristicId = this.characteristicsData[0].uuid;
      console.log(deviceId);
      console.log(serviceId);
      console.log(characteristicId);
      uni.readBLECharacteristicValue({
        // The deviceId here needs to have been linked to the corresponding device via createBLEConnection
        deviceId,
        // The serviceId here is obtained in the getBLEDeviceServices interface
        serviceId,
        // The characteristicId here is obtained in the getBLEDeviceCharacteristics interface
        characteristicId,
        success: (res) => {
          console.log("Read device data value successfully");
          console.log(JSON.stringify(res));
          this.notifyBLECharacteristicValueChange();
        },
        fail(e) {
          console.log("Failed to read device data value, Error Code：" + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        },
      });
      this.onBLECharacteristicValueChange();
    },
    /**
     * Listens for feature value change events for low-power Bluetooth devices. The notifyBLECharacteristicValueChange interface must be enabled before you can receive the notification from the device.
     */
    onBLECharacteristicValueChange() {
      // The callback must be here to get the
      uni.onBLECharacteristicValueChange((characteristic) => {
        console.log("Listening for low-power Bluetooth device feature value change events successful");
        console.log(JSON.stringify(characteristic));
        this.valueChangeData = characteristic;
      });
    },
    /**
     * The uni.onBLECharacteristicValueChange callback is triggered only when the device actively updates the value of the characteristic value after a successful subscription operation.
     */
    notifyBLECharacteristicValueChange() {
      let deviceId = this.equipment[0].deviceId;
      let serviceId = this.servicesData[0].uuid;
      let characteristicId = this.characteristicsData[0].uuid;
      let notify = this.characteristicsData[0].properties.notify;
      console.log(deviceId);
      console.log(serviceId);
      console.log(characteristicId);
      console.log(notify);
      uni.notifyBLECharacteristicValueChange({
        state: true, // Enable the notify function
        // The deviceId here needs to have been linked to the corresponding device via createBLEConnection
        deviceId,
        // The serviceId here is obtained in the getBLEDeviceServices interface
        serviceId,
        // The characteristicId here is obtained in the getBLEDeviceCharacteristics interface
        characteristicId,
        success(res) {
          console.log(
            "notifyBLECharacteristicValueChange success:" + res.errMsg
          );
          console.log(JSON.stringify(res));
        },
      });
    },
    /**
     * 	Disconnect the Bluetooth module
     */
    closeBluetoothAdapter(OBJECT) {
      uni.closeBluetoothAdapter({
        success: (res) => {
          console.log("Disconnect the Bluetooth module success.");
          this.isStop = true;
          this.$set(this.disabled, 0, false);
          this.$set(this.disabled, 1, true);
          this.$set(this.disabled, 2, true);
          this.$set(this.disabled, 3, true);
          this.$set(this.disabled, 4, true);
          this.$set(this.disabled, 5, true);
          this.$set(this.disabled, 6, true);
          this.$set(this.disabled, 7, true);
          this.$set(this.disabled, 8, true);
          this.$set(this.disabled, 9, true);
          this.$set(this.disabled, 10, true);
          this.equipment = [];
          this.servicesData = [];
          this.characteristicsData = [];
          this.valueChangeData = {};
          this.adapterState = [];
          this.searchLoad = false;
          toast("Disconnect the Bluetooth module");
        },
      });
    },
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
    title: "Tips",
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
