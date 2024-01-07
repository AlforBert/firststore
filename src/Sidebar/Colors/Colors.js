import React from 'react';
import './Colors.css';
import Input from '../../Input';
const Colors = ({handleChange}) => {
  return (
    <div>
    <h2 className='sidebar-title price-title'>Color</h2>
    <label className='sidebar-label-container'>
              <input onChange={handleChange} type='radio' value="" name='test1' />
              <span className='checknark all'></span><span className='text-margin'>All</span>
           </label>
           <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test1"
            color="black"
           />
           <Input
            handleChange={handleChange}
            value="blue"
            title="Blue"
            name="test1"
            color="blue"
           />
           <Input
            handleChange={handleChange}
            value="red"
            title="Red"
            name="test1"
            color="red"
           />
           
           <Input
            handleChange={handleChange}
            value="golden"
            title="Golden"
            name="test1"
            color="#ffd700"
           />
           <label className='sidebar-label-container'>
              <input onChange={handleChange} type='radio' value="white" name='test1' />
              <span className='checknark' ></span><span className='text-margin'>White</span>
           </label>
    </div>
  )
}

export default Colors;