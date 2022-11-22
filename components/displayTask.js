import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTask = () => {
    const list = document.querySelector('[data-list]');

    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);

    dates.forEach( date => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        tasksList.forEach((task) => {               // forEach me permite recorrer un arreglo.
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate); // diff() devuelve un numero en funcion de la diferencia entre las fechas. Cuando devuelve 0 es porque las fechas son iguales.
            console.log(diff);
            if ( diff == 0) {
                list.appendChild(createTask(task));
            }
            
        });

    } );

};