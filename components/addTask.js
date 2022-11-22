import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTask } from './displayTask.js';

export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if (value == '' || date == '') {
        console.log('Dato vacio');
        return
    }


    input.value = '';
    calendar.value = '';

    const taskObj = {
        value,
        dateFormat
    };

    list.innerHTML = "";

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];    // Arreglo para almacenar los datos de localStorage. JSON.parse me comvierte un string a un JavaScript value.
    taskList.push(taskObj); // Me adicione elemnentos al arreglo 'taskList'.
    // sessionStorage.setItem("tasks", JSON.stringify(taskObj));  Almasenamiento en 'sessionStorage'. 'JSON.stringify' me convierte un JavaScript value a un JSON string.
    localStorage.setItem("tasks", JSON.stringify(taskList)); // Almasenamiento en 'sessionStorage'.

    displayTask();
  } 
  
  
  
  export const createTask = ({value, dateFormat}) => {
    const task = document.createElement('li');
            task.classList.add('card');
    //backticks
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
            titleTask.classList.add('task');
            titleTask.innerText = value;
            taskContent.appendChild(checkComplete());
            taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    const dateElement = document.createElement("span");
            dateElement.innerHTML = dateFormat;
            task.appendChild(taskContent);
            task.appendChild(dateElement);
            task.appendChild(deleteIcon());
    return task;
  };