export default function Hypotenuse(){
  function hypotenuseClickHandler(){
    let base=Number(document.getElementById('base').value);
    let height=Number(document.getElementById('height').value);
    let hypotenuseoutput=document.querySelector('.hypotenuseoutput');
    if(!base || !height){
      hypotenuseoutput.textContent='enter valid values'
    }
    else{
      let hypotenuse=Math.sqrt((base*height)/2).toFixed(2);
      hypotenuseoutput.textContent='hypotenuse is '+hypotenuse;
    }
  }
return (
  <div className="hypotenuseContainer">
    <div className="header">
      <h1>Calculate Hypotenuse of a Triangle</h1>
      <p>Enter your values to Calculate Hypotenuse</p>
    </div>
    <div className="hypotenuseFields">
        <div className="inputFields">
          <label htmlFor="base">Base</label>
          <input id="base" placeholder="enter base value"/>
        </div>
        <div className="inputFields">
          <label htmlFor="height">Height</label>
          <input id="height" placeholder="enter height value"/>
        </div>
        <button className="hypotenuseButton" onClick={hypotenuseClickHandler}>Calculate Hypotenuse</button>
    </div>
    <div className="hypotenuseoutput output">
    </div>
    <div className="formula">
      <p>Hypotenuse formula :</p>
      <p>√(base² + height²)</p>
    </div>
  </div>)
}