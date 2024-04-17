
const iconBtns = document.querySelectorAll('.box-icon');
const answer = document.querySelectorAll('.box-answer');


iconBtns.forEach(function(test, i) { 
    test.addEventListener('click', function(){
     document.querySelector(`.box-answer${i+1}`).classList.toggle('hidden');
    
})})
