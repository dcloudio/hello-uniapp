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
    import * as util from '../../../common/util.js'
    var playTimeInterval = null;
    var recordTimeInterval = null;
    var recorderManager = null;
    var music = null;
    export default {
        data() {
            return {
                title: 'start/stopRecord、play/stopVoice',
                recording: false, //In the recording
                playing: false, //During Playback
                hasRecord: false, //Is there a
                tempFilePath: '',
                recordTime: 0,
                playTime: 0,
                formatedRecordTime: '00:00:00', //Total time of recording
                formatedPlayTime: '00:00:00' //Play the current time of the recording
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
            async startRecord() { //Start recording
                // #ifdef APP-PLUS
                let status = await this.checkPermission();
                if (status !== 1) {
                    return;
                }
                // #endif

                // TODO ios there is no way to know if the permission is relevant until it has been requested, and this state requires a direct call to record, but there is no state or callback to determine that the user has refused
                recorderManager.start({
                    format: 'mp3'
                });
            },
            stopRecord() { //Stop Recording
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
                        content: "System microphone is turned off",
                        confirmText: "Determine",
                        showCancel: false,
                        success: function(res) {
                        }
                    })
                } else {
                    uni.showModal({
                        content: "Microphone access required",
                        confirmText: "Settings",
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
        width: 150rpx;
        height: 150rpx;
    }

    .page-body-wrapper {
        justify-content: space-between;
        flex-grow: 1;
        margin-bottom: 300rpx;
    }

    .page-body-time {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .time-big {
        font-size: 60rpx;
        margin: 20rpx;
    }

    .time-small {
        font-size: 30rpx;
    }

    .page-body-buttons {
        margin-top: 60rpx;
        display: flex;
        justify-content: space-around;
    }

    .page-body-button {
        width: 250rpx;
        text-align: center;
    }

    .button-stop-record {
        width: 110rpx;
        height: 110rpx;
        border: 20rpx solid #fff;
        background-color: #f55c23;
        border-radius: 130rpx;
        margin: 0 auto;
    }
</style>
