import React from 'react';
import { useEffect, useState } from "react";

function Search() {

  const [datas, setDatas] = useState ([]);
  const [searchCategories, setSearchCategories] = useState ("");

  useEffect( ()=> {


   fetch('https://api.unsplash.com/photos/?client_id=9cIpw06nNZZIL58L3dqab_EZPYaRPhmv3-qQUYBuVsY')
   .then(response => response.json())
   .then(json => setDatas(json))

  },[]); 

  const handleSearchCategories= (e) => {
    let value = e.target.value;
    setSearchCategories(value);
  };


  return (
    <>
    <div className="d-flex justify-content-center py-5 ">
      <form className="d-flex">
          <input  className="form-control me-2" 
                  type="search" 
                  placeholder="Catégories" 
                  aria-label="Search"
                  onChange={ handleSearchCategories }/>
      </form>
    </div>



   <div className='mx-5'>

      {datas
      .filter((val) => {
        return val.id.toLowerCase().includes(searchCategories);
      })
      .map((val) => {
        return (
          <div className="d-flex" key={val.urls.small}>
          </div>
        );
      })}
    </div>

    </>
    );
}
export default Search