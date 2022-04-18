// @ts-ignore
window.AFRAME.registerComponent('random-color', {
  schema: {
    min: { default: { x: 0, y: 0, z: 0 }, type: 'vec3' },
    max: { default: { x: 1, y: 1, z: 1 }, type: 'vec3' }
  },

  update: function update() {
    const { max, min } = this.data

    // @ts-ignore
    this.el.setAttribute('material', 'color', '#' + new window.THREE.Color(
      Math.random() * max.x + min.x,
      Math.random() * max.y + min.y,
      Math.random() * max.z + min.z
    ).getHexString())
  }
})

// @ts-ignore
window.AFRAME.registerComponent('spawn-in-circle', {
  schema: {
    radius: { type: 'number', default: 1 }
  },
  init: function init() {
    const { el } = this
    const center = el.getAttribute('position')
    const angleRad = this.getRandomAngleInRadians()
    const circlePoint = this.randomPointOnCircle(this.data.radius, angleRad)
    const worldPoint = { x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z }
    const angleDeg = angleRad * 180 / Math.PI
    const angleToCenter = -1 * angleDeg + 90
    const rotationStr = '0 ' + angleToCenter + ' 0'

    el.setAttribute('position', worldPoint)
    el.setAttribute('rotation', rotationStr)
  },

  getRandomAngleInRadians: () => {
    return Math.random() * Math.PI * 2
  },

  randomPointOnCircle: (radius, angleRad) => {
    const x = Math.cos(angleRad) * radius
    const y = Math.sin(angleRad) * radius

    return { x, y }
  }
})
