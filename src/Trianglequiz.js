let quiz=[
  {'question':'What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?','answers':['45°','90°','60°'],'name':'q1'},
  {'question':'What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?','answers':['obtuse','acute','right angled'],'name':'q3'},
  {'question':'A triangle can have','answers':['one right angle','two right angles'],'name':'q2'},
  {'question':'Which of the following can form a right angled triangle?','answers':['14, 15, 26','12, 16, 20'],'answer':'12, 16, 20','name':'q4'},
  {'question':'Which of the following triangles are always similar?','answers':['Equilateral triangle','Isosceles triangle'],'name':'q5'},
  {'question':'If one angle of a triangle is obtuse, then which one of the following is the possible measure of remaining angles?','answers':['100°','85°'],'name':'q6'},
  {'question':'If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?','answers':['30°','10°'],'name':'q7'},
  {'question':'The perimeter of scalene triangle with sides a, b, c is','answers':['a + b + c','2a','None of these'],'answer':'a + b + c','name':'q8'},
  {'question':'A scalene triangle has ___ lines of symmetry','answers':['two','no','15'],'name':'q9'},
  {'question':'There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?','answers':['85°','65°','45°'],'name':'q10'},
]

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

export default function Trianglequiz(){
  function triangleQuizClickHandler(e){
    e.preventDefault();
    let quizForm=document.getElementById('triangleQuizForm');
    let triangleQuizOutput=document.querySelector('.triangleQuizOutput');
    // let quizFormInputs=document.querySelectorAll('#triangleQuizForm inputFields');
    let form=new FormData(quizForm);
    let score=0,index=0,count=0;
    for(let item of form.values()){
      count+=1;
    }
    if(count<10){
      triangleQuizOutput.innerText = 'please answer every question 😅';
      return;
    }
    else{
        for(let item of form.values()){
          if(item==correctAnswers[index]){
              score+=1;
          }
          index+=1;
        }
    }
    triangleQuizOutput.innerText = "The score is " + score;
  }
 return (
    <div className="triangleQuizContainer">
      <div className="header">
        <h1 className="triangleQuizHeading">Triangle Quiz</h1>
        <p className="triangleQuizPara">Check your knowledge on triangles by taking Quiz</p>
        <p className="triangleQuizSubPara">for Each correct Answer you were Awarded with 1 point</p>
      </div>
      <form id="triangleQuizForm" className="triangleQuizFields" >
        {quiz.map(item=>{
        return (<div className="inputFields" key={item.name}>
            <p className="question">{item.question}</p>
            {item.answers.map((answer,index)=>{
            return (<div key={answer} className="answer">
                <input type="radio" id= {item.name+index} value={answer} name={item.name}/>
                <label htmlFor={item.name+index}>{answer}</label>
              </div>)
            })}
        </div>)
      })}
        <button className="triangleQuizButton" onClick={triangleQuizClickHandler}>Submit</button>
      </form>
      <div className="triangleQuizOutput output"></div>
    </div>
   )
}