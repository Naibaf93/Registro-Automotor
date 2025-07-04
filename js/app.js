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
let automovil4 = new Automovil('Ford', 'Mustang', 'Azul', 2018, 'Cristian Vargas');
let automovil5 = new Automovil('Audi', 'A3 Sportback', 'Blanco', 2020, 'Julián Vargas');
let automovil6 = new Automovil('BMW', 'Sedán', 'Plateado', 2015, 'Oscar Galindo');
let automovil7 = new Automovil('Toyota', 'Corolla', 'Negro', 2020, 'Melisa Forero');
let automoviles = [automovil1, automovil2, automovil3, automovil4, automovil5, automovil6, automovil7];

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