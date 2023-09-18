class Dato{
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }
    get descripcion(){
        return this._descripcion;
    }
    get valor(){
        return this._valor;
    } 
    set descripcion(valor){
        this._descripcion = valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}
