export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  scene(oom
    .aEntity({ navMesh: true, gltfModel: '/scene/test-navmesh.gltf' }))
}
