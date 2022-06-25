function ingresar(){
    let agregar = document.getElementById("dinero").value
    if(Number(agregar) >= 5000){
        let apuesta=document.getElementById("apuesta").value
        if(apuesta >agregar){
        alert("puede ingresar maximo")

    }
    console.log("a")
    }
    else{alert("el valor minimo de apuesta es:5000")}

}

