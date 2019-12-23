import React from 'react';


function Counter() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
  
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
    let reloj =  horas+':'+minutos+':'+segundos;
   
    return (<div>{reloj}</div>)
  };
  

export default Counter;
 // console.log(muestraReloj());