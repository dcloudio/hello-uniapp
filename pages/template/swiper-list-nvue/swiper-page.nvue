<template>
    <view class="uni-swiper-page">
        <list ref="list" class="list" :offset-accuracy="5" :bounce="false" fixFreezing="true">
            <cell v-for="(item, index) in dataList" :key="item.id" :ref="'item'+index">
                <view class="list-item">
                    <text>{{item.name}}</text>
                </view>
            </cell>
            <cell class="loading"></cell>
        </list>
    </view>
</template>

<script>
    export default {
        props: {
            pid: {
                type: [Number, String],
                default: ''
            },
            parentId: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                scrollable: true,
                dataList: []
            }
        },
        created() {
            for (var i = 0; i < 30; i++) {
                this.dataList.push({
                    id: i,
                    name: i
                });
            }
        },
        methods: {
            setScrollRef(height) {
                if (this.$refs['list'].setSpecialEffects) {
                    this.$refs['list'].setSpecialEffects({
                        id: this.parentId,
                        headerHeight: height
                    });
                }
            },
            loadData() {
                // 首次激活时被调用
            },
            clear() {
                // 释放数据时被调用，参考 swiper-list 缓存配置
                this.dataList.length = 0;
            }
        }
    }
</script>

<style scoped>
    .uni-swiper-page {
        flex: 1;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .list {
        flex: 1;
        background-color: #ebebeb;
    }

    .list-item {
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 12px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
    }

    .loading {
        height: 20px;
    }
</style>
