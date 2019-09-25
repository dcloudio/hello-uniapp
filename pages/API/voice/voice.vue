<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="uni-padding-wrap">
            <block v-if="!recording && !playing && !hasRecord">
                <view class="page-body-time">
                    <text class="time-big">{{formatedRecordTime}}</text>
                </view>
                <view class="page-body-buttons">
                    <view class="page-body-button"></view>
                    <view class="page-body-button" @click="startRecord">
                        <image src="../../../static/record.png"></image>
                    </view>
                    <view class="page-body-button"></view>
                </view>
            </block>
            <block v-if="recording === true">
                <view class="page-body-time">
                    <text class="time-big">{{formatedRecordTime}}</text>
                </view>
                <view class="page-body-buttons">
                    <view class="page-body-button"></view>
                    <view class="page-body-button" @click="stopRecord">
                        <view class="button-stop-record"></view>
                    </view>
                    <view class="page-body-button"></view>
                </view>
            </block>
            <block v-if="hasRecord === true && playing === false">
                <view class="page-body-time">
                    <text class="time-big">{{formatedPlayTime}}</text>
                    <text class="time-small">{{formatedRecordTime}}</text>
                </view>
                <view class="page-body-buttons">
                    <view class="page-body-button" @click="playVoice">
                        <image src="../../../static/play.png"></image>
                    </view>
                    <view class="page-body-button" @click="clear">
                        <image src="../../../static/trash.png"></image>
                    </view>
                </view>
            </block>
            <block v-if="hasRecord === true && playing === true">
                <view class="page-body-time">
                    <text class="time-big">{{formatedPlayTime}}</text>
                    <text class="time-small">{{formatedRecordTime}}</text>
                </view>
                <view class="page-body-buttons">
                    <view class="page-body-button" @click="stopVoice">
                        <image src="../../../static/stop.png"></image>
                    </view>
                    <view class="page-body-button" @click="clear">
                        <image src="../../../static/trash.png"></image>
                    </view>
                </view>
            </block>
        </view>
    </view>
</template>
<script>
	// #ifdef APP-PLUS
	import permision from "@/common/permission.js"
	// #endif
    var util = require('../../../common/util.js')
    var playTimeInterval = null;
    var recordTimeInterval = null;
    var recorderManager = null;
    var music = null;
    export default {
        data() {
            return {
                title: 'start/stopRecord、play/stopVoice',
                recording: false, //录音中
                playing: false, //播放中
                hasRecord: false, //是否有了一个
                tempFilePath: '',
                recordTime: 0,
                playTime: 0,
                formatedRecordTime: '00:00:00', //录音的总时间
                formatedPlayTime: '00:00:00' //播放录音的当前时间
            }
        },
        onUnload: function() {
            this.end();
        },
        onLoad: function() {
            music = uni.createInnerAudioContext();
            music.onEnded(() => {
                clearInterval(playTimeInterval)
                var playTime = 0
                console.log('play voice finished')
                this.playing = false;
                this.formatedPlayTime = util.formatTime(playTime);
                this.playTime = playTime;
            });
            recorderManager = uni.getRecorderManager();
            recorderManager.onStart(() => {
                console.log('recorder start');

                this.recording = true;
                recordTimeInterval = setInterval(() => {
                    this.recordTime += 1;
                    this.formatedRecordTime = util.formatTime(this.recordTime);
                }, 1000)
            });
            recorderManager.onStop((res) => {
                console.log('on stop');
                music.src = res.tempFilePath;

                this.hasRecord = true;
                this.recording = false;
            });
            recorderManager.onError(() => {
                console.log('recorder onError');
            });
        },
        methods: {
            async startRecord() { //开始录音
                // #ifdef APP-PLUS
                let status = await this.checkPermission();
                if (status !== 1) {
                    return;
                }
                // #endif

                // TODO ios 在没有请求过权限之前无法得知是否有相关权限，这种状态下需要直接调用录音，但没有状态或回调判断用户拒绝
                recorderManager.start({
                    format: 'mp3'
                });
            },
            stopRecord() { //停止录音
                recorderManager.stop();
                clearInterval(recordTimeInterval);
            },
            playVoice() {
                console.log('play voice');
                this.playing = true;
                playTimeInterval = setInterval(() => {
                    this.playTime += 1;
                    this.formatedPlayTime = util.formatTime(this.playTime);
                }, 1000)
                music.play();
            },
            stopVoice() {
                clearInterval(playTimeInterval)
                this.playing = false;
                this.formatedPlayTime = util.formatTime(0);
                this.playTime = 0;
                music.stop();
            },
            end() {
                music.stop();
                recorderManager.stop();
                clearInterval(recordTimeInterval)
                clearInterval(playTimeInterval);
                this.recording = false, this.playing = false, this.hasRecord = false;
                this.playTime = 0, this.recordTime = 0;
                this.formatedRecordTime = "00:00:00", this.formatedRecordTime = "00:00:00";
            },
            clear() {
                this.end();
            }
            // #ifdef APP-PLUS
            ,
            async checkPermission() {
                let status = permision.isIOS ? await permision.requestIOS('record') :
                    await permision.requestAndroid('android.permission.RECORD_AUDIO');

                if (status === null || status === 1) {
                    status = 1;
                } else if (status === 2) {
                    uni.showModal({
                        content: "系统麦克风已关闭",
                        confirmText: "确定",
                        showCancel: false,
                        success: function(res) {
                        }
                    })
                } else {
                    uni.showModal({
                        content: "需要麦克风权限",
                        confirmText: "设置",
                        success: function(res) {
                            if (res.confirm) {
                                permision.gotoAppSetting();
                            }
                        }
                    })
                }
                return status;
            }
            // #endif
        }
    }
</script>

<style>
    image {
        width: 150upx;
        height: 150upx;
    }

    .page-body-wrapper {
        justify-content: space-between;
        flex-grow: 1;
        margin-bottom: 300upx;
    }

    .page-body-time {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .time-big {
        font-size: 60upx;
        margin: 20upx;
    }

    .time-small {
        font-size: 30upx;
    }

    .page-body-buttons {
        margin-top: 60upx;
        display: flex;
        justify-content: space-around;
    }

    .page-body-button {
        width: 250upx;
        text-align: center;
    }

    .button-stop-record {
        width: 110upx;
        height: 110upx;
        border: 20upx solid #fff;
        background-color: #f55c23;
        border-radius: 130upx;
        margin: 0 auto;
    }
</style>
