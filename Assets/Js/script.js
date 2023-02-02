var startbutton = document.getElementById("start");
var timerElement = document.querySelector(".timer");
var questionElement = document.querySelector(".questionElement");
var questioncounter =0;
var timer=100;
var questions=[
{
questions:"what was the first language taught to us in class?",
choices:['JS','HTML','CSS','NUL'],
answer:'2',
},
{
questions:"what was the first HW assignment?",
choices:['webpage','porfolio','quiz','game'],
answer:'1',
},
{
 questions:"what does html stand for",
choices:['hot tomato must learn','healthy technology might last','hypertext markup language','home tile market list'],
answer:'3',
}, 

{
questions:"what number project is this",
choices:['1','2','3','4'],
answer:'4',
 },
];
startbutton.addEventListener("click", function(){
var timer = setInterval(function(){
    timer--;
    timerspan.textcontent = timer;
    if (timer<=0){
        clearInterval
    }
}, 1000);
showQuestions();
})
function showQuestions() {
questionElement.textContent=questions[questioncounter].questions
button1.textContent=questions[questioncounter].choices[0]
button2.textContent=questions[questioncounter].choices[1]
button3.textContent=questions[questioncounter].choices[2]
button4.textContent=questions[questioncounter].choices[3]
questioncounter++
// }
// // if(questioncounter==questions.length){
// //     showresults
// // 


// document.querySelector('#buttons').addEventListener('click',function (questionElement){
    
// })
}