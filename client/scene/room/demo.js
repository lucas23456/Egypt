export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  assets(oom
    .aAssetItem({
      id: 'art-gallery-cage',
      src: 'https://cdn.glitch.me/9fc7b6f3-577d-4a75-acde-3ff7704c6420/CityModern.glb?v=1650532565594'
    }))
  scene(oom
    .aEntity({ gltfModel: '#art-gallery-cage', position: '0 -1.5 0', rotation: '0 180 0', scale: '0.1 0.1 0.1'}))
}
