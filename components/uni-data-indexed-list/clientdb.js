
const events = {
	load: 'load',
	error: 'error'
}
const pageMode = {
	add: 'add',
	replace: 'replace'
}

const attrs = [
	'pageCurrent',
	'pageSize',
	'collection',
	'action',
	'field',
	'getcount',
	'orderby',
	'where'
]

export default {
	props: {
		collection: {
			type: String,
			default: ''
		},
		action: {
			type: String,
			default: ''
		},
		field: {
			type: String,
			default: ''
		},
		pageData: {
			type: String,
			default: 'add'
		},
		pageCurrent: {
			type: Number,
			default: 1
		},
		pageSize: {
			type: Number,
			default: 20
		},
		getcount: {
			type: [Boolean, String],
			default: false
		},
		orderby: {
			type: String,
			default: ''
		},
		where: {
			type: [String, Object],
			default: ''
		},
		getone: {
			type: [Boolean, String],
			default: false
		},
		manual: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			loading: false,
			listData: this.getone ? {} : [],
			paginationInternal: {
				current: this.pageCurrent,
				size: this.pageSize,
				count: 0
			},
			errorMessage: ''
		}
	},
	created() {
		let db = null;
		let dbCmd = null;

		if(this.collection){
			this.db = uniCloud.database();
			this.dbCmd = this.db.command;
		}

		this._isEnded = false

		this.$watch(() => {
			var al = []
			attrs.forEach(key => {
				al.push(this[key])
			})
			return al
		}, (newValue, oldValue) => {
			this.paginationInternal.pageSize = this.pageSize

			let needReset = false
			for (let i = 2; i < newValue.length; i++) {
				if (newValue[i] != oldValue[i]) {
					needReset = true
					break
				}
			}
			if (needReset) {
				this.clear()
				this.reset()
			}
			if (newValue[0] != oldValue[0]) {
				this.paginationInternal.current = this.pageCurrent
			}

			this._execLoadData()
		})

		// #ifdef H5
		if (process.env.NODE_ENV === 'development') {
			this._debugDataList = []
			if (!window.unidev) {
				window.unidev = {
					clientDB: {
						data: []
					}
				}
			}
			unidev.clientDB.data.push(this._debugDataList)
		}
		// #endif

		// #ifdef MP-TOUTIAO
		let changeName
		let events = this.$scope.dataset.eventOpts
		for (var i = 0; i < events.length; i++) {
			let event = events[i]
			if (event[0].includes('^load')) {
				changeName = event[1][0][0]
			}
		}
		if (changeName) {
			let parent = this.$parent
			let maxDepth = 16
			this._changeDataFunction = null
			while (parent && maxDepth > 0) {
				let fun = parent[changeName]
				if (fun && typeof fun === 'function') {
					this._changeDataFunction = fun
					maxDepth = 0
					break
				}
				parent = parent.$parent
				maxDepth--;
			}
		}
		// #endif

		// if (!this.manual) {
		// 	this.loadData()
		// }
	},
	// #ifdef H5
	beforeDestroy() {
		if (process.env.NODE_ENV === 'development' && window.unidev) {
			var cd = this._debugDataList
			var dl = unidev.clientDB.data
			for (var i = dl.length - 1; i >= 0; i--) {
				if (dl[i] === cd) {
					dl.splice(i, 1)
					break
				}
			}
		}
	},
	// #endif
	methods: {
		loadData(args1, args2) {
			let callback = null
			if (typeof args1 === 'object') {
				if (args1.clear) {
					this.clear()
					this.reset()
				}
				if (args1.current !== undefined) {
					this.paginationInternal.current = args1.current
				}
				if (typeof args2 === 'function') {
					callback = args2
				}
			} else if (typeof args1 === 'function') {
				callback = args1
			}

			this._execLoadData(callback)
		},
		loadMore() {
			if (this._isEnded) {
				return
			}
			this._execLoadData()
		},
		refresh() {
			this.clear()
			this._execLoadData()
		},
		clear() {
			this._isEnded = false
			this.listData = []
		},
		reset() {
			this.paginationInternal.current = 1
		},
		remove(id, {
			action,
			callback,
			confirmTitle,
			confirmContent
		} = {}) {
			if (!id || !id.length) {
				return
			}
			uni.showModal({
				title: confirmTitle || '提示',
				content: confirmContent || '是否删除该数据',
				showCancel: true,
				success: (res) => {
					if (!res.confirm) {
						return
					}
					this._execRemove(id, action, callback)
				}
			})
		},
		_execLoadData(callback) {
			if (this.loading) {
				return
			}
			this.loading = true
			this.errorMessage = ''

			this._getExec().then((res) => {
				this.loading = false
				const {
					data,
					count
				} = res.result
				this._isEnded = data.length < this.pageSize

				callback && callback(data, this._isEnded)
				this._dispatchEvent(events.load, data)

				if (this.getone) {
					this.listData = data.length ? data[0] : undefined
				} else if (this.pageData === pageMode.add) {
					this.listData.push(...data)
					if (this.listData.length) {
						this.paginationInternal.current++
					}
				} else if (this.pageData === pageMode.replace) {
					this.listData = data
					this.paginationInternal.count = count
				}

				// #ifdef H5
				if (process.env.NODE_ENV === 'development') {
					this._debugDataList.length = 0
					this._debugDataList.push(...JSON.parse(JSON.stringify(this.listData)))
				}
				// #endif
			}).catch((err) => {
				this.loading = false
				this.errorMessage = err
				callback && callback()
				this.$emit(events.error, err)
			})
		},
		_getExec() {
			let exec = this.db
			if (this.action) {
				exec = exec.action(this.action)
			}

			exec = exec.collection(this.collection)

			if (!(!this.where || !Object.keys(this.where).length)) {
				exec = exec.where(this.where)
			}
			if (this.field) {
				exec = exec.field(this.field)
			}
			if (this.orderby) {
				exec = exec.orderBy(this.orderby)
			}

			const {
				current,
				size
			} = this.paginationInternal
			exec = exec.skip(size * (current - 1)).limit(size).get({
				getCount: this.getcount
			})

			return exec
		},
		_execRemove(id, action, callback) {
			if (!this.collection || !id) {
				return
			}

			const ids = Array.isArray(id) ? id : [id]
			if (!ids.length) {
				return
			}

			uni.showLoading({
				mask: true
			})

			let exec = this.db
			if (action) {
				exec = exec.action(action)
			}

			exec.collection(this.collection).where({
				_id: dbCmd.in(ids)
			}).remove().then((res) => {
				callback && callback(res.result)
				if (this.pageData === pageMode.replace) {
					this.refresh()
				} else {
					this.removeData(ids)
				}
			}).catch((err) => {
				uni.showModal({
					content: err.message,
					showCancel: false
				})
			}).finally(() => {
				uni.hideLoading()
			})
		},
		removeData(ids) {
			let il = ids.slice(0)
			let dl = this.listData
			for (let i = dl.length - 1; i >= 0; i--) {
				let index = il.indexOf(dl[i]._id)
				if (index >= 0) {
					dl.splice(i, 1)
					il.splice(index, 1)
				}
			}
		},
		_dispatchEvent(type, data) {
			if (this._changeDataFunction) {
				this._changeDataFunction(data, this._isEnded)
			} else {
				this.$emit(type, data, this._isEnded)
			}
		}
	}
}
