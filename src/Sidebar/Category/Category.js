import React from 'react';
import './Category.css';
import Input from '../../Input';

const Category = ({handleChange}) => {
  return (
      <>
      <div className='category'>
        <h2 className='sidebar-title'>Category</h2>
           <label className='sidebar-label-container'>
              <input onChange={handleChange} type='radio' value="" name='test' />
              <span className='checknark'></span><span className='text-margin'>All</span>
           </label>
           <Input 
            handleChange={handleChange}
            value = 'sneaker'
            title='Sneaker'
            name= 'test'
           />
           <Input 
            handleChange={handleChange}
            value = 'shoes'
            title='Shoes'
            name= 'test'
           />
           <Input 
            handleChange={handleChange}
            value = 'heels'
            title='Heels'
            name= 'test'
           />
        </div>
      </>
  )
}

export default Category;