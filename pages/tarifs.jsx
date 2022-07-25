import Header from "../components/header";
import React from "react";
import Footer from "../components/footer";


const Tarifs = () => {


  const PRODUCTS = [
    {prestation:"Juste moi", description:"Séance pour une personne, en extérieur ou en studio",prix:"130€"},
    {prestation:"Pour deux", description:"Pour deux personnes, en extérieur ou en studio", prix:"195€"},
    {prestation:"Famille", description:"Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio ,30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)" , prix:"220€"},
    {prestation:"Il était une fois", description:"Photo de grossesse ( À votre domicile, en extérieur ou en studio )", prix:"160€"},
    {prestation:"Mon bébé", description:"Photo d’enfant jusqu’à 3 ans (photo à domicile)" , prix:"100€"},
    {prestation:"J’immortalise l’événement", description:"Prestation de mariage ou baptême sur devis" , prix:"Sur mesure"}
  ];
  
  
  
  
  function ProductRow ({product}) {
    return (
      <tr>
        <td>{product.prestation}</td>
        <td>{product.description}</td>
        <td>{product.prix}</td>
      </tr>
    )
  }
  
  function ProductCategoryRow ({category}){
    return(
      <tr>
        <th>{category}</th>
      </tr>
    )
  }
  
  function ProductTable({products}){
    const rows =[];
    let lastCategory = null;
  
    products.forEach(product => {
      if (product.category !== lastCategory){
        lastCategory = product.category
        rows.push(<ProductCategoryRow category={product.category}/>)
      }
      rows.push(<ProductRow product={product}/>)
    })
  
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Prestation</th>
            <th>Description</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  
  }
  
  class  FilterableProductTable extends React.Component {
    render () {
      const {products} = this.props
      return (
          <ProductTable products={products}/>
        )}  
  }

  return (
    <>
      <Header />
      <h1 className= "text-center py-5">Mes tarifs</h1>
      <div className="d-flex justify-content-center mx-5">

      <FilterableProductTable products={PRODUCTS}/>
      </div>
      <Footer/>
    </>
  )
}
export default Tarifs;

