import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
const Card = ({img, title, star,reviews,prevPrice,newPrice}) => {
  return (
    <section className='card'>
          <img  src={require(`${img}`)} alt="Shoe"  className='card-img'/>
          
          <div className="card-details">
            <h3 className='card-title'> {title}</h3>
            <section className='card-reviews'>
              {star} {star} {star} {star}
              <span className='total-reviews'>{reviews}</span>
            </section>
            <section className="card-price">
                <div className='price'>
                    <del>{prevPrice}</del>  {newPrice}
                </div>
                <div className='bag'>
                <GiShoppingBag className='bag-icon' />
                </div>
            </section>
          </div>
        </section>
  )
}

export default Card;