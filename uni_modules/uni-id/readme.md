**文档已移至[uni-id文档](https://doc.dcloud.net.cn/uniCloud/uni-id/old.html)**

> 一般uni-id升级大版本时为不兼容更新，从低版本迁移到高版本请参考：[uni-id迁移指南](https://doc.dcloud.net.cn/uniCloud/uni-id/old.html#m1to2)

## 重要升级说明

**uni-id 3.x版本，搭配的uniCloud admin版本需大于1.2.10。**

### 缓存角色权限

自`uni-id 3.0.0`起，支持在token内缓存用户的角色权限，默认开启此功能，各登录接口的needPermission参数不再生效。如需关闭请在config内配置`"removePermissionAndRoleFromToken": true`。

为什么要缓存角色权限？要知道云数据库是按照读写次数来收取费用的，并且读写数据库会拖慢接口响应速度。未配置`"removePermissionAndRoleFromToken": true`的情况下，可以在调用checkToken接口时不查询数据库获取用户角色权限。

详细checkToken流程如下：

![](https://web-ext-storage.dcloud.net.cn/ext/uni-id/uni-id-flow.jpg)

可以看出，旧版token（removePermissionAndRoleFromToken为true时生成的）在checkToken时如需返回权限需要进行两次数据库查询。新版token不需要查库即可返回权限信息。

**注意**

- 由于角色权限缓存在token内，可能会存在权限已经更新但是用户token未过期之前依然是旧版角色权限的情况。可以调短一些token过期时间来减少这种情况的影响。
- admin角色token内不包含permission，如需自行判断用户是否有某个权限，要注意admin角色需要额外判断一下，写法如下
  ```js
  const {
    role,
    permission
  } = await uniID.checkToken(event.uniIdToken)
  if(role.includes('admin') || permission.includes('your permission id')) {
    // 当前角色拥有'your permission id'对应的权限
  }
  ```