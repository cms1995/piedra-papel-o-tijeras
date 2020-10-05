/* aca creamos las variables, adentro de las funciones donde las necesitamos */
const juego = () => {
  let pJugador = 0;
  let pMaquina = 0;

  //iniciar el juego
  const iniciarJuego = () => {
    const BotonJuego = document.querySelector(".inicio button");
    const pantallaInicio = document.querySelector(".inicio");
    const partida = document.querySelector(".partida");

    BotonJuego.addEventListener("click", () => {
      pantallaInicio.classList.add("fadeOut");
      partida.classList.add('fadeIn');
    });
  };


//jugar partida
const jugarpartida = () => {
  const opciones = document.querySelectorAll('.opciones button'); //esto va a cubrir las 3 de la clase opciones del html
  const manoJugador = document.querySelector('.mano-jugador'); //estas 2 últimas son las 2 img del html q estamos seleccionando
  const manoMaquina = document.querySelector('.mano-maquina') //estas 2 últimas son las 2 img del html q estamos seleccionando
  const manos = document.querySelectorAll('.manos img');

  //esto va a funcionar cada vez q la animacion termine. Así, esta(animacion) no actuará solo una vez al principio sino indefinidamente
  manos.forEach(mano =>{
    mano.addEventListener("animationend", function(){
      this.style.animation = "";
    });
  });
  

  //opciones maquina: esto se va a generar d manera random entre las 3 opciones disponibles
  const opcionesMaquina =  ['piedra', 'papel', 'tijeras'];

  opciones.forEach(opcion => {
    opcion.addEventListener("click", function(){
      //eleccion maquina
      const numeroMaquina = Math.floor(Math.random() * 3); // recorda q math.random t da un decimal entre 0 y 1. entonces lo multiplico entre 3 para
      // q son las opciones q va a elegir la máquina y luego uso math.floor para q lo redondee al decimal entre 0 y 2
      const eleccionMaquina = opcionesMaquina[numeroMaquina];//esto le va a otorgar un numero a los 3 valores de opcionesMaquina   
      
      //aca llamamos "comparaManos"
      setTimeout(() => {
        //aca llamamos "comparaManos"
        compararManos(this.textContent, eleccionMaquina);
        //actualizar imagenes
        manoJugador.src = `./imagenes/${this.textContent}.png`;
        manoMaquina.src = `./imagenes/${eleccionMaquina}.png`;
      }, 2000);
      //animacion
      manoJugador.style.animation = "sacudirJugador 2s ease";
      manoMaquina.style.animation = "sacudirMaquina 2s ease";

    });
  })
};

//esta funcion la llamamos cada vez q se elija una opcion de las q están abajo
const actualizarMarcador = () =>{
  const puntajeJugador = document.querySelector('.puntaje-jugador p');// te traes la clase y la etiqueta html
  const puntajeMaquina = document.querySelector('.puntaje-maquina p');// te traes la clase y la etiqueta html
  puntajeJugador.textContent = pJugador;
  puntajeMaquina.textContent = pMaquina;
}

  //esta funcion va a comparar quien está ganando
const compararManos = (eleccionJugador, eleccionMaquina) =>{
  const ganador = document.querySelector('.ganador');
  //comprobamos un empate
  if(eleccionJugador === eleccionMaquina){
    ganador.textContent = 'Es un empate';
    return;
  }
  //comprobamos elijes piedra
  if(eleccionJugador === 'piedra'){
    if(eleccionMaquina ==='tijeras'){
      ganador.textContent = 'Ganaste!😀';
      pJugador++;
      actualizarMarcador();
      return;
    }else{
      ganador.textContent = 'Perdiste!😔';
      pMaquina++;
      actualizarMarcador();
      return;
    }
  }
  //comprobamos elijes es papel
  if(eleccionJugador === 'papel'){
    if(eleccionMaquina ==='tijeras'){
      ganador.textContent = 'Perdiste!😔'
      pMaquina++;
      actualizarMarcador();
      return;
    }else{
      ganador.textContent = 'Ganaste!😀';
      pJugador++;
      actualizarMarcador();
      return;
    }
  }
  //comprobamos cuando elijes tijera
  if(eleccionJugador === 'tijeras'){
    if(eleccionMaquina ==='papel'){
      ganador.textContent = 'Ganaste!😀';
      pJugador++;
      actualizarMarcador();
      return;
    }else{
      ganador.textContent = 'Perdiste!😔';
      pMaquina++;
      actualizarMarcador();
      return;
    }
  }
};


//llamamos a las primeras funciones
iniciarJuego();
jugarpartida();
};


//Acá afuera iniciamos la función juego
juego();