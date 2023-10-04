import React from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard'
import { useState } from 'react'
import Navbar from './Navbar'
Document.title="Res"
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
  
];

const Restaurant = () => {
  
  const[menudata, setMenudata]=useState(Menu);
  const[menuList, setMenuList] = useState(uniqueList)
  
  const filterItem =(category) =>{
    if(category=="All"){
      setMenudata(Menu);
      return;
    }
    const updatedList= Menu.filter((curElem)=>{
      return curElem.category ===category;
    });
    setMenudata(updatedList);
   
  }
  return (
    <>
    <Navbar filterItem={filterItem} menulist={menuList} />
    
      <MenuCard menuData={menudata} />
    </>
  )
}

export default Restaurant
