function move(element){
    element.style.position =`fixed`
    function moving(left,bottom){
        element.style.left=left+`px`
        element.style.bottom=bottom+`px`
    }
    function moveWithArrowKeys(left,bottom,callback){
        let x=left
        let y=bottom

        element.style.left= x+`px`
        element.style.bottom= y+`px`

        function movePlayer(){
            if (direction=== `right`){
                x-=1
            }
            if (direction===`up`){
               y+=1     
            }
            if (direction===`left`){
                x+=1
            }
            if(direction===`down`){
                y-=1
            }
           element.style.left=x+`px`
           element.style.bottom=y+`px` 
        }
        setInterval(movePlayer,1)
        document.addEventListener(`keydown`,function(e){
            if(e.repeat)return
            if(e.key===`ArrowLeft`){
                direction=`left`
            }
            if(e.key===`ArrowRight`){
                direction=`right`
            }
        })
        document.addEventListener(`keyup`,function(e){
            direction=null
            callback(direction)
        })
    }
    return{
        to:moving,
        withArrowKeys: moveWithArrowKeys
    }
}