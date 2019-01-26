<template>
	<view class="uni-padding-wrap">
		<uParse :content="article" @preview="preview" @navigate="navigate" />
	</view>
</template>

<script>
//本示例引用组件uParse forked from ：mpvue-wxparse

	import uParse from '../../../components/uParse/src/wxParse.vue'

    var htmlString = `
<p>很多资讯页面，服务端返回的数据都是 markdown 字符串或 html 字符串，使用本模板可直接解析 html 为符合 uni-app 规范的富文本界面。下文为示例：</p>
<p>HBuilderX堪称markdown书写编辑的最佳工具，本文简单介绍HBuilderX里markdown的使用技巧。更多详情请在HBuilderX里点菜单帮助-markdown语法帮助。</p>
<p>markdown的标题是行首以#号开头，空格分割的，不同级别的标题，在HX里着色也不同。如下：</p>
<h1>标题1</h1>
<h2>标题2</h2>
<h3>标题3</h3>
<h4>标题4</h4>
<h5>标题5</h5>
<p>HBuilderX标题编辑技巧：</p>
<ol>
<li>Emmet快速输入：敲h2+Tab即可生成二级标题【同HTML里的emmet写法，不止标题，HX里所有可对应tag的markdown语法均支持emmet写法】。仅行首生效</li>
<li>智能双击：双击#号可选中整个标题段落</li>
<li>智能回车：行尾回车或行中Ctrl+Enter强制换行后会自动在下一行补#</li>
<li>回车后再次按Tab可递进一层标题，再按Tab切换列表符</li>
<li>在# 后回车，可上插一个空标题行【同word】，任意位置按Ctrl+Shift+Enter也可以</li>
</ol>
<ul>
<li>折叠：点标题前的-号可折叠该标题段落，快捷键是Alt+-（展开折叠是Alt+=）</li>
<li>折叠：多层折叠时折叠或展开子节点，快捷键是Alt+Shift+-或=</li>
</ul>
<p><strong>加粗</strong> 【快捷键：Ctrl+B，支持多光标；Emmet：b后敲Tab】</p>
<p><em>倾斜</em>【Emmet：i后敲Tab；前后包围：选中文字按Ctrl+\是在选区两侧添加光标，可以继续输入_】</p>
<p><del>删除线</del>【前后包围：选中文字按Ctrl+\是在选区两侧添加光标，可以继续输入~~，会在2侧同时输入】</p>
<blockquote>
<p>引用</p>
</blockquote>
<p><a href="https://dcloud.io">超链接</a></p>
<p><img src="https://img-cdn-qiniu.dcloud.net.cn/newpage/images/logo4.png" alt="logo"></p>
<p>=======================</p>
<pre><code class="language-javascript">    var a = document; //代码</code></pre>
    `

	export default {
		components: {
			uParse
		},
		data() {
			return {
				article: htmlString
			}
		},
		methods: {
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
				uni.showModal({
					content : "点击链接为：" + href,
					showCancel:false
				})
			}
		}

	}
</script>

<style>
	@import url("../../../components/uParse/src/wxParse.css");
</style>
