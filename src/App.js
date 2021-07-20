import React, { useState } from 'react'
import Categories from './Categories';
import MenuItems from './MenuItems';
//Data from the internet
import data from './data'
//importing the css
import './app.css'

function App() {
  const [items, setItems] = useState(data)
  const [category,setCategory]=useState([])
 
  const filterItems = (category) => {
    if (category === 'all') {
      setItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setItems(newItems);
  };
  return (
    <main>
      <h1>Our Menu</h1>
      <section>
        <div className="container">
           <Categories getCategory={filterItems}/>

  <MenuItems items={items}/>
        </div>

      </section>
    </main>
  );
}

export default App;
