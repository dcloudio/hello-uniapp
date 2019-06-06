<template>
	<view class="qiun-columns">
		<view class="qiun-padding" style="font-size: 32upx;">
			<text>{{tips}}</text>
		</view>
		<view class="qiun-padding">
			<view class="qiun-tip" @tap="changeData()">修改柱状图数据</view>
		</view>
		<view class="qiun-title-bar" style="background-color: #E5FDC3;">
			<view class="qiun-title-dot-light">柱状图</view>
		</view>
		<view class="qiun-charts" style="background-color: #E5FDC3;">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #E5FDC3;" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #E5FDC3;"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">温度计式图表</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasColumnMeter" id="canvasColumnMeter" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
			 @touchstart="touchColumnMeter"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasColumnMeter" id="canvasColumnMeter" class="charts" @touchstart="touchColumnMeter"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">混合图（单坐标系支持画点、线、面、柱）</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasMix" id="canvasMix" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
			 disable-scroll=true @touchstart="touchMix" @touchmove="moveMix" @touchend="touchEndMix"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasMix" id="canvasMix" class="charts" disable-scroll=true @touchstart="touchMix" @touchmove="moveMix"
			 @touchend="touchEndMix"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt qiun-rows">
			<view class="qiun-title-dot-light">K线图（蜡烛图）</view>
			<view style="flex: 1;qiun-rows;text-align: right;">
				<button type="default" size="mini" @tap="tapButton('in')">放大</button>
				<button type="default" size="mini" style="margin-left: 20upx;" @tap="tapButton('out')">缩小</button>
			</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
			 disable-scroll=true @touchstart="touchCandle" @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" disable-scroll=true @touchstart="touchCandle"
			 @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
		</view>
		<view class="qiun-padding qiun-bg-white ">
			<slider :value="itemCount" min="5" :max="sliderMax" block-color="#f8f8f8" block-size="18" @changing="sliderMove" />
		</view>
		<view class="qiun-padding">
			<view class="qiun-tip" @tap="changeGaugeData()">更新仪表盘数据</view>
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">仪表盘</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">圆弧进度图</view>
		</view>
		<view class="qiun-charts3">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3" :style="{'width':cWidth3*pixelRatio+'px','height':cHeight3*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth3*(pixelRatio-1)/2+'px','margin-top':-cHeight3*(pixelRatio-1)/2+'px'}"></canvas>
			<canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3" :style="{'width':cWidth3*pixelRatio+'px','height':cHeight3*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':cWidth3-cWidth3*(pixelRatio-1)/2+'px','margin-top':-cHeight3*(pixelRatio-1)/2+'px'}"></canvas>
			<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" :style="{'width':cWidth3*pixelRatio+'px','height':cHeight3*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':cWidth3*2-cWidth3*(pixelRatio-1)/2+'px','margin-top':-cHeight3*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3"></canvas>
			<canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3" style="margin-left: 250upx;"></canvas>
			<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" style="margin-left: 500upx;"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">折线图一（可横向拖拽带滚动条）</view>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
			 disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA"
			 @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">折线图二（横屏图表）</view>
		</view>
		<view class="qiun-charts-rotate">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasLineB" id="canvasLineB" class="charts-rotate" :style="{'width':cWidth2*pixelRatio+'px','height':cHeight2*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth2*(pixelRatio-1)/2+'px','margin-top':-cHeight2*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasLineB" id="canvasLineB" class="charts-rotate" @touchstart="touchLineB"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">区域图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
			 @touchstart="touchArea"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchArea"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">饼状图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">环形图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">雷达图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import uCharts from '../../../components/u-charts/u-charts.js';
	var _self;
	var canvaColumn = null;
	var canvaLineA = null;
	var canvaLineB = null;
	var canvaArea = null;
	var canvaGauge = null;
	var canvaCandle = null;
	var canvaMix = null;
	var canvaColumnMeter = null;
	/*下面是服务器返回的数据格式，现已改成从服务器获取数据，以供有些朋友不知道怎么从后台获取数据后调用*/
	// var Data = {
	// 	"Column": {
	// 		"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
	// 		"series": [{
	// 			"name": "成交量1",
	// 			"data": [15, {
	// 				"value": 20,
	// 				"color": "#f04864"
	// 			}, 45, 37, 43, 34]
	// 		}, {
	// 			"name": "成交量2",
	// 			"data": [30, {
	// 				"value": 40,
	// 				"color": "#facc14"
	// 			}, 25, 14, 34, 18]
	// 		}]
	// 	},
	// 	"ColumnB": {
	// 		"categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
	// 		"series": [{
	// 			"name": "新成交量3",
	// 			"data": [35, 36, 31, 33, 13, 34]
	// 		}, {
	// 			"name": "新成交量4",
	// 			"data": [18, 27, 21, 24, 6, 28]
	// 		}]
	// 	},
	// 	"ColumnMeter": {
	// 		"categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
	// 		"series": [{
	// 			"name": "目标值",
	// 			"data": [35, 36, 31, 33, 13, 34],
	// 			"color": "#2fc25b"
	// 		}, {
	// 			"name": "完成量",
	// 			"data": [18, 27, 21, 24, 6, 28],
	// 			"color": "#1890ff"
	// 		}]
	// 	},
	// 	"ColumnStack": {
	// 		"categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
	// 		"series": [{
	// 			"name": "新成交量3",
	// 			"data": [35, 36, 31, 33, 13, 34]
	// 		}, {
	// 			"name": "新成交量4",
	// 			"data": [18, 27, 21, 24, 6, 28]
	// 		}, {
	// 			"name": "新成交量4",
	// 			"data": [18, 27, 21, 24, 6, 28]
	// 		}]
	// 	},
	// 	"Mix": {
	// 		"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
	// 		"series": [{
	// 			"name": "曲面",
	// 			"data": [70, 50, 85, 130, 64, 88],
	// 			"type": "area",
	// 			"style": "curve"
	// 		}, {
	// 			"name": "柱1",
	// 			"data": [40, 30, 55, 110, 24, 58],
	// 			"type": "column"
	// 		}, {
	// 			"name": "柱2",
	// 			"data": [50, 20, 75, 60, 34, 38],
	// 			"type": "column"
	// 		}, {
	// 			"name": "曲线",
	// 			"data": [70, 50, 85, 130, 64, 88],
	// 			"type": "line",
	// 			"style": "curve",
	// 			"color": "#1890ff"
	// 		}, {
	// 			"name": "折线",
	// 			"data": [120, 140, 105, 170, 95, 160],
	// 			"type": "line",
	// 			"color": "#2fc25b"
	// 		}, {
	// 			"name": "点",
	// 			"data": [100, 80, 125, 150, 112, 132],
	// 			"type": "point",
	// 			"color": "#f04864"
	// 		}]
	// 	},
	// 	"LineA": {
	// 		"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
	// 		"series": [{
	// 			"name": "成交量A",
	// 			"data": [35, 8, 25, 37, 4, 20]
	// 		}, {
	// 			"name": "成交量B",
	// 			"data": [70, 40, 65, 100, 44, 68]
	// 		}, {
	// 			"name": "成交量C",
	// 			"data": [100, 80, 95, 150, 112, 132]
	// 		}]
	// 	},
	// 	"LineB": {
	// 		"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
	// 		"series": [{
	// 			"name": "成交量A",
	// 			"data": [35, 20, 25, 37, 4, 20]
	// 		}, {
	// 			"name": "成交量B",
	// 			"data": [70, 40, 65, 100, 44, 68]
	// 		}, {
	// 			"name": "成交量C",
	// 			"data": [100, 80, 95, 150, 112, 132]
	// 		}]
	// 	},
	// 	"Area": {
	// 		"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
	// 		"series": [{
	// 			"name": "成交量A",
	// 			"data": [100, 80, 95, 150, 112, 132],
	// 			"color": "#facc14"
	// 		}, {
	// 			"name": "成交量B",
	// 			"data": [70, 40, 65, 100, 44, 68],
	// 			"color": "#2fc25b"
	// 		}, {
	// 			"name": "成交量C",
	// 			"data": [35, 20, 25, 37, 4, 20],
	// 			"color": "#1890ff"
	// 		}]
	// 	},
	// 	"Pie": {
	// 		"series": [{
	// 			"name": "一班",
	// 			"data": 50
	// 		}, {
	// 			"name": "二班",
	// 			"data": 30
	// 		}, {
	// 			"name": "三班",
	// 			"data": 20
	// 		}, {
	// 			"name": "四班",
	// 			"data": 18
	// 		}, {
	// 			"name": "五班",
	// 			"data": 8
	// 		}]
	// 	},
	// 	"Ring": {
	// 		"series": [{
	// 			"name": "一班",
	// 			"data": 50
	// 		}, {
	// 			"name": "二班",
	// 			"data": 30
	// 		}, {
	// 			"name": "三班",
	// 			"data": 20
	// 		}, {
	// 			"name": "四班",
	// 			"data": 18
	// 		}, {
	// 			"name": "五班",
	// 			"data": 8
	// 		}]
	// 	},
	// 	"Radar": {
	// 		"categories": ["维度1", "维度2", "维度3", "维度4", "维度5", "维度6"],
	// 		"series": [{
	// 			"name": "成交量1",
	// 			"data": [90, 110, 165, 195, 187, 172]
	// 		}, {
	// 			"name": "成交量2",
	// 			"data": [190, 210, 105, 35, 27, 102]
	// 		}]
	// 	},
	// 	"Arcbar1": {
	// 		"series": [{
	// 			"name": "正确率",
	// 			"data": 0.29,
	// 			"color": "#2fc25b"
	// 		}]
	// 	},
	// 	"Arcbar2": {
	// 		"series": [{
	// 			"name": "错误率",
	// 			"data": 0.65,
	// 			"color": "#f04864"
	// 		}]
	// 	},
	// 	"Arcbar3": {
	// 		"series": [{
	// 			"name": "完成率",
	// 			"data": 0.85,
	// 			"color": "#1890ff"
	// 		}]
	// 	},
	// 	"Gauge": {
	// 		"categories": [{
	// 			"value": 0.2,
	// 			"color": "#1890ff"
	// 		}, {
	// 			"value": 0.8,
	// 			"color": "#2fc25b"
	// 		}, {
	// 			"value": 1,
	// 			"color": "#f04864"
	// 		}],
	// 		"series": [{
	// 			"name": "完成率",
	// 			"data": 0.66
	// 		}]
	// 	},
	// 	"Candle": {
	// 		"categories": ["2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30", "2013/1/31", "2013/2/1", "2013/2/4",
	// 			"2013/2/5", "2013/2/6", "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", "2013/2/21", "2013/2/22",
	// 			"2013/2/25", "2013/2/26", "2013/2/27", "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", "2013/3/7",
	// 			"2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19",
	// 			"2013/3/20",
	// 			"2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2",
	// 			"2013/4/3", "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", "2013/4/15", "2013/4/16", "2013/4/17",
	// 			"2013/4/18", "2013/4/19", "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", "2013/5/2", "2013/5/3",
	// 			"2013/5/6", "2013/5/7", "2013/5/8", "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", "2013/5/16",
	// 			"2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28",
	// 			"2013/5/29",
	// 			"2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", "2013/6/6", "2013/6/7", "2013/6/13"
	// 		],
	// 		"series": [{
	// 			"name": "上证指数",
	// 			"data": [
	// 				[2320.26, 2302.6, 2287.3, 2362.94],
	// 				[2300, 2291.3, 2288.26, 2308.38],
	// 				[2295.35, 2346.5, 2295.35, 2346.92],
	// 				[2347.22, 2358.98, 2337.35, 2363.8],
	// 				[2360.75, 2382.48, 2347.89, 2383.76],
	// 				[2383.43, 2385.42, 2371.23, 2391.82],
	// 				[2377.41, 2419.02, 2369.57, 2421.15],
	// 				[2425.92, 2428.15, 2417.58, 2440.38],
	// 				[2411, 2433.13, 2403.3, 2437.42],
	// 				[2432.68, 2434.48, 2427.7, 2441.73],
	// 				[2430.69, 2418.53, 2394.22, 2433.89],
	// 				[2416.62, 2432.4, 2414.4, 2443.03],
	// 				[2441.91, 2421.56, 2415.43, 2444.8],
	// 				[2420.26, 2382.91, 2373.53, 2427.07],
	// 				[2383.49, 2397.18, 2370.61, 2397.94],
	// 				[2378.82, 2325.95, 2309.17, 2378.82],
	// 				[2322.94, 2314.16, 2308.76, 2330.88],
	// 				[2320.62, 2325.82, 2315.01, 2338.78],
	// 				[2313.74, 2293.34, 2289.89, 2340.71],
	// 				[2297.77, 2313.22, 2292.03, 2324.63],
	// 				[2322.32, 2365.59, 2308.92, 2366.16],
	// 				[2364.54, 2359.51, 2330.86, 2369.65],
	// 				[2332.08, 2273.4, 2259.25, 2333.54],
	// 				[2274.81, 2326.31, 2270.1, 2328.14],
	// 				[2333.61, 2347.18, 2321.6, 2351.44],
	// 				[2340.44, 2324.29, 2304.27, 2352.02],
	// 				[2326.42, 2318.61, 2314.59, 2333.67],
	// 				[2314.68, 2310.59, 2296.58, 2320.96],
	// 				[2309.16, 2286.6, 2264.83, 2333.29],
	// 				[2282.17, 2263.97, 2253.25, 2286.33],
	// 				[2255.77, 2270.28, 2253.31, 2276.22],
	// 				[2269.31, 2278.4, 2250, 2312.08],
	// 				[2267.29, 2240.02, 2239.21, 2276.05],
	// 				[2244.26, 2257.43, 2232.02, 2261.31],
	// 				[2257.74, 2317.37, 2257.42, 2317.86],
	// 				[2318.21, 2324.24, 2311.6, 2330.81],
	// 				[2321.4, 2328.28, 2314.97, 2332],
	// 				[2334.74, 2326.72, 2319.91, 2344.89],
	// 				[2318.58, 2297.67, 2281.12, 2319.99],
	// 				[2299.38, 2301.26, 2289, 2323.48],
	// 				[2273.55, 2236.3, 2232.91, 2273.55],
	// 				[2238.49, 2236.62, 2228.81, 2246.87],
	// 				[2229.46, 2234.4, 2227.31, 2243.95],
	// 				[2234.9, 2227.74, 2220.44, 2253.42],
	// 				[2232.69, 2225.29, 2217.25, 2241.34],
	// 				[2196.24, 2211.59, 2180.67, 2212.59],
	// 				[2215.47, 2225.77, 2215.47, 2234.73],
	// 				[2224.93, 2226.13, 2212.56, 2233.04],
	// 				[2236.98, 2219.55, 2217.26, 2242.48],
	// 				[2218.09, 2206.78, 2204.44, 2226.26],
	// 				[2199.91, 2181.94, 2177.39, 2204.99],
	// 				[2169.63, 2194.85, 2165.78, 2196.43],
	// 				[2195.03, 2193.8, 2178.47, 2197.51],
	// 				[2181.82, 2197.6, 2175.44, 2206.03],
	// 				[2201.12, 2244.64, 2200.58, 2250.11],
	// 				[2236.4, 2242.17, 2232.26, 2245.12],
	// 				[2242.62, 2184.54, 2182.81, 2242.62],
	// 				[2187.35, 2218.32, 2184.11, 2226.12],
	// 				[2213.19, 2199.31, 2191.85, 2224.63],
	// 				[2203.89, 2177.91, 2173.86, 2210.58],
	// 				[2170.78, 2174.12, 2161.14, 2179.65],
	// 				[2179.05, 2205.5, 2179.05, 2222.81],
	// 				[2212.5, 2231.17, 2212.5, 2236.07],
	// 				[2227.86, 2235.57, 2219.44, 2240.26],
	// 				[2242.39, 2246.3, 2235.42, 2255.21],
	// 				[2246.96, 2232.97, 2221.38, 2247.86],
	// 				[2228.82, 2246.83, 2225.81, 2247.67],
	// 				[2247.68, 2241.92, 2231.36, 2250.85],
	// 				[2238.9, 2217.01, 2205.87, 2239.93],
	// 				[2217.09, 2224.8, 2213.58, 2225.19],
	// 				[2221.34, 2251.81, 2210.77, 2252.87],
	// 				[2249.81, 2282.87, 2248.41, 2288.09],
	// 				[2286.33, 2299.99, 2281.9, 2309.39],
	// 				[2297.11, 2305.11, 2290.12, 2305.3],
	// 				[2303.75, 2302.4, 2292.43, 2314.18],
	// 				[2293.81, 2275.67, 2274.1, 2304.95],
	// 				[2281.45, 2288.53, 2270.25, 2292.59],
	// 				[2286.66, 2293.08, 2283.94, 2301.7],
	// 				[2293.4, 2321.32, 2281.47, 2322.1],
	// 				[2323.54, 2324.02, 2321.17, 2334.33],
	// 				[2316.25, 2317.75, 2310.49, 2325.72],
	// 				[2320.74, 2300.59, 2299.37, 2325.53],
	// 				[2300.21, 2299.25, 2294.11, 2313.43],
	// 				[2297.1, 2272.42, 2264.76, 2297.1],
	// 				[2270.71, 2270.93, 2260.87, 2276.86],
	// 				[2264.43, 2242.11, 2240.07, 2266.69],
	// 				[2242.26, 2210.9, 2205.07, 2250.63],
	// 				[2190.1, 2148.35, 2126.22, 2190.1]
	// 			]
	// 		}]
	// 	},
	// 	"tips": "【开源不易、改造不易、哪(拿)来简单】uCharts将始终坚持开源，为您提供最便捷的高性能图表工具！"
	// };

	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				cWidth2: '', //横屏图表
				cHeight2: '', //横屏图表
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
				tips: '【开源不易、改造不易、哪(拿)来简单】uCharts将始终坚持开源，为您提供最便捷的高性能图表工具！',
				pixelRatio: 1,
				serverData: '',
				itemCount: 20, //x轴单屏数据密度
				sliderMax: 50
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.cWidth2 = uni.upx2px(700);
			this.cHeight2 = uni.upx2px(1100);
			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.arcbarWidth = uni.upx2px(24);
			this.gaugeWidth = uni.upx2px(30);
			
			//this.fillData(Data);
		},
		onReady() {
			this.getServerData();
		},
		methods: {
			getServerData() {
				uni.showLoading({
					title: "正在加载数据..."
				})
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					data: {},
					success: function(res) {
						_self.fillData(res.data);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
			fillData(data) {
				this.serverData = data;
				this.tips = data.tips;
				this.sliderMax = data.Candle.categories.length;
				let Column = {
					categories: [],
					series: []
				};
				let ColumnMeter = {
					categories: [],
					series: []
				};
				let LineA = {
					categories: [],
					series: []
				};
				let LineB = {
					categories: [],
					series: []
				};
				let Area = {
					categories: [],
					series: []
				};
				let Pie = {
					series: []
				};
				let Ring = {
					series: []
				};
				let Radar = {
					categories: [],
					series: []
				};
				let Arcbar1 = {
					series: []
				};
				let Arcbar2 = {
					series: []
				};
				let Arcbar3 = {
					series: []
				};
				let Gauge = {
					categories: [],
					series: []
				};
				let Candle = {
					categories: [],
					series: []
				};
				let Mix = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Column.categories = data.Column.categories;
				//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
				Column.series = data.Column.series;
				ColumnMeter.categories = data.ColumnMeter.categories;
				//这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
				ColumnMeter.series = data.ColumnMeter.series;
				LineA.categories = data.LineA.categories;
				LineA.series = data.LineA.series;
				LineB.categories = data.LineB.categories;
				LineB.series = data.LineB.series;
				Area.categories = data.Area.categories;
				Area.series = data.Area.series;
				Pie.series = data.Pie.series;
				Ring.series = data.Ring.series;
				//自定义文案示例，需设置format字段
				for (let i = 0; i < Ring.series.length; i++) {
					Ring.series[i].format = () => {
						return Ring.series[i].name + Ring.series[i].data
					};
				}
				Radar.categories = data.Radar.categories;
				Radar.series = data.Radar.series;
				Arcbar1.series = data.Arcbar1.series;
				Arcbar2.series = data.Arcbar2.series;
				Arcbar3.series = data.Arcbar3.series;
				Gauge.categories = data.Gauge.categories;
				Gauge.series = data.Gauge.series;
				Candle.categories = data.Candle.categories;
				Candle.series = data.Candle.series;
				Mix.categories = data.Mix.categories;
				Mix.series = data.Mix.series;
				this.showColumn("canvasColumn", Column);
				this.showColumnMeter("canvasColumnMeter", ColumnMeter);
				this.showLineA("canvasLineA", LineA);
				this.showLineB("canvasLineB", LineB);
				this.showArea("canvasArea", Area);
				this.showPie("canvasPie", Pie);
				this.showRing("canvasRing", Ring);
				this.showRadar("canvasRadar", Radar);
				this.showArcbar("canvasArcbar1", Arcbar1);
				this.showArcbar2("canvasArcbar2", Arcbar2);
				this.showArcbar3("canvasArcbar3", Arcbar3);
				this.showGauge("canvasGauge", Gauge);
				this.showCandle("canvasCandle", Candle);
				this.showMix("canvasMix", Mix);
			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					background: '#E5FDC3',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					}
				});

			},
			showColumnMeter(canvasId, chartData) {
				canvaColumnMeter = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'meter',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length,
							meter: {
								border: 4,
								fillColor: '#E5FDC3'
							}
						}
					}
				});

			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: false,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4, //可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
						scrollShow: true, //新增是否显示滚动条，默认false
						scrollAlign: 'left',
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 8,
						min: 10,
						max: 180,
						format: (val) => {
							return val.toFixed(0) + '元'
						} //如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'straight'
					},
				});

			},
			showLineB(canvasId, chartData) {
				canvaLineB = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					rotate: true, //开启图表横屏
					// #ifdef MP-ALIPAY
					rotateLock: true, //百度及支付宝需要锁定旋转
					// #endif
					categories: chartData.categories,
					animation: false,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					width: _self.cWidth2 * _self.pixelRatio,
					height: _self.cHeight2 * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'curve'
					},
				});
			},
			showArea(canvasId, chartData) {
				canvaArea = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'area',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					animation: false,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'curve'
					},
				});
			},
			showPie(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
			showRing(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'ring',
					fontSize: 11,
					legend: true,
					title: {
						name: '70%',
						color: '#7cb5ec',
						fontSize: 25 * _self.pixelRatio,
						offsetY: -20 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: '收益率',
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
						offsetY: 30 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					extra: {
						pie: {
							lableWidth: 15,
							ringWidth: 40 * _self.pixelRatio, //圆环的宽度
							offsetAngle: -45 //圆环的角度
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					disablePieStroke: true,
					dataLabel: true,
				});

			},
			showRadar(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'radar',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: false,
					dataLabel: true,
					categories: chartData.categories,
					series: chartData.series,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						radar: {
							max: 200 //雷达数值的最大值
						}
					}
				});
			},
			showArcbar(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'default',
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});

			},
			showArcbar2(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'default',
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
							backgroundColor: '#ffe3e8',
							startAngle: 1.25,
							endAngle: 0.75
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});

			},
			showArcbar3(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'circle', //整圆类型进度条图
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
							startAngle: 0.5 //整圆类型只需配置起始角度即可
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});

			},
			showGauge(canvasId, chartData) {
				canvaGauge = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize: 11,
					legend: false,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.categories[1].color,
						fontSize: 25 * _self.pixelRatio,
						offsetY: 50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
						offsetY: -50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge: {
							type: 'default',
							width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
							startAngle: 0.75,
							endAngle: 0.25,
							startNumber: 0,
							endNumber: 100,
							splitLine: {
								fixRadius: 0,
								splitNumber: 10,
								width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
								color: '#FFFFFF',
								childNumber: 5,
								childWidth: _self.gaugeWidth * 0.4 * _self.pixelRatio, //仪表盘背景的宽度
							},
							pointer: {
								width: _self.gaugeWidth * 0.8 * _self.pixelRatio, //指针宽度
								color: 'auto'
							}
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
				});
			},
			changeGaugeData() {
				let series = [{
					name: "完成率",
					data: Math.random()
				}]; //这里是随机数据，生产环境请从服务器获取，注意series数据类型为数组
				//这里我借用之前的categories数据，判断一下新数据的title.color，没有写死在程序里，以便于自定义
				let newTitleColor;
				for (let i = 0; i < _self.serverData.Gauge.categories.length; i++) {
					if (series[0].data <= _self.serverData.Gauge.categories[i].value) {
						newTitleColor = _self.serverData.Gauge.categories[i].color;
						break;
					}
				}

				canvaGauge.updateData({
					series: series, //这里给了新数值
					categories: _self.serverData.Gauge.categories,
					title: {
						name: Math.round(series[0].data * 100) + '%',
						color: newTitleColor,
						fontSize: 25 * _self.pixelRatio,
						offsetY: 50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: '更新数据',
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
						offsetY: -50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					}
				});
			},
			showCandle(canvasId, chartData) {
				canvaCandle = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'candle',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: true, //不绘制X轴网格线
						//type:'grid',
						//gridType:'dash',
						itemCount: _self.itemCount, //可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
						scrollShow: true, //新增是否显示滚动条，默认false
						scrollAlign: 'right',
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 5
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: false,
					dataPointShape: true,
					extra: {
						candle: {
							color: {
								upLine: '#f04864',
								upFill: '#f04864',
								downLine: '#2fc25b',
								downFill: '#2fc25b'
							},
							average: {
								show: true,
								name: ['MA5', 'MA10', 'MA30'],
								day: [5, 10, 30],
								color: ['#1890ff', '#2fc25b', '#facc14']
							}
						}
					},
				});

			},
			touchCandle(e) {
				canvaCandle.scrollStart(e);
			},
			moveCandle(e) {
				canvaCandle.scroll(e);
			},
			touchEndCandle(e) {
				canvaCandle.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaCandle.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			tapButton(type) {
				uni.showToast({
					title: '完善中'
				});
				let step = 5;
				if (type == 'in') {
					_self.itemCount -= step;
					if (_self.itemCount <= 5) {
						_self.itemCount = 5;
					}
				} else {
					_self.itemCount += step;
					if (_self.itemCount > _self.serverData.Candle.categories.length) {
						_self.itemCount = _self.serverData.Candle.categories.length;
					}
				}
				return;
				_self.zoomCandle(_self.itemCount);
			},
			sliderMove(e) {
				_self.itemCount = e.detail.value;
				uni.showToast({
					title: '完善中'
				});
				return;
				_self.zoomCandle(e.detail.value);
			},
			zoomCandle(val) {
				canvaCandle.zoom({
					itemCount: val
				});
			},
			changeData() {
				canvaColumn.updateData({
					series: _self.serverData.ColumnB.series,
					categories: _self.serverData.ColumnB.categories
				});
			},
			touchLineA(e) {
				canvaLineA.scrollStart(e);
			},
			moveLineA(e) {
				canvaLineA.scroll(e);
			},
			touchEndLineA(e) {
				canvaLineA.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			showMix(canvasId, chartData) {
				canvaMix = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'mix',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4,
						scrollShow: true,
						scrollAlign: 'left',
					},
					yAxis: {
						gridType: 'dash',
						splitNumber: 5,
						min: 10,
						max: 180
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'straight'
					},
				});
			},
			touchMix(e) {
				canvaMix.scrollStart(e);
			},
			moveMix(e) {
				canvaMix.scroll(e);
			},
			touchEndMix(e) {
				canvaMix.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaMix.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			touchLineB(e) {
				canvaLineB.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			touchColumnMeter(e) {
				canvaColumnMeter.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			touchArea(e) {
				canvaArea.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
		}
	}
</script>

<style>
	page {
		background: #F2F2F2;
		width: 750upx;
		overflow-x: hidden;
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	/* 通用样式 */
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	/* 横屏样式 */
	.qiun-charts-rotate {
		width: 700upx;
		height: 1100upx;
		background-color: #FFFFFF;
		padding: 25upx;
	}

	.charts-rotate {
		width: 700upx;
		height: 1100upx;
		background-color: #FFFFFF;
	}

	/* 圆弧进度样式 */
	.qiun-charts3 {
		width: 750upx;
		height: 250upx;
		background-color: #FFFFFF;
		position: relative;
	}

	.charts3 {
		position: absolute;
		width: 250upx;
		height: 250upx;
		background-color: #FFFFFF;
	}

	.qiun-tip {
		display: block;
		width: auto;
		overflow: hidden;
		padding: 15upx;
		height: 30upx;
		line-height: 30upx;
		margin: 10upx;
		background: #ff9933;
		font-size: 30upx;
		border-radius: 8upx;
		justify-content: center;
		text-align: center;
		border: 1px solid #dc7004;
		color: #FFFFFF;
	}
</style>
