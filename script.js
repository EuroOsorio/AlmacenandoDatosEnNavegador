import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

const addTask = (evento) => {
  const list = document.querySelector('[data-list]');
  const task = createTask(evento);
  list.appendChild(task);
} 

const taskList = [];    // Arreglo vacio

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");
  console.log(dateFormat);
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';
  //backticks
  const taskContent = document.createElement('div');
  const taskObj = {
    value,
    dateFormat
  };

  taskList.push(taskObj); // Me adicione elemnentos al arreglo 'taskList'.

// sessionStorage.setItem("tasks", JSON.stringify(taskObj));  Almasenamiento en 'sessionStorage'. 'JSON.stringify' me convierte un JavaScript value a un JSON string.
localStorage.setItem("tasks", JSON.stringify(taskList)); // Almasenamiento en 'sessionStorage'.

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

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
