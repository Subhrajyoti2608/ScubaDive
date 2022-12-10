AFRAME.registerComponent("point",{
    init: function(){
        for(var i = 0; i<=20; i++){
            var id = `point${i}`
            var posX = (Math.random()*3000+(-2000))
            var posY = (Math.random()*2+(-1))
            var posZ = (Math.random()*3000+(-2000))
            var position={x: posX, y: posY, z: posZ}
            this.roamturtle(id,position)
        }
    },
    roamturtale:(id,position)=>{
        var terrainEL = document.querySelector("#island")
        var turtleEL = document.createElement("a-entity")
        turtleEL.setAttribute("id",id)
        turtleEL.setAttribute("position",position)
        turtleEL.setAttribute("scale",{x:500,y:500,z:500})
        turtleEL.setAttribute("gltf-model","./animations/treasure/model.gltf")
        turtleEL.setAttribute("animation-mixer",{})
        terrainEL.appendChild(turtleEL)

    } 
})