export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  assets(oom
    .aAssetItem({
      id: 'art-gallery-cage',
      src: 'https://cdn.glitch.global/9fc7b6f3-577d-4a75-acde-3ff7704c6420/Magaz%20101.glb?v=1650552026517'
    }))
  scene(oom
    .aEntity({ gltfModel: '#art-gallery-cage', position: '0 0 0', rotation: '0 180 0', scale: '0.3 0.3 0.3'}))
}
