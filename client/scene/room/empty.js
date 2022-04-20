
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'HallDeconstruct',
      src: 'https://cdn.glitch.me/9fc7b6f3-577d-4a75-acde-3ff7704c6420/ArtGalleryCAGE.glb?v=1650463053948'
    })
  .aAssetItem({
      id: 'Glass',
      src: 'https://cdn.glitch.global/3e6dd8ed-0bf6-4a7d-8574-aa334f54fe16/GlassHall2.glb?v=1649960366473'
    })
  .aAssetItem({
      id: 'Nft',
      src: 'https://cdn.glitch.global/3e6dd8ed-0bf6-4a7d-8574-aa334f54fe16/NftPics.glb?v=1649239112623'
    }))
  
  scene(oom
    .aEntity({ navMesh: true, gltfModel: '/scene/hall-navmesh.gltf', visible: false, position: '0 0 0', scale: '2 2 2'})
    .aEntity({ gltfModel: '#HallDeconstruct', position: '0 0 6', scale: '1 1 1' })
  .aEntity({ gltfModel: '#Glass', position: '0 -0.5 0', scale: '2 2 2'})
  .aEntity({ gltfModel: '#Nft', position: '0 -1.5 0', rotation: '0 180 0', scale: '2 2 2'}))
  
  
  
}
