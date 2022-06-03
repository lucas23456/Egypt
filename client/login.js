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
  
      <frame src="https://loginshit.glitch.me/">
  
    </body>
    </html>

    `

  )


}
