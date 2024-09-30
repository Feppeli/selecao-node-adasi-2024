// Validação para verificar se a hora final da atividade é menor que a hora inicial
const isvalidateActivity = (date, start_activitie, end_activitie) => {
    const startDateTime = new Date(`${date}T${start_activitie}`);
    const endDateTime = new Date(`${date}T${end_activitie}`);

    return startDateTime < endDateTime
}

// validação para verificar se a hora final da atividade é no máximo 6 horas maior que a hora inicial
const isWithinSixHour = (date, start_activitie, end_activitie) => {
    const start = new Date(`${date}T${start_activitie}`);
    const end = new Date(`${date}T${end_activitie}`);

    const differenceInMillis = end - start; 
    const sixHoursInMillis = 6 * 60 * 60 * 1000; // converte 6 horas em milisegundos

    return differenceInMillis <= sixHoursInMillis; // verificando a diferença 
}

module.exports = {
    isWithinSixHour,
    isvalidateActivity
}