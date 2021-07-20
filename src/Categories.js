import React from 'react'

const Categories = ({filterItems}) => {
    return (
       <section>
           <article>
               <button type="button" onClick={()=>filterItems('breakfast')}>breakfast</button>
           </article>
       </section>
    )
}

export default Categories
