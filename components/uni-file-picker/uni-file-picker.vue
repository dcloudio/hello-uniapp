<template>
	<view class="uni-file-picker">
		<view v-if="title" class="uni-file-picker__header">
			<text class="file-title">{{ title }}</text>
			<text class="file-count">{{ filesList.length }}/{{ limitLength }}</text>
		</view>
		<upload-image v-if="fileMediatype === 'image' && showType === 'grid'" :readonly="readonly" :image-styles="imageStyles" :files-list="filesList" :limit="limitLength" :disablePreview="disablePreview" :delIcon="delIcon" @uploadFiles="uploadFiles" @choose="choose" @delFile="delFile">
			<slot>
				<view class="is-add">
					<view class="icon-add"></view>
					<view class="icon-add rotate"></view>
				</view>
			</slot>
		</upload-image>
		<upload-file v-if="fileMediatype !== 'image' || showType !== 'grid'" :readonly="readonly" :list-styles="listStyles" :files-list="filesList" :showType="showType" :delIcon="delIcon" @uploadFiles="uploadFiles" @choose="choose" @delFile="delFile">
			<slot><button type="primary" size="mini">选择文件</button></slot>
		</upload-file>
	</view>
</template>

<script>
	import uploadImage from './upload-image.vue'
	import uploadFile from './upload-file.vue'
	let fileInput = null
	/**
	 * FilePicker 文件选择上传
	 * @description 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=4079
	 * @property {Object|Array}	value	组件数据，通常用来回显 ,类型由return-type属性决定
	 * @property {Boolean}	disabled=[true|false]	组件禁用
	 * 	@value true 	禁用
	 * 	@value false 	取消禁用
	 * @property {Boolean}	readonly=[true|false]	组件只读，不可选择，不显示进度，不显示删除按钮
	 * 	@value true 	只读
	 * 	@value false 	取消只读
	 * @property {String}	return-type=[array|object]	限制 value 格式，当为 object 时 ，组件只能单选，且会覆盖
	 * 	@value array	规定 value 属性的类型为数组
	 * 	@value object	规定 value 属性的类型为对象
	 * @property {Boolean}	disable-preview=[true|false]	禁用图片预览，仅 mode:grid 时生效
	 * 	@value true 	禁用图片预览
	 * 	@value false 	取消禁用图片预览
	 * @property {Boolean}	del-icon=[true|false]	是否显示删除按钮
	 * 	@value true 	显示删除按钮
	 * 	@value false 	不显示删除按钮
	 * @property {Boolean}	auto-upload=[true|false]	是否自动上传，值为true则只触发@select,可自行上传
	 * 	@value true 	自动上传
	 * 	@value false 	取消自动上传
	 * @property {Number|String}	limit	最大选择个数 ，h5 会自动忽略多选的部分
	 * @property {String}	title	组件标题，右侧显示上传计数
	 * @property {String}	mode=[list|grid]	选择文件后的文件列表样式
	 * 	@value list 	列表显示
	 * 	@value grid 	宫格显示
	 * @property {String}	file-mediatype=[image|video|all]	选择文件类型
	 * 	@value image	只选择图片
	 * 	@value video	只选择视频
	 * 	@value all		选择所有文件
	 * @property {Array}	file-extname	选择文件后缀，根据 file-mediatype 属性而不同
	 * @property {Object}	list-style	mode:list 时的样式
	 * @property {Object}	image-styles	选择文件后缀，根据 file-mediatype 属性而不同
	 * @event {Function} select 	选择文件后触发
	 * @event {Function} progress 文件上传时触发
	 * @event {Function} success 	上传成功触发
	 * @event {Function} fail 		上传失败触发
	 * @event {Function} delete 	文件从列表移除时触发
	 */
	export default {
		name: 'uniFilePicker',
		components: {
			uploadImage,
			uploadFile
		},
		props: {
			value: {
				type: [Array, Object],
				default () {
					return []
				}
			},
			disabled: {
				type: Boolean,
				default: false
			},
			disablePreview: {
				type: Boolean,
				default: false
			},
			delIcon: {
				type: Boolean,
				default: true
			},
			// 自动上传
			autoUpload: {
				type: Boolean,
				default: true
			},
			// 最大选择个数 ，h5只能限制单选或是多选
			limit: {
				type: [Number, String],
				default: 9
			},
			// 列表样式 grid | list | list-card
			mode: {
				type: String,
				default: 'grid'
			},
			// inputUrl: {
			// 	type: Boolean,
			// 	default: false
			// },
			// 选择文件类型  image/video/all
			fileMediatype: {
				type: String,
				default: 'image'
			},
			// 文件类型筛选
			fileExtname: {
				type: [Array, String],
				default () {
					return []
				}
			},
			title: {
				type: String,
				default: ''
			},
			listStyles: {
				type: Object,
				default () {
					return {
						// 是否显示边框
						border: true,
						// 是否显示分隔线
						dividline: true,
						// 线条样式
						borderStyle: {}
					}
				}
			},
			imageStyles: {
				type: Object,
				default () {
					return {
						width: 'auto',
						height: 'auto'
					}
				}
			},
			readonly: {
				type: Boolean,
				default: false
			},
			returnType: {
				type: String,
				default: 'array'
			}
		},
		watch: {
			value: {
				handler(newVal) {
					let newFils = []
					let newData = [].concat(newVal || [])
					newData.forEach(v => {
						const files = this.files.find(i => i.url === v.url)
						const reg = /cloud:\/\/([\w.]+\/?)\S*/
						if (!v.path) {
							v.path = v.url
						}
						if (reg.test(v.url)) {
							this.getTempFileURL(v, v.url)
						}
						newFils.push(files ? files : v)
					})
					this.files = newFils
				},
				immediate: true
			}
		},
		data() {
			return {
				files: [],
			}
		},
		computed: {
			filesList() {
				let files = []
				this.files.forEach(v => {
					files.push(v)
				})
				return files
			},
			showType() {
				if (this.fileMediatype === 'image') {
					return this.mode
				}
				return 'list'
			},
			limitLength() {
				if (this.returnType === 'object') {
					return 1
				}
				if (!this.limit) {
					return 1
				}
				if (this.limit >= 9) {
					return 9
				}
				return this.limit
			},
			extname() {
				if (!Array.isArray(this.fileExtname)) {
					let extname = this.fileExtname.replace(/(\[|\])/g, '')
					return extname.split(',')
				} else {
					return this.fileExtname
				}
				return []
			}
		},
		created() {
			// this.files = Object.assign([], this.value)
			this.tempData = {}

		},
		methods: {
			/**
			 * 继续上传
			 */
			upload() {
				// TODO 先放弃这个实现 ，不能全部上传
				// if (this.$uploadFiles) {
				// 	this.$uploadFiles()
				// } else {
				// 	uni.showToast({
				// 		title: '请先选择文件',
				// 		icon: 'none'
				// 	})
				// }
				let files = []
				this.files.forEach((v, index) => {
					if (v.status === 'ready' || v.status === 'error') {
						files.push(Object.assign({}, v))
					}
				})

				this.uploadFiles(files)
			},
			/**
			 * 选择文件
			 */
			choose() {
				if (this.disabled) return
				if (this.files.length >= Number(this.limitLength) && this.showType !== 'grid' && this.returnType === 'array') {
					uni.showToast({
						title: `您最多选择 ${this.limitLength} 个文件`,
						icon: 'none'
					})
					return
				}
				// uni.showActionSheet({
				// 	itemList: ['填写 url 地址', '选择文件'],
				// 	success: (res) => {
				// 		if (res.tapIndex === 1) {
				// 			this.chooseFiles()
				// 		}
				// 	},
				// 	fail: function(res) {}
				// });
				this.chooseFiles()
			},

			/**
			 * 选择文件并上传
			 */
			chooseFiles() {

				uniCloud
					.chooseAndUploadFile({
						type: this.fileMediatype,
						compressed: false,
						// TODO 如果为空，video 有问题
						extension: this.extname.length > 0 ? this.extname : undefined,
						count: this.limitLength - this.files.length, //默认9
						onChooseFile: async res => {
							if ((Number(this.limitLength) === 1 && this.disablePreview && !this.disabled) || this.returnType === 'object') {
								this.files = []
							}
							let filePaths = []
							let files = []
							if (this.extname && this.extname.length > 0) {
								res.tempFiles.forEach(v => {
									let fileFullName = this.getFileExt(v.name)
									const extname = fileFullName.ext.toLowerCase()
									if (this.extname.indexOf(extname) !== -1) {
										files.push(v)
										filePaths.push(v.path)
									}
								})
								if (files.length !== res.tempFiles.length) {
									uni.showToast({
										title: `当前选择了${res.tempFiles.length}个文件 ，${res.tempFiles.length - files.length} 个文件格式不正确`,
										icon: 'none',
										duration: 5000
									})
								}
							} else {
								filePaths = res.tempFilePaths
								files = res.tempFiles
							}

							let currentData = []
							for (let i = 0; i < files.length; i++) {
								if (this.limitLength - this.files.length <= 0) break
								files[i].uuid = Date.now()
								let filedata = await this.getFileData(files[i], this.fileMediatype)
								filedata.progress = 0
								filedata.status = 'ready'
								this.files.push(filedata)
								currentData.push(filedata)
							}
							this.$emit('select', {
								tempFiles: currentData,
								tempFilePaths: filePaths
							})
							res.tempFiles = files
							// 停止自动上传
							if (!this.autoUpload) {
								res.tempFiles = []
								// TODO 先放弃这个实现 ，不能全部上传
								// return new Promise((resolve) => {
								// 	this.$uploadFiles = () => {
								// 		// this._is_uploading = true
								// 		resolve(res)
								// 	}
								// })
							}
						},
						onUploadProgress: progressEvent => {
							this.setProgress(progressEvent, progressEvent.index)
						}
					})
					.then(result => {
						this.setSuccessAndError(result.tempFiles)
					})
					.catch(err => {
						console.log('选择失败', err)
					})
			},

			/**
			 * 批传
			 * @param {Object} e
			 */
			uploadFiles(files) {
				files = [].concat(files)
				this.uploadCloudFiles(files, 5, res => {
						this.setProgress(res, res.index, true)
					})
					.then(result => {
						this.setSuccessAndError(result)
					})
					.catch(err => {
						console.log('err', err)
					})
			},

			/**
			 * 成功或失败
			 */
			async setSuccessAndError(res, fn) {
				let successData = []
				let errorData = []
				let tempFilePath = []
				let errorTempFilePath = []
				for (let i = 0; i < res.length; i++) {
					// const index  = item.index
					const item = res[i]
					const index = item.uuid ? this.files.findIndex(p => p.uuid === item.uuid) : item.index
					if (index === -1 || !this.files) break
					if (item.errMsg === 'request:fail') {
						this.files[index].url = item.path
						this.files[index].status = 'error'
						this.files[index].errMsg = item.errMsg
						this.files[index].progress = -1
						errorData.push(this.files[index])
						errorTempFilePath.push(this.files[index].url)
					} else {
						this.files[index].errMsg = ''
						this.files[index].url = item.url
						this.files[index].status = 'success'
						successData.push(this.files[index])
						tempFilePath.push(this.files[index].url)
					}
				}

				if (successData.length > 0) {
					this.setEmit()
					// 状态改变返回
					this.$emit('success', {
						tempFiles: this.backObject(successData),
						tempFilePaths: tempFilePath
					})
				}

				if (errorData.length > 0) {
					this.$emit('fail', {
						tempFiles: this.backObject(errorData),
						tempFilePaths: errorTempFilePath
					})
				}
			},

			/**
			 * 获取进度
			 * @param {Object} progressEvent
			 * @param {Object} index
			 * @param {Object} type
			 */
			setProgress(progressEvent, index, type) {
				const fileLenth = this.files.length
				const percentNum = (index / fileLenth) * 100
				const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
				let idx = index
				if (!type) {
					idx = this.files.findIndex(p => p.uuid === progressEvent.tempFile.uuid)
				}
				if (idx === -1 || !this.files[idx]) return
				this.files[idx].progress = percentCompleted
				// 上传中
				this.$emit('progress', {
					index: idx,
					progress: parseInt(percentCompleted),
					tempFile: this.files[idx]
				})
			},

			/**
			 * 删除
			 * @param {Object} index
			 */
			delFile(index) {
				this.$emit('delete', {
					tempFile: this.files[index],
					tempFilePath: this.files[index].url
				})
				this.files.splice(index, 1)
				this.$nextTick(() => {
					this.setEmit()
				})
			},

			/**
			 * 获取文件名和后缀
			 * @param {Object} name
			 */
			getFileExt(name) {
				const last_len = name.lastIndexOf('.')
				const len = name.length
				return {
					name: name.substring(0, last_len),
					ext: name.substring(last_len + 1, len)
				}
			},

			/**
			 * 获取图片信息
			 * @param {Object} filepath
			 */
			getFileInfo(filepath) {
				return new Promise((resolve, reject) => {
					uni.getImageInfo({
						src: filepath,
						success(res) {
							resolve(res)
						},
						fail(err) {
							reject(err)
						}
					})
				})
			},

			/**
			 * 获取封装数据
			 */
			async getFileData(files, type = 'image') {
				// 最终需要上传数据库的数据
				let fileFullName = this.getFileExt(files.name)
				const extname = fileFullName.ext.toLowerCase()
				let filedata = {
					name: files.name,
					uuid: files.uuid,
					extname: extname || '',
					cloudPath: files.cloudPath,
					fileType: files.fileType,
					url: files.path || files.path,
					size: files.size, //单位是字节
					image: {},
					path: files.path,
					video: {}
				}
				if (type === 'image') {
					const imageinfo = await this.getFileInfo(files.path)
					filedata.image.width = imageinfo.width
					filedata.image.height = imageinfo.height
					filedata.image.location = imageinfo.path
				}
				return filedata
			},

			/**
			 * 批量上传
			 */
			uploadCloudFiles(files, max = 5, onUploadProgress) {
				files = JSON.parse(JSON.stringify(files))
				const len = files.length
				let count = 0
				let self = this
				return new Promise(resolve => {
					while (count < max) {
						next()
					}

					function next() {
						let cur = count++
						if (cur >= len) {
							!files.find(item => !item.url && !item.errMsg) && resolve(files)
							return
						}
						const fileItem = files[cur]
						const index = self.files.findIndex(v => v.uuid === fileItem.uuid)
						fileItem.url = ''
						delete fileItem.errMsg

						uniCloud
							.uploadFile({
								filePath: fileItem.path,
								cloudPath: fileItem.cloudPath,
								fileType: fileItem.fileType,
								onUploadProgress: res => {
									res.index = index
									onUploadProgress && onUploadProgress(res)
								}
							})
							.then(res => {
								fileItem.url = res.fileID
								fileItem.index = index
								if (cur < len) {
									next()
								}
							})
							.catch(res => {
								fileItem.errMsg = res.errMsg || res.message
								fileItem.index = index
								if (cur < len) {
									next()
								}
							})
					}
				})
			},
			setEmit() {
				let data = []
				if (this.returnType === 'object') {
					data = this.backObject(this.files)[0]
				} else {
					data = this.backObject(this.files)
				}
				this.$emit('input', data)
			},
			backObject(files) {
				let newFilesData = JSON.parse(JSON.stringify(files))
				newFilesData.map(v => {
					delete v.path
					delete v.uuid
					delete v.video
					delete v.progress
					delete v.errMsg
					delete v.status
					delete v.cloudPath
					return v
				})
				return newFilesData
			},
			async getTempFileURL(file, fileList) {
				fileList = {
					fileList: [].concat(fileList)
				}
				const urls = await uniCloud.getTempFileURL(fileList)
				file.path = urls.fileList[0].tempFileURL || ''
				const index = this.files.findIndex(v => v.path === file.path)
				if (index !== -1) {
					this.$set(this.files, index, file)
				}
			}
		}
	}
</script>

<style scoped>
	.uni-file-picker {
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		overflow: hidden;
		/* #endif */
	}

	.uni-file-picker__header {
		padding-top: 5px;
		padding-bottom: 10px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: space-between;
	}

	.file-title {
		font-size: 14px;
		color: #333;
	}

	.file-count {
		font-size: 14px;
		color: #999;
	}

	.is-add {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		justify-content: center;
	}

	.icon-add {
		width: 50px;
		height: 5px;
		background-color: #f1f1f1;
		border-radius: 2px;
	}

	.rotate {
		position: absolute;
		transform: rotate(90deg);
	}
</style>