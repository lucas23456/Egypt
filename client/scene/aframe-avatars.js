export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  const userName = window.localStorage.getItem('username')
  const isArtist = userName.toLocaleLowerCase() === 'artist'
  const isPegasVr = userName.toLocaleLowerCase() === 'pegasvr'
  let pTemplate = 'player-template'

  if (isArtist) {
    pTemplate = 'artist-template'
  } else if (isPegasVr) {
    pTemplate = 'pegasvr-template'
  }

  assets(oom
    .aAssetItem({
      id: 'model-pegasvr',
      src: '/scene/models/SlavaAvatar.glb'
    })
    .template({ id: 'pegasvr-template' }, oom
      .aEntity({ class: 'avatar', networkedAudioSource: true }))
    .template({ id: 'pegasvr-template-head' }, oom
      .aEntity({ class: 'avatar-head' }, oom
        .aEntity({ class: 'nametag', text: 'value: name; align:center;', position: '0 0.8 0', rotation: '0 180 0', scale: '8 8 8' })
        .aEntity({
          gltfModel: '#model-pegasvr',
          position: '0 0 0',
          rotation: '0 180 0',
          scale: '0.45 0.5 0.4'
        })))
    .template({ id: 'artist-template' }, oom
      .aEntity({ class: 'avatar', networkedAudioSource: true }))
    .template({ id: 'artist-template-head' }, oom
      .aEntity({ class: 'avatar-head' }, oom
        .aEntity({ class: 'nametag', text: 'value: name; align:center;', position: '0 0.8 0', rotation: '0 180 0', scale: '8 8 8' })
        .aBox({ class: 'head', scale: '0.7 0.7 0.7' })
        .aEntity({ class: 'face', position: '0 0.05 0' }, oom
          .aSphere({ class: 'eye', color: '#efefef', position: '0.16 0.1 -0.35', scale: '0.12 0.12 0.12' }, oom
            .aSphere({ class: 'pupil', color: '#000', position: '0 0 -1', scale: '0.2 0.2 0.2' }))
          .aSphere({ class: 'eye', color: '#efefef', position: '-0.16 0.1 -0.35', scale: '0.12 0.12 0.12' }, oom
            .aSphere({ class: 'pupil', color: '#000', position: '0 0 -1', scale: '0.2 0.2 0.2' })))))
    .template({ id: 'player-template' }, oom
      .aEntity({ class: 'avatar', networkedAudioSource: true }))
    .template({ id: 'player-template-head' }, oom
      .aEntity({ class: 'avatar-head' }, oom
        .aEntity({ class: 'nametag', text: 'value: name; align:center;', position: '0 0.8 0', rotation: '0 180 0', scale: '8 8 8' })
        .aSphere({ class: 'head', scale: '0.45 0.5 0.4' })
        .aEntity({ class: 'face', position: '0 0.05 0' }, oom
          .aSphere({ class: 'eye', color: '#efefef', position: '0.16 0.1 -0.35', scale: '0.12 0.12 0.12' }, oom
            .aSphere({ class: 'pupil', color: '#000', position: '0 0 -1', scale: '0.2 0.2 0.2' }))
          .aSphere({ class: 'eye', color: '#efefef', position: '-0.16 0.1 -0.35', scale: '0.12 0.12 0.12' }, oom
            .aSphere({ class: 'pupil', color: '#000', position: '0 0 -1', scale: '0.2 0.2 0.2' })))))
  )

  // @ts-ignore
  window.NAF.schemas.add({
    template: '#pegasvr-template',
    components: ['position', 'rotation']
  })
  // @ts-ignore
  window.NAF.schemas.add({
    template: '#pegasvr-template-head',
    components: ['position', 'rotation',
      {
        selector: '.head',
        component: 'material',
        property: 'color'
      },
      {
        selector: '.nametag',
        component: 'text',
        property: 'value'
      }
    ]
  })

  // @ts-ignore
  window.NAF.schemas.add({
    template: '#artist-template',
    components: ['position', 'rotation']
  })
  // @ts-ignore
  window.NAF.schemas.add({
    template: '#artist-template-head',
    components: ['position', 'rotation',
      {
        selector: '.nametag',
        component: 'text',
        property: 'value'
      },
      {
        selector: '.head',
        component: 'material',
        property: 'color'
      }
    ]
  })

  // @ts-ignore
  window.NAF.schemas.add({
    template: '#player-template',
    components: ['position', 'rotation']
  })
  // @ts-ignore
  window.NAF.schemas.add({
    template: '#player-template-head',
    components: ['position', 'rotation',
      {
        selector: '.nametag',
        component: 'text',
        property: 'value'
      },
      {
        selector: '.head',
        component: 'material',
        property: 'color'
      }
    ]
  })

  const player = oom
    .aEntity({
      id: 'player',
      movementControls: 'constrainToNavMesh: true; speed:0.2;',
      navigator: 'cameraRig: #player; cameraHead: #head; collisionEntities: .collision; ignoreEntities: .clickable',
      networked: `template: #${pTemplate}; attachTemplateToLocal:false;`,
      position: '0 0 0',
      rotation: '0 0 0',
      spawnInCircle: 'radius:2'
    }, oom
      .aEntity({
        class: 'head',
        networked: `template: #${pTemplate}-head; attachTemplateToLocal:false;`,
        lookControls: 'pointerLockEnabled: true;',
        visible: 'false',
        camera: 'active: true',
        position: '0 1.6 0',
        rotation: '0 0 0'
      }, oom
        .aEntity({
          class: 'nametag',
          visible: 'false',
          text: `value: ${userName}; align:center;`
        })
        .aSphere({ class: 'head', randomColor: true }))
      .aEntity({
        class: 'leftController',
        handControls: 'hand: left; handModelStyle: lowPoly; color: #15ACCF',
        trackedControls: true,
        viveControls: 'hand: left',
        oculusTouchControls: 'hand: left',
        windowsMotionControls: 'hand: left',
        teleportControls: 'cameraRig: #player; teleportOrigin: #head; button: trigger; type: line; curveShootingSpeed: 18; landingMaxAngle: 60',
        visible: 'true'
      })
      .aEntity({
        class: 'rightController',
        handControls: 'hand: right; handModelStyle: lowPoly; color: #15ACCF',
        trackedControls: true,
        viveControls: 'hand: right',
        oculusTouchControls: 'hand: right',
        windowsMotionControls: 'hand: right',
        laserControls: true,
        raycaster: 'showLine: true; far: 10; interval: 0; objects: .clickable, a-link;',
        line: 'color: lawngreen; opacity: 0.5',
        visible: 'true'
      }))

  scene(player)
}
