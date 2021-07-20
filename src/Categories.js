import React from 'react'

const Categories = ({filterItems,categories}) => {
    return (
       <section>
           <article>
               
               {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
           </article>
       </section>
    )
}

export default Categories
