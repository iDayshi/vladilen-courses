/*********** add modal block  ***********/

const scriptTag = document.querySelector('script')
const modalBlockBody = 
    `<div class="modal-overlay modal-overlay_hidden">
    <div class="delete-modal">
        <h3 class="delete-modal__question">
            Вы действительно хотите удалить эту задачу?
        </h3>
        <div class="delete-modal__buttons">
            <button class="delete-modal__button delete-modal__cancel-button">
                Отмена
            </button>
            <button class="delete-modal__button delete-modal__confirm-button">
                Удалить
            </button>
        </div>
    </div>
    </div>`

scriptTag.insertAdjacentHTML("beforebegin" , modalBlockBody)
    

/************ base tasks **************/


const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]


addNewTask(tasks) // ТИПА ПОДГРУЖАЕТ С СЕРВЕРА))))


/********** add new task *****************/

const taskItem = document.querySelector(`.task-item`);
function addNewTask(task){
    const tasksConteiner = document.querySelector(`.tasks-list`)
    const taskItem = document.querySelector(`.task-item`);
        task.map((value) => {
            const getNewTaskClone = taskItem.cloneNode(true);
            const getByIdForm = getNewTaskClone.querySelector('.checkbox-form__checkbox')
            const getLableId = getNewTaskClone.querySelector('label')
            const getTaskText = getNewTaskClone.querySelector('.task-item__text')
            const erorr = document.createElement(`span`);
            erorr.classList.add('error-message-block');
            getTaskText.innerText = value.text
            getByIdForm.setAttribute(`id`, `task-${value.id}`)
            getLableId.htmlFor = value.id
            getNewTaskClone.dataset.taskId = value.id
            tasksConteiner.append(getNewTaskClone)
        })
}


/*********** add errors **********/
function addErrTask(value){
    const tasksConteiner = document.querySelector(`.create-task-block`)
    const getTaskText = document.createElement('span')
    getTaskText.className = `error-message-block`
    getTaskText.innerText = value
    tasksConteiner.append(getTaskText)
        
}

/********** New Task Velue ****************/

const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const errElemt = document.querySelector('.error-message-block')
    const { target }  = event;
        const taskNameInput = target.taskName;

    const taskValue = {
        id: new Date().getTime().toString(),
        completed: false,
        text: taskNameInput.value
    };

            if (taskValue.text === ''){
                if(errElemt){
                    errElemt.remove()
                    addErrTask('Название задачи не должно быть пустым')
                } else {
                    addErrTask('Название задачи не должно быть пустым')
                }
                
            } else if (checkTest(taskValue.text) ){
                if(!errElemt){
                    addErrTask('Задача с таким названием уже существует')
                }
            } else if (taskNameInput.value){
                if(errElemt){
                    errElemt.remove()
                    addNewTask([taskValue])
                    tasks.push(taskValue);
                } else {
                    addNewTask([taskValue])
                    tasks.push(taskValue);
                }
            } 
})

/******** chek task value repet ***********/ 

function checkTest(valueTask){
    let check = tasks.some(value => valueTask === value.text)
     return check
 }


 /********** modal window delete **********/
const allDeleteBtn = document.querySelectorAll('.delete-button')
const deleteTask = document.querySelector('.tasks-list')
const modalWindow = document.querySelector('.modal-overlay')
let idTaskDelete = ''

deleteTask.addEventListener(`click`, (event) => {
    const deletePushBtn = event.target.closest('.delete-button')
    if(deletePushBtn){
        idTaskDelete = deletePushBtn.parentElement.parentElement
        modalWindow.classList.remove('modal-overlay_hidden')
    }
})


/********* confirm delete task *******/

modalWindow.addEventListener('click', (event) => {
    const confirmDelete = event.target.closest('.delete-modal__confirm-button')
    const cancelDelete = event.target.closest('.delete-modal__cancel-button')
    if(confirmDelete){
        idTaskDelete.remove()
        modalWindow.classList.add('modal-overlay_hidden')
    } else if (cancelDelete) {
        modalWindow.classList.add('modal-overlay_hidden')
    }
})

 /******* *********/
const allBody = document.body

const darkTheme = {
    bodyBgColor: `#24292E`,
    elemColor: `#ffffff`,
    btnStyle: `1px solid #ffffff`
}

const whiteTheme = {
    bodyBgColor: `initial`,
    elemColor: `initial`,
    btnStyle: `none`
}

function changeTheme() {
    allBody.style.backgroundColor = this.bodyBgColor
    const elemItem = document.querySelectorAll('.task-item')
    elemItem.forEach(value => value.style.color = this.elemColor)
    const allButton = document.querySelectorAll('button')
    console.log(allButton)
    allButton.forEach(value => value.style.border = this.btnStyle)
}
let cheackTheme = `whiteTheme`

allBody.addEventListener('keydown', (event) =>{
    const { key } = event;
    if (key === 'Tab' && cheackTheme === `whiteTheme`){
        changeTheme.call(darkTheme)
        cheackTheme = `darkTheme`
    } else if (key === 'Tab' && cheackTheme === `darkTheme` ){
        changeTheme.call(whiteTheme)
        cheackTheme = `whiteTheme`
    }
})

