export default {
  data () {
    return {
      uniShow: false,
      left: 0
    }
  },
  computed: {
    moveLeft () {
      return `translateX(${this.left}px)`
    }
  },
  watch: {
    show (newVal) {
      if (this.autoClose) return
      if (newVal) {
        this.$emit('change', true)
        this.open()
      } else {
        this.$emit('change', false)
        this.close()
      }
      uni.$emit('__uni__swipe__event', this)
    }
  },
  onReady () {
    this.init()
    this.getSelectorQuery()
  },
  beforeDestoy () {
    uni.$off('__uni__swipe__event')
  },
  methods: {
    init () {
      console.log('混入', this.moveLeft)
      uni.$on('__uni__swipe__event', (res) => {
        if (res !== this && this.autoClose) {
          if (this.left !== 0) {
            this.close()
          }
        }
      })
    },
    onClick (index, item) {
      this.$emit('click', {
        content: item,
        index
      })
    },
    touchstart (e) {
      const {
        pageX
      } = e.touches[0]
      console.log('touchstart')
      if (this.disabled) return
      const left = this.position[0].left
      uni.$emit('__uni__swipe__event', this)
      this.width = pageX - left
      if (this.isopen) return
      if (this.uniShow) {
        this.uniShow = false
        this.isopen = true
        this.openleft = this.left + this.position[1].width
      }
    },
    touchmove (e, index) {
      if (this.disabled) return
      console.log('touchmove')
      const {
        pageX
      } = e.touches[0]
      this.setPosition(pageX)
    },
    touchend () {
      console.log('touchend')
      if (this.disabled) return
      if (this.isopen) {
        this.move(this.openleft, 0)
        return
      }
      this.move(this.left, -40)
    },
    setPosition (x, y) {
      console.log(!this.position[1].width, this.position[1].width)
      if (!this.position[1].width) {
        return
      }
      console.log(x, '--')
      // const width = this.position[0].width
      this.left = x - this.width
      console.log(this.left)
      this.setValue(x - this.width)
    },
    setValue (value) {
      // 设置最大最小值
      this.left = Math.max(-this.position[1].width, Math.min(parseInt(value), 0))
      this.position[0].left = this.left
      if (this.isopen) {
        this.openleft = this.left + this.position[1].width
      }
    },
    move (left, value) {
      if (left >= value) {
        this.$emit('change', false)
        this.close()
      } else {
        this.$emit('change', true)
        this.open()
      }
    },
    open () {
      this.uniShow = true
      this.left = -this.position[1].width
      this.setValue(-this.position[1].width)
    },
    close () {
      this.uniShow = true
      this.setValue(0)
      setTimeout(() => {
        this.uniShow = false
        this.isopen = false
      }, 200)
    },
    getSelectorQuery () {
      const views = uni.createSelectorQuery()
        .in(this)
      views
        .selectAll('.selector-query-hock')
        .boundingClientRect(data => {
          this.position = data
          console.log(data)
          if (this.autoClose) return
          if (this.show) {
            this.open()
          } else {
            this.close()
          }
        })
        .exec()
    }
  }
}
