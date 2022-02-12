AFRAME.registerComponent("car", {
    schema:{
        moveX : {type: "number", default:1},
        rotateX : {type:"number", default: 1}
    },
    tick: function() {
        this.data.moveX = this.data.moveX + 0.001
        var pos = this.el.getAttribute('position')
        pos.x = this.data.moveX
        this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})

        this.data.rotateX = this.data.rotateX + 1
        var rotate = this.el.getAttribute('rotation')
        rotate.x = this.data.rotateX
        this.el.setAttribute('rotation', {x: rotate.x, y: rotate.y, z: rotate.z})
    }

})
    