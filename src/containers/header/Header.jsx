import React from 'react'
import './header.css'
import people from'../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section_padding' id='home'>
     <div className='gpt3__header-content'>
      <h1 className='gradient__text'>
        Full of the strong desire to be something is Ambition.
      </h1>
      <p>A quick brown fox jumps over the lazy dog - which contains the all alphabets of enlish. Liked by many people is called popular.
        He is jack of all trades master of none.
      </p>
      <div className='gpt3__header-content__input'>

        <input type="email" placeholder="Enter email" />
        <button type='button'>Get Started</button>
      </div>
<div className='gpt3__header-content__people'>
  <img src={people} alt="people"/>
<p>1,600 people requested access to visit in last 24 hours</p>
</div>

<div className='gpt3__header-image'>
  <img src={ai} alt="ai" />
</div>

     </div>
      </div>
  )
}
export default Header;