import React, { useState } from 'react'

export default function DietNutritionPlan() {
   const [myStyle, setMyStyle] = useState(  {
    color: 'black',
    backgroundColor: 'white'
  })
   const [BtnText, setBtnText] = useState("Dark Mode")
   const toggleStyle=()=>{
    if(myStyle.color==='black'){
      setMyStyle({ 
        color: 'white',
      backgroundColor: 'black'
      })
      setBtnText("light Mode")
    }
    else{
      setMyStyle({ 
        color: 'black',
      backgroundColor: 'white'

      })
      setBtnText("Dark Mode")

    }

  }



  return (
    < >  
    <button type="button"  onClick={toggleStyle} class="btn btn-outline-dark">{BtnText}</button>
      <div className="row" >
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={myStyle}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="/#" className="btn btn-primary">Go somewhere</a>
              

            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={myStyle}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="/#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row" >
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={myStyle}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="/#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={myStyle}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="/#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
