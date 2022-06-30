/** Here we store all the questions*/
const questions = document.querySelectorAll('.question');
/**Here we store all the answers */
const answers = document.querySelectorAll('.answer');
answers.forEach(element => {
    $(element).hide(); //we hide all the answers
});
const showAnswer = (e) =>{
     $(e.target.nextElementSibling).fadeToggle(200); //when you click on a question, the next sibling item is displayed
     //we alternate the clases so that when the answer is displayed it has one and when it doesn't have the other
     $(e.target).toggleClass("question");
     $(e.target).toggleClass("show");
   
}
//we add the eventListener to all the questions
questions.forEach(element => {
    element.addEventListener("click",showAnswer);
});