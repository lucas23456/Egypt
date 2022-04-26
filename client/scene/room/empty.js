
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'ArtGalleryCAGE',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/Folds.glb?v=1650962506200'
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
    .aEntity({ gltfModel: '#ArtGalleryCAGE', position: '-20 0 -15', scale: '1 1 1' })
  .aEntity({ gltfModel: '#Glass', position: '0 -0.5 0', scale: '2 2 2' , rotation: '0 90 0'})
  .aEntity({ gltfModel: '#Nft', position: '0 -1.5 0', rotation: '0 90 0', scale: '2 2 2'}))
  
  
  
}
