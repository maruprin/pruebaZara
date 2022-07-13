import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import styles from './styles.module.scss'

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);

    const {id} = item;
    return (
    <div className={styles.cartItem}>
        <img src={item.imgUrl} alt={item.brand}/>
        <div className={styles.dataContainer}>
            <div className={styles.left}>
                <p> {item.brand} - {item.model} </p>
                <div className={styles.buttons}>
                    <button onClick={()=> addItemToCart(item)}>Agregar</button>
                    <button onClick={()=> deleteItemToCart(item)}>Quitar</button>
                </div>
            </div>
            <div className={styles.right}>
                <div>{item.amount}</div>
                    <p>Total: {item.amount*item.price}€</p>
                
            </div>
        </div>
    </div>
      );
    };

export default ItemCart