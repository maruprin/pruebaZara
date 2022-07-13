import React from "react";
import styles from './styles.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.titulo}>Tu tienda de móviles</h1>
          
           <a className={styles.link} href='http://localhost:3000/'>Productos</a>
        </div>
    )
}

export default Header