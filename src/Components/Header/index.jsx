import React from "react";
import styles from './styles.module.scss'



const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <h1 className={styles.titulo}> <a href="https://shop-mobile-omega.vercel.app/"> Tu tienda de móviles</a></h1>
           <a className={styles.link} href='https://shop-mobile-omega.vercel.app/'>Productos</a>
          
        </div>
        </>
    )
}

export default Header
