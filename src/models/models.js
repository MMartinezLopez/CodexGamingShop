export const Producto = function (id, nombre, urlImagen, descripcion, precio, existencia) {
    this.id = id;
    this.nombre = nombre;
    this.urlImagen = urlImagen;
    this.descripcion = descripcion;
    this.precio = precio;
    this.existencia = existencia;
}

export const Region = function (id, nombre, area, poblacion) {
    this.id = id;
    this.nombre = nombre;
    this.area = area;
    this.poblacion = poblacion;
}