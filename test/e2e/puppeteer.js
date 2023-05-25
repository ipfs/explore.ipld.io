import puppeteer from 'puppeteer'

export const debug = import.meta.env.DEBUG === 'true'
export const appUrl = import.meta.env.URL || 'http://localhost:3000'

// puppeteer.launch opts
// see: https://github.com/GoogleChrome/puppeteer/blob/v1.3.0/docs/api.md#puppeteerlaunchoptions
const defaults = {
  dumpio: debug,
  headless: !debug,
  slowMo: debug ? 50 : undefined,
  args: import.meta.env.NO_SANDBOX === 'true' ? ['--no-sandbox'] : undefined
}

export function launch (spec) {
  const opts = Object.assign({}, defaults, spec)
  return puppeteer.launch(opts)
}
