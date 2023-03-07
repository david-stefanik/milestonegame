function player(x,y){
    let element= newImage(`images/player`)
    element.style.zIndex =1


    move(element).withArrowKeys(x,y)
    return{
        element:element
    }
}