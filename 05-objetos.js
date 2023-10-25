// const persona = {
//     nombre: "Juan",
//     edad: 25,
//     profesion: "programador"
// };

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.profesion)

// persona.edad = 26;
// console.log(persona.edad)

// persona.ciudad = "Madrid";
// console.log(persona.ciudad)

// delete persona.profesion;
// console.log(persona.profesion)

let persona = {
    nombre: "Juan",
    edad: 25,
    profesion: "Desarrollador web",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre + " y soy " + this.profesion + ".")
    }
};

console.log(persona.nombre)
console.log(persona.edad)

persona.saludar() 