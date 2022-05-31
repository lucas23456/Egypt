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
    <div class='login'><h2>Логин</h2></div>

    <button class="enableEthereumButton">Enable Ethereum</button>
    <h2>Account: <span class="showAccount"></span></h2>

    </body>

    <script src='script.js'></script>

    </html>

    `

  )


}
