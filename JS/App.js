const arregloIngresos=[],arregloEgresos=[];
function imprimirDatosIngresos(){
    let arreglo="";
    for(let index of arregloIngresos){
        arreglo+=formatoIng(index);
    }
    return document.getElementById("ListaIngresos").innerHTML=arreglo;
}
function imprimirDatosEgresos(){
    let arreglo="";
    for(let index of arregloEgresos){
        arreglo+=formatoEgre(index);
    }
    return document.getElementById("ListaEgresos").innerHTML=arreglo;
}
const sumarIngresos = () =>{
    let sumarIngresos = 0;
    for(let index of arregloIngresos){
        sumarIngresos+=Number(index.Valor);
    }
    return sumarIngresos;
}
const sumarEgresos = () =>{
    let sumarEgresos = 0;
    for(let index of arregloEgresos){
        sumarEgresos+=Number(index.Valor);
    }
    return sumarEgresos;
}
const recibirDatos  = () =>{
    console.log("recibiendo");
    let form=document.forms["Form"];
    let tipo=form["Valor"].value;
    let numero=form["ValorNumero"].value;
    let descripcion=form["Descripcion"].value;
    if(tipo === "Ingreso"){
        arregloIngresos.push(new Ingresos(descripcion,numero));
        imprimirDatosIngresos();
        sumarIngresos();
        document.getElementById("Ingreso-Valor").innerHTML=FormatoMoneda(sumarIngresos());
    }else if(tipo === "Egreso"){
        arregloEgresos.push(new Egresos(descripcion,numero));
        imprimirDatosEgresos();
        sumarEgresos();
        document.getElementById("Egreso-Valor").innerHTML=FormatoMoneda(sumarEgresos());
    }
    let valPresupuesto=sumarIngresos()-sumarEgresos();
    let porcentaje=sumarEgresos()/sumarIngresos();
    document.getElementById("Presupuesto--Numero").innerHTML=FormatoMoneda(valPresupuesto);
    document.getElementById("Porcentaje").innerHTML=FormatoPorcentaje(porcentaje);
    document.getElementById("Descripcion").value="";
    document.getElementById("ValorNumero").value="";
    document.getElementById("Valor").value="Ingreso";
    form["Descripcion"].focus();
}
function FormatoMoneda(val){
    return val.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});	
}
function FormatoPorcentaje(porc){
    return porc.toLocaleString("en-US", { style: "percent", minimumFractionDigits: 2 });
}
function BorrarValorIng(id){
    const ingresoIndex = arregloIngresos.findIndex(item => item.id === id); 
        arregloIngresos.splice(ingresoIndex, 1);
        sumarIngresos();
        imprimirDatosIngresos();
        document.getElementById("Ingreso-Valor").innerHTML=FormatoMoneda(sumarIngresos());
        let valPresupuesto=sumarIngresos()-sumarEgresos();
        document.getElementById("Presupuesto--Numero").innerHTML=FormatoMoneda(valPresupuesto);
        let porcentaje=sumarEgresos()/sumarIngresos();
        if(isNaN(porcentaje)){
            document.getElementById("Porcentaje").innerHTML="0.00%";
        }else{
            document.getElementById("Porcentaje").innerHTML=FormatoPorcentaje(porcentaje);
        }
        document.getElementById("Descripcion").value="";
        document.getElementById("ValorNumero").value="";
        document.getElementById("Valor").value="Ingreso";
        form["Descripcion"].focus();
}
function BorrarValorEgre(id){
        const ingresoIndex = arregloEgresos.findIndex(item => item.id === id); 
        arregloEgresos.splice(ingresoIndex, 1);
        sumarEgresos();
        imprimirDatosEgresos();
        document.getElementById("Egreso-Valor").innerHTML=FormatoMoneda(sumarEgresos());
        let valPresupuesto=sumarIngresos()-sumarEgresos();
        document.getElementById("Presupuesto--Numero").innerHTML=FormatoMoneda(valPresupuesto);
        let porcentaje=sumarEgresos()/sumarIngresos();
        if(isNaN(porcentaje)){
            document.getElementById("Porcentaje").innerHTML="0.00%";
        }else{
            document.getElementById("Porcentaje").innerHTML=FormatoPorcentaje(porcentaje);
        }
        document.getElementById("Descripcion").value="";
        document.getElementById("ValorNumero").value="";
        document.getElementById("Valor").value="Ingreso";
        form["Descripcion"].focus();
}
function formatoIng(index){
    return `<div class="ContenedorPrincipal">
                <div class="contForm">
                    <div class="subcontForm">
                        <div>${index.Descripcion}</div>
                        <div style="display: flex;">
                            <div>+ ${FormatoMoneda(Number(index.Valor))}</div>
                            <button type="button" class="boton2" onclick="BorrarValorIng('${index.id}')">
                                <i class="bi bi-x-circle-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
}
function formatoEgre(index){
    return `<div>
                <div class="contForm">
                    <div class="subcontForm">
                        <div>${index.Descripcion}</div>
                        <div style="display: flex;">
                            <div>- ${FormatoMoneda(Number(index.Valor))}</div>
                            <button type="button" class="boton2" onclick="BorrarValorEgre('${index.id}')">
                                <i class="bi bi-x-circle-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
}
