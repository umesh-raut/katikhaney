import React from 'react'
import './CalorieCounter.css'

export default function CalorieCounter() {
  return (
    <>
    <div id="CalorieCounter">
      <h2>Calorie Intake Counter</h2>
      <hr />
      <p>This is a calorie counting calculator based on Resting Metabolic Rate(RMR). Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe facilis dolor modi quas veritatis commodi officiis, temporibus blanditiis fugiat?
      </p>
      <div>
        <h4>Count Calorie intake based on your body</h4>
  <form className='Calorie'>
    <label>
      Enter your Age:
      <input type="number" name="age" placeholder='age' />
    </label>
    <label>
      Sex:
      <select name="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </label>
    <label>
      Weight (in kg):
      <input type="number" name="weight" placeholder='weight'/>
    </label>
    <label>
      Height (in cm):
      <input type="number" name="height" placeholder='height'/>
    </label>
    <button class="borderless-button">Calculate Calorie</button>

  </form>
      </div>
      </div>
    </>
  )
}
