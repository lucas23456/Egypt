
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'ArtGalleryCAGE',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/ZAL.glb?v=1651041146942'
    })
  .aAssetItem({
      id: 'Glass',
      src: 'https://cdn.glitch.global/3e6dd8ed-0bf6-4a7d-8574-aa334f54fe16/GlassHall2.glb?v=1649960366473'
    })
 .aAssetItem({
      id: 'KAR',
      src: 'https://cdn.glitch.me/9fc7b6f3-577d-4a75-acde-3ff7704c6420/RABOTI.glb?v=1651041419117'
    })
  .aAssetItem({
      id: 'Nft1',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/oformlenie.glb?v=1651041159752'
    }))
  
  scene(oom
    .aEntity({ gltfModel: '#ArtGalleryCAGE', position: '0 0 0', scale: '1 1 1' })
  .aEntity({ gltfModel: '#Glass', position: '0 0 0', scale: '2 2 2' , rotation: '0 90 0'})
 .aEntity({ gltfModel: '#KAR', position: '0 0 0', scale: '1 1 1' , rotation: '0 0 0'})
  .aEntity({ gltfModel: '#Nft', position: '0 0 0', scale: '1 1 1' , rotation: '0 0 0'}))
  
  
  
}
