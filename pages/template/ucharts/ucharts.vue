<template>
	<view class="qiun-columns">
		<view class="qiun-padding" style="font-size: 32upx;">
			<text>{{tips}}</text>
		</view>
    <view class="qiun-padding">
    	<view class="qiun-tip" @tap="changeData()">更新柱状图数据</view>
    </view>
    <view class="qiun-title-bar" style="background-color: #E5FDC3;">
      <view class="qiun-title-dot-light">柱状图</view>
    </view>
    <view class="qiun-charts" style="background-color: #E5FDC3;">
      <!--#ifdef MP-ALIPAY -->
      <canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #E5FDC3;" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchIt($event,'canvasColumn')"></canvas>
      <!--#endif-->
      <!--#ifndef MP-ALIPAY -->
      <canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #E5FDC3;" @touchstart="touchIt($event,'canvasColumn')"></canvas>
      <!--#endif-->
    </view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">温度计式图表</view>
		</view>
		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasColumnMeter" id="canvasColumnMeter" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchIt($event,'canvasColumnMeter')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasColumnMeter" id="canvasColumnMeter" class="charts" @touchstart="touchIt($event,'canvasColumnMeter')"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">混合图（单坐标系支持画点、线、面、柱）</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasMix" id="canvasMix" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" disable-scroll=true @touchstart="touchMix" @touchmove="moveMix" @touchend="touchEndMix"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasMix" id="canvasMix" class="charts" disable-scroll=true @touchstart="touchMix" @touchmove="moveMix" @touchend="touchEndMix"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt qiun-rows" >
			<view class="qiun-title-dot-light">K线图（蜡烛图）</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" disable-scroll=true @touchstart="touchCandle" @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasCandle" id="canvasCandle" class="charts" disable-scroll=true @touchstart="touchCandle" @touchmove="moveCandle" @touchend="touchEndCandle"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
		</view>
		<view class="qiun-padding">
			<view class="qiun-tip" @tap="changeGaugeData()">更新仪表盘数据</view>
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">仪表盘</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
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
    <view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
    	<view class="qiun-title-dot-light">漏斗图</view>
    </view>
    <view class="qiun-charts">
    	<!--#ifdef MP-ALIPAY -->
    	<canvas canvas-id="canvasFunnel" id="canvasFunnel" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,'canvasFunnel')"></canvas>
    	<!--#endif-->
    	<!--#ifndef MP-ALIPAY -->
    	<canvas canvas-id="canvasFunnel" id="canvasFunnel" class="charts" @touchstart="touchPie($event,'canvasFunnel')"></canvas>
    	<!--#endif-->
    </view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">折线图一（可横向拖拽带滚动条）</view>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">折线图二（横屏图表）</view>
		</view>
		<view class="qiun-charts-rotate">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasLineB" id="canvasLineB" class="charts-rotate" :style="{'width':cWidth2*pixelRatio+'px','height':cHeight2*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth2*(pixelRatio-1)/2+'px','margin-top':-cHeight2*(pixelRatio-1)/2+'px'}" @touchstart="touchIt($event,'canvasLineB')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasLineB" id="canvasLineB" class="charts-rotate" @touchstart="touchIt($event,'canvasLineB')"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">区域图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchIt($event,'canvasArea')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchIt($event,'canvasArea')"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">饼状图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,'canvasPie')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie($event,'canvasPie')"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">环形图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,'canvasRing')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchPie($event,'canvasRing')"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">雷达图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,'canvasRadar')"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts" @touchstart="touchPie($event,'canvasRadar')"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import uCharts from '../../../components/u-charts/u-charts.js';
	var _self;
	var canvasObj = {};

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
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 30, //x轴单屏数据密度
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
        let Funnel = {
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
        Funnel.series = data.Pie.series;
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
        this.showFunnel("canvasFunnel", Funnel);
				this.showRadar("canvasRadar", Radar);
				this.showArcbar("canvasArcbar1", Arcbar1);
				this.showArcbar2("canvasArcbar2", Arcbar2);
				this.showArcbar3("canvasArcbar3", Arcbar3);
				this.showGauge("canvasGauge", Gauge);
				this.showCandle("canvasCandle", Candle);
				this.showMix("canvasMix", Mix);
			},
			showColumn(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: false,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
						format:(val)=>{return val.toFixed(0)+'元'}
					},
					dataLabel: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
						}
					  }
				});
			},
			showColumnMeter(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: false,
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
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:5,
					},
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
						itemCount: 4, 
						scrollShow: true, 
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
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:5,
					},
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
				canvasObj[canvasId] = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'area',
					fontSize:11,
					padding:[0,15,10,15],
					legend:{
						show:true,
						position:'top',
						float:'center',
						itemGap:30,
						padding:5,
						lineHeight:18,
						margin:0,
					},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8,
            boundaryGap:'justify'//两端不留白配置
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						area:{
							type: 'curve',
							opacity:0.2,
							addLine:true,
							width:2
						}
					}
				});
			},
			showPie(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
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
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'ring',
					fontSize: 11,
					padding:[5,5,5,5],
					legend:{
						show:true,
						position:'right',
						float:'center',
						itemGap:10,
						padding:5,
						lineHeight:26,
						margin:5,
						//backgroundColor:'rgba(41,198,90,0.2)',
						//borderColor :'rgba(41,198,90,0.5)',
						borderWidth :1
					},
					title: {
						name: '70%',
						color: '#7cb5ec',
						fontSize: 25 * _self.pixelRatio,
					},
					subtitle: {
						name: '收益率',
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
					},
					extra: {
						pie: {
							lableWidth: 15,
							ringWidth: 40 * _self.pixelRatio, //圆环的宽度
							offsetAngle: 0 //圆环的角度
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
      showFunnel(canvasId, chartData) {
      	canvasObj[canvasId] = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'funnel',
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					extra: {
						funnel: {
              border:true,
              borderWidth:2,
              borderColor:'#FFFFFF'
						}
					},
				});
      },
			showRadar(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'radar',
					fontSize: 11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
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
					animation: false,
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
					animation: false,
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
					animation: false,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});

			},
			showGauge(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize: 11,
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

				canvasObj['canvasGauge'].updateData({
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
				canvasObj[canvasId] = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'candle',
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:8,
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
          enableMarkLine: true,/***需要开启标记线***/
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true,//开启图表拖拽功能
					xAxis: {
						disableGrid:true,//不绘制X轴网格线
						labelCount:4,//X轴文案数量
						//type:'grid',
						//gridType:'dash',
						itemCount:_self.itemCount,//可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
						scrollShow:true,//新增是否显示滚动条，默认false
						scrollAlign:'right',
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
						gridType:'dash',
						splitNumber:5,
						format:(val)=>{return val.toFixed(0)}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: false,
					dataPointShape: true,
					extra: {
						candle:{
							color:{
								upLine:'#f04864',
								upFill:'#f04864',
								downLine:'#2fc25b',
								downFill:'#2fc25b'
							},
							average:{
								show:true,
								name:['MA5','MA10','MA30'],
								day:[5,10,20],
								color:['#1890ff', '#2fc25b', '#facc14']
							}
						},
						tooltip:{
							bgColor:'#000000',
							bgOpacity:0.7,
							gridType:'dash',
							dashLength:5,
							gridColor:'#1890ff',
							fontColor:'#FFFFFF',
							horizentalLine:true,
							xAxisLabel:true,
							yAxisLabel:true,
							labelBgColor:'#DFE8FF',
							labelBgOpacity:0.95,
							labelAlign:'left',
							labelFontColor:'#666666'
						},
            markLine: {
              type: 'dash',
              dashLength: 5,
              data: [{
                value:2150,
                lineColor: '#f04864',
                showLabel:true
              },{
                value:2350,
                lineColor: '#f04864',
                showLabel:true
              }]
            }
					}
				});
			},
			touchCandle(e) {
				canvasObj['canvasCandle'].scrollStart(e);
			},
			moveCandle(e) {
				canvasObj['canvasCandle'].scroll(e);
			},
			touchEndCandle(e) {
				canvasObj['canvasCandle'].scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvasObj['canvasCandle'].showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			changeData() {
				canvasObj['canvasColumn'].updateData({
					series: _self.serverData.ColumnB.series,
					categories: _self.serverData.ColumnB.categories
				});
			},
			touchLineA(e) {
				canvasObj['canvasLineA'].scrollStart(e);
			},
			moveLineA(e) {
				canvasObj['canvasLineA'].scroll(e);
			},
			touchEndLineA(e) {
				canvasObj['canvasLineA'].scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvasObj['canvasLineA'].showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			showMix(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'mix',
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:6,
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: true,//开启图表拖拽功能
					xAxis: {
						disableGrid:false,
						type:'grid',
						gridType:'dash',
						itemCount:4,
						scrollShow:true,
						scrollAlign:'left',
					},
					yAxis: {
						gridType:'dash',
						dashLength:4,
						splitNumber:5,
						min:10,
						max:180,
						format:(val)=>{return val.toFixed(0)}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
            column:{
              width:20*_self.pixelRatio
            },
						tooltip:{
							bgColor:'#000000',
							bgOpacity:0.7,
							gridType:'dash',
							dashLength:8,
							gridColor:'#1890ff',
							fontColor:'#FFFFFF',
							horizentalLine:true,
							xAxisLabel:true,
							yAxisLabel:true,
							labelBgColor:'#DFE8FF',
							labelBgOpacity:0.95,
							labelAlign:'left',
							labelFontColor:'#666666'
						}
					},
				});
			},
			touchMix(e) {
				canvasObj['canvasMix'].scrollStart(e);
			},
			moveMix(e) {
				canvasObj['canvasMix'].scroll(e);
			},
			touchEndMix(e) {
				canvasObj['canvasMix'].scrollEnd(e);
        canvasObj['canvasMix'].touchLegend(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvasObj['canvasMix'].showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			touchIt(e,id) {
        canvasObj[id].touchLegend(e, {
        	animation : false
        });
				canvasObj[id].showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + ':' + item.data.value 
						}else{
							return category + ' ' + item.name + ':' + item.data 
						}
					}
				});
			},
          touchPie(e,id) {
            canvasObj[id].showToolTip(e, {
                format: function(item) {
                    return item.name + ':' + item.data
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
