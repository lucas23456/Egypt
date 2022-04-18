AFRAME.registerComponent("enmap", {
        init: function() {
          var targetCube = new THREE.WebGLRenderTargetCube(512, 512);
          var renderer = this.el.sceneEl.renderer;

          this.el.addEventListener("model-loaded", e => {
            let mesh = this.el.getObject3D("mesh");
            
            var texture = new THREE.TextureLoader().load(
              "https://cdn.glitch.global/3e6dd8ed-0bf6-4a7d-8574-aa334f54fe16/PanoramaArt.jpg?v=1648754288986",
              function() {
                var cubeTex = targetCube.fromEquirectangularTexture(renderer, texture);
                mesh.traverse(function(el) {
                  if (el.material) {
                    el.material.envMap = cubeTex.texture;
                    el.material.envMap.intensity = 3;
                    el.material.needsUpdate = true;
                  }
                });
                
              }
            );
          });
        }
      });
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
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
    .aEntity({ navMesh: true, gltfModel: '/scene/hall-navmesh.gltf', visible: false, position: '0 0 0'})
    .aEntity({ gltfModel: '#HallDeconstruct', position: '0 0,1 0'})
  .aEntity({ gltfModel: '#Glass', position: '0 0,1 0'})
  .aEntity({ gltfModel: '#Nft', position: '0 0,1 0', rotation: '0 180 0'}))
  
}
