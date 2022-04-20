export async function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  const room = window.localStorage.getItem('room')

  assets(oom
    .img({
      id: 'grid',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/IMG_7502.PNG?v=1650448361415',
      crossorigin: 'anonymous'
    })
    .img({
      id: 'sky',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/Epic_BlueSunset_EquiRect_flat.png?v=1650445438016',
      crossorigin: 'anonymous'
    }))
  scene(oom
    
    .aEntity({
      position: '0 0 0',
      geometry: 'primitive: plane; width: 300; height: 300;',
      rotation: '-90 0 0',
      material: 'src: #grid; repeat: 100 100; transparent: true; metalness:0; roughness: 10; sphericalEnvMap: #sky;'
    })
    .aEntity({ light: 'color: #silver; intensity: 1; type: ambient;', visible: '' })
    /**.aEntity({ light: 'color: #ffaaff; intensity: 1.5', position: '5 5 5' })*/
    .aSky({ src: '#sky', rotation: '0 0 0' }))

  await import(`./room/${room}.js`).then(({ markup }) => markup(oom, assets, scene))
}
