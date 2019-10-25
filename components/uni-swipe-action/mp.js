export default {
  data () {
    return {
      position: [],
      button: []
    }
  },
  computed: {
    pos () {
      return JSON.stringify(this.position)
    },
    btn () {
      return JSON.stringify(this.button)
    }
  },
  watch: {
    show (newVal) {
      if (this.autoClose) return
      let valueObj = this.position[0]
      if (!valueObj) return
      valueObj.show = newVal
      this.$set(this.position, 0, valueObj)
    }
  },
  // #ifdef H5
  mounted () {
    this.init()
    this.getSize()
    this.getButtonSize()
  },
  // #endif
  // #ifndef H5
  onReady () {
    this.init()
    this.getSize()
    this.getButtonSize()
  },
  // #endif
  methods: {
    init () {
      uni.$on('__uni__swipe__event', (res) => {
        if (res !== this && this.autoClose) {
          let valueObj = this.position[0]
          valueObj.show = false
          this.$set(this.position, 0, valueObj)
        }
      })
    },
    openSwipe () {
      uni.$emit('__uni__swipe__event', this)
    },
    change (e) {
      this.$emit('change', e.open)
      let valueObj = this.position[0]
      valueObj.show = e.open
      this.$set(this.position, 0, valueObj)
      // console.log('改变', e);
    },
    onClick (index, item) {
      this.$emit('click', {
        content: item,
        index
      })
    },
    getSize () {
      const views = uni.createSelectorQuery().in(this)
      views
        .selectAll('.selector-query-hock')
        .boundingClientRect(data => {
          if (this.autoClose) {
            data[0].show = false
          } else {
            data[0].show = this.show
          }
          this.position = data
        })
        .exec()
    },
    getButtonSize () {
      const views = uni.createSelectorQuery().in(this)
      views
        .selectAll('.button-hock')
        .boundingClientRect(data => {
          this.button = data
        })
        .exec()
    }
  }
}
