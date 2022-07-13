import React, { useState } from "react";
import styles from './styles.module.scss'
import { ProductsData } from "../../Data/productsData";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../apiConect";
import axios from 'axios';
import { useCallback } from "react";

const urlProducts = 'https://front-test-api.herokuapp.com/api/product';
const urlProductsId = 'https://front-test-api.herokuapp.com/api/product/:id';


const Products = () => {
    const {addItemToCart} = useContext(CartContext)
    const [productosDin, setProductosDin] = useState([])//(ProductsData)
    const [productosEst, setProductosEst] = useState([])
    const [busqueda, setBusqueda] = useState("")
  
    const fetchData = async (url) => {
        await axios.get(url).then(response=>{
            setProductosDin(response.data);
            setProductosEst(response.data);
        }).catch(error=>{console.log(error)})

        }

    useEffect(()=>{fetchData(urlProducts)},[])


    const handleChange = e =>{
        setBusqueda(e.target.value) 
        //console.log("Busqueda: " +e.target.value);
        if(e.target.value!==""){
            filtrar(e.target.value);
        } 
        else{
            setProductosDin(productosEst);
        }
        
    } 
   
    const filtrar = (terminoBusqueda)=>{
        const productosFiltrados = productosEst.filter((prod)=> prod.brand.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
        setProductosDin(productosFiltrados);

        console.log(productosFiltrados);
    }
//console.log(productos);









//useEffect(()=>{fetchData(urlProducts).catch(console.error)},[fetchData])
//const getProdId = getProducts(urlProductsId);
//console.log(getProdId);
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
            
           {productosDin.map((product,i) => (
            <div className={styles.product}   key={i}>
                <img src={product.imgUrl} alt={product.name} />
                
                <div>
                    <p>
                        {product.brand} - {product.model}
                         <br/> 
                         {product.price}€
                         <br/>
                         <Link to='/info' state={{from: product.id}} >Ver más</Link>
                    </p>
                </div>
                <button onClick={()=> addItemToCart(product)}>Lo quiero</button>
         </div>
         )) }
        </div>
        </>)
}

export default Products 