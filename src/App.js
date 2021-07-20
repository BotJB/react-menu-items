import React, { useState } from 'react'
import Categories from './Categories';
import MenuItems from './MenuItems';
//Data from the internet
import data from './data'
//importing the css
import './app.css'
const allCategories=["all",...new Set(data.map((item)=>item.category))]
console.log(allCategories)
function App() {
  const [items, setItems] = useState(data)
  const [categories,setCategories]=useState(allCategories)
 //Function to filter the data
  const filterItems = (category) => {
    if (category === 'all') {
      setItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  }
  return (
    <main>
      <h1>Our Menu</h1>
      
      <section>
        <div className="container">
          
           <Categories categories={categories} filterItems={filterItems}/>

  <MenuItems items={items}/>
        </div>

      </section>
    </main>
  );
}

export default App;
