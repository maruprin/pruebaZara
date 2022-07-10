import React, { useState } from "react";
import styles from './styles.module.scss'
import { ProductsData } from "../../Data/productsData";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Products = () => {
    const {addItemToCart} = useContext(CartContext)
    const [productos, setProductos] = useState([ProductsData])
    const [busqueda, setBusqueda] = useState("")
   
    const handleChange = e =>{
        setBusqueda(e.target.value) 
        //console.log("Busqueda: " +e.target.value);
        filtrar(e.target.value);
    } 
   
    const filtrar = (terminoBusqueda)=>{
        var aux = ProductsData.filter((prod)=> prod.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
        setProductos(aux);
        console.log(productos)

    }


    return (
      <> 
       <div className={styles.search}> 
       <input className={styles.inputBuscar}
       value={busqueda}
       placeholder="Búsqueda por marca o modelo" 
       onChange={handleChange}
       />
       <button className={styles.btnSearch}>
            <FontAwesomeIcon className={styles.icono} icon={faSearch}/>
       </button></div>
        <div className={styles.productsContainer}>
            
           {productos.map((product,i) => (
            <div className={styles.product}   key={i}>
                <img src={product.img} alt={product.name} />
                
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