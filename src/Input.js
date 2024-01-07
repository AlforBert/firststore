import React from 'react'

const Input = ({handleChange,value,title,name,color} )=> {
  return (
    <div>
     <label className='sidebar-label-container'>
    <input onChange = {handleChange} value={value} type='radio' name={name}/>
    <span className='checknark'style={{backgroundColor : color}}></span><span className='text-margin'>{title}</span> 
   </label>
   </div> 
  )
}

export default Input;