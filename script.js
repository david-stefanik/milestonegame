function NewImage (url, left,bottom){
    let object = document.createElement(`img`)
    object.src= url
    object.style.left= left+`px`
    object.style.bottom = bottom + `px`
    object.style.position= `fixed`
    document.body.append(object)
    return object
    
}
function newEnimy (url,left,bottom){
    let object=NewImage(url,left,bottom)
    
}


newEnimy(`./enemy1.png`,550,550)
NewImage(`player.png`,50,50)