import React,{ useEffect, useState } from "react";
import axios from 'axios';
import Sidebar from "./Components/Sidebar";
import Header from './Components/Header'


function App() {
  const[collection, setCollection]= useState([])
  // const[cards,setCards]= useState([])

  useEffect(()=>{
    getAllCollections();
  },[])
 
  async function getAllCollections(){
    let response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollection(response.data);
    
  }



  return (
    <div>
      <Header/>
       <Sidebar Ccontainer = {collection}/>
    </div>
  );
}

export default App;
