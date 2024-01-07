
import { useState } from "react";
import Nav from "./Nav";
import Products from "./Products";
import Recomend from "./Recomend";
import Sidebar from "./Sidebar/Sidebar";
import data from './db/Data';
import Card from "./Card";
function App() {
  const[selectedCategory, setSelectedCategory] = useState(null);
  //-------input filter----------
  const[query,setQuery] = useState("");
   
  const handleInputChange = e =>{
    setQuery(e.target.value);
  };
  const filteredItems = data.filter((product)=>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() )!== -1);
//-------Radio filter----------
const handleChange = e =>{
  setSelectedCategory(e.target.value)
};
//----------Button Filter-----
const handleClick = e =>{
  setSelectedCategory(e.target.value)
};
function filteredData(data,selected,query){
  let filteredProducts = data
  //filtering Input Items
  if(query){
    filteredProducts = filteredItems
  }
  // Selected filter
  if(selected){
    filteredProducts = filteredProducts.filter(({category,color,company,
      newPrice,title}) => category === selected || color === selected ||
      company === selected || newPrice ===selected || title === selected );
  }
  return filteredProducts.map(({img, title, star,reviews,prevPrice,newPrice})=>(
    <Card 
      key = {Math.random()}
      img ={img}
      title = {title}
      star = {star}
      reviews = {reviews}
      newPrice = {newPrice}
      prevPrice = {prevPrice}
    />

  ));

}
const result = filteredData(data,selectedCategory,query)


  return (
      <>
      <Sidebar handleChange = {handleChange} />
      <Nav query={query}  handleInputChange={handleInputChange} />
      <Recomend handleClick= {handleClick} />
      <Products result={result} />
      
      </>
  );
}

export default App;
