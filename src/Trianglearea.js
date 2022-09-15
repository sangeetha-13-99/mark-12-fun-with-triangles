export default function Trianglearea(){
  function calculateTriangleArea(s1,s2,s3){
    let perimeter=(s1+s2+s3)/2;
    let area=Math.sqrt(perimeter*(perimeter-s1)*(perimeter-s2)*(perimeter-s3));
    return area.toFixed(4);
  }
  function triangleAreaClickHandler(){
    let side1=Number(document.getElementById('side1').value);
    let side2=Number(document.getElementById('side2').value);
    let side3=Number(document.getElementById('side3').value);
    let triangleAreaoutput=document.querySelector('.triangleAreaoutput');
    if(side1>0 && side2>0 && side3>0 ){
      if(side1+side2>side3 && side2+side3>side1 && side3+side1>side2){
        triangleAreaoutput.textContent='Area is ' + calculateTriangleArea(side1,side2,side3);
      }
      else
      {
        triangleAreaoutput.textContent='enter valid values such that sum of any 2 sides greater than 3rd side';
      }
    }
    else{
      triangleAreaoutput.textContent='enter valid values';
    }
}


  return (<div className="triangleAreaContainer">
    <div className="header">
      <h1 className="triangleAreaHeading">Calculate Area of Triangle</h1>
      <p className="triangleAreaPara">Enter sides of a triangle</p>
    </div>
    <div className="triangleAreaFields">
      <div className="inputFields">
        <label htmlFor="side1"> side 1 :</label>
        <input id="side1"type="number" min='0' placeholder="enter the side length"/>
      </div>
      <div className="inputFields">
        <label htmlFor="side2"> side 2 :</label>
        <input id="side2" type="number" min='0' placeholder="enter the side length"/>
      </div>
      <div className="inputFields">
        <label htmlFor="side3"> side 3 :</label>
        <input type="number" min='0' id="side3" placeholder="enter the side length"/>
      </div>
      <button className="triangleAreaButton" onClick={triangleAreaClickHandler}>Check</button>
    </div>
    
    <div className="triangleAreaoutput output">

    </div>
  </div>)
}