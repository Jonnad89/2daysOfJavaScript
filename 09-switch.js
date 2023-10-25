let dia = 2;
let nombreDia;

switch(dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break
    case 7:
        nombreDia = "Domingo";
        break
    default:
        nombreDia = "Día inválido"    
}

console.log("El día es: " + nombreDia)

let mes = "Septiembre"
let estacion;

switch(mes){
    case "Enero":
    case "Febrero":
    case "Marzo":
        estacion = "Invierno"
        break;
    case "Abril":
    case "Mayo":
    case "Junio":
        estacion = "Primavera"
        break;
    case "Julio":
    case "Agosto":
    case "Septiembre":
        estacion = "Verano"
        break;
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        estacion = "Otoño"
        break;
    default:
        estacion = "Mes inválido";

}

console.log("La estación es: " + estacion)