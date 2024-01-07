import React from 'react';
import './Recomend.css';
import Buttons from './Buttons';
const Recomend = ({handleClick}) => {
  return (
    <>
       <h2 className='Recomended-title'>Recomended</h2>
       <div className='Recomended-flex'>
       <Buttons onClickHandler={handleClick} value= "" title="All" />
         <Buttons onClickHandler={handleClick} value= "Nike" title="Nike"/>
         <Buttons onClickHandler={handleClick} value= "Puma" title="Puma"/>
         <Buttons onClickHandler={handleClick} value= "Adidas" title="Adidas"/>
         <Buttons onClickHandler={handleClick} value= "Jimmy" title="Jimmy Choo"/>
         
         
         
       </div>
    </>
  )
}

export default Recomend;