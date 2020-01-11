function Ball({
    x,
    y,
    vx,
    vy,
    canvasWidth,
    canvasHeight,
    ctx
}) {
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
    this.ctx.beginPath()
    this.ctx.fillStyle = '#007AFF'
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

export default {
    data() {
        return {}
    },
    methods: {
        start(newVal, oldVal, owner, ins) {
            let canvasWidth = ins.getDataset().width,
                canvasHeight = ins.getDataset().height,
                canvasEle = document.querySelectorAll('.canvas>canvas')[0],
                ctx = canvasEle.getContext('2d'),
                speed = 3,
                ballList = [],
                layer = 3,
                ballInlayer = 20
            for (let i = 0; i < layer; i++) {
                let radius = getDistance(canvasWidth / 2, canvasHeight / 2) / layer * i
                for (let j = 0; j < ballInlayer; j++) {
                    let deg = j * 2 * Math.PI / ballInlayer,
                        sin = Math.sin(deg),
                        cos = Math.cos(deg),
                        x = radius * cos + canvasWidth / 2,
                        y = radius * sin + canvasHeight / 2,
                        vx = speed * cos,
                        vy = speed * sin
                    ballList.push(new Ball({
                        x,
                        y,
                        vx,
                        vy,
                        canvasWidth,
                        canvasHeight,
                        ctx,
                        radius: 5
                    }))
                }
            }

            function animate(ballList) {
                ctx.clearRect(0, 0, canvasEle.width, canvasEle.height)
                ballList.forEach(function(item) {
                    item.move()
                    item.draw()
                })
                requestAnimationFrame(function() {
                    animate(ballList)
                })
            }
            animate(ballList)
        }
    }
}
