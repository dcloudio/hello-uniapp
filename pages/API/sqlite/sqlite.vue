<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v"><button type="primary" @click="openDB">Open database  test.db</button></view>
			<view class="uni-btn-v"><button type="primary" @click="executeSQL">Create Table database and insert data</button></view>
			<view class="uni-btn-v"><button type="primary" @click="selectSQL">Inquiry Form database`s data</button></view>
			<view class="uni-btn-v"><button type="primary" @click="droptable">Delete Table database</button></view>
			<view class="uni-btn-v"><button type="primary" @click="closeDB">Close the database test.db</button></view>
			<view class="uni-btn-v"><button type="primary" @click="isOpenDB">Check if Open database </button></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'SQLite'
		};
	},
	methods: {
		openDB: function() {
			plus.sqlite.openDatabase({
				name: 'first',
				path: '_doc/test.db',
				success: function(e) {
					plus.nativeUI.alert('Open database test.db success');
				},
				fail: function(e) {
					plus.nativeUI.alert('Open database test.db failure : ' + JSON.stringify(e));
				}
			});
		},
		// 执行SQL语句
		executeSQL: function() {
			plus.sqlite.executeSql({
				name: 'first',
				sql: 'create table if not exists database("name" CHAR(110),"sex" CHAR(10),"age" INT(11))',
				success: function(e) {
					plus.sqlite.executeSql({
						name: 'first',
						sql: "insert into database values('Hikari','Female','7000')",
						success: function(e) {
							plus.nativeUI.alert('Create Table table and insert data success ');
						},
						fail: function(e) {
							plus.nativeUI.alert('Create Table table success but insert data failure : ' + JSON.stringify(e));
						}
					});
				},
				fail: function(e) {
					plus.nativeUI.alert('Create Table table failure : ' + JSON.stringify(e));
				}
			});
		},
		// Query SQL Statements
		selectSQL: function() {
			plus.sqlite.selectSql({
				name: 'first',
				sql: 'select * from database',
				success: function(e) {
					plus.nativeUI.alert('Query SQL Statements success : ' + JSON.stringify(e));
				},
				fail: function(e) {
					plus.nativeUI.alert('Query SQL Statements failure : ' + JSON.stringify(e));
				}
			});
		},
		// Delete Table 
		droptable: function() {
			plus.sqlite.executeSql({
				name: 'first',
				sql: 'drop table database',
				success: function(e) {
					plus.nativeUI.alert('Delete Table database success ');
				},
				fail: function(e) {
					plus.nativeUI.alert('Delete Table database failure : ' + JSON.stringify(e));
				}
			});
		},
		// Close the database 
		closeDB: function() {
			plus.sqlite.closeDatabase({
				name: 'first',
				success: function(e) {
					plus.nativeUI.alert('Close the database  success ');
				},
				fail: function(e) {
					plus.nativeUI.alert('Close the database  failure : ' + JSON.stringify(e));
				}
			});
		},
		isOpenDB: function() {
			if (
				plus.sqlite.isOpenDatabase({
					name: 'first',
					path: '_doc/test.db'
				})
			) {
				plus.nativeUI.alert('Opened!');
			} else {
				plus.nativeUI.alert('Unopened!');
			}
		}
	}
};
</script>

<style>
	.uni-btn-v {
		margin: 20rpx 0;
		padding: 0;
	}
</style>
