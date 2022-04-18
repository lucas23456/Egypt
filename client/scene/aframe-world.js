export async function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  const room = window.localStorage.getItem('room')

  assets(oom
    .img({
      id: 'grid',
      src: 'https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png',
      crossorigin: 'anonymous'
    })
    .img({
      id: 'sky',
      src: 'https://cdn.glitch.global/3e6dd8ed-0bf6-4a7d-8574-aa334f54fe16/SkySpace3.jpg?v=1649224181565',
      crossorigin: 'anonymous'
    }))
  scene(oom
    
    .aEntity({
      position: '0 -0.55 0',
      geometry: 'primitive: plane; width: 10000; height: 10000;',
      rotation: '-90 0 0',
      material: 'src: #grid; repeat: 10000 10000; transparent: true; metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;'
    })
    .aEntity({ light: 'color: #silver; intensity: 1; type: ambient;', visible: '' })
    /**.aEntity({ light: 'color: #ffaaff; intensity: 1.5', position: '5 5 5' })*/
    .aSky({ src: '#sky', rotation: '0 -90 0' }))

  await import(`./room/${room}.js`).then(({ markup }) => markup(oom, assets, scene))
}
