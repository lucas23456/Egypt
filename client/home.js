export async function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {Function} */ loadPage
) {
  const style = document.createElement('style')

  style.innerHTML = `
    login-form .content { display: flex; flex-direction: column }
    login-form .login { display: flex; justify-content: flex-end }
    login-form .space { margin: 8px; }
  `

  oom(document.head, style)

  await Promise.all([
    import('https://cdn.jsdelivr.net/npm/@material/mwc-top-app-bar-fixed@0.25.3/+esm'),
    import('https://cdn.jsdelivr.net/npm/@material/mwc-select@0.25.3/+esm'),
    import('https://cdn.jsdelivr.net/npm/@material/mwc-textfield@0.25.3/+esm'),
    import('https://cdn.jsdelivr.net/npm/@material/mwc-button@0.25.3/+esm')
  ])


  class LoginForm extends oom.extends(HTMLElement) {

    static tagName = 'login-form'
    // https://github.com/nodutilus/notml/issues/2
    // static style = oom.style({
    //   '.content': { display: 'flex', flexDirection: 'column' },
    //   '.login': { display: 'flex', justifyContent: 'flex-end' },
    //   '.space': { margin: '8px' }
    // })

    rooms = [
      { id: 'demo', name: 'Демо сцена' },
      { id: 'empty', name: 'Пустая сцена' }
    ]

    template = () => {
      const room = window.localStorage.getItem('room') || 'demo'
      const username = window.localStorage.getItem('username') || ''
      const roomElm = oom
        .mwcSelect({ class: 'space', required: true, label: 'Комната' })
      const usernameElm = oom
        .mwcTextfield({ class: 'space', required: true, label: 'Ваше имя (A-Z a-z)', pattern: '[\\w ().]+', value: username })

      for (const { id, name } of this.rooms) {
        roomElm(oom
          .mwcListItem({ selected: room === id, value: id }, name))
      }

      /** @type {import("@material/mwc-select").Select} */ // @ts-ignore
      this.room = roomElm.dom
      /** @type {import("@material/mwc-textfield").TextField} */ // @ts-ignore
      this.username = usernameElm.dom

      return oom
        .mwcTopAppBarFixed({ dense: true, centertitle: true }, oom
          .div({ slot: 'title' }, 'Вход в онлайн галерею'))
        .div({ class: 'content space' }, this.room, this.username, oom
          .div({ class: 'login space' }, oom.mwcButton({
            onclick: () => this.openRoom(),
            ...{ outlined: true, icon: 'login', label: 'Вход' }
          })))
    }

    openRoom() {
      const room = this.room.value
      const username = this.username.value

      if (room && username && this.username.checkValidity()) {
        window.localStorage.setItem('room', room)
        window.localStorage.setItem('username', username)
        loadPage('scene')
      }
    }

  }


  oom.define(LoginForm)
  oom(window.document.body, new LoginForm())
}
