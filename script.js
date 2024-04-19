
const iconBtns = document.querySelectorAll('.box-icon');
const answer = document.querySelectorAll('.box-answer');
const hidden = document.querySelector('.hidden');
const questions = document.querySelectorAll('.box-question');


const togglingAnswer = iterate => {
    
    let iterateAnswer = document.querySelector(`.box-answer${iterate + 1}`);
    let iterateIcon = document.getElementById(`icon${iterate + 1}`);

    if (iterateAnswer) {
    
       iterateAnswer.classList.toggle('hidden');
    
       if (!iterateAnswer.classList.contains('hidden'))
       {
       //MINUS
       iterateIcon.style.transition = 'all 0.3s linear';
       iterateIcon.setAttribute('d', 'M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z');
       }

       else {
        //PLUS
       iterateIcon.style.transition = 'all 0.1s linear';
       iterateIcon.setAttribute('d', 'M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z');

       }
    }
}


[iconBtns, questions].forEach((two) => { 

    two.forEach((btn, index) => {

    btn.addEventListener('click', e => { e.stopPropagation(); togglingAnswer(index); })})
});



//////////////////////////////////////////////
//SEPARATED FOREACH

// iconBtns.forEach((btn, index) => { 
//     btn.addEventListener('click', e =>{ e.stopPropagation(); togglingAnswer(index);
    
     
// })})


// questions.forEach((btns, index) => {
//     btns.addEventListener('click', () => togglingAnswer(index));
// })

////////////////////////////////////////////