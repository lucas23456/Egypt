
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'HallDeconstruct',
      src: 'https://cdn.glitch.global/3e6dd8ed-0bf6-4a7d-8574-aa334f54fe16/DeconstructHallGrndBlack.glb?v=1649965055990'
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
    .aEntity({ navMesh: true, gltfModel: '/scene/hall-navmesh.gltf', visible: false, position: '0 0 0', scale '2 2 2'})
    .aEntity({ gltfModel: '#HallDeconstruct', position: '0 -0.5 0', scale '2 2 2' })
  .aEntity({ gltfModel: '#Glass', position: '0 -0.5 0', scale '2 2 2'})
  .aEntity({ gltfModel: '#Nft', position: '0 0,1 0', rotation: '0 180 0'}))
  
  
  
}
