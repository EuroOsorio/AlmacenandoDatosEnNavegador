export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach( (task) => {
        
        if ( !unique.includes(task.dateFormat) ) {
            unique.push(task.dateFormat);
        }

    });

    return unique;
};

export const orderDates = (dates) => {
    return dates.sort( (a,b) => {     // Funcion 'sort' me ordena los elementos dentro del arreglo.
        const firsDate = moment (a, 'DD/MM/YYYY');
        const secondDate = moment (b, 'DD/MM/YYYY');
        return firsDate - secondDate;
    });
};