AFRAME.registerComponent('for_image',{
    init:function(){
        this.el.addEventListener('click',(e)=>{
            this.got_click()
        })
    },
    got_click:function(){
        var el_id = this.el.getAttribute('id')
        var main_container_sky = document.querySelector('#main-container')
        main_container_sky.setAttribute('material',{src:`./image_${el_id}.png`})

    }
})