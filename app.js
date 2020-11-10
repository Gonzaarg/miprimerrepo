class Mueble{
    constructor(material="madera", patas=4, peso=16){
    this.material=material,
    this.patas=patas,
    this.peso=peso
}
    numeroPatas(){
        if(this.patas===0){
            return ("El mueble no tiene patas");
        } else{
            return console.log(`El mueble tiene ${this.patas} patas `);
        }
    }

    pesoMueble(){
        if (this.peso>15){
            return ("Tenes que contratar un flete");
        } else{
            return ("Puede llevarlo por si mismo")
        }
    }
}

const mueble=new Mueble;
console.log(mueble.numeroPatas());
console.log(mueble.pesoMueble());


// const figuras = {
//     alto : 60,
//     ancho : 40,
//     color : "verde",
// }

// function tomarAncho(){
//     return (figuras.ancho);
// }
// console.log(tomarAncho());  

// // otra forma sería:

// const figuras = {
//     alto : 60,
//     ancho : 40,
//     color : "verde",
//     tomarAncho(){
//         return(figuras.ancho)
//     }
// }

// console.log(figuras.tomarAncho());

// class Figuras {
//     constructor(alto, ancho, color){ 
//         this.alto = alto;
//         this.ancho = ancho;
//         this.color = color;
//     }
//         tomarAncho(){
//             return(this.ancho)
//         }
// }

// const figuras = new Figuras(90, 25, "blanco");
// console.log(figuras)
// Esto en consola me tira el ancho de la figuras, o SafeArray, 40. Si pongo this.ancho*2 en el return, me va a devolver 80.
// Al cambiar los parámetros en new Figuras, se va a cambiar en lo que muestra la consola.