
const iconBtns = document.querySelectorAll('.box-icon');
const answers = document.querySelectorAll('.box-answer');
const questions = document.querySelectorAll('.box-question');

questions.forEach(function(box) {
    box.addEventListener('click', function(clicked) {
        const clickedQuestion = clicked.target.closest('.box-question');
        const icon = clickedQuestion.lastElementChild;
        const iterateAnswer = document.querySelector(`.box-answer${clickedQuestion.dataset.id}`)
        
        //RESET ANSWERS AND ICONS SETTING
        answers.forEach((e, iterate) => {
        if (iterateAnswer !== e) {
         e.classList.add('hidden'); 
        }
        iconBtns[iterate].setAttribute('src', 'assets/images/icon-plus.svg'); });

        if (clickedQuestion){

            iterateAnswer.classList.toggle('hidden');

            if (!iterateAnswer.classList.contains('hidden')) {
                icon.setAttribute('src', 'assets/images/icon-minus.svg');
            }

        }})})

