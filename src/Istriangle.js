export default function Istriangle(){

  function calculateIsTriangle(ang1,ang2,ang3){
   return Number(ang1)+Number(ang2)+Number(ang3)==180? true:false;
  }

  function isTraingleClickHandler(){
    let angle1=document.getElementById('angle1');
    let angle2=document.getElementById('angle2');
    let angle3=document.getElementById('angle3');
    let output=document.querySelector('.isTriangleoutput');
    if(angle1.value && angle2.value && angle3.value){
      if(angle1.value==0||angle2.value==0 || angle3.value==0){
        output.textContent='enter values more than Zero to form traingle '
      }
      else{
        if (calculateIsTriangle(angle1.value,angle2.value,angle3.value)){
          output.textContent='yay! angles form the triangle 😉'
        }
        else{
          output.textContent='ohoh! angles not forming the triangle 😟'
        }
      }
    }
    else{
      output.textContent='you have not entered all values '
    }
  }
 return (
   <div className="isTriangleContainer">
     <div className="header">
      <h1 className="isTriangleHeading">IsTraingle?</h1>
      <p className="isTrianglePara">Enter angles to check whether it forms traingle</p>
     </div>
     <div className="triangleFields">
      <div className="inputFields">
        <label htmlFor="angle1">Angle1 : </label>
        <input id="angle1" type="number" min="1" placeholder="enter Angle1"/>
        </div>
        <div className="inputFields">
        <label htmlFor="angle2">Angle2 : </label>
        <input id="angle2" type="number" min="1" placeholder="enter Angle2"/>
        </div>
        <div className="inputFields">
        <label htmlFor="angle3">Angle3 : </label>
        <input id="angle3" type="number" min="1" placeholder="enter Angle3"/>
        </div>
        <button className="isTriangleButton" onClick={isTraingleClickHandler}>isTriangle?</button>
        <div className="isTriangleoutput output"></div>
    </div>
  </div>
 )
}