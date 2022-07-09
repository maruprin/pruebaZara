import React from "react";
import styles from './styles.module.scss'
import { ProductsData } from "../../Data/productsData";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
    const {addItemToCart} = useContext(CartContext)
    return (
      <> 
       <div className={styles.search}> <input className={styles.inputBuscar}
       
       placeholder="Búsqueda por marca o modelo" />
       <button className={styles.btnSearch}>
            <FontAwesomeIcon className={styles.icono} icon={faSearch}/>
       </button></div>
        <div className={styles.productsContainer}>
            
           {ProductsData.map((product,i) => (
            <div className={styles.product}   key={i}>
                <img src={product.img} alt={product.name} />
                {console.log(product.img)}
                <div>
                    <p>
                        {product.name}
                         <br/> 
                         {product.price}€
                    </p>
                </div>
                <button onClick={()=> addItemToCart(product)}>Lo quiero</button>
         </div>
         )) }
        </div>
        </>)
}

export default Products 