AOS.init();

const dataDoEvento = new Date("Dec 25, 2024 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(()=>{
    const agora = new Date();
    const timeStampAtual = agora.getTime()

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const diasAteOvento =  Math.floor(distanciaDoEvento / diasEmMS)
    const horasAtoEvento = Math.floor((distanciaDoEvento % (diasEmMS) / horasEmMS))
    const minutosAteOEvento = Math.floor((distanciaDoEvento % (horasEmMS) / minutosEmMS))
    const segundosAteOEvento = Math.floor((distanciaDoEvento % (minutosEmMS) / 1000))

    document.getElementById('contador').innerHTML = `${diasAteOvento}d ${horasAtoEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaDoEvento < 0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = "Evento expirado!"
    }

}, 1000)