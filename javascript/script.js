let rightdiv  = document.querySelector(".right");  
let leftdiv  = document.querySelector(".left"); 
let cardcontainer  = document.querySelector(".cardcontainer")
let humburager = document.getElementById("hambu")
let humburage = document.getElementById("hug")
hum = true;
function hii (){
    humburager.addEventListener("click", ()=>{
        if(hum == true){
            leftdiv.classList.add("disnon")
            rightdiv.style.width = "100vw"
            document.getElementById("musiclen").style.width = "79%"
            cardcontainer.style.gap = "16px"
            hum = false;
           

        }else{
            leftdiv.classList.remove("disnon")
            cardcontainer.style.gap = "36px"
            rightdiv.style.width = "75vw"
            
            humburager.classList.add("disno")
            document.getElementById("musiclen").style.width = "70%"
            hum = true;
            
        
        }
    })
    humburage.addEventListener("click", ()=>{
        humburager.classList.remove("disno")
        if(hum == true){
            leftdiv.classList.add("disnon")
                rightdiv.style.width = "100vw"
                
                cardcontainer.style.gap = "16px"
                hum = false;
               document.getElementById("musiclen").style.width = "79%"
    
        }else{
            leftdiv.classList.remove("disnon")
                cardcontainer.style.gap = "36px"
                rightdiv.style.width = "75vw"
                hum = true;
                document.getElementById("musiclen").style.width = "70%"
        }
    })
}
hii()










