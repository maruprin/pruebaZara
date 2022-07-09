import React from "react";
import styles from './styles.module.scss'
import { ProductsData } from "../../Data/productsData";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

const Products = () => {
    const {addItemToCart} = useContext(CartContext)
    return (
        <div className={styles.productsContainer}>
           {ProductsData.map((product,i) => (
            <div className={styles.product}   key={i}>
                <img src={product.img} alt={product.name} />
                {console.log(product.img)}
                <div>
                    <p>
                        {product.name} - {product.price}€
                    </p>
                </div>
                <button onClick={()=> addItemToCart(product)}>Agregar al carrito</button>
         </div>
         )) }
        </div>
    )
}

export default Products 