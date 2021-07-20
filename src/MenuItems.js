import React from 'react'

const MenuItems = ({items}) => {
    
    return (
        <section>
            {items.map((item)=>{
                const {id,title,desc,img,price,category}=item;
                return(
 <div className="items" key={id}>
            <img src={img} alt={title}/>
            <div className='food'>{title} Category:{category}</div>
            <h5>Price:{price}$</h5>
            <p>About:{desc}</p>

        </div>
                )
            })}
           
        </section>
        
    )
}

export default MenuItems
