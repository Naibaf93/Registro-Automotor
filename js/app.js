/* Constructor */
function Automovil(marca, modelo,  color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

/* Variables */

let automovil1= new Automovil('Chevrolet', 'Camaro', 'Amarillo', 2017, 'Sam Witwicky');
let automovil2 = new Automovil('Mazda', 'Allegro', 'Negro', 2022, 'Fabián Huertas');
let automovil3 = new Automovil('Renault', 'Sandero', 'Gris', 2011, 'Antonio Valencia');
let automoviles = [automovil1, automovil2, automovil3];

/* Metodos */

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.encender = function(){
    alert("El auto esta encendido🚗");
}

Automovil.prototype.verAutomovil = function(){
    return `${this.marca} ${this.modelo} - ${this.color} - ${this.anio} - ${this.titular}`
}

/* Funciones */
function mostrarAutomoviles(){
    let lista = document.getElementById('listaAutomoviles');

    for(let automovil of automoviles) {
        let  item = document.createElement('li');
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
}