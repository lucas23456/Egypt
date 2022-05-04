export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  assets(oom
    .aAssetItem({
      id: 'ocean',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/ocean.glb?v=1651671274337'
    })
  .aAssetItem({
      id: 'Building',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/Building.glb?v=1651671066479'
    })
 .aAssetItem({
      id: 'Collection',
      src: 'https://cdn.glitch.me/9fc7b6f3-577d-4a75-acde-3ff7704c6420/collection.glb?v=1651670077530'
    })
.aAssetItem({
      id: 'Level',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/level.glb?v=1651670138755'
    })
.aAssetItem({
      id: 'Transport',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/transport.glb?v=1651670209084'
    })
.aAssetItem({
      id: 'HallDeconstruct  ART21',
      src: 'https://cdn.glitch.global/1119fe6d-80fd-45cd-8f05-86299c9ab3fb/HallDeconstruct%20%20ART2.gltf?v=1651489277304'
    })
.aAssetItem({
      id: 'HallDeconstruct  212',
      src: 'https://cdn.glitch.global/9bd64b90-825a-415c-9640-30f41c26196c/Villa%2029.04.22.glb?v=1651315100978'
    })
  .aAssetItem({
      id: 'GlassInner1',
      src: 'https://cdn.glitch.global/9bd64b90-825a-415c-9640-30f41c26196c/GlassOuter.gltf?v=1651321844801'
    }))
  
  scene(oom

  .aEntity({ gltfModel: '#ocean', position: '0 2 0', scale: '1 1 1', enmap:'' })
  .aEntity({ gltfModel: '#Collection', position: '0 0 0', scale: '1 1 1', enmap:'' })
  .aEntity({ gltfModel: '#Level', position: '0 0 0', scale: '1 1 1', enmap:'' })
  .aEntity({ gltfModel: '#Transport', position: '0 0 0', scale: '1 1 1', enmap:'' })
  .aEntity({ gltfModel: '#Building', position: '0 0 0', scale: '1 1 1', enmap:''})
  .aEntity({ gltfModel: '#GlassInner', position: '0 0 0', scale: '1 1 1', enmapinner:''})
  .aEntity({ gltfModel: '#HallDeconstruct 3D 2', position: '0 0 0', scale: '1 1 1', enmapinner:''})
  .aEntity({ gltfModel: '#HallDeconstruct 3D 1', position: '0 0 0', scale: '1 1 1',enmapinner:'' }))
  
  
}


