const reloj = () =>{
    const data = new Date();
    let hora=datFormato(data.getHours());
    let minuto=datFormato(data.getMinutes());
    let segundo=datFormato(data.getSeconds());
    let mostrarHora=hora+":"+minuto+":"+segundo;
    document.getElementById("reloj").innerHTML=mostrarHora;
    const mes=['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dia = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let Mes=mes[data.getMonth()];
    let Dia=dia[data.getDay()];
    let DiaNumero=data.getDate();
    let mostrarFecha=Dia+" "+DiaNumero+", "+Mes;
    document.getElementById("fecha").innerHTML=mostrarFecha;
    document.getElementById("Fecha-Reloj").classList.toggle("animacion");
}
function datFormato(valor){
    if(valor < 10){
        return "0"+valor;
    }else{
        return valor;
    }
}
setInterval(reloj,1000);
