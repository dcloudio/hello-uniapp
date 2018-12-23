<template>
  <canvas
    v-if="canvasId"
    class="ec-canvas"
    :id="canvasId"
    :canvasId="canvasId"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    @error="error">
  </canvas>
</template>

<script>
import WxCanvas from './wx-canvas';

export default {
  props: {
    echarts: {
      required: true,
      type: Object,
      default() {
        return null;
      },
    },
    onInit: {
      required: true,
      type: Function,
      default: null,
    },
    canvasId: {
      type: String,
      default: 'ec-canvas',
    },
    lazyLoad: {
      type: Boolean,
      default: false,
    },
    disableTouch: {
      type: Boolean,
      default: false,
    },
    throttleTouch: {
      type: Boolean,
      default: false,
    },
  },
	// #ifdef H5
  mounted() {
    if (!this.echarts) {
      console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" '
        + 'canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>');
      return;
    }

    if (!this.lazyLoad) this.init();
  },
	// #endif
	// #ifndef H5
	onReady() {
		if (!this.echarts) {
		  console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" '
		    + 'canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>');
		  return;
		}
		
		if (!this.lazyLoad) this.init();
	},
	// #endif
  methods: {
    init() {
      if (!this.onInit) {
        console.warn('请传入 onInit 函数进行初始化');
        return;
      }

      const { canvasId } = this;
      this.ctx = wx.createCanvasContext(canvasId);

      const canvas = new WxCanvas(this.ctx, canvasId);

      this.echarts.setCanvasCreator(() => canvas);

      const query = wx.createSelectorQuery();
      query.select(`#${canvasId}`).boundingClientRect((res) => {
        if (!res) {
          setTimeout(() => this.init(), 50);
          return;
        }
        this.chart = this.onInit(canvas, res.width, res.height);
      }).exec();
    },
    canvasToTempFilePath(opt) {
      const { canvasId } = this;
      this.ctx.draw(true, () => {
        wx.canvasToTempFilePath({
          canvasId,
          ...opt,
        });
      });
    },
    touchStart(e) {
      const { disableTouch, chart } = this;
      if (disableTouch || !chart || !e.mp.touches.length) return;
      const touch = e.mp.touches[0];
      chart._zr.handler.dispatch('mousedown', {
        zrX: touch.x,
        zrY: touch.y,
      });
      chart._zr.handler.dispatch('mousemove', {
        zrX: touch.x,
        zrY: touch.y,
      });
    },
    touchMove(e) {
      const {
        disableTouch, throttleTouch, chart, lastMoveTime,
      } = this;
      if (disableTouch || !chart || !e.mp.touches.length) return;

      if (throttleTouch) {
        const currMoveTime = Date.now();
        if (currMoveTime - lastMoveTime < 240) return;
        this.lastMoveTime = currMoveTime;
      }

      const touch = e.mp.touches[0];
      chart._zr.handler.dispatch('mousemove', {
        zrX: touch.x,
        zrY: touch.y,
      });
    },
    touchEnd(e) {
      const { disableTouch, chart } = this;
      if (disableTouch || !chart) return;
      const touch = e.mp.changedTouches ? e.mp.changedTouches[0] : {};
      chart._zr.handler.dispatch('mouseup', {
        zrX: touch.x,
        zrY: touch.y,
      });
      chart._zr.handler.dispatch('click', {
        zrX: touch.x,
        zrY: touch.y,
      });
    },
  },
};
</script>

<style scoped>
.ec-canvas {
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>
