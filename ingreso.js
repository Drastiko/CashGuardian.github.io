class Ingreso extends Dato{
    static IDcontador = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._IDcontador = ++Ingreso.IDcontador;
    }
    get IDcontador(){
        return this._IDcontador;
    }
}