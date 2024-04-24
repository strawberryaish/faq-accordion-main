const iconBtns = document.querySelectorAll('.box-icon');
const answers = document.querySelectorAll('.box-answer');
const box = document.querySelector('.box');

const toggleAnswer = function(clickedQuestion) {
    const icon = clickedQuestion.lastElementChild;
    const iterateAnswer = document.querySelector(`.box-answer${clickedQuestion.dataset.id}`)
    
    //RESET ANSWERS AND ICONS SETTING
    answers.forEach((e, iterate) => {
        if (iterateAnswer !== e) e.classList.add('hidden'); 

    iconBtns[iterate].setAttribute('src', 'assets/images/icon-plus.svg'); 
    });

    iterateAnswer.classList.toggle('hidden');

    if (!iterateAnswer.classList.contains('hidden')) {
        icon.setAttribute('src', 'assets/images/icon-minus.svg');
    }}

box.addEventListener('click', clicked => {
    const clickedQuestion = clicked.target.closest('.box-question');

    if (!clickedQuestion) return;
    toggleAnswer(clickedQuestion);
})