const platformInfo = process.env.uniTestPlatformInfo.toLocaleLowerCase()
const isAndroid = platformInfo.startsWith('android')
const isIOS = platformInfo.startsWith('ios')
const isHarmony = platformInfo.startsWith('harmony')
const isAppWebView = process.env.UNI_AUTOMATOR_APP_WEBVIEW == 'true'
const isDom2 = process.env.UNI_APP_X_DOM2 === "true"

describe('web-view', () => {
  if (!isHarmony) {
    it('not support', () => {
      expect(1).toBe(1)
    })
    return
  }

  let page
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/web-view/issue-27817')
    await page.waitFor('view')
    await page.waitFor(1000)
  })

  it('src test', async () => {
	expect(await page.data('pageUrl')).not.toBeUndefined()
  })
})
