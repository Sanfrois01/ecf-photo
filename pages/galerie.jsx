
import { useState, useEffect } from "react";
import React from "react";

import Header from "../components/header";
import Search from "../components/search";




const Galerie = () => {

  const [datas, setDatas] = useState([]);
  const [searchCategories, setSearchCategories] = useState("");

  useEffect(() => {
    fetch('https://api.unsplash.com/photos/?client_id=9cIpw06nNZZIL58L3dqab_EZPYaRPhmv3-qQUYBuVsY')
      .then(response => response.json())
      .then(json => setDatas(json))

  }, []);

  const [imagesBapteme, setImageBapteme] = useState ([

    'bapteme1.jpg',
    'bapteme2.jpg',
    'bapteme3.jpg'
  ]);

  const [show, setShow] = useState(false);

  const handleShowImage = (e) => {
    setShow(!show);
  }

  function ImagesBaptemeComponent() {
    return imagesBapteme.map((imagesBapteme) => {
      return (
        <>
        <div className="d-flex justify-content-center my-3"></div>
        <img className="Image-thumbnail rounded mx-3 w-50" key={imagesBapteme.id}  src={imagesBapteme}></img>
        </>
      );
  });
}



  return (
    <>
      <Header />
      <h1 className="text-center py-5">Galerie</h1>
      <Search />
      <div className="d-flex justify-content-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Bapteme</a></li>
            <li class="breadcrumb-item"><a href="#">Bebe</a></li>
            <li class="breadcrumb-item"><a href="#">Couple</a></li>
            <li class="breadcrumb-item"><a href="#">Famille</a></li>
            <li class="breadcrumb-item"><a href="#">Grossesse</a></li>
            <li class="breadcrumb-item"><a href="#">Mariage</a></li>
          </ol>
        </nav>
      </div>      
    </>


    
  )
}
export default Galerie;