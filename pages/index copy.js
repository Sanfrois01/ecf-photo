import Header from "../components/header"
import Footer from "../components/footer"
import Image from 'next/image'

import { useEffect } from "react";

export default function Home() {


  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])

  return (
    <>
      <Header/>
      <h1 className="text-center py-5">Charles Cantin - Photographe</h1>
      <div className="d-flex justify-content-center my-3">
      <Image 
      src="/ecf-photographe.png"
      alt="Picture of the author"
      width={750}
      height={750}
      />
      </div>
      <Footer/>
    </>
  )
}
