export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  assets(oom
    .aAssetItem({
      id: 'HallDeconstruct',
      src: 'https://cdn.glitch.global/3e6dd8ed-0bf6-4a7d-8574-aa334f54fe16/DeconstructHallGrndBlack.glb?v=1649965055990'
    }))
  scene(oom
    .aEntity({ navMesh: true, gltfModel: '/scene/hall-navmesh.gltf', position: '0 0 0'})
    .aEntity({ gltfModel: '#HallDeconstruct', position: '0 0 0'}))
}
