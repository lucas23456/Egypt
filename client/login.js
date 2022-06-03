export async function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {Function} */ loadPage
)

{

  document.write(
    `
    <html>
      <link rel='stylesheet' href='style.css'>
    <body>
  
      <iframe src="https://loginshit.glitch.me/" style="width:100%; height:100%; overflow:hidden;">
  
    </body>
    </html>

    `

  )


}
