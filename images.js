AFRAME.registerComponent('views',{
    tick:function(){
        this.different_views()
    },
    different_views:function(){
        var differentview = document.querySelector('#places-container')
        var xx = -60
        var yy = 10
        var zz = -40
        for(i=1;i<=4;i++){
            position = {x:xx+=15,y:yy,z:zz}
            id = `${i}`
        
            var helicopter_entity = document.createElement('a-entity')
            helicopter_entity.setAttribute('visible',true)
            helicopter_entity.setAttribute('id',id)
            helicopter_entity.setAttribute('geometry',{primitive:'circle',radius:2})
            helicopter_entity.setAttribute('material',{src:'./helicopter.png'})
            helicopter_entity.setAttribute('position',position)
            helicopter_entity.setAttribute('for_image',{})
            differentview.appendChild(helicopter_entity)
        }
    }
})