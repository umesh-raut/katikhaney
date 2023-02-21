import React, { useState } from 'react'
import './DietNutritionPlann.css'

export default function DietNutritionPlan() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [BtnText, setBtnText] = useState("Dark Mode")
  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("light Mode")
    }
    else {
      setMyStyle({
        backgroundColor: 'white',
        color: 'black'

      })
      setBtnText("Dark Mode")

    }

  }



  return (
    <>
      <section className='background'>
        <button type="button" onClick={toggleStyle} class="btn btn-outline-dark" id="DietNutritionPlan">{BtnText}</button>
        <div className="row"  >
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card" style={myStyle}>
              <div className="card-body" id='card-body'>
                <h5 className="card-title">BreakFast</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit repellat minima nihil! Exercitationem sapiente repellat officiis sint fuga corrupti!</p>
                <button type="button" class="btn btn-outline-success">Recepie</button>


              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card" style={myStyle}>
              <div className="card-body" id='card-body'>
                <h5 className="card-title">Lunch</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button type="button" class="btn btn-outline-success">Recepie</button>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="row" >
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card" style={myStyle}>
              <div className="card-body" id='card-body'>
                <h5 className="card-title">Dinner</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button type="button" class="btn btn-outline-success">Recepie</button>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="card" style={myStyle}>
              <div className="card-body" id='card-body'>
                <h5 className="card-title">Supper</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button type="button" class="btn btn-outline-success">Recepie</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
