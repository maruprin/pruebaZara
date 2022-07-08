import React from "react";
import './styles.module.scss'
import { ProductsData } from "../../Data/productsData";

const Products = () => {
    return (
        <div>
           {ProductsData.map((product,i) => (
            <div key={i}>
                <img src={product.img} alt={product.name} />
                {console.log(product.img)}
                <div>
                    <p>
                        {product.name} - {product.price}€
                    </p>
                </div>
                <button onClick={()=> console.log(product)}>Add to Cart</button>
         </div>
         )) }
        </div>
    )
}

export default Products 