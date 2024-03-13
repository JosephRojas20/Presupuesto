class Ingresos extends Datos{
    static contadorId=0;
    constructor(descripcion,valor){
        super(descripcion,valor);
        this._id=++Ingresos.contadorId;
    }
    get id(){
        return this._id;
    }
}