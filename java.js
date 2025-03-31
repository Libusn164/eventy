var zmacknuti
document.getElementById("tlacitko1").addEventListener("click",()=>{
    alert("tlačítko zmáčknuto")
})

var cervena = false
document.getElementById("tlacitko2").addEventListener("click",()=>{
    if(cervena){
        document.getElementById("div").style.backgroundColor="red"
        document.getElementById("div").style.width="50px"
        document.getElementById("div").style.height="30px"
        cervena=false
    }else{
        document.getElementById("div").style.backgroundColor="blue"
        document.getElementById("div").style.width="150px"
        document.getElementById("div").style.height="150px"
        cervena=true
    }
})

var nadpis = true
document.getElementById("tlacitko3").addEventListener("click",()=>{
    if(nadpis){
        document.getElementById("nadpis").style.innerHTML="OI OI OI"
    }
})