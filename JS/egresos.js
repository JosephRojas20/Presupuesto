class Egresos extends Datos{
    static contadorId=0;
    constructor(descripcion,valor){
        super(descripcion,valor);
        this._id=++Egresos.contadorId;
    }
    get id(){
        return this._id;
    }
}