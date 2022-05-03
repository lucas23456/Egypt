export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  assets(oom
    .aAssetItem({
      id: 'Multiverse',
      src: 'https://cdn.glitch.me/9fc7b6f3-577d-4a75-acde-3ff7704c6420/Multiverse%20-%20%D0%9A%D0%B2%D0%B0%D0%BD%D1%82%D0%BE%D1%80%D0%B8%D1%83%D0%BC%2003.05.2022.glb?v=1651587631271'
    }))
  scene(oom
    .aEntity({ gltfModel: '#Multiverse', position: '0 0 0', rotation: '0 180 0', scale: '1 1 1'}))
}
