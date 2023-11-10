const diasHastaFinalDeCurso = () => {
    let fechaFin = new Date('2024-06-24');
    let fechaActual = new Date();

    return (fechaFin.getTime()-fechaActual.getTime())/86400000;
}

console.log(diasHastaFinalDeCurso());