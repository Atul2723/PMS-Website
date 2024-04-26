import React from 'react'

const ContactForm = () => {
  return (
   <>
      
      <form className='form'>
        {/* <h2>Contact Us</h2> */}
        <div className='form-header'>
          <h1>Contact Us</h1>
          
        </div>
        <div className='form-para'>
          <p>For any queries or questions, feel free to reach out to us.</p>
        </div>
        <input type='text' placeholder='Name'/>
        <input type='number' placeholder='Phone'/>
        <input type='emmail' placeholder='Email'/>
        <input type='text' placeholder='Address'/>
        <input type='text' placeholder='City'/>
        <input type='text' placeholder='Message'/>
        <button>Submit</button>
      </form>
   
   </>
  )
}

export default ContactForm