import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import styles from  './styles.module.scss';
import {CartContext} from "../../Context/cartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import ItemCart from "../ItemCart";


const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const [productsLength, setProductsLength] = useState(0)

    const {cartItems} = useContext(CartContext);

    useEffect(()=> {
        setProductsLength(
            cartItems.reduce((previous, current)=>previous + current.amount, 0)
        );
          } ,[cartItems]);

    const total = cartItems.reduce((previous, current)=> previous + current.amount * current.price, 0);
    
        
    
    return (
        <div className={styles.cartContainer}>
           <div onClick={()=>{setCartOpen(!cartOpen)}} className={styles.buttonCartContainer}>
            <div className={styles.buttonCart}>
                {!cartOpen ? (
                    <FontAwesomeIcon icon={faCartShopping} /> ): (<FontAwesomeIcon icon={faCartPlus}/>)
            }
            </div>
            {!cartOpen && <div className={styles.productsNumber}>{productsLength}</div>}
           </div>
           {cartItems && cartOpen && (
           <div className={styles.cart}>
            <h2>Tu carrito</h2> 
            {cartItems.length === 0 ?
             (<p className={styles.cartEmpty}>Tu carrito está vacio</p>
              ) : (
              <div>{cartItems.map((item,i)=> (
            <ItemCart key={i} item={item} />
           ))}
           </div>
           )}
           <h2 className={styles.total}>Total: {total}€</h2>
        </div>
           )}
        </div>
    );
};

export default Cart 