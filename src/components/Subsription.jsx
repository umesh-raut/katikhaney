import React, { useState } from 'react';
import './subsription.css';

function Subsription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="sub" >
      <label htmlFor="email" className='sub-lbl'>Subscribe for regular update</label>
      <input className='sub-inp' type="email" id="email" value={email} onChange={handleChange} placeholder='enter your email'/>
      <br />
      <button type="button" class="btn btn-outline-info">Submit</button>
    </form>
  );
}

export default Subsription;
