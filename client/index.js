(async () => {
  if (window['@notml/core:compatibility'] === false) {
    return false
  }

  const { oom } = await import('https://cdn.jsdelivr.net/npm/notml@0.1.0-pre.17/core.js')
  const loadPage = page => {
    (async () => {
      const { markup } = await import(`./${page}.js`)

      window.document.body.innerHTML = ''

      await markup(oom, loadPage)
    })().catch(err => {
      err = err.stack ? `${err.message}\n\n${err.stack}` : err
      console.error(err)
      window.document.body.innerHTML += `<code style="white-space: pre-wrap; word-break: break-all; color: #B22222;">${err}</code>`
    })
  }

  loadPage('home')
})()
