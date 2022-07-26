import Header from "../components/header"
import Footer from "../components/footer"
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, [])


  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Charles Cantin - Photographie</title>
          <meta name="Site de Charles Cantin" content="Venez decouvrir mes photographie et mon monde" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Header />
      <h1 className="text-center py-5">Charles Cantin - Photographe</h1>
      <div className="d-flex justify-content-center my-3">
        <Image
          src="/ecf-photographe.png"
          alt="Charles Cantin - Photographe"
          width={750}
          height={750}
        />
      </div>
      <Footer />
    </>
  )
}

