function task0() {
    let age = 50;
    let output = `Тип переменной age: ${typeof age} Возраст ${age}.`;
    if (age > 50){
        output += " Вы старый!"
    }else if(age < 18){
        output += " Вы молодой!"
    }else{
        output += " Вы взрослый!"
    }
    return output
}

function task1() {
    let sign = prompt("Введите ваш знак зодиака ");

    switch(sign.toLowerCase()){
        case "овен":
            output = "Привет, Овен!";
            break;
        case "телец":
            output = "Привет, Телец!";
            break;
        case "близнецы":
            output = "Привет, Близнецы!";
            break;
        case "рак":
            output = "Привет, Рак!";
            break;
        case "лев":
            output = "Привет, Лев!";
            break;
        case "дева":
            output = "Привет, Дева!";
            break;
        case "весы":
            output = "Привет, Весы!";
            break;
        case "скорпион":
            output = "Привет, Скорпион!";
            break;
        case "стрелец":
            output = "Привет, Стрелец!";
            break;
        case "весы":
            output = "Привет, Весы!";
            break;
        case "скорпион":
            output = "Привет, Скорпион!";
            break;
        case "стрелец":
            output = "Привет, Стрелец!";
            break;
        case "козерог":
            output = "Привет, Козерог!";
            break;
        case "водолей":
            output = "Привет, Водолей!";
            break;
        case "рыбы":
            output = "Привет, Рыбы!";
            break;
        default:
            output = "Нет такого зодиака";
    }
    return output
}

function task2(){
    let output = "Числа от 1 до 40 (for): ";
    for (let i = 1; i <= 40; i++){
        output += i++ + " ";
    }
    output += "\nЧисла от 1 до 40 (while): ";
    let i = 1;
    while(i <= 40){
        output += i++ + " ";
    }
    output += "\nЧисла от 1 до 40 (do...while): ";
    i = 1;
    do{
        output += i++ + " ";
    }while(i <= 40)
    return output
}

function task3() {
    let counter = 0;
    while (counter < 5) {
        alert("Вы попали в вирусную ловушку! Перезагрузите страницу, чтобы выйти.");
        counter++;
    }
    return "Вирусная ловушка демонстрировалась 5 раз.";
}

function task4() {
    do{
        userNumber = prompt("Введите число больше 5");
        if(userNumber === null){
            break;
        }else if(userNumber <= 5){
            alert("Введите число больше 5");
        }else{
            alert("Спасибо!");
            break;
        }
    }while(1);

    return ""
}

function task5() {
    let output = "Четные числа от 8 до 20: ";
    for (let i = 8; i <= 20; i += 2) {
        output += i + " ";
    }
    return output
}

function task6() {
    let output = "Нечетные числа от 1 до 7, пропуская 5: ";
    for (let i = 1; i <= 7; i += 2) {
        if (i === 5) continue;
        output += i + " ";
    }
    return output;
}

function arrayTask1() {
    let arr1 = [1, 2, 3];
    let arr2 = new Array(4, 5, 6);
    let arr3 = Array.of(7, 8, 9);
    return `Созданы массивы: ${arr1}, ${arr2}, ${arr3}`;
}

function arrayTask2() {
    let arr = [1, 2, 3, 4, 5];
    let output = `Пятый элемент массива: ${arr[4]}`;
    arr[4] = 10;
    return output += `\nИзмененный массив: ${arr}`;
}

function arrayTask3() {
    let arr = [1, 2, 3, 4, 5];
    return `Длина массива: ${arr.length}`;
}

function arrayTask4() {
    let arr = [1, 2, 3, 4, 5];
    let output = "Элементы массива: ";
    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + " ";
    }
    return output;
}

function arrayTask5() {
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let combined = arr1.concat(arr2);
    return `Объединенный массив: ${combined}`;
}

function arrayTask6() {
    let arr = [1, 2, 3, 4, 5];
    let removed = arr.pop();
   return `Удален последний элемент: ${removed}\nМассив: ${arr}`;
}

function arrayTask7() {
    let arr = [1, 2, 3, 4, 5];
    let unshift = arr.unshift(0);
    return `Новый размер массива: ${unshift}\nМассив: ${arr}`;
}
function arrayTask8(){
    const today = new Date();
    return today.toDateString();
}

function arrayTask9(){
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('ru-RU', options);
    return `Сегодняшняя дата: ${formattedDate}`;
}

function arrayTask10() {
    const num1 = Math.floor(Math.random() * 51);
    const num2 = Math.floor(Math.random() * 51);
    return num1 * num2;
}



const tasksTit = [
    "Работа с переменными и условными операторами",
    "Приветствие по знаку зодиака",
    "Вывод чисел с использованием циклов",
    "Вирусная страница",
    "Проверка числа больше 5",
    "Вывод четных чисел",
    "Вывод нечетных чисел, пропуская 5",
    "Создание массива",
    "Изменение элемента массива",
    "Длина массива",
    "Вывод элементов массива",
    "Объединение массивов",
    "Удаление элемента массива",
    "Добавление элемента в начало массива",
    "Вывод текущей даты",
    "Форматирование даты",
    "Произведение случайных чисел"
];

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < tasksTit.length; i++) {
        const button = document.createElement('button');
        button.textContent = tasksTit[i];
        button.onclick = () => openTaskModal(i); 
        document.getElementById('newButton').appendChild(button);
    }

});

document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
        askName();
    } else {
        greetUser(userName);
    }
});

function askName() {
    const name = prompt("Введите ваше имя:");
    if (name) {
        localStorage.setItem('userName', name);
        greetUser(name);
    }
}

function greetUser(name) {
    document.getElementById('welcomeMessage').innerText = `Добро пожаловать в мир JavaScript, ${name}!`;
    document.getElementById('menu').classList.remove('hidden');
}

let taskID

function openTaskModal(taskId) {
    const tasksDescription = [
        'Cоздать переменную, узнать ее тип, добавить вывод на экран текста, в зависимости от значения (if else)',
        'Запросить у пользователя знак зодиака, и в зависимости от ответа выдать всплывающее окно приветствия (вместо знака зодиака, можно запросить другие данные, предполагающие несколько вариантов ответа) (switch)',
        'Вывести все числа от 1 до 40, с использованием 3-х разных циклов',
        'Cоздайте вирусную страницу с постоянно повторяющемся сообщением',
        'Запросить у пользователя любое число больше 5, в случае правильного ответа выдать окошко с поздравлением, в случае неправильного ответа вывести повторное окно с вопросом (помните, что пользователь может нажать "отмена", помните о типах данных)',
        'Выведите четные числа от 8 до 20',
        'Выведите нечетные числа от 1 до 7, пропустив 5',
        'Создать массив 3 разными способами',
        'Выведите на экран 5 член вашего массива затем измените его значение ',
        'Узнайте длину вашего массива и выведите ее значение при наведении на любой элемент',
        'Выведите все элементы массива, используя цикл for',
        'Создайте 2 массива. Объедините их в один и выведите на экран полученный массив',
        'Удалите последний член получившегося массива и выведите это значение на экран',
        'Добавьте новый элемент в начало вашего объединенного массива',
        'Получите сегодняшнюю дату и выведите ее на экран',
        'Выведите сегодняшнюю дату в формате 11 ноября 2020 года',
        'Напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50']
   
    const modal = document.getElementById('taskModal');
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const taskCode = document.getElementById('taskCode');
    modal.style.display = 'block';
    taskTitle.innerText = tasksTit[taskId];
    taskDescription.innerText = tasksDescription[taskId];
    taskCode.style.display = 'none';
    taskID = taskId;
}

function toggleAnswer() {
    const output = document.getElementById('output');
    const codeOutput = document.getElementById('taskCode');  
    if (codeOutput.style.display === 'none') {
        showTaskCode()
        output.style.display = 'block';
        codeOutput.style.display = 'block';
    } else {
        output.style.display = 'none';
        codeOutput.style.display = 'none';
    }
}

function closeTaskModal() {
    const modal = document.getElementById('taskModal');
    const output = document.getElementById('output');
    const codeOutput = document.getElementById('taskCode');
    modal.style.display = 'none';
    output.style.display = 'none';
    codeOutput.style.display = 'none'; 
}

function showTaskCode() {
    const tasks = [task0, task1, task2, task3, task4, task5, task6, arrayTask1, arrayTask2, arrayTask3, arrayTask4, arrayTask5, arrayTask6, arrayTask7, arrayTask8, arrayTask9, arrayTask10];
    const taskCode = document.getElementById('taskCode');
    taskCode.innerText = tasks[taskID].toString()
    document.getElementById('output').innerText = tasks[taskID]();

}


//Quiz

const questions = [
    {
        question: "Какой тип данных используется для хранения целых и дробных чисел в JavaScript?",
        answers: ["string", "number", "boolean", "array"],
        correct: "2"
    },
    {
        question: "Что делает оператор `===` в JavaScript?",
        answers: ["Проверяет равенство без учета типов данных.", "Проверяет равенство с учетом типов данных.", "Присваивает значение переменной.", "Не имеет никакого отношения к сравнению."],
        correct: "2"
    },
    {
        question: "Как объявить переменную в JavaScript?",
        answers: ["variable x;", "var x;", "let x;", "int x;"],
        correct: "3"
    },
    {
        question: "Какое ключевое слово используется для создания постоянной (константы) в JavaScript?",
        answers: ["constant", "var", "let", "const"],
        correct: "4"
    },
    {
        question: "Какой метод массива используется для добавления одного или более элементов в конец массива?",
        answers: ["pop()", "push()", "shift()", "unshift()"],
        correct: "2"
    },
    {
        question: "Какой метод строки используется для поиска подстроки в строке?",
        answers: ["indexOf()", "find()", "search()", "contains()"],
        correct: "1"
    },
    {
        question: "Какой метод массива используется для удаления последнего элемента из массива?",
        answers: ["pop()", "push()", "shift()", "unshift()"],
        correct: "1"
    },
    {
        question: "Какой оператор используется для присваивания значения переменной?",
        answers: ["=", "==", "===", "!="],
        correct: "1"
    },
    {
        question: "Что возвращает метод `Array.prototype.filter()`?",
        answers: ["Массив с элементами, которые прошли проверку", "Первый элемент, который прошел проверку", "Последний элемент, который прошел проверку", "Индекс элементов, которые прошли проверку"],
        correct: "1"
    },
    {
        question: "Какой метод используется для преобразования объекта в JSON строку?",
        answers: ["JSON.parse()", "JSON.stringify()", "Object.toJSON()", "Object.stringify()"],
        correct: "2"
    },
    {
        question: "Как создать объект в JavaScript?",
        answers: ["let obj = {};", "let obj = [];", "let obj = ();", "let obj = new Object[];"],
        correct: "1"
    }
];




const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');
let score = 0;
let questionIndex = 0;

function showQuestion(){

    const headerTempalte = `<h2 class="modal-title">%title%</h2> `
    const title = headerTempalte.replace('%title%', questions[questionIndex]['question'])

    headerContainer.innerHTML = title;
    let index = 1;
    questions[questionIndex]['answers'].forEach(item => {
        const questionTemplate = 
        `<li>
            <label>
                <input value="%number%" type="radio" class="answer" name="answer">
                <span>%answer%</span>
            </label>
        </li>`
        const answerHTML = questionTemplate.replace('%answer%', item).replace('%number%', index++);
        listContainer.innerHTML += answerHTML;
    
    })
}

function checkAnswer(){
    checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
    if(!checkedRadio){
        submitBtn.blur();
        return;
    }
    if(checkedRadio.value === questions[questionIndex]['correct']){
        score++;
    }
    if(questions.length !== (questionIndex + 1)){
        questionIndex++;
        newQuestion();
    }else{
        clear();
        showResults();
    }
}

function showResults(){
    const resultsTemplate = `
    <h2 class="modal-title">%title%</h2>
    <h3 class="modal-titl">%message%</h3>
    <p class="modal-text">%result%</p>
    `;

    let title, message;

    if(score === questions.length){
        title = '🎊Поздравляю!🎊';
        message = 'Вы ответили верно на все вопросы!'
    }else if((score * 100) / questions.length >= 50){
        title = 'Неплохо!💪🏾'
        message = 'Вы дали более половины правильных ответов!'
    }else{
        title = 'Стоит постараться!🤡'
        message = 'Пока у вас меньше половины правильных ответов'
    }

    let result = `${score} из ${questions.length}`

    const resultMessage = resultsTemplate.replace('%title%', title).replace('%message%', message).replace('%result%', result)

    headerContainer.innerHTML = resultMessage;

    submitBtn.blur();
    submitBtn.innerText = 'Начать заново';
    submitBtn.onclick = ()=>{
        closeQuizModal();
        startQuiz();
    }
}

function newQuestion(){
    clear();
    showQuestion();
    submitBtn.onclick = checkAnswer;
}

function clear(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function startQuiz() {
    submitBtn.innerText = 'Ответить';
    const modal = document.getElementById('quizModal');
    modal.style.display = 'block';
    newQuestion();
}


function closeQuizModal() {
    const modal = document.getElementById('quizModal');
    modal.style.display = 'none';
    score = 0;
    questionIndex = 0;
}

