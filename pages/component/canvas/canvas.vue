<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="page-body">
            <view class="page-body-wrapper">
                <!-- #ifdef APP-PLUS || H5 -->
                <canvas canvas-id="canvas" class="canvas" :start="start" :change:start="animate.start" :data-width="canvasWidth"
                    :data-height="canvasWidth"></canvas>
                <!-- #endif -->
                <!-- #ifndef APP-PLUS || H5 -->
                <canvas canvas-id="canvas" id="canvas" class="canvas"></canvas>
                <!-- #endif -->
            </view>
        </view>
    </view>
</template>

<script module="animate" lang="wxs" src="./animate.wxs"></script>

<script>
    // #ifndef APP-PLUS || H5

    var ctx = null,
        interval = null;

    function Ball(x, y, vx, vy, canvasWidth, canvasHeight, ctx) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.ctx = ctx
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.radius = 5
    }

    Ball.prototype.draw = function() {
        this.ctx.setFillStyle('#007AFF')
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        this.ctx.closePath()
        this.ctx.fill()
    }

    Ball.prototype.move = function() {
        this.x += this.vx
        this.y += this.vy
        // 回到中心
        // if (getDistance(this.x - this.canvasWidth / 2, this.y - this.canvasHeight / 2) >
        // 	getDistance(this.canvasWidth / 2, this.canvasHeight / 2) + this.radius) {
        // 	this.x = this.canvasWidth / 2
        // 	this.y = this.canvasHeight / 2
        // }

        // 边框反弹
        if (this.x < this.radius) {
            this.vx = Math.abs(this.vx)
            return
        }
        if (this.x > this.canvasWidth - this.radius) {
            this.vx = -Math.abs(this.vx)
        }
        if (this.y < this.radius) {
            this.vy = Math.abs(this.vy)
            return
        }
        if (this.y > this.canvasWidth - this.radius) {
            this.vy = -Math.abs(this.vy)
        }
    }

    function getDistance(x, y) {
        return Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5)
    }

    // #endif

    export default {
        data() {
            return {
                title: 'canvas',
                canvasWidth: 0,
                start: false,
                ballList: []
            }
        },
        onReady: function() {
            this.$nextTick(() => {
                uni.createSelectorQuery().select(".canvas").boundingClientRect(data => {
                    this.canvasWidth = data.width
                    // #ifdef APP-PLUS || H5
                    this.start = true
                    // #endif
                    // #ifndef APP-PLUS || H5
                    ctx = uni.createCanvasContext('canvas')
                    this.drawBall()
                    // #endif
                }).exec()
            })
        },
        // #ifndef APP-PLUS || H5
        onUnload: function() {
            clearInterval(interval);
        },
        methods: {
            drawBall: function() {
                var canvasWidth = this.canvasWidth,
                    canvasHeight = this.canvasWidth,
                    speed = 3,
                    ballList = [],
                    layer = 3,
                    ballInlayer = 20
                for (var i = 0; i < layer; i++) {
                    var radius = getDistance(canvasWidth / 2, canvasHeight / 2) / layer * i
                    for (var j = 0; j < ballInlayer; j++) {
                        var deg = j * 2 * Math.PI / ballInlayer,
                            sin = Math.sin(deg),
                            cos = Math.cos(deg),
                            x = radius * cos + canvasWidth / 2,
                            y = radius * sin + canvasHeight / 2,
                            vx = speed * cos,
                            vy = speed * sin
                        ballList.push(new Ball(x, y, vx, vy, canvasWidth, canvasHeight, ctx))
                    }
                }

                function animate(ballList) {
                    // ctx.clearRect(0, 0, canvasWidth, canvasHeight)
                    ballList.forEach(function(item) {
                        item.move()
                        item.draw()
                    })
                    ctx.draw()
                }

                interval = setInterval(function() {
                    animate(ballList)
                }, 17)
            }
        }
        // #endif
    }
</script>

<style>
    .page-body-wrapper {
        text-align: center;
    }

    .canvas {
        width: 610rpx;
        height: 610rpx;
        margin: auto;
        background-color: #fff;
    }
</style>
